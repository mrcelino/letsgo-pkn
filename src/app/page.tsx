"use client";

import { useState } from "react";
import ThreeScene from "@/components/ThreeScene";
import MapOverlay from "@/components/MapOverlay";
import LandingContent from "@/components/LandingContent";

export default function Home() {
  const [isMapMode, setIsMapMode] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const handleEnterMapMode = () => {
    setIsMapMode(true);
  };

  const handleExitMapMode = () => {
    if (selectedRegion) {
      setSelectedRegion(null);
    } else {
      setIsMapMode(false);
    }
  };

  const handleRegionSelect = (id: string) => {
    setSelectedRegion(id);
  };

  return (
    <main className="relative min-h-screen bg-[#050505] text-white selection:bg-indo-red selection:text-white overflow-hidden">
      <ThreeScene isMapMode={isMapMode} onRegionSelect={handleRegionSelect} />
      
      <MapOverlay 
        isActive={isMapMode} 
        onClose={handleExitMapMode} 
        selectedRegion={selectedRegion} 
      />

      <div className={`transition-all duration-500 ${isMapMode ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
        <LandingContent onEnterMapMode={handleEnterMapMode} />
      </div>
    </main>
  );
}
