export interface Article {
    slug: string;
    title: string;
    subtitle: string;
    category: string;
    readTime: string;
    image: string; // Placeholder or path
    excerpt: string;
    content: string; // HTML string or markdown
    author: string;
    date: string;
}

export const articles: Article[] = [
    {
        slug: "filosofi-batik",
        title: "Batik: Lebih dari Sekadar Kain",
        subtitle: "Menelusuri makna filosofis di balik goresan canting yang mendunia.",
        category: "Budaya",
        readTime: "5 Menit",
        image: "/batik-bg.jpg", // Placeholder
        excerpt: "Setiap motif batik adalah doa. Parang melambangkan kekuatan, Kawung melambangkan kesucian hati. Batik bukan sekadar tekstil, melainkan lembaran jiwa bangsa yang tertulis dalam lilin malam.",
        author: "Author",
        date: "25 Nov 2025",
        content: `
            <p class="lead text-xl md:text-2xl leading-relaxed mb-8 text-gray-200">
                <span class="text-6xl float-left mr-3 mt-[-10px] font-heading font-bold text-red-500">B</span>atik adalah seni melukis di atas kain dengan menggunakan lilin malam sebagai perintang warna. Namun, di balik tekniknya yang rumit, tersimpan filosofi hidup yang mendalam.
            </p>
            
            <div class="my-12 p-8 bg-gradient-to-br from-red-900/20 to-black border-l-4 border-red-500 rounded-r-xl">
                <h4 class="text-red-400 font-bold text-lg mb-2 uppercase tracking-wider">Poin Kunci</h4>
                <ul class="list-disc pl-5 space-y-2 text-gray-300">
                    <li>Batik adalah warisan lisan dan nonbendawi UNESCO.</li>
                    <li>Setiap motif memiliki makna doa dan harapan.</li>
                    <li>Batik modern adalah simbol identitas yang adaptif.</li>
                </ul>
            </div>

            <h3>Motif Parang: Semangat Pantang Menyerah</h3>
            <p>Motif Parang adalah salah satu motif tertua di Indonesia. Bentuknya yang menyerupai ombak laut yang tak henti menghantam karang melambangkan semangat yang tidak pernah padam.</p>
            
            <blockquote class="my-10 pl-6 border-l-4 border-white/20 italic text-2xl text-gray-400 font-serif">
                "Ini adalah pesan bagi setiap generasi untuk terus berjuang memperbaiki diri dan bangsa."
            </blockquote>

            <h3>Motif Kawung: Kesucian dan Keadilan</h3>
            <p>Terinspirasi dari buah kolang-kaling, motif Kawung melambangkan hati yang bersih. Dalam konteks kepemimpinan, motif ini mengingatkan pemimpin agar selalu ingat asal-usulnya dan berlaku adil kepada rakyatnya.</p>

            <div class="grid md:grid-cols-2 gap-6 my-12">
                <div class="bg-white/5 p-6 rounded-xl">
                    <h5 class="font-bold text-white mb-2">Filosofi</h5>
                    <p class="text-sm text-gray-400">Kesucian hati dan pengendalian diri yang kuat.</p>
                </div>
                <div class="bg-white/5 p-6 rounded-xl">
                    <h5 class="font-bold text-white mb-2">Penerapan</h5>
                    <p class="text-sm text-gray-400">Sikap adil dan bijaksana seorang pemimpin.</p>
                </div>
            </div>

            <h3>Batik di Era Modern</h3>
            <p>Hari ini, batik telah bertransformasi. Tidak lagi hanya busana formal, batik kini menjadi simbol identitas yang bangga dikenakan oleh anak muda. UNESCO pun telah mengakuinya sebagai Warisan Kemanusiaan untuk Budaya Lisan dan Nonbendawi.</p>
        `
    },
    {
        slug: "bahasa-persatuan",
        title: "Sumpah Pemuda & Bahasa Kita",
        subtitle: "Bagaimana satu bahasa bisa menyatukan ribuan pulau.",
        category: "Sejarah",
        readTime: "4 Menit",
        image: "/bahasa-bg.jpg",
        excerpt: "Bayangkan 700+ bahasa daerah. Tanpa Bahasa Indonesia, kita mungkin masih terasing satu sama lain. Bahasa ini adalah jembatan emas yang dibangun oleh para pemuda visioner tahun 1928.",
        author: "Author",
        date: "24 Nov 2025",
        content: `
            <p class="lead text-xl md:text-2xl leading-relaxed mb-8 text-gray-200">
                <span class="text-6xl float-left mr-3 mt-[-10px] font-heading font-bold text-blue-500">"</span>Kami putra dan putri Indonesia, menjunjung bahasa persatuan, Bahasa Indonesia." Ikrar ketiga Sumpah Pemuda ini adalah keajaiban sosiologis.
            </p>

            <div class="my-12 p-8 bg-blue-900/10 border border-blue-500/30 rounded-xl relative overflow-hidden">
                <div class="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
                <h4 class="text-blue-400 font-bold text-lg mb-4 relative z-10">Fakta Menarik</h4>
                <p class="text-gray-300 relative z-10">
                    Indonesia adalah satu-satunya negara yang berhasil menjadikan bahasa minoritas (Melayu Riau) menjadi bahasa nasional yang diterima oleh mayoritas penduduk (Jawa, Sunda, dll) tanpa pertumpahan darah.
                </p>
            </div>

            <h3>Mengapa Bukan Bahasa Jawa?</h3>
            <p>Meskipun penutur Bahasa Jawa adalah mayoritas, para pendiri bangsa dengan besar hati memilih Bahasa Melayu Riau sebagai cikal bakal Bahasa Indonesia. Ini adalah bukti kerendahan hati dan visi persatuan yang melampaui ego kesukuan.</p>

            <h3>Bahasa yang Demokratis</h3>
            <p>Bahasa Indonesia tidak mengenal tingkatan tutur (undak-usuk) yang kaku seperti beberapa bahasa daerah. Ini menjadikannya bahasa yang egaliter, di mana setiap orang memiliki kedudukan yang setara dalam komunikasi.</p>
        `
    },
    {
        slug: "kuliner-nusantara",
        title: "Diplomasi Rendang",
        subtitle: "Kekayaan rasa yang menaklukkan lidah dunia.",
        category: "Kuliner",
        readTime: "6 Menit",
        image: "/rendang-bg.jpg",
        excerpt: "Rendang bukan sekadar makanan, ia adalah proses kesabaran. Dimasak berjam-jam hingga santan mengering menjadi dedak, mengajarkan kita bahwa hal indah membutuhkan waktu.",
        author: "Author",
        date: "23 Nov 2025",
        content: `
            <p class="lead text-xl md:text-2xl leading-relaxed mb-8 text-gray-200">
                Kuliner Indonesia adalah manifestasi dari kekayaan rempah kita. Pala, cengkeh, dan lada yang dulu diperebutkan bangsa Eropa, kini menjadi bumbu persatuan di meja makan.
            </p>

            <div class="my-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="text-center p-4 bg-white/5 rounded-lg">
                    <i class="fas fa-drumstick-bite text-3xl text-orange-500 mb-2"></i>
                    <p class="text-sm font-bold">Daging</p>
                    <p class="text-xs text-gray-500">Niniak Mamak</p>
                </div>
                <div class="text-center p-4 bg-white/5 rounded-lg">
                    <i class="fas fa-circle text-3xl text-white mb-2"></i>
                    <p class="text-sm font-bold">Kelapa</p>
                    <p class="text-xs text-gray-500">Cadiak Pandai</p>
                </div>
                <div class="text-center p-4 bg-white/5 rounded-lg">
                    <i class="fas fa-pepper-hot text-3xl text-red-500 mb-2"></i>
                    <p class="text-sm font-bold">Lado</p>
                    <p class="text-xs text-gray-500">Alim Ulama</p>
                </div>
                <div class="text-center p-4 bg-white/5 rounded-lg">
                    <i class="fas fa-mortar-pestle text-3xl text-yellow-500 mb-2"></i>
                    <p class="text-sm font-bold">Bumbu</p>
                    <p class="text-xs text-gray-500">Masyarakat</p>
                </div>
            </div>

            <h3>Filosofi Rendang</h3>
            <p>Dalam tradisi Minangkabau, Rendang memiliki filosofi tersendiri. Semuanya menyatu dalam harmoni rasa, mengajarkan kita tentang musyawarah dan mufakat.</p>

            <h3>Gastrodiplomasi</h3>
            <p>Makanan adalah cara paling halus untuk memperkenalkan budaya. Melalui sate, soto, dan nasi goreng, Indonesia menyapa dunia dengan keramahan dan kehangatan.</p>
        `
    },
    {
        slug: "arsitektur-vernakular",
        title: "Rumah Adat & Alam",
        subtitle: "Kearifan lokal dalam membangun hunian tahan gempa.",
        category: "Arsitektur",
        readTime: "5 Menit",
        image: "/rumah-bg.jpg",
        excerpt: "Nenek moyang kita tidak melawan alam, mereka bersahabat dengannya. Rumah panggung, pasak kayu, dan atap ijuk adalah teknologi canggih yang lahir dari pembacaan terhadap lingkungan.",
        author: "Author",
        date: "22 Nov 2025",
        content: `
            <p class="lead text-xl md:text-2xl leading-relaxed mb-8 text-gray-200">
                Arsitektur vernakular Indonesia bukan sekadar estetika, melainkan respon cerdas terhadap kondisi geografis cincin api (Ring of Fire).
            </p>

            <div class="my-6 p-8 border border-green-500/30 bg-green-900/10 rounded-2xl">
                <h3 class="text-green-400 font-bold text-2xl mb-4 -mt-2">Teknologi Leluhur</h3>
                <div class="space-y-4">
                    <div class="flex items-start gap-4">
                        <div class="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-black font-bold shrink-0">1</div>
                        <p class="text-gray-300 !m-0 !p-0 leading-snug mt-1"><strong>Pondasi Umpak:</strong> Batu pipih yang memungkinkan tiang bergeser saat gempa, bukan patah.</p>
                    </div>
                    <div class="flex items-start gap-4">
                        <div class="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-black font-bold shrink-0">2</div>
                        <p class="text-gray-300 !m-0 !p-0 leading-snug mt-1"><strong>Sambungan Pasak:</strong> Fleksibel dan elastis, menyerap energi getaran.</p>
                    </div>
                    <div class="flex items-start gap-4">
                        <div class="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-black font-bold shrink-0">3</div>
                        <p class="text-gray-300 !m-0 !p-0 leading-snug mt-1"><strong>Material Ringan:</strong> Kayu dan bambu mengurangi risiko reruntuhan fatal.</p>
                    </div>
                </div>
            </div>

            <h3>Rumah Gadang & Gempa</h3>
            <p>Rumah Gadang di Sumatera Barat tidak menggunakan paku, melainkan pasak kayu. Tiangnya tidak ditanam ke tanah, tapi bertumpu di atas batu pipih. Ketika gempa terjadi, rumah ini akan 'menari' mengikuti getaran, bukan melawannya.</p>

            <h3>Omo Hada Nias</h3>
            <p>Di Nias, rumah adat Omo Hada dibangun dengan struktur kayu yang saling menyilang (bracing) yang sangat kompleks, membuatnya kokoh berdiri meski diguncang gempa besar sekalipun.</p>
        `
    }
];
