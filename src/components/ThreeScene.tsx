
"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
// @ts-ignore
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

interface ThreeSceneProps {
  isMapMode: boolean;
  onRegionSelect: (id: string) => void;
}

export default function ThreeScene({ isMapMode, onRegionSelect }: ThreeSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const mapGroupRef = useRef<THREE.Group | null>(null);
  const markersRef = useRef<THREE.Mesh[]>([]);
  const raycasterRef = useRef<THREE.Raycaster | null>(null);
  
  // Shared state refs
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2(0, 0));
  const pointerRef = useRef<THREE.Vector2>(new THREE.Vector2(0, 0));
  const controlsRef = useRef<OrbitControls | null>(null);
  const isMapModeRef = useRef(isMapMode);
  
  // Animation Targets
  const targetCameraPos = useRef<THREE.Vector3>(new THREE.Vector3(0, 5, 30));
  const targetLookAt = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));
  const hoveredObjectRef = useRef<THREE.Mesh | null>(null);
  
  // Transition State
  const isTransitioningRef = useRef(false);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    isMapModeRef.current = isMapMode;
    
    // Toggle Controls
    if (controlsRef.current) {
        controlsRef.current.enabled = isMapMode;
        if (isMapMode) {
            // Reset target to center just in case
            controlsRef.current.target.set(0, 0, 0);
            
            // RESET MAP ORIENTATION
            if (mapGroupRef.current) {
                mapGroupRef.current.rotation.set(0, 0, 0);
            }
            // RESET CAMERA POSITION
            if (cameraRef.current) {
                cameraRef.current.position.set(0, 5, 30);
                cameraRef.current.lookAt(0, 0, 0);
            }
            controlsRef.current.update();
        } else {
            controlsRef.current.reset();
            targetCameraPos.current.set(0, 5, 30);
            targetLookAt.current.set(0, 0, 0);
        }
    }

    // Toggle Scroll
    if (isMapMode) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
  }, [isMapMode]);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- CLEANUP PREVIOUS ---
    // Ensure we start fresh. This fixes the "blank map" on back navigation.
    while (containerRef.current.firstChild) {
        containerRef.current.removeChild(containerRef.current.firstChild);
    }

    // --- INIT THREE JS ---
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 5, 30);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const mapGroup = new THREE.Group();
    scene.add(mapGroup);
    mapGroupRef.current = mapGroup;

    // --- LOAD GEOJSON MAP ---
    const loadMap = async () => {
        try {
            const response = await fetch('/indonesia.json');
            const data = await response.json();

            // Materials - "Royal Indonesia Emas" (Luxury & Spirit)
            const materialBase = new THREE.MeshStandardMaterial({ 
                color: 0xD4AF37, // Metallic Gold (Not too yellow, more bronze/gold)
                emissive: 0x503000, // Deep warm glow from within
                emissiveIntensity: 0.2,
                roughness: 0.25, // Polished metal but not mirror
                metalness: 0.7, // High metalness for that premium look
                side: THREE.DoubleSide
            });

            const lineMaterial = new THREE.LineBasicMaterial({ 
                color: 0xD4AF37, // Red Aura Edges (Semangat menjaga Indonesia Emas)
                transparent: true, 
                opacity: 0.4, // Subtle glow, not a harsh outline
                linewidth: 1
            });

            // Marker Sprite Material
            const canvas = document.createElement('canvas');
            canvas.width = 64; canvas.height = 64;
            const context = canvas.getContext('2d');
            if (context) {
                context.beginPath();
                context.arc(32, 32, 16, 0, 2 * Math.PI);
                context.fillStyle = '#E11B22';
                context.fill();
                context.lineWidth = 4;
                context.strokeStyle = '#FFFFFF';
                context.stroke();
            }
            const markerTexture = new THREE.CanvasTexture(canvas);
            const markerMaterial = new THREE.SpriteMaterial({ map: markerTexture, transparent: true, opacity: 0.9 });

            // Projection helpers
            const centerX = 118;
            const centerY = -2.5;
            const scale = 0.8; 

            data.features.forEach((feature: any, index: number) => {
                const createShape = (coords: any[]) => {
                    const shape = new THREE.Shape();
                    coords.forEach((point: any[], i: number) => {
                        const x = (point[0] - centerX) * scale;
                        const y = (point[1] - centerY) * scale;
                        if (i === 0) shape.moveTo(x, y);
                        else shape.lineTo(x, y);
                    });
                    return shape;
                };

                const shapes: THREE.Shape[] = [];
                let pointsCount = 0;
                
                if (feature.geometry.type === 'Polygon') {
                    shapes.push(createShape(feature.geometry.coordinates[0]));
                } else if (feature.geometry.type === 'MultiPolygon') {
                    feature.geometry.coordinates.forEach((polygon: any[]) => {
                        shapes.push(createShape(polygon[0]));
                    });
                }

                if (shapes.length > 0) {
                    // 1. Create Mesh
                    const geometry = new THREE.ExtrudeGeometry(shapes, {
                        depth: 0.2,
                        bevelEnabled: true,
                        bevelThickness: 0.02,
                        bevelSize: 0.02,
                        bevelSegments: 1
                    });

                    // Compute bounding box for better centering later
                    geometry.computeBoundingBox();

                    const mesh = new THREE.Mesh(geometry, materialBase.clone()); // Clone material for individual highlighting
                    const provinceName = feature.properties.Propinsi || feature.properties.NAME_1 || `Provinsi ${index + 1}`;
                    
                    // Calculate true centroid from bounding box
                    const center = new THREE.Vector3();
                    if (geometry.boundingBox) {
                        geometry.boundingBox.getCenter(center);
                    }

                    mesh.userData = { 
                        id: provinceName, 
                        type: 'region',
                        originalColor: 0xD4AF37,
                        center: center
                    };
                    
                    mapGroup.add(mesh);
                    markersRef.current.push(mesh);

                    // 2. Create Outlines (Edges) - "Aura" Effect
                    const edges = new THREE.EdgesGeometry(geometry);
                    const line = new THREE.LineSegments(edges, lineMaterial);
                    line.position.z = 0.02; // Slightly higher
                    mesh.add(line);

                    // 3. Create Marker at Centroid
                    // Only add markers for major islands or if needed to avoid clutter
                    // For now adding to all for interaction
                    const sprite = new THREE.Sprite(markerMaterial);
                    sprite.position.set(center.x, center.y, 1.5); // Float above map
                    sprite.scale.set(0.8, 0.8, 0.8);
                    sprite.userData = { id: provinceName, type: 'marker', parentMesh: mesh };
                    mapGroup.add(sprite);
                    markersRef.current.push(sprite as any); // Add sprite to interactables
                }
            });
            
        } catch (error) {
            console.error("Failed to load map:", error);
        }
    };

    loadMap();

    // Lights - Warm & Heroic
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);
    
    const dirLight = new THREE.DirectionalLight(0xfff0dd, 1.5); // Warm sunlight
    dirLight.position.set(10, 20, 30);
    scene.add(dirLight);
    
    // Golden/Orange underglow to enhance the gold material
    const pointLight = new THREE.PointLight(0xFF8C00, 2, 50);
    pointLight.position.set(0, -5, 10);
    scene.add(pointLight);
    
    // Sharp rim light for metallic edges
    const rimLight = new THREE.SpotLight(0xFFFFFF, 3, 50, 0.5, 0.5, 1);
    rimLight.position.set(0, 0, 20);
    rimLight.lookAt(0, 0, 0);
    scene.add(rimLight);

    // --- CONTROLS ---
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = true;
    controls.minDistance = 5;
    controls.maxDistance = 60;
    controls.maxPolarAngle = Math.PI / 2;
    controls.enabled = false;
    controlsRef.current = controls;

    // Raycaster
    raycasterRef.current = new THREE.Raycaster();

    const handleResize = () => {
        if (cameraRef.current && rendererRef.current) {
            cameraRef.current.aspect = window.innerWidth / window.innerHeight;
            cameraRef.current.updateProjectionMatrix();
            rendererRef.current.setSize(window.innerWidth, window.innerHeight);
        }
    };
    window.addEventListener("resize", handleResize);

    return () => {
        window.removeEventListener("resize", handleResize);
        
        // --- ROBUST CLEANUP ---
        if (sceneRef.current) {
            sceneRef.current.traverse((object) => {
                if (object instanceof THREE.Mesh) {
                    if (object.geometry) object.geometry.dispose();
                    if (object.material) {
                        if (Array.isArray(object.material)) {
                            object.material.forEach((m) => m.dispose());
                        } else {
                            object.material.dispose();
                        }
                    }
                }
                if (object instanceof THREE.Line) {
                    if (object.geometry) object.geometry.dispose();
                    if (object.material) object.material.dispose();
                }
                if (object instanceof THREE.Sprite) {
                     if (object.material) {
                        if (object.material.map) object.material.map.dispose();
                        object.material.dispose();
                     }
                }
            });
            sceneRef.current.clear();
        }

        if (rendererRef.current) {
            rendererRef.current.dispose();
            if (containerRef.current && containerRef.current.contains(rendererRef.current.domElement)) {
                containerRef.current.removeChild(rendererRef.current.domElement);
            }
            rendererRef.current = null;
        }
        
        if (mapGroupRef.current) {
            mapGroupRef.current.clear();
            mapGroupRef.current = null;
        }
        markersRef.current = [];
    };
  }, []);

  // --- ANIMATION LOOP (Consolidated) ---
  useEffect(() => {
    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
        animationId = requestAnimationFrame(animate);
        const t = clock.getElapsedTime();

        if (controlsRef.current) controlsRef.current.update();

        if (mapGroupRef.current && cameraRef.current) {
            // 1. Float Animation (Subtle)
            mapGroupRef.current.position.y = Math.sin(t * 0.2) * 0.2;
            
            // Pulse Markers
            sceneRef.current?.traverse((child) => {
                if (child instanceof THREE.Sprite && child.userData.type === 'marker') {
                     const scale = 0.8 + Math.sin(t * 3) * 0.1;
                     child.scale.set(scale, scale, scale);
                }
            });

            // 3. Camera & Rotation Logic
            const currentIsMapMode = isMapModeRef.current;
            const isTransitioning = isTransitioningRef.current;

            if (currentIsMapMode) {
                // Only force camera position if we are transitioning (flying to target)
                if (isTransitioning) {
                    cameraRef.current.position.lerp(targetCameraPos.current, 0.05);
                    if (controlsRef.current) {
                        controlsRef.current.target.lerp(targetLookAt.current, 0.05);
                    }
                }
                
                // If NOT transitioning, OrbitControls handles the camera naturally.
                // We don't override it here.

                // Interactive Rotation (Parallax) - REMOVED to prevent fighting with OrbitControls
                // We want the map to be static (rotation-wise) so the user can orbit around it freely.
                // mapGroupRef.current.rotation.y += (0 - mapGroupRef.current.rotation.y) * 0.1; // Optional: decay to 0 if needed
            } else {
                // Auto Rotate
                mapGroupRef.current.rotation.y += 0.002;
                mapGroupRef.current.rotation.x += (0 - mapGroupRef.current.rotation.x) * 0.05;
                
                // Camera Return to Hero Position
                cameraRef.current.position.lerp(new THREE.Vector3(0, 5, 35), 0.05);
                cameraRef.current.lookAt(0, 0, 0);
            }
        }

        if (rendererRef.current && sceneRef.current && cameraRef.current) {
            rendererRef.current.render(sceneRef.current, cameraRef.current);
        }
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, []); // Empty dependency array, using refs for state

  // --- INTERACTION LISTENERS ---
  useEffect(() => {
    const onPointerMove = (event: MouseEvent) => {
        // Update refs for animation loop
        mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
        
        // Update pointer for raycaster
        pointerRef.current.x = mouseRef.current.x;
        pointerRef.current.y = mouseRef.current.y;

        if(isMapMode && raycasterRef.current && cameraRef.current) {
            raycasterRef.current.setFromCamera(pointerRef.current, cameraRef.current);
            const intersects = raycasterRef.current.intersectObjects(markersRef.current);
            
            if (intersects.length > 0) {
                document.body.style.cursor = 'pointer';
                
                // Highlight Logic
                const object = intersects[0].object;
                let mesh: THREE.Mesh | null = null;

                if (object.type === 'Sprite') {
                    // If sprite, highlight parent mesh
                    mesh = object.userData.parentMesh;
                } else if (object instanceof THREE.Mesh) {
                    mesh = object;
                }

                if (mesh && mesh !== hoveredObjectRef.current) {
                    // Reset previous
                    if (hoveredObjectRef.current) {
                        (hoveredObjectRef.current.material as THREE.MeshStandardMaterial).color.setHex(hoveredObjectRef.current.userData.originalColor);
                        (hoveredObjectRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.2;
                        hoveredObjectRef.current.position.z = 0;
                    }
                    
                    // Set new
                    hoveredObjectRef.current = mesh;
                    (mesh.material as THREE.MeshStandardMaterial).color.setHex(0xFFD700); // Bright Gold
                    (mesh.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.5;
                    mesh.position.z = 0.5; // Pop up
                }

            } else {
                document.body.style.cursor = 'default';
                // Reset highlight
                if (hoveredObjectRef.current) {
                    (hoveredObjectRef.current.material as THREE.MeshStandardMaterial).color.setHex(hoveredObjectRef.current.userData.originalColor);
                    (hoveredObjectRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.2;
                    hoveredObjectRef.current.position.z = 0;
                    hoveredObjectRef.current = null;
                }
            }
        } else {
            document.body.style.cursor = 'default';
        }
    };

    const onMouseClick = () => {
        if (!isMapMode || !raycasterRef.current || !cameraRef.current) return;

        raycasterRef.current.setFromCamera(pointerRef.current, cameraRef.current);
        const intersects = raycasterRef.current.intersectObjects(markersRef.current);

        if (intersects.length > 0) {
            const object = intersects[0].object;
            const id = object.userData.id;
            
            // Zoom Logic
            let targetCenter = new THREE.Vector3(0,0,0);
            
            if (object instanceof THREE.Mesh) {
                targetCenter.copy(object.userData.center);
            } else if (object instanceof THREE.Sprite) {
                targetCenter.copy(object.userData.parentMesh.userData.center);
            }

            // Set Camera Target to zoom in
            // Position camera slightly offset from the target center
            targetCameraPos.current.set(targetCenter.x, targetCenter.y - 5, 15); // Zoom in close
            targetLookAt.current.copy(targetCenter);

            // Start Transition
            isTransitioningRef.current = true;
            
            // Stop transition after 2 seconds (enough time to fly there)
            // so user can take control again
            if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
            transitionTimeoutRef.current = setTimeout(() => {
                isTransitioningRef.current = false;
            }, 2000);

            console.log("Clicked Region:", id);
            onRegionSelect(id);
        } else {
            // Click outside to reset?
            // targetCameraPos.current.set(0, 5, 30);
            // targetLookAt.current.set(0, 0, 0);
            // onRegionSelect(null);
        }
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('click', onMouseClick);

    return () => {
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('click', onMouseClick);
        if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
    };
  }, [isMapMode, onRegionSelect]);

  return <div ref={containerRef} className={`fixed top-0 left-0 w-full h-full z-0 transition-opacity duration-1000 touch-none ${isMapMode ? 'opacity-100' : 'opacity-80'}`} />;
}
