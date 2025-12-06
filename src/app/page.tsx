"use client";

import { useState } from "react";
import ThreeScene from "@/components/ThreeScene";
import MapOverlay from "@/components/MapOverlay";
import LandingContent from "@/components/LandingContent";
import MobileMenu from "@/components/MobileMenu";

export default function Home() {
  const [isMapMode, setIsMapMode] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <ThreeScene isMapMode={isMapMode} onRegionSelect={handleRegionSelect} selectedRegion={selectedRegion} />
      
      <MapOverlay 
        isActive={isMapMode} 
        onClose={handleExitMapMode} 
        selectedRegion={selectedRegion} 
      />

      <div className={`transition-all duration-500 ${isMapMode ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
        <LandingContent onEnterMapMode={handleEnterMapMode} onMenuOpen={() => setIsMobileMenuOpen(true)} />
      </div>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        onEnterMapMode={handleEnterMapMode} 
      />
    </main>
  );
}
