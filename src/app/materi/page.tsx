import Link from "next/link";
import MateriHero from "@/components/Materi/MateriHero";
import ProgressBar from "@/components/Materi/ProgressBar";
import ChapterSection from "@/components/Materi/ChapterSection";
import InteractiveCard from "@/components/Materi/InteractiveCard";
import ArticleSection from "@/components/Materi/ArticleSection";

export default function MateriPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-red-500 selection:text-white relative">
      <ProgressBar />
      
      {/* Navbar Minimal */}
      <nav className="fixed top-0 w-full p-6 z-50 mix-blend-difference">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3 group z-50">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors backdrop-blur-md border border-white/10">
                    <i className="fas fa-arrow-left text-white"></i>
                </div>
                <span className="font-heading font-bold text-lg text-white group-hover:text-gray-300 transition-colors">Kembali</span>
            </Link>
        </div>
      </nav>

      <MateriHero />

      {/* Chapter 1: Akar & Jejak */}
      <ChapterSection 
        number="01" 
        title="Akar & Jejak" 
        subtitle="Identitas bukanlah sesuatu yang jatuh dari langit, melainkan jejak panjang sejarah yang terukir dalam darah dan air mata."
      >
        <div className="prose prose-lg prose-invert text-gray-300">
            <p className="lead text-2xl text-white font-serif italic mb-8">
                "Bangsa yang besar adalah bangsa yang tidak pernah melupakan sejarah bangsanya." — Ir. Soekarno
            </p>
            <p>
                Bayangkan sebuah nusantara yang terpecah-belah. Ribuan pulau, ratusan kerajaan, dan bahasa yang berbeda-beda. 
                Bagaimana mungkin mereka bisa bersatu? Jawabannya ada pada <strong>perasaan senasib sepenanggungan</strong>.
            </p>
            <p>
                Penjajahan selama berabad-abad menciptakan luka yang sama, namun juga melahirkan mimpi yang sama: <strong>Kemerdekaan</strong>. 
                Identitas nasional kita lahir bukan karena kesamaan etnis atau agama, melainkan karena <strong>kesepakatan politik</strong> untuk hidup bersama dalam satu rumah bernama Indonesia.
            </p>
            <div className="bg-white/5 p-6 rounded-xl border-l-4 border-red-500 my-8">
                <h4 className="text-white font-bold mb-2">Faktor Pembentuk Identitas:</h4>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Primordial:</strong> Ikatan kekerabatan dan kesamaan suku.</li>
                    <li><strong>Sakral:</strong> Kesamaan agama dan ideologi.</li>
                    <li><strong>Tokoh:</strong> Kepemimpinan yang disegani dan dihormati.</li>
                    <li><strong>Sejarah:</strong> Pengalaman masa lalu yang sama (penderitaan & kejayaan).</li>
                </ul>
            </div>
        </div>
      </ChapterSection>

      {/* Chapter 2: Wajah Bangsa */}
      <ChapterSection 
        number="02" 
        title="Wajah Bangsa" 
        subtitle="Simbol-simbol ini bukan sekadar kain atau lagu, melainkan manifestasi dari jiwa bangsa yang hidup."
        align="right"
      >
        <div className="grid sm:grid-cols-2 gap-6">
            <InteractiveCard 
                title="Bendera Merah Putih" 
                icon="fa-flag" 
                description="Merah berarti berani, Putih berarti suci. Simbol perjuangan dan kesucian hati bangsa Indonesia."
                color="red"
            />
            <InteractiveCard 
                title="Bahasa Indonesia" 
                icon="fa-language" 
                description="Bahasa persatuan yang menjembatani ratusan bahasa daerah. Alat komunikasi dan pemersatu rasa."
                color="blue"
            />
            <InteractiveCard 
                title="Garuda Pancasila" 
                icon="fa-dove" 
                description="Lambang negara dengan semboyan Bhinneka Tunggal Ika. Cerminan kekuatan dan filosofi hidup bangsa."
                color="gold"
            />
            <InteractiveCard 
                title="Lagu Indonesia Raya" 
                icon="fa-music" 
                description="Lagu kebangsaan yang menggetarkan jiwa, pengingat akan cita-cita luhur kemerdekaan."
                color="red"
            />
        </div>
        <p className="text-gray-400 mt-6">
            Identitas nasional juga mencakup <strong>Hukum Dasar (UUD 1945)</strong>, <strong>Kebudayaan Daerah</strong>, dan <strong>Konsepsi Wawasan Nusantara</strong>.
        </p>
      </ChapterSection>

      {/* Chapter 3: Tantangan Zaman */}
      <ChapterSection 
        number="03" 
        title="Tantangan Zaman" 
        subtitle="Di era tanpa batas, mampukah kita tetap menjadi Indonesia?"
      >
        <div className="space-y-6">
            <p className="text-lg text-gray-300">
                Globalisasi adalah pedang bermata dua. Di satu sisi membuka wawasan, di sisi lain menggerus jati diri. 
                Budaya asing masuk tanpa filter, hedonisme merajalela, dan rasa bangga terhadap budaya sendiri mulai pudar.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-900/10 p-6 rounded-xl border border-red-500/20">
                    <h4 className="text-red-400 font-bold mb-3"><i className="fas fa-exclamation-triangle mr-2"></i>Ancaman</h4>
                    <p className="text-sm text-gray-400">Lunturnya nilai gotong royong, radikalisme, dan ketidakpedulian terhadap simbol negara.</p>
                </div>
                <div className="bg-blue-900/10 p-6 rounded-xl border border-blue-500/20">
                    <h4 className="text-blue-400 font-bold mb-3"><i className="fas fa-shield-alt mr-2"></i>Solusi</h4>
                    <p className="text-sm text-gray-400">Pendidikan karakter, revitalisasi budaya lokal, dan pengamalan Pancasila dalam kehidupan sehari-hari.</p>
                </div>
            </div>

            <p className="text-xl font-serif italic text-white text-center py-8">
                "Identitas nasional bukanlah warisan yang statis, melainkan proyek yang harus terus diperjuangkan setiap hari."
            </p>
        </div>
      </ChapterSection>

      {/* Chapter 4: Jejak Langkah Identitas (Timeline) */}
      <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/20 to-black pointer-events-none"></div>
          <div className="max-w-5xl mx-auto px-6 relative z-10">
              <div className="text-center mb-16">
                  <span className="text-red-500 font-bold tracking-widest uppercase text-sm mb-2 block">Linimasa Sejarah</span>
                  <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Jejak Langkah <span className="text-white">Identitas</span></h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">Momen-momen krusial yang membentuk wajah Indonesia seperti hari ini.</p>
              </div>

              <div className="relative space-y-12">
                  {/* Central Line */}
                  <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-red-500 via-white to-red-500 md:left-1/2 md:-translate-x-1/2 opacity-50"></div>

                  {/* Timeline Item 1 */}
                  <div className="relative pl-12 md:pl-0 group">
                      <div className="absolute left-0 top-1 w-10 h-10 flex items-center justify-center md:left-1/2 md:-translate-x-1/2">
                          <div className="w-4 h-4 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)] ring-4 ring-black z-10 group-hover:scale-125 transition-transform duration-300"></div>
                      </div>
                      <div className="md:w-1/2 md:pr-16 md:text-right md:ml-auto md:mr-[50%]">
                         <span className="text-red-500 font-bold text-xl block mb-2 font-mono">1908</span>
                         <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">Kebangkitan Nasional</h3>
                         <p className="text-gray-400 text-sm leading-relaxed">
                             Berdirinya Budi Utomo menandai awal kesadaran nasional. Perjuangan yang tadinya bersifat kedaerahan mulai bergerak menuju persatuan nasional.
                         </p>
                      </div>
                  </div>

                  {/* Timeline Item 2 */}
                  <div className="relative pl-12 md:pl-0 group">
                      <div className="absolute left-0 top-1 w-10 h-10 flex items-center justify-center md:left-1/2 md:-translate-x-1/2">
                          <div className="w-4 h-4 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] ring-4 ring-black z-10 group-hover:scale-125 transition-transform duration-300"></div>
                      </div>
                      <div className="md:w-1/2 md:pl-16 md:ml-[50%]">
                         <span className="text-white font-bold text-xl block mb-2 font-mono">1928</span>
                         <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">Sumpah Pemuda</h3>
                         <p className="text-gray-400 text-sm leading-relaxed">
                             "Satu Nusa, Satu Bangsa, Satu Bahasa." Ikrar monumental pemuda Indonesia yang menegaskan identitas keindonesiaan di atas identitas kesukuan.
                         </p>
                      </div>
                  </div>

                  {/* Timeline Item 3 */}
                  <div className="relative pl-12 md:pl-0 group">
                      <div className="absolute left-0 top-1 w-10 h-10 flex items-center justify-center md:left-1/2 md:-translate-x-1/2">
                          <div className="w-4 h-4 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)] ring-4 ring-black z-10 group-hover:scale-125 transition-transform duration-300"></div>
                      </div>
                      <div className="md:w-1/2 md:pr-16 md:text-right md:ml-auto md:mr-[50%]">
                         <span className="text-red-500 font-bold text-xl block mb-2 font-mono">1945</span>
                         <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">Proklamasi Kemerdekaan</h3>
                         <p className="text-gray-400 text-sm leading-relaxed">
                             Puncak perjuangan. Indonesia menyatakan diri sebagai bangsa yang merdeka dan berdaulat, dengan Pancasila sebagai dasar negara.
                         </p>
                      </div>
                  </div>

                  {/* Timeline Item 4 */}
                  <div className="relative pl-12 md:pl-0 group">
                      <div className="absolute left-0 top-1 w-10 h-10 flex items-center justify-center md:left-1/2 md:-translate-x-1/2">
                          <div className="w-4 h-4 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] ring-4 ring-black z-10 group-hover:scale-125 transition-transform duration-300"></div>
                      </div>
                      <div className="md:w-1/2 md:pl-16 md:ml-[50%]">
                         <span className="text-white font-bold text-xl block mb-2 font-mono">Era Reformasi</span>
                         <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">Demokrasi & Keterbukaan</h3>
                         <p className="text-gray-400 text-sm leading-relaxed">
                             Menata ulang kehidupan berbangsa dan bernegara yang lebih demokratis, menghargai HAM, dan memperkuat otonomi daerah dalam bingkai NKRI.
                         </p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Article Deep Dive Section */}
      <ArticleSection />

    </main>
  );
}
