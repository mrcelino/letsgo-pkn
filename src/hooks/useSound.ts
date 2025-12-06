"use client";

import { useEffect, useState } from "react";

export function useSound() {
    const [isMuted, setIsMuted] = useState(false);

    // Load mute state from localStorage
    useEffect(() => {
        const savedMute = localStorage.getItem("quizSoundMuted");
        if (savedMute !== null) {
            setIsMuted(savedMute === "true");
        }
    }, []);

    // Save mute state to localStorage
    const toggleMute = () => {
        const newMuted = !isMuted;
        setIsMuted(newMuted);
        localStorage.setItem("quizSoundMuted", String(newMuted));
    };

    // Play success sound using Web Audio API
    const playSuccess = () => {
        if (isMuted) return;

        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();

        // First tone
        const oscillator1 = audioContext.createOscillator();
        const gainNode1 = audioContext.createGain();
        oscillator1.connect(gainNode1);
        gainNode1.connect(audioContext.destination);

        oscillator1.frequency.value = 800;
        oscillator1.type = "sine";
        gainNode1.gain.setValueAtTime(0.25, audioContext.currentTime);
        gainNode1.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

        oscillator1.start(audioContext.currentTime);
        oscillator1.stop(audioContext.currentTime + 0.3);

        // Second higher tone
        const oscillator2 = audioContext.createOscillator();
        const gainNode2 = audioContext.createGain();
        oscillator2.connect(gainNode2);
        gainNode2.connect(audioContext.destination);

        oscillator2.frequency.value = 1000;
        oscillator2.type = "sine";
        gainNode2.gain.setValueAtTime(0.2, audioContext.currentTime + 0.1);
        gainNode2.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);

        oscillator2.start(audioContext.currentTime + 0.1);
        oscillator2.stop(audioContext.currentTime + 0.4);
    };

    // Play error sound using Web Audio API
    const playError = () => {
        if (isMuted) return;

        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        // Gentle but clear error sound
        oscillator.frequency.value = 300;
        oscillator.type = "triangle";

        gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.25);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.25);
    };

    return {
        isMuted,
        toggleMute,
        playSuccess,
        playError,
    };
}
