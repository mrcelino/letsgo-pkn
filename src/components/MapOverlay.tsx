"use client";

import { useState, useEffect } from "react";

interface MapOverlayProps {
  isActive: boolean;
  onClose: () => void;
  selectedRegion: string | null;
}

import { culturalData, ProvinceData } from "@/data/provinceData";

export default function MapOverlay({ isActive, onClose, selectedRegion }: MapOverlayProps) {
  const [showPanel, setShowPanel] = useState(false);
  const [panelContent, setPanelContent] = useState<ProvinceData | null>(null);

  useEffect(() => {
    if (selectedRegion) {
        let lowerRegion = selectedRegion.toLowerCase();

        // Name Mapping for Old GeoJSON Data
        const nameMapping: Record<string, string> = {
            'irian jaya timur': 'papua',
            'irian jaya tengah': 'papua tengah',
            'irian jaya barat': 'papua barat',
            'irian jaya': 'papua',
            'daerah istimewa yogyakarta': 'yogyakarta',
            'dki jakarta': 'jakarta',
            'bangka-belitung': 'bangka belitung'
        };

        if (nameMapping[lowerRegion]) {
            lowerRegion = nameMapping[lowerRegion];
        }

        let data = culturalData[lowerRegion];

        // Fuzzy matching logic if exact match fails
        if (!data) {
            const keys = Object.keys(culturalData);
            const match = keys.find(key => lowerRegion.includes(key) || key.includes(lowerRegion));
            if (match) data = culturalData[match];
        }

        // Fallback
        if (!data) {
            data = {
                title: selectedRegion,
                subtitle: "Provinsi Indonesia",
                suku: "Informasi spesifik sedang diperbarui.",
                rumah: "Rumah Adat Khas Daerah.",
                value: "Bagian dari kekayaan budaya Nusantara.",
                makanan: "Kuliner Khas Daerah",
                fakta: "Provinsi ini memiliki keunikan tersendiri.",
                landmark: "Landmark Daerah"
            };
        }

        setPanelContent(data);
        setShowPanel(true);
    } else {
        setShowPanel(false);
    }
  }, [selectedRegion]);

  if (!isActive) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 pointer-events-none">
        {/* Top Bar */}
        <div className="absolute top-0 w-full p-6 flex justify-between items-start z-50">
            <div className="pointer-events-auto">
                <h2 className="text-3xl font-heading font-bold text-white drop-shadow-md">
                    Peta <span className="text-red-500">Nusantara</span>
                </h2>
                <p className="text-gray-300 text-sm drop-shadow-sm">Jelajahi kekayaan budaya Indonesia.</p>
            </div>
            <button 
                onClick={onClose} 
                className="pointer-events-auto px-5 py-2 rounded-full bg-black/30 border border-white/20 hover:bg-red-600 hover:border-red-600 transition-all text-white flex items-center gap-2 backdrop-blur-md shadow-lg group"
            >
                <span className="group-hover:rotate-90 transition-transform duration-300"><i className="fas fa-times"></i></span> 
                Tutup
            </button>
        </div>

        {/* Info Panel (Scrollable Modern Layout) */}
        <div 
            className={`absolute top-0 right-0 w-full md:w-[450px] h-full bg-gradient-to-b from-gray-900/95 to-black/95 backdrop-blur-xl border-l border-white/10 transition-transform duration-500 ease-out shadow-2xl flex flex-col pointer-events-auto z-40 ${showPanel ? 'translate-x-0' : 'translate-x-full'}`}
        >
            {/* Panel Header Image Placeholder */}
            <div className="h-48 w-full bg-gray-800 relative overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
                <div className="w-full h-full bg-[url('/grid.svg')] opacity-20"></div> 
                <div className="absolute bottom-4 left-6 z-20">
                    <p className="text-red-400 text-xs font-mono uppercase tracking-widest mb-1">{panelContent?.subtitle}</p>
                    <h2 className="text-4xl font-heading font-bold text-white leading-tight">{panelContent?.title}</h2>
                </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
                {panelContent && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
                        
                        {/* Intro / Suku */}
                        <div>
                            <h4 className="text-gray-400 text-xs font-bold uppercase mb-3 flex items-center gap-2">
                                <i className="fas fa-users text-red-500"></i> Suku Bangsa
                            </h4>
                            <p className="text-lg text-white leading-relaxed font-medium">
                                {panelContent.suku}
                            </p>
                        </div>

                        {/* Grid Stats: Rumah & Landmark */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-red-500/30 transition-colors group">
                                <i className="fas fa-home text-red-500 mb-3 text-xl group-hover:scale-110 transition-transform block"></i>
                                <p className="text-xs text-gray-400 uppercase mb-1">Rumah Adat</p>
                                <p className="text-white font-bold text-sm leading-tight">{panelContent.rumah}</p>
                            </div>
                            <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-red-500/30 transition-colors group">
                                <i className="fas fa-landmark text-red-500 mb-3 text-xl group-hover:scale-110 transition-transform block"></i>
                                <p className="text-xs text-gray-400 uppercase mb-1">Landmark</p>
                                <p className="text-white font-bold text-sm leading-tight">{panelContent.landmark}</p>
                            </div>
                        </div>

                        {/* Value Quote */}
                        <div className="bg-gradient-to-r from-red-900/20 to-transparent p-5 rounded-xl border-l-4 border-red-500">
                            <h4 className="text-red-400 text-xs font-bold uppercase mb-2">Nilai Luhur</h4>
                            <p className="text-white italic text-lg font-serif">"{panelContent.value}"</p>
                        </div>

                        {/* Food Section */}
                        <div>
                             <h4 className="text-gray-400 text-xs font-bold uppercase mb-3 flex items-center gap-2">
                                <i className="fas fa-utensils text-red-500"></i> Kuliner Khas
                            </h4>
                            <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-4 hover:bg-white/10 transition-colors">
                                 <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 shrink-0">
                                    <i className="fas fa-bowl-food text-xl"></i>
                                 </div>
                                 <div>
                                     <p className="text-white font-bold text-lg">{panelContent.makanan}</p>
                                     <p className="text-gray-400 text-sm">Cita rasa otentik daerah.</p>
                                 </div>
                            </div>
                        </div>

                        {/* Trivia Section */}
                        <div>
                             <h4 className="text-gray-400 text-xs font-bold uppercase mb-3 flex items-center gap-2">
                                <i className="fas fa-lightbulb text-yellow-500"></i> Tahukah Kamu?
                            </h4>
                            <div className="bg-yellow-500/10 p-4 rounded-xl border border-yellow-500/20">
                                <p className="text-yellow-100 text-sm leading-relaxed">
                                    {panelContent.fakta}
                                </p>
                            </div>
                        </div>

                        {/* Bottom Spacer */}
                        <div className="h-10"></div>
                    </div>
                )}
            </div>

            {/* Footer Actions */}
            <div className="p-6 border-t border-white/10 bg-black/40 backdrop-blur-md">
                <button onClick={() => setShowPanel(false)} className="w-full py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-bold transition-all border border-white/5">
                    Tutup Panel
                </button>
            </div>
        </div>

        {/* Interactive Instructions */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none text-center animate-pulse">
            <span className="bg-black/60 px-6 py-3 rounded-full text-sm border border-white/10 backdrop-blur-md text-gray-200 shadow-xl flex items-center gap-3">
                <i className="fas fa-mouse pointer-events-none"></i> 
                <span>Geser untuk memutar • Klik wilayah untuk detail</span>
            </span>
        </div>
    </div>
  );
}
