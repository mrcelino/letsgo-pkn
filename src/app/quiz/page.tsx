"use client";

import QuizContainer from "@/components/Quiz/QuizContainer";
import Link from "next/link";
import { useSound } from "@/hooks/useSound";

export default function QuizPage() {
  const { isMuted, toggleMute } = useSound();

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-red-500 selection:text-white relative flex flex-col">

      {/* Background Elements */}
      <div className="fixed top-[-20%] left-[-10%] w-[800px] h-[800px] bg-red-900/20 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Navbar Minimal */}
      <nav className="w-full p-6 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-white/10 transition-colors border border-white/10">
              <i className="fas fa-arrow-left text-gray-400 group-hover:text-white"></i>
            </div>
            <span className="font-heading font-bold text-lg text-gray-400 group-hover:text-white transition-colors">Kembali</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="font-heading font-bold text-xl tracking-wide">
              Uji <span className="text-red-500">Wawasan</span>
            </div>
            <button
              onClick={toggleMute}
              className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10"
              title={isMuted ? "Unmute" : "Mute"}
            >
              <i className={`fas ${isMuted ? 'fa-volume-mute' : 'fa-volume-up'} text-gray-400 hover:text-white`}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Quiz Content */}
      <div className="flex-1 overflow-y-auto relative z-10">
        <QuizContainer />
      </div>

    </main>
  );
}
