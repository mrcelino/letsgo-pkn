export default function MateriHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#050505]">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-900/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block mb-6 px-4 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="text-red-400 font-mono text-sm tracking-widest uppercase">Eksplorasi Mendalam</span>
        </div>
        
        <h1 className="font-heading text-6xl md:text-8xl font-extrabold mb-8 leading-none">
            Siapa Kita <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">Sebenarnya?</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Sebuah perjalanan menelusuri akar, makna, dan jiwa yang menyatukan jutaan manusia dalam satu nama: <span className="text-white font-bold">Indonesia</span>.
        </p>

        <div className="mt-12 animate-bounce">
            <i className="fas fa-chevron-down text-white/30 text-2xl"></i>
        </div>
      </div>
    </section>
  );
}
