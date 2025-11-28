"use client";

import QuizSection from "./QuizSection";
import Link from "next/link";

interface LandingContentProps {
  onEnterMapMode: () => void;
}

export default function LandingContent({ onEnterMapMode }: LandingContentProps) {
  return (
    <div id="main-content" className="relative z-10 transition-all duration-500">
        {/* Navigation */}
        <nav className="fixed w-full z-50 glass-nav transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(225,27,34,0.5)]">
                        IN
                    </div>
                    <span className="font-heading font-bold text-xl tracking-wide">Identitas<span className="text-red-500">Nasional</span></span>
                </div>
                <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
                    <Link href="/" className="nav-item hover:text-white transition-colors">Beranda</Link>
                    <button onClick={onEnterMapMode} className="nav-item hover:text-white transition-colors text-red-400 font-bold flex items-center gap-1 cursor-pointer"><i className="fas fa-map-marked-alt"></i> Peta Budaya</button>
                    <Link href="/materi" className="nav-item hover:text-white transition-colors">Materi</Link>
                    <Link href="/quiz" className="nav-item hover:text-white transition-colors">Kuis</Link>
                    <Link href="/about" className="nav-item hover:text-white transition-colors">Credit</Link>
                </div>
                <div className="flex gap-3">
                    <button onClick={onEnterMapMode} className="hidden md:flex px-5 py-2 rounded-full bg-red-600 hover:bg-red-700 transition-all text-sm font-semibold shadow-[0_0_15px_rgba(225,27,34,0.4)] cursor-pointer">
                        Buka Peta
                    </button>
                    <button className="md:hidden text-white text-xl"><i className="fas fa-bars"></i></button>
                </div>
            </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 right-[-10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px]"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div className="space-y-8 animate-float" style={{ animationDuration: '8s' }}>
                    <div className="flex flex-col text-5xl md:text-7xl font-extrabold leading-tight xl:leading-none">
                        <h2>Jati Diri</h2>
                        <span className="text-gradient-red drop-shadow-[0_0_25px_rgba(225,27,34,0.4)]">
                            Bangsa Indonesia
                        </span>
                    </div>
                    <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed border-l-2 border-red-600 pl-6">
                        Menjelajahi karakteristik unik yang membedakan Indonesia dari bangsa lain melalui pendekatan interaktif, modern, dan mendalam.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button onClick={onEnterMapMode} className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 text-white font-bold overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(225,27,34,0.4)] text-left">
                            <span className="text-xs font-normal opacity-80 block mb-1">Mode Interaktif</span>
                            <span className="relative z-10 flex items-center gap-2 text-lg">
                                Jelajahi Peta <i className="fas fa-globe-asia group-hover:rotate-12 transition-transform"></i>
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </button>
                        <a href="/quiz" className="px-8 py-4 rounded-xl glass-card hover:bg-white/5 text-white font-semibold transition-all flex items-center justify-center gap-2">
                            <i className="fas fa-play-circle text-red-500"></i> Tes Wawasan
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
                        <div>
                            <h3 className="text-2xl font-heading font-bold text-white">1.340+</h3>
                            <p className="text-xs text-gray-500 uppercase tracking-wider">Suku Bangsa</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-heading font-bold text-white">718</h3>
                            <p className="text-xs text-gray-500 uppercase tracking-wider">Bahasa Daerah</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-heading font-bold text-white">38</h3>
                            <p className="text-xs text-gray-500 uppercase tracking-wider">Provinsi</p>
                        </div>
                    </div>
                </div>
                
                {/* Right side is left empty for the 3D canvas visibility */}
                <div className="hidden md:block h-full w-full pointer-events-none"></div>
            </div>
        </section>

        {/* About / Definition Section */}
        <section id="about" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Apa Itu <span className="text-red-500">Identitas Nasional?</span></h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-transparent mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group">
                        <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
                            <i className="fas fa-fingerprint text-2xl text-red-500"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-3 font-heading">Secara Etimologis</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Berasal dari kata <span className="text-white font-semibold">"Identity"</span> (ciri-ciri atau tanda) dan <span className="text-white font-semibold">"National"</span> (bangsa/kelompok persekutuan hidup manusia).
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group border-red-500/30 relative overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-600/20 rounded-full blur-2xl group-hover:bg-red-600/30 transition-all"></div>
                        <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-6">
                            <i className="fas fa-users text-2xl text-white"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-3 font-heading">Makna Sosiologis</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Identitas nasional adalah jati diri yang terbentuk dari kesepakatan bersama (konsensus) berbagai suku, budaya, dan agama menjadi satu kesatuan.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group">
                        <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
                            <i className="fas fa-landmark text-2xl text-red-500"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-3 font-heading">Identitas Politik</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Manifestasi nilai-nilai budaya yang tumbuh dan berkembang dalam aspek kehidupan suatu bangsa dengan ciri khas yang membedakan dengan bangsa lain.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Materi Section - Bento Grid */}
        <section id="materi" className="py-24 bg-black relative">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <span className="text-red-500 font-bold tracking-wider uppercase text-sm mb-2 block">Eksplorasi Materi</span>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold">Faktor & Unsur <br />Pembentuk</h2>
                    </div>
                    <button onClick={onEnterMapMode} className="px-6 py-3 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all flex items-center gap-2">
                        <i className="fas fa-map"></i> Lihat Peta Persebaran
                    </button>
                </div>

                <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[500px]">
                    {/* Card 1: Historis */}
                    <div className="relative flex-1 group overflow-hidden rounded-3xl glass-card transition-all duration-500 ease-out hover:flex-[3] min-h-[400px] lg:min-h-0">
                        <div className="absolute inset-0 bg-[url('/soempah.png')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-500 grayscale group-hover:grayscale-0"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                        
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center mb-4 text-white shadow-lg shadow-red-600/20 group-hover:scale-110 transition-transform">
                                <i className="fas fa-history text-2xl"></i>
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 whitespace-nowrap">Faktor Historis</h3>
                            <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
                                <div className="overflow-hidden">
                                    <p className="text-gray-300 text-sm lg:text-base leading-relaxed mt-4 border-t border-white/20 pt-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                        Sejarah perjuangan bangsa yang senasib sepenanggungan melawan penjajahan melahirkan solidaritas yang kuat dan rasa persaudaraan yang mendalam.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Ideologis */}
                    <div className="relative flex-1 group overflow-hidden rounded-3xl glass-card transition-all duration-500 ease-out hover:flex-[3] min-h-[400px] lg:min-h-0">
                        <div className="absolute inset-0 bg-[url('/pancasila.png')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-500 grayscale group-hover:grayscale-0"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                        
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 text-white border border-white/10 group-hover:bg-red-600 group-hover:border-red-600 transition-all">
                                <i className="fas fa-star text-xl"></i>
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 whitespace-nowrap">Faktor Ideologis</h3>
                            <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
                                <div className="overflow-hidden">
                                    <p className="text-gray-300 text-sm lg:text-base leading-relaxed mt-4 border-t border-white/20 pt-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                        Pancasila sebagai dasar negara dan pandangan hidup bangsa menjadi pengikat moral yang menyatukan keberagaman Indonesia dalam satu visi.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Simbol */}
                    <div className="relative flex-1 group overflow-hidden rounded-3xl glass-card transition-all duration-500 ease-out hover:flex-[3] min-h-[400px] lg:min-h-0">
                        <div className="absolute inset-0 bg-[url('/bendera.png')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-500 grayscale group-hover:grayscale-0"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                        
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 text-white border border-white/10 group-hover:bg-red-600 group-hover:border-red-600 transition-all">
                                <i className="fas fa-flag text-xl"></i>
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 whitespace-nowrap">Simbol Negara</h3>
                            <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
                                <div className="overflow-hidden">
                                    <p className="text-gray-300 text-sm lg:text-base leading-relaxed mt-4 border-t border-white/20 pt-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                        Bendera Merah Putih, Bahasa Indonesia, Lagu Kebangsaan Indonesia Raya, dan Lambang Garuda Pancasila sebagai identitas resmi negara.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Kebhinekaan */}
                    <div className="relative flex-1 group overflow-hidden rounded-3xl glass-card transition-all duration-500 ease-out hover:flex-[3] min-h-[400px] lg:min-h-0">
                        <div className="absolute inset-0 bg-[url('/kebhinekaan.png')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-500 grayscale group-hover:grayscale-0"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                        
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 text-white border border-white/10 group-hover:bg-red-600 group-hover:border-red-600 transition-all">
                                <i className="fas fa-users text-xl"></i>
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 whitespace-nowrap">Kebhinekaan</h3>
                            <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
                                <div className="overflow-hidden">
                                    <p className="text-gray-300 text-sm lg:text-base leading-relaxed mt-4 border-t border-white/20 pt-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                        Kekayaan keberagaman suku, agama, ras, dan antargolongan yang dipersatukan oleh semboyan Bhinneka Tunggal Ika (Berbeda-beda tetapi tetap satu).
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* New Section: Suara Nusantara (Inspiration) */}
        <section className="pt-20 py-10 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    <span className="text-xs font-bold tracking-widest uppercase text-gray-300">Suara Nusantara</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-12">
                    "Bangsa yang tidak percaya kepada kekuatan dirinya sebagai suatu bangsa, <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">tidak dapat berdiri sebagai suatu bangsa yang merdeka.</span>"
                </h2>

                <div className="flex flex-col items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-gray-800 border-2 border-red-500 p-1">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Presiden_Sukarno.jpg/800px-Presiden_Sukarno.jpg" alt="Soekarno" className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white">Ir. Soekarno</h4>
                        <p className="text-red-500 text-sm font-mono uppercase tracking-wider">Bapak Proklamator Indonesia</p>
                    </div>
                </div>
            </div>
        </section>

        {/* <QuizSection /> */}
    </div>
  );
}
