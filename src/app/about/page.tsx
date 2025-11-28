"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

interface TeamMember {
    name: string;
    nim: string;
    role: string;
}

const teamMembers: TeamMember[] = [
    {
        name: "Marcelino",
        nim: "23/516942/SV/22727",
        role: "Project Manager & Software Engineer",
    },
    {
        name: "Damarjati Adiyuda Muktitama",
        nim: "23/",
        role: "Software Engineer",
    },
    {
        name: "Samuel Ardian Valention Silaban",
        nim: "23/",
        role: "Software Engineer",
    },
    {
        name: "Deandra Santoso",
        nim: "23/",
        role: "Content Strategist",
    },
    {
        name: "Aulia Rahma",
        nim: "23/",
        role: "Content Writer",
    },
    {
        name: "Aurelius Bevan Yudira Palevi",
        nim: "23/",
        role: "Researcher",
    },
    {
        name: "Diaz Anjariski",
        nim: "23/",
        role: "Researcher",
    },
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  return (
    <main ref={containerRef} className="min-h-screen bg-black text-white selection:bg-red-500 selection:text-white overflow-hidden">
        
        {/* Navbar Minimal */}
        <nav className="fixed top-0 w-full p-6 z-50 mix-blend-difference">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors backdrop-blur-md border border-white/10">
                        <i className="fas fa-arrow-left text-white"></i>
                    </div>
                    <span className="font-heading font-bold text-lg text-white group-hover:text-gray-300 transition-colors">Kembali</span>
                </Link>
            </div>
        </nav>

        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center">
            <motion.div style={{ opacity, scale }} className="relative z-10 text-center px-6">
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <span className="px-4 py-2 rounded-full border border-red-500 text-red-500 text-sm tracking-[0.3em] uppercase bg-red-900/10 backdrop-blur-md">
                        Kelompok 2 • PKN 55
                    </span>
                </motion.div>
                
                <motion.h1 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl md:text-9xl font-heading font-bold leading-tight text-white"
                >
                    PROJECT TEAM
                </motion.h1>
            </motion.div>

            {/* Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[150px]"></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
            </div>
        </section>

        {/* Credits List */}
        <section className="pb-40 px-6 relative z-10">
            <div className="max-w-4xl mx-auto space-y-32">
                {teamMembers.map((member, index) => (
                    <CreditItem key={index} member={member} index={index} />
                ))}
            </div>
        </section>

        {/* Footer Credit */}
        <footer className="py-10 relative z-10 bg-black overflow-hidden">
            {/* Top Divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-white/20 to-transparent"></div>
            
            <div className="max-w-4xl mx-auto text-center px-6">
                <div className="mb-8">
                     <i className="fas fa-infinity text-3xl text-red-600 opacity-80 animate-pulse"></i>
                </div>

                <h3 className="text-lg md:text-xl font-light text-gray-400 mb-6 tracking-[0.5em] uppercase">
                    Terima Kasih
                </h3>
                
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2 tracking-wider">
                    KELOMPOK 2
                </h2>
                <p className="text-red-500 text-xs md:text-sm tracking-[0.3em] uppercase mb-12 opacity-80">
                    Pendidikan Kewarganegaraan
                </p>
                
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 text-xs font-mono text-gray-600 uppercase tracking-widest">
                    <span>Universitas Gadjah Mada</span>
                    <span className="hidden md:block w-1 h-1 bg-red-900 rounded-full"></span>
                    <span>Est. 2025</span>
                    <span className="hidden md:block w-1 h-1 bg-red-900 rounded-full"></span>
                    <span>Yogyakarta</span>
                </div>
            </div>
            
            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </footer>

    </main>
  );
}

function CreditItem({ member, index }: { member: TeamMember; index: number }) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center group"
        >
            <span className="text-red-500 text-sm md:text-base tracking-[0.4em] uppercase font-bold mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                {member.role}
            </span>
            
            <h3 className="text-4xl md:text-7xl font-bold text-white mb-4 font-heading tracking-tight group-hover:scale-105 transition-transform duration-500">
                {member.name}
            </h3>
            
            <div className="h-[1px] w-12 bg-white/20 my-4 group-hover:w-24 group-hover:bg-red-500 transition-all duration-500"></div>
            
            <p className="text-gray-500 font-mono text-sm md:text-base tracking-widest">
                {member.nim}
            </p>
        </motion.div>
    );
}
