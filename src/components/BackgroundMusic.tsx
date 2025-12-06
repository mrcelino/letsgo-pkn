"use client";

import { useState, useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Initialize audio instance
    const audio = new Audio("/audio/tanahairku.mp3");
    audio.loop = true;
    audio.volume = 0.4; // Start with decent volume, not too loud
    audioRef.current = audio;

    // Attempt auto-play
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log("Autoplay blocked. Waiting for interaction...");
          setIsPlaying(false);
        });
    }

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  // Fallback: Start audio on first interaction if autoplay was blocked
  useEffect(() => {
    const handleInteraction = () => {
      if (!hasInteracted && audioRef.current && audioRef.current.paused) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setHasInteracted(true);
          })
          .catch((e) => console.log("Still blocked", e));
      }
    };

    window.addEventListener("click", handleInteraction);
    window.addEventListener("keydown", handleInteraction);

    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
    };
  }, [hasInteracted]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <button
      onClick={togglePlay}
      className={`fixed bottom-6 right-6 z-[100] w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg border backdrop-blur-md group ${
        isPlaying 
          ? "bg-red-600/80 border-red-400 hover:bg-red-700 hover:scale-110 animate-spin-slow" 
          : "bg-black/40 border-white/20 hover:bg-black/60"
      }`}
      title={isPlaying ? "Matikan Musik" : "Putar Musik"}
    >
      <div className={`relative flex items-center justify-center ${isPlaying ? "" : ""}`}>
        {/* Icon */}
        <i className={`fas ${isPlaying ? "fa-music" : "fa-volume-mute"} text-white text-lg`}></i>
        
        {/* Visual Wave Animation when playing */}
        {isPlaying && (
          <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping"></span>
        )}
      </div>

       <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        /* Stop spinning on hover to make it easier to click if needed, or keep it */
        .animate-spin-slow:hover {
          animation-play-state: paused;
        }
      `}</style>
    </button>
  );
}
