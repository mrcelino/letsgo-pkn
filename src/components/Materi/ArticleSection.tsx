"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { articles } from "./articleData";

export default function ArticleSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);

  // Measure content width on mount and resize
  useEffect(() => {
    const updateMeasurements = () => {
      if (contentRef.current) {
        const contentWidth = contentRef.current.scrollWidth;
        const vw = window.innerWidth;
        setViewportWidth(vw);
        // Calculate how much we need to translate left
        // We want the right edge of content to align with right edge of screen at the end
        // So total shift = Content Width - Viewport Width
        // Adding a small buffer (e.g. 100px) if needed, or 0 for exact
        const range = contentWidth - vw;
        setScrollRange(range > 0 ? range : 0);
      }
    };

    updateMeasurements();
    window.addEventListener("resize", updateMeasurements);
    return () => window.removeEventListener("resize", updateMeasurements);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Map vertical scroll (0 to 1) to horizontal transform (0 to -scrollRange)
  const x = useTransform(scrollYProgress, [0, 1], ["0px", `-${scrollRange}px`]);

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-[#0a0a0a]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Section Header (Absolute) */}
        <div className="absolute -top-2 left-10 z-20 mix-blend-difference pointer-events-none">
            <h2 className="text-6xl md:text-8xl font-heading font-bold text-white opacity-20">
                JELAJAHI
            </h2>
            <p className="text-xl text-red-500 font-serif italic ml-2">Deep Dive Knowledge</p>
        </div>

        <motion.div ref={contentRef} style={{ x }} className="flex gap-10 pl-20 pr-20 min-w-max">
            
            {/* Intro Card */}
            <div className="relative h-[60vh] w-[400px] shrink-0 flex flex-col justify-center">
                <h3 className="text-5xl font-bold text-white mb-6 leading-tight">
                    Eksplorasi <br />
                    <span className="text-red-500">Jati Diri</span> <br />
                    Bangsa.
                </h3>
                <p className="text-gray-400 text-lg mb-8">
                    Temukan artikel pilihan yang mengupas tuntas identitas, sejarah, dan budaya bangsa dengan perspektif baru.
                </p>
                <div className="w-20 h-1 bg-red-500"></div>
            </div>

            {/* Article Cards */}
            {articles.map((article, index) => (
                <ArticleCard key={article.slug} article={article} index={index} />
            ))}

            {/* Outro Card */}
            <div className="relative h-[70vh] w-[300px] shrink-0 flex items-center justify-center border-l border-white/10">
                <p className="text-gray-500 text-xl font-serif italic text-center">
                    Teruslah<br/>Membaca,<br/>Teruslah<br/>Mencintai.
                </p>
            </div>

        </motion.div>
      </div>
    </section>
  );
}

function ArticleCard({ article, index }: { article: any; index: number }) {
    return (
        <Link href={`/materi/${article.slug}`} className="group relative h-[70vh] w-[450px] shrink-0 overflow-hidden rounded-3xl bg-gray-900 border border-white/10 transition-all hover:border-red-500/50">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 bg-gray-800 transition-transform duration-700 group-hover:scale-110">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] z-0" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <div className="mb-auto flex justify-between items-start">
                    <span className="px-3 py-1 rounded-full border border-white/20 text-xs text-white backdrop-blur-md">
                        {article.category}
                    </span>
                    <span className="text-gray-400 text-xs font-mono">
                        {article.readTime}
                    </span>
                </div>

                <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                    <h3 className="text-3xl font-heading font-bold text-white mb-3 leading-tight group-hover:text-red-500 transition-colors">
                        {article.title}
                    </h3>
                    <p className="text-gray-300 text-sm line-clamp-3 mb-6 opacity-80 group-hover:opacity-100">
                        {article.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-2 text-red-400 text-sm font-bold opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                        <span>Baca Selengkapnya</span>
                        <i className="fas fa-arrow-right"></i>
                    </div>
                </div>
            </div>

            {/* Number Watermark */}
            <div className="absolute top-4 right-6 text-9xl font-bold text-white/5 z-0 font-heading">
                0{index + 1}
            </div>
        </Link>
    );
}
