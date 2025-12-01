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
            <span class="text-6xl float-left mr-3 mt-[-10px] font-heading font-bold text-red-500">B</span>atik merupakan warisan budaya yang bukan hanya indah secara visual, tetapi juga sarat makna filosofis. Setiap goresan, motif, hingga warna pada batik mengandung simbol-simbol yang mencerminkan pandangan hidup, nilai-nilai moral, serta identitas bangsa Indonesia.
        </p>

        <div class="my-12 p-8 bg-gradient-to-br from-red-900/20 to-black border-l-4 border-red-500 rounded-r-xl">
            <h4 class="text-red-400 font-bold text-lg mb-2 uppercase tracking-wider">Poin Penting</h4>
            <ul class="list-disc pl-5 space-y-2 text-gray-300">
                <li>Batik adalah representasi identitas bangsa Indonesia yang lahir dari nilai filosofi dan spiritualitas.</li>
                <li>Setiap motif batik memiliki makna khusus yang berkaitan dengan kehidupan, harapan, dan moralitas.</li>
                <li>Batik digunakan dalam berbagai upacara adat sebagai simbol status, doa, dan etika sosial.</li>
            </ul>
        </div>

        <h3 class="text-2xl font-heading font-bold mb-3">Makna Filosofis dalam Motif Batik</h3>
        <p class="mb-6 text-gray-300">
            Batik tidak hanya berfungsi sebagai kain dekoratif, tetapi juga menjadi media penyampai pesan-pesan filosofis. Motif-motif batik menyimpan nilai-nilai luhur yang diwariskan secara turun-temurun. Nilai tersebut meliputi ketakwaan, keselarasan hidup, kebijaksanaan, hingga etika bermasyarakat.
        </p>

        <h3 class="text-2xl font-heading font-bold mb-3">Motif Parang: Simbol Kekuatan dan Keberlanjutan</h3>
        <p class="text-gray-300 mb-6">
            Motif Parang merupakan salah satu motif tertua dan memiliki filosofi keteguhan, kekuatan, serta kontinuitas. Bentuknya yang menyerupai ombak melambangkan semangat tiada henti untuk memperbaiki diri. Motif ini dahulu hanya digunakan oleh kalangan bangsawan sebagai simbol kearifan dan kewibawaan.
        </p>

        <blockquote class="my-10 pl-6 border-l-4 border-white/20 italic text-2xl text-gray-400 font-serif">
            "Motif parang mengajarkan manusia untuk terus berjuang dan menjaga kesinambungan dalam kehidupan."
        </blockquote>

        <h3 class="text-2xl font-heading font-bold mb-3">Motif Kawung: Kesucian dan Pengendalian Diri</h3>
        <p class="text-gray-300 mb-6">
            Motif Kawung merupakan simbol kesucian, pengendalian diri, dan kesempurnaan. Terinspirasi dari buah aren, motif ini melambangkan keseimbangan hidup manusia. Pada masa lalu, motif kawung sering digunakan oleh pemimpin untuk mengingatkan agar selalu bersikap adil dan bijaksana.
        </p>

        <div class="grid md:grid-cols-2 gap-6 my-12">
            <div class="bg-white/5 p-6 rounded-xl">
                <h5 class="font-bold text-white mb-2">Filosofi Motif Parang</h5>
                <p class="text-sm text-gray-400">Kekuatan, keteguhan, keberlanjutan, dan kebijaksanaan hidup.</p>
            </div>
            <div class="bg-white/5 p-6 rounded-xl">
                <h5 class="font-bold text-white mb-2">Filosofi Motif Kawung</h5>
                <p class="text-sm text-gray-400">Kesucian hati, self-control, dan harmoni dalam kehidupan.</p>
            </div>
        </div>

        <h3 class="text-2xl font-heading font-bold mb-3">Batik sebagai Identitas Nasional</h3>
        <p class="text-gray-300 mb-6">
            Batik adalah identitas bangsa Indonesia yang tidak dapat dipisahkan dari sejarah, budaya, dan nilai-nilai masyarakat. Penggunaan batik dalam ritual adat, pernikahan, kelahiran, hingga kematian menunjukkan bagaimana batik menjadi bagian integral dari perjalanan hidup manusia Indonesia.
        </p>

        <p class="text-gray-300 mb-6">
            Selain itu, pengakuan UNESCO terhadap batik sebagai <em>Intangible Cultural Heritage</em> memperkuat posisinya sebagai warisan budaya yang harus dilestarikan. Generasi muda memiliki peran penting untuk menjaga keberlanjutan batik sebagai simbol kebanggaan nasional.
        </p>

        <h3 class="text-2xl font-heading font-bold mb-3">Kesimpulan</h3>
        <p class="text-gray-300 mb-8">
            Batik bukan sekadar karya seni, namun juga media nilai-nilai luhur yang menyatukan masyarakat Indonesia. Filosofi di setiap motif bukan hanya estetika, melainkan ajakan untuk menjaga moralitas, kearifan, dan identitas bangsa. Melestarikan batik berarti menjaga jati diri sebagai bangsa Indonesia.
        </p>

        <h3 class="text-2xl font-heading font-bold mb-3">Sumber</h3>
        <p class="text-gray-300 mb-8">
            Trixie, A. A. (2020). Filosofi motif batik sebagai identitas bangsa Indonesia. Folio, 1(1), 1–10. https://journal.uc.ac.id/index.php/FOLIO/article/view/1380/1148
        </p>      
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
        <span class="text-6xl float-left mr-3 mt-[-10px] font-heading font-bold text-red-500">B</span>ahasa Indonesia lahir dari perjalanan panjang sejarah bangsa. Berakar dari bahasa Melayu sebagai lingua franca sejak era Sriwijaya, bahasa ini dipilih sebagai bahasa persatuan pada Sumpah Pemuda 28 Oktober 1928—sebuah keputusan visioner yang menyatukan ratusan suku dan ratusan bahasa daerah.
    </p>

    <div class="my-12 p-8 bg-red-900/10 border border-red-500/30 rounded-xl relative overflow-hidden">
        <div class="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-red-500/20 rounded-full blur-xl"></div>
        <h4 class="text-red-400 font-bold text-lg mb-4 relative z-10">Fakta Penting</h4>
        <ul class="list-disc pl-5 space-y-2 text-gray-300 relative z-10">
            <li>Bahasa Indonesia berasal dari bahasa Melayu yang telah digunakan selama berabad-abad sebagai bahasa pergaulan Nusantara.</li>
            <li>Sumpah Pemuda 1928 menjadi titik awal penetapan bahasa Indonesia sebagai bahasa nasional.</li>
            <li>Untuk menjaga eksistensinya, Indonesia telah menyelenggarakan 10 Kongres Bahasa Indonesia.</li>
        </ul>
    </div>

    <h3 class="text-2xl font-heading font-bold mb-3">Akar Historis Bahasa Indonesia</h3>
    <p class="text-gray-300 mb-6">
        Dokumen menjelaskan bahwa jauh sebelum Indonesia merdeka, bahasa Melayu telah menjadi alat komunikasi antarsuku dan antarwilayah. Prasasti di Palembang, Jambi, dan Bangka menunjukkan pemakaian bahasa Melayu sejak masa kerajaan Sriwijaya. Dari sinilah bahasa Indonesia menarik kekuatan awalnya: sederhana, luwes, dan mudah diterima.
    </p>

    <h3 class="text-2xl font-heading font-bold mb-3">Sumpah Pemuda 1928: Titik Lahir Bahasa Persatuan</h3>
    <p class="text-gray-300 mb-6">
        Bahasa Indonesia pertama kali diakui sebagai bahasa nasional melalui ikrar ketiga Sumpah Pemuda. Keputusan para pemuda saat itu sangat strategis: memilih bahasa Melayu (yang bukan bahasa mayoritas) sebagai bahasa pemersatu. Ini menunjukkan semangat kerendahan hati, anti-dominasi, dan visi persatuan yang melampaui batas etnis.
    </p>

    <blockquote class="my-10 pl-6 border-l-4 border-red-300/30 italic text-2xl text-gray-300 font-serif">
        “Bahasa Indonesia menjadi kristalisasi semangat kebersamaan rakyat Indonesia dalam berbangsa dan bernegara.”
    </blockquote>

    <h3 class="text-2xl font-heading font-bold mb-3">Fungsi Bahasa Indonesia</h3>
    <p class="text-gray-300 mb-6">Bahasa Indonesia memiliki empat fungsi utama sebagai bahasa nasional:</p>
    <ul class="list-disc pl-5 mb-8 text-gray-300 space-y-2">
        <li>Lambang kebanggaan nasional.</li>
        <li>Lambang identitas nasional.</li>
        <li>Alat pemersatu bangsa beragam suku, budaya, dan bahasa.</li>
        <li>Alat komunikasi antar daerah dan antar budaya.</li>
    </ul>

    <h3 class="text-2xl font-heading font-bold mb-3">Kongres Bahasa Indonesia: Menjaga Eksistensi Bahasa</h3>
    <p class="text-gray-300 mb-6">
        Untuk menjaga keberlanjutan bahasa Indonesia di tengah globalisasi, pemerintah mengadakan Kongres Bahasa Indonesia sebagai forum nasional. Sejak 1938 hingga 2013, telah dilaksanakan 10 kongres besar yang membahas ejaan, istilah baku, tata bahasa, hingga peran bahasa daerah dan bahasa asing.
    </p>

    <div class="grid md:grid-cols-2 gap-6 my-12">
        <div class="bg-white/5 p-6 rounded-xl">
            <h5 class="font-bold text-white mb-2">Kongres Bahasa Pertama (1938)</h5>
            <p class="text-sm text-gray-400">Mengawali pembinaan bahasa Indonesia dan mendasari pengakuan resmi bahasa negara dalam UUD 1945.</p>
        </div>
        <div class="bg-white/5 p-6 rounded-xl">
            <h5 class="font-bold text-white mb-2">Kongres Bahasa V (1988)</h5>
            <p class="text-sm text-gray-400">Melahirkan dua karya monumental: KBBI dan Tata Bahasa Baku Bahasa Indonesia.</p>
        </div>
    </div>

    <p class="text-gray-300 mb-6">
        Kongres-kongres berikutnya terus memperkaya bahasa Indonesia dengan ejaan baru, pedoman istilah, dan visi pengembangan bahasa di era modern. Kongres X (2013) bahkan mengeluarkan rekomendasi kebijakan untuk pemerintah.
    </p>

    <h3 class="text-2xl font-heading font-bold mb-3">Tantangan Bahasa Indonesia di Era Global</h3>
    <p class="text-gray-300 mb-6">
        Globalisasi, teknologi, dan arus informasi menuntut bahasa Indonesia untuk tetap adaptif. Bahasa ini harus mampu menjadi instrumen utama komunikasi nasional yang modern namun tetap berakar pada budaya bangsa.
    </p>

    <h3 class="text-2xl font-heading font-bold mb-3">Kesimpulan</h3>
    <p class="text-gray-300 mb-8">
        Bahasa Indonesia adalah anugerah persatuan yang lahir dari sejarah panjang perjuangan bangsa. Dengan dukungan masyarakat dan pengembangan berkelanjutan melalui kongres-kongres bahasa, bahasa Indonesia akan tetap menjadi identitas dan kebanggaan nasional di tengah arus perubahan zaman.
    </p>

        <h3 class="text-2xl font-heading font-bold mb-3">Sumber</h3>
        <p class="text-gray-300 mb-8">
        Repelita, T. (2018). Sejarah perkembangan bahasa Indonesia (Ditinjau dari perspektif sejarah bangsa Indonesia). Jurnal Artefak: History and Education, 5(1), 45–48. http://dx.doi.org/10.25157/ja.v5i1.1927

        </p>      
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
