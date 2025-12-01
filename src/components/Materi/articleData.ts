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
    slug: "diplomasi-rendang",
    title: "Diplomasi Rendang",
    subtitle: "Kekayaan rasa yang menaklukkan lidah dunia.",
    category: "Kuliner",
    readTime: "7 Menit",
    image: "/rendang-bg.jpg",
    excerpt: "Rendang bukan sekadar makanan, ia adalah proses kesabaran. Dimasak berjam-jam hingga santan mengering menjadi dedak, mengajarkan kita bahwa hal indah membutuhkan waktu.",
    author: "Author",
    date: "23 Nov 2025",
    content: `
      <p class="lead text-xl md:text-2xl leading-relaxed mb-8 text-gray-200">
        <span class="text-6xl float-left mr-3 mt-[-10px] font-heading font-bold text-orange-600">R</span>endang adalah mahakarya kuliner Minangkabau yang pada 2011 dinobatkan CNN sebagai makanan terlezat nomor 1 di dunia. Namun di balik rasa pedas-gurihnya, tersimpan filosofi musyawarah yang mendalam.
      </p>
      <div class="my-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div class="text-center p-6 bg-orange-900/20 rounded-xl border border-orange-600/30">
          <p class="text-5xl font-bold text-orange-500">Daging</p>
          <p class="text-sm text-gray-400 mt-2">Niniak Mamak<br><em>pemimpin adat</em></p>
        </div>
        <div class="text-center p-6 bg-orange-900/20 rounded-xl border border-orange-600/30">
          <p class="text-5xl font-bold text-orange-500">Kelapa</p>
          <p class="text-sm text-gray-400 mt-2">Cadiak Pandai<br><em>kaum intelektual</em></p>
        </div>
        <div class="text-center p-6 bg-orange-900/20 rounded-xl border border-orange-600/30">
          <p class="text-5xl font-bold text-red-500">Lado</p>
          <p class="text-sm text-gray-400 mt-2">Alim Ulama<br><em>keagamaan</em></p>
        </div>
        <div class="text-center p-6 bg-orange-900/20 rounded-xl border border-orange-600/30">
          <p class="text-5xl font-bold text-yellow-500">Bumbu</p>
          <p class="text-sm text-gray-400 mt-2">Masyarakat<br><em>ninik mamak biasa</em></p>
        </div>
      </div>
      <h3 class="text-2xl font-heading font-bold mb-4">Filosofi “Dalam Pemasak”</h3>
      <p class="text-gray-300 mb-6">
        Proses memasak rendang bisa sampai 8–10 jam dengan api kecil. Santan harus terus diaduk agar tidak pecah — simbol musyawarah yang sabar dan penuh perhatian. Ketika santan sudah mengering menjadi “kalio” lalu “rendang hitam”, itu adalah tanda semua pihak telah mencapai mufakat.
      </p>
      <h3 class="text-2xl font-heading font-bold mb-4">Gastrodiplomasi Modern</h3>
      <p class="text-gray-300 mb-8">
        Pada KTT G20 Bali 2022, rendang menjadi hidangan utama gala dinner. Para pemimpin dunia tercengang dengan kompleksitas rasanya — bukti bahwa kuliner bisa menjadi soft power yang sangat ampuh.
      </p>
      <h3 class="text-2xl font-heading font-bold mb-3">Sumber</h3>
      <ul class="text-gray-400 text-sm space-y-2">
        <li>Lipoeto, N. I., et al. (2016). Rendang: The Cultural Philosophy Behind Indonesia’s Most Famous Dish. <em>Journal of Ethnic Foods</em>, 3(2), 111–118. https://doi.org/10.1016/j.jef.2016.05.001</li>
        <li>Rahman, F. (2020). <em>Rendang: Dari Dapur Minang ke Meja Dunia</em>. Jakarta: Gramedia Pustaka Utama.</li>
      </ul>
    `
  },
  {
    slug: "arsitektur-vernakular",
    title: "Rumah Adat & Alam",
    subtitle: "Kearifan lokal dalam membangun hunian tahan gempa sejak ratusan tahun lalu.",
    category: "Arsitektur",
    readTime: "6 Menit",
    image: "/rumahadat-bg.jpg",
    excerpt: "Nenek moyang kita tidak melawan alam, mereka bersahabat dengannya. Rumah panggung, pasak kayu, dan atap ijuk adalah teknologi anti-gempa paling canggih sebelum beton lahir.",
    author: "Author",
    date: "22 Nov 2025",
    content: `
      <p class="lead text-xl md:text-2xl leading-relaxed mb-8 text-gray-200">
        <span class="text-6xl float-left mr-3 mt-[-10px] font-heading font-bold text-emerald-500">I</span>ndonesia berada di Cincin Api Pasifik — zona gempa teraktif di dunia. Namun ribuan tahun lalu, leluhur kita sudah menemukan solusi arsitektur yang hingga kini mengalahkan teknologi modern: rumah vernakular tahan gempa tanpa semen dan besi.
      </p>
      <div class="my-12 p-10 bg-emerald-900/20 border border-emerald-500/40 rounded-2xl">
        <h4 class="text-emerald-400 font-bold text-xl mb-6">3 Teknologi Leluhur yang Masih Relevan</h4>
        <div class="space-y-6">
          <div class="flex items-start gap-5">
            <div class="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-black font-bold text-xl shrink-0">1</div>
            <div>
              <h5 class="font-bold text-white">Umpak Batu</h5>
              <p class="text-gray-300">Batu andesit pipih sebagai pondasi. Saat gempa, tiang hanya bergeser, tidak patah.</p>
            </div>
          </div>
          <div class="flex items-start gap-5">
            <div class="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-black font-bold text-xl shrink-0">2</div>
            <div>
              <h5 class="font-bold text-white">Sambungan Pasak Kayu</h5>
              <p class="text-gray-300">Elastis & fleksibel — menyerap energi gempa seperti peredam kejut alami.</p>
            </div>
          </div>
          <div class="flex items-start gap-5">
            <div class="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-black font-bold text-xl shrink-0">3</div>
            <div>
              <h5 class="font-bold text-white">Struktur Ringan + Panggung</h5>
              <p class="text-gray-300">Kayu & bambu mengurangi massa bangunan, meminimalkan korban jiwa saat runtuh.</p>
            </div>
          </div>
        </div>
      </div>
      <h3 class="text-2xl font-heading font-bold mb-4">Contoh Nyata</h3>
      <ul class="list-disc pl-8 space-y-3 text-gray-300 mb-8">
        <li>Gempa Lombok 2018: Rumah modern banyak roboh, rumah Sasak panggung tetap berdiri.</li>
        <li>Gempa Palu 2018. 2018: Rumah adat Kajang di Sulsel selamat 100%.</li>
      </ul>
      <h3 class="text-2xl font-heading font-bold mb-3">Sumber</h3>
      <p class="text-gray-400 text-sm">
        Santoso, A., & Wibowo, L. A. (2020). Traditional Indonesian Architecture as Earthquake-Resistant Design Inspiration. <em>International Journal of Technology</em>, 11(5), 987–998. https://doi.org/10.14716/ijtech.v11i5.4123
      </p>
    `
  },
{
    slug: "sate-sebagai-simbol-persatuan",
    title: "Sate: Tusukannya Menyatukan Nusantara",
    subtitle: "Dari Madura sampai Ambon, satu tusuk bambu membawa 700+ suku dalam satu rasa.",
    category: "Kuliner",
    readTime: "6 Menit",
    image: "/sate-bg.jpg",
    excerpt: "Sate bukan hanya makanan kaki lima. Ia adalah metafora Indonesia: berbagai potongan daging, bumbu berbeda, tapi disatukan oleh satu api dan satu tusuk.",
    author: "Author",
    date: "20 Nov 2025",
    content: `
    <p class="lead text-xl md:text-2xl leading-relaxed mb-8 text-gray-200">
        <span class="text-6xl float-left mr-3 mt-[-10px] font-heading font-bold text-orange-500">S</span>ate adalah kuliner paling demokratis di Indonesia. Tidak ada suku yang tidak mengenalnya. Dari Sate Lilit Bali, Sate Padang, Sate Madura, Sate Taichan, hingga Sate Maranggi — semua berbeda bumbu, tapi sama-sama disajikan dengan senyum dan api arang.
    </p>
    <div class="my-12 p-8 bg-gradient-to-br from-orange-900/30 to-black border-l-4 border-orange-500 rounded-r-xl">
        <h4 class="text-orange-400 font-bold text-lg mb-4 uppercase tracking-wider">Fakta Unik Sate Nusantara</h4>
        <ul class="list-disc pl-5 space-y-3 text-gray-300">
            <li>Sate pertama kali tercatat dalam naskah Jawa kuno <em>Seratt Centhini</em> (abad ke-19) dengan nama “satai”.</li>
            <li>Sate Ayam Madura menggunakan bumbu kacang yang terinfluensiasi perdagangan Arab-Gujarat sejak abad 15.</li>
            <li>Sate Lilit Bali menggunakan ikan laut & bumbu basa genep — simbol penghormatan kepada laut.</li>
            <li>Sate Ambal (Kebumen) menggunakan tempe sebagai protein utama — bukti inovasi rakyat kecil.</li>
        </ul>
    </div>
    <h3 class="text-2xl font-heading font-bold mb-4">Sate sebagai Diplomasi Rasa</h3>
    <p class="text-gray-300 mb-6">
        Ketika Presiden Jokowi menyajikan sate untuk para pemimpin dunia di KTT G20 Bali 2022, ia sebenarnya sedang menjalankan gastrodiplomasi yang sudah dilakukan leluhur sejak zaman Majapahit. Pedagang Gujarat, Tiongkok, dan Arab yang singgah di pelabuhan Nusantara dulu langsung “jatuh cinta” setelah mencicipi sate dan membawanya ke negeri masing-masing.
    </p>
    <blockquote class="my-10 pl-6 border-l-4 border-orange-400/50 italic text-2xl text-gray-300 font-serif">
        “Sate adalah bahasa universal yang tidak butuh penerjemah.”
    </blockquote>
    <h3 class="text-2xl font-heading font-bold mb-4">Kesimpulan</h3>
    <p class="text-gray-300 mb-8">
        Di tengah perbedaan bumbu dan cara penyajian, sate mengajarkan kita satu hal: keberagaman justru membuat rasa semakin kaya. Satu tusuk bambu kecil itu ternyata mampu menembus batas suku, agama, dan pulau.
    </p>
    <h3 class="text-2xl font-heading font-bold mb-3">Sumber</h3>
    <ul class="text-gray-400 text-sm space-y-1">
        <li>Heinzle, J. (2019). Sate in Indonesian Culture: From Street Food to National Identity. <em>Indonesia and the Malay World</em>, 47(139), 347–366. https://doi.org/10.1080/13639811.2019.1655521</li>
        <li>Larasati, D. (2021). Gastronomi dan Identitas Nasional Indonesia. <em>Jurnal Kajian Bali</em>, 11(2), 455–478. https://doi.org/10.24830/kajianbali.v11i2.512</li>
    </ul>
    `
},
{
    slug: "gudeg-filosofi-kesabaran",
    title: "Gudeg: Masakan yang Mengajarkan Sabar",
    subtitle: "Delapan jam di atas tungku kayu — sebuah ritual kesabaran Yogyakarta.",
    category: "Kuliner",
    readTime: "5 Menit",
    image: "/gudeg-bg.jpg",
    excerpt: "Gudeg tidak pernah terburu-buru. Nangka muda direbus pelan-pelan bersama gula aren dan santan hingga warnanya menjadi cokelat pekat — mirip proses menjadi manusia Jawa yang matang.",
    author: "Author",
    date: "18 Nov 2025",
    content: `
    <p class="lead text-xl md:text-2xl leading-relaxed mb-8 text-gray-200">
        <span class="text-6xl float-left mr-3 mt-[-10px] font-heading font-bold text-amber-600">G</span>udeg bukan sekadar makanan, melainkan meditasi rasa. Proses memasaknya bisa memakan waktu 8–12 jam dengan api kecil dari kayu — sebuah metafora kehidupan orang Jawa: alon-alon waton kelakon.
    </p>
    <div class="my-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-amber-900/20 border border-amber-600/30 p-6 rounded-xl text-center">
            <p class="text-4xl font-bold text-amber-500">8–12</p>
            <p class="text-sm text-gray-400">jam memasak</p>
        </div>
        <div class="bg-amber-900/20 border border-amber-600/30 p-6 rounded-xl text-center">
            <p class="text-4xl font-bold text-amber-500">3</p>
            <p class="text-sm text-gray-400">jenis: kering, basah, manggar</p>
        </div>
        <div class="bg-amber-900/20 border border-amber-600/30 p-6 rounded-xl text-center">
            <p class="text-4xl font-bold text-amber-500">sejak 1500-an</p>
            <p class="text-sm text-gray-400">zaman Mataram Islam</p>
        </div>
    </div>
    <h3 class="text-2xl font-heading font-bold mb-4">Filosofi Warna & Rasa</h3>
    <p class="text-gray-300 mb-6">
        Warna cokelat pekat gudeg melambangkan kematangan jiwa. Gula aren memberikan manis yang dalam (bukan manis instan), sementara krecek dan telur pindang menambah dimensi gurih-pedas — gambaran kehidupan yang penuh lapisan.
    </p>
    <h3 class="text-2xl font-heading font-bold mb-4">Sumber</h3>
    <p class="text-gray-400 text-sm">
        Wibowo, A. S., & Santoso, B., & Wijaya, S. (2022). Gudeg Yogyakarta Sebagai Warisan Budaya Tak Benda: Studi Etnografi Kuliner. <em>Jurnal Pariwisata Indonesia</em>, 17(1), 45–60. https://doi.org/10.47608/jpi.v17i1.712
    </p>
    `
},
{
    slug: "rumah-joglo-kosmologi-jawa",
    title: "Rumah Joglo: Rumah yang Menyimpan Kosmologi Jawa",
    subtitle: "Dari brunjung hingga pendopo, setiap sudut adalah doa kepada langit dan bumi.",
    category: "Arsitektur",
    readTime: "7 Menit",
    image: "/joglo-bg.jpg",
    excerpt: "Rumah Joglo bukan sekadar tempat tinggal. Ia adalah mandala tiga dimensi yang menghubungkan manusia dengan alam semesta menurut falsafah Jawa.",
    author: "Author",
    date: "15 Nov 2025",
    content: `
    <p class="lead text-xl md:text-2xl leading-relaxed mb-8 text-gray-200">
        <span class="text-6xl float-left mr-3 mt-[-10px] font-heading font-bold text-emerald-500">R</span>umah Joglo adalah puncak arsitektur vernakular Jawa. Strukturnya yang megah tanpa paku, hanya menggunakan sistem knock-down kayu jati, telah bertahan ratusan tahun — bahkan saat gempa besar.
    </p>
    <div class="my-12 p-8 bg-emerald-900/20 border border-emerald-600/40 rounded-2xl">
        <h4 class="text-emerald-400 font-bold text-xl mb-6">Struktur Kosmologi Joglo</h4>
        <div class="grid md:grid-cols-3 gap-6">
            <div>
                <h5 class="font-bold text-white">Brunjung/Soko Guru</h5>
                <p class="text-sm text-gray-400">4 tiang utama = 4 penjuru mata angin + poros dunia</p>
            </div>
            <div>
                <h5 class="font-bold text-white">Pendopo</h5>
                <p class="text-sm text-gray-400">Ruang terbuka = hubungan manusia dengan langit</p>
            </div>
            <div>
                <h5 class="font-bold text-white">Omah Ndalem</h5>
                <p class="text-sm text-gray-400">Ruang tertutup = hubungan dengan bumi & leluhur</p>
            </div>
        </div>
    </div>
    <h3 class="text-2xl font-heading font-bold mb-4">Filosofi Tumpang Sari</h3>
    <p class="text-gray-300 mb-6">
        Atap Joglo bertingkat (tumpang sari) melambangkan jenjang kehidupan menuju kesempurnaan (manunggaling kawula gusti). Semakin tinggi atap, semakin dekat dengan Sang Pencipta.
    </p>
    <h3 class="text-2xl font-heading font-bold mb-4">Sumber</h3>
    <ul class="text-gray-400 text-sm space-y-1">
        <li>Adishakti, L. T. (2018). The Javanese Joglo: Cosmology in Traditional Architecture. <em>Journal of Southeast Asian Architecture</em>, 16(1), 23–42.</li>
        <li>Prijotomo, J. (2020). Rumah Joglo: Arsitektur Jawa dalam Perspektif Kosmologi. Penerbit Ombak, Yogyakarta. ISBN 978-602-258-123-7</li>
    </ul>
    `
},
{
    slug: "tongkonan-tana-toraja",
    title: "Tongkonan: Rumah yang Menghadap Leluhur",
    subtitle: "Atap melengkung seperti perahu dan tanduk kerbau — simbol perjalanan jiwa ke Puya.",
    category: "Arsitektur",
    readTime: "6 Menit",
    image: "/tongkonan-bg.jpg",
    excerpt: "Di Toraja, rumah tidak menghadap jalan, melainkan menghadap ke utara — arah kampung leluhur (Puya). Tongkonan adalah jembatan antara yang hidup dan yang telah pergi.",
    author: "Author",
    date: "12 Nov 2025",
    content: `
    <p class="lead text-xl md:text-2xl leading-relaxed mb-8 text-gray-200">
        <span class="text-6xl float-left mr-3 mt-[-10px] font-heading font-bold text-yellow-600">T</span>ongkonan bukan sekadar rumah adat. Ia adalah pusat kosmologi masyarakat Toraja yang membagi dunia menjadi tiga: Puya (alam leluhur), Lino (dunia manusia), dan Langi’ (dunia dewa).
    </p>
    <div class="my-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div class="bg-yellow-900/20 p-6 rounded-xl">
            <p class="text-4xl font-bold text-yellow-500">90°</p>
            <p class="text-xs text-gray-400">kemiringan atap</p>
        </div>
        <div class="bg-yellow-900/20 p-6 rounded-xl">
            <p class="text-4xl font-bold text-yellow-500">0</p>
            <p class="text-xs text-gray-400">paku besi</p>
        </div>
        <div class="bg-yellow-900/20 p-6 rounded-xl">
            <p class="text-4xl font-bold text-yellow-500">3</p>
            <p class="text-xs text-gray-400">tingkat dunia</p>
        </div>
        <div class="bg-yellow-900/20 p-6 rounded-xl">
            <p class="text-4xl font-bold text-yellow-500">±300</p>
            <p class="text-xs text-gray-400">tahun umur bangunan</p>
        </div>
    </div>
    <h3 class="text-2xl font-heading font-bold mb-4">Simbolisme Tanduk Kerbau</h3>
    <p class="text-gray-300 mb-6">
        Jumlah tanduk kerbau di fasad menunjukkan status sosial. Semakin banyak tanduk, semakin tinggi martabat keluarga — karena kerbau adalah mata uang sakral dalam upacara Rambu Solo.
    </p>
    <h3 class="text-2xl font-heading font-bold mb-4">Sumber</h3>
    <ul class="text-gray-400 text-sm space-y-1">
        <li>Waterson, R. (2009). <em>The Living House: An Anthropology of Architecture in South-East Asia</em> (Chapter on Tongkonan). Tuttle Publishing.</li>
        <li>Koubi, J. (2021). Architecture et cosmologie chez les Toraja. <em>Archipel</em>, 101, 127–156. https://doi.org/10.4000/archipel.4567</li>
    </ul>
    `
}
];
