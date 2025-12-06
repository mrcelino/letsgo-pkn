export type QuestionType = 'multiple-choice' | 'image-selection' | 'true-false' | 'opinion' | 'drag-drop';

export enum QuizCategory {
  PANCASILA = "Pancasila",
  SIMBOL_NEGARA = "Simbol Negara",
  IDENTITAS_NASIONAL = "Identitas Nasional",
  TOKOH_SEJARAH = "Tokoh & Sejarah",
  ETIKA_BERBANGSA = "Etika Berbangsa",
  UUD_1945 = "UUD 1945",
  BUDAYA_NUSANTARA = "Budaya Nusantara"
}

export interface Question {
  id: number;
  type: QuestionType;
  question: string;
  options?: string[]; // For MC, Opinion
  images?: { src: string; label: string }[]; // For Image Selection
  correctAnswer: number | boolean | string | number[]; // Flexible based on type
  explanation: string; // Shown if correct
  correction: string; // Shown if wrong
  reason: string; // Shown if wrong
  detailedExplanation: string; // More comprehensive explanation
  funFact: string; // Interesting trivia
  category: QuizCategory; // Topic category
}

export const quizData: Question[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: "Apa semboyan negara Indonesia yang tertulis pada pita Burung Garuda?",
    options: ["Tut Wuri Handayani", "Bhinneka Tunggal Ika", "Eka Prasetya Pancakarsa", "Satya Darma Pramuka"],
    correctAnswer: 1,
    explanation: "Tepat sekali! Bhinneka Tunggal Ika bermakna 'Berbeda-beda tetapi tetap satu jua'.",
    correction: "Jawaban yang benar adalah Bhinneka Tunggal Ika.",
    reason: "Semboyan ini menggambarkan persatuan dan kesatuan Bangsa dan Negara Kesatuan Republik Indonesia.",
    detailedExplanation: "Bhinneka Tunggal Ika adalah semboyan resmi negara Indonesia yang tertulis pada pita yang dicengkeram oleh Burung Garuda. Frasa ini berasal dari bahasa Jawa Kuno yang berarti 'Berbeda-beda tetapi tetap satu'. Semboyan ini mencerminkan keberagaman Indonesia dalam suku, agama, ras, budaya, dan bahasa, namun tetap bersatu dalam satu kesatuan bangsa Indonesia.",
    funFact: "Semboyan Bhinneka Tunggal Ika diambil dari Kakawin Sutasoma yang ditulis oleh Mpu Tantular pada abad ke-14 saat masa Kerajaan Majapahit. Kakawin ini menceritakan tentang toleransi antarumat beragama.",
    category: QuizCategory.SIMBOL_NEGARA
  },
  {
    id: 2,
    type: 'true-false',
    question: "Identitas nasional hanya mencakup simbol-simbol negara seperti bendera dan lagu kebangsaan.",
    correctAnswer: false,
    explanation: "Benar! Identitas nasional lebih luas dari sekadar simbol.",
    correction: "Pernyataan tersebut Salah.",
    reason: "Identitas nasional juga mencakup nilai-nilai, budaya, adat istiadat, dan karakter bangsa yang membedakan dengan bangsa lain.",
    detailedExplanation: "Identitas nasional Indonesia adalah ciri khas yang membedakan Indonesia dengan bangsa lain. Identitas nasional tidak hanya terbatas pada simbol-simbol seperti bendera merah putih, lagu Indonesia Raya, atau lambang Garuda Pancasila. Identitas nasional juga mencakup: Pancasila sebagai dasar negara, UUD 1945, bahasa Indonesia, keragaman budaya dan adat istiadat, sejarah perjuangan kemerdekaan, serta nilai-nilai luhur bangsa seperti gotong royong, musyawarah, dan toleransi.",
    funFact: "Indonesia memiliki lebih dari 300 kelompok etnik dan 700 bahasa daerah yang berbeda. Keberagaman ini justru menjadi kekuatan dan identitas unik bangsa Indonesia yang tidak dimiliki bangsa lain.",
    category: QuizCategory.IDENTITAS_NASIONAL
  },
  {
    id: 3,
    type: 'opinion',
    question: "Seorang teman mengajakmu untuk membolos upacara bendera demi bermain game. Apa tindakan yang paling mencerminkan identitas nasional?",
    options: [
      "Ikut membolos karena solidaritas teman itu penting.",
      "Menolak dengan halus dan tetap mengikuti upacara sebagai wujud rasa cinta tanah air.",
      "Marah-marah kepada teman tersebut.",
      "Melaporkan teman tersebut ke guru agar dihukum."
    ],
    correctAnswer: 1,
    explanation: "Luar biasa! Sikap ini menunjukkan kedewasaan dan rasa nasionalisme.",
    correction: "Pilihan terbaik adalah menolak dengan halus dan tetap upacara.",
    reason: "Mengikuti upacara adalah bentuk penghormatan kepada jasa pahlawan dan wujud disiplin sebagai warga negara.",
    detailedExplanation: "Menolak ajakan membolos dengan tetap mengikuti upacara menunjukkan karakter yang kuat dan pemahaman akan pentingnya nilai-nilai nasionalisme. Upacara bendera bukan sekadar rutinitas, tetapi merupakan momen untuk mengenang jasa para pahlawan yang telah berjuang untuk kemerdekaan Indonesia. Dengan tetap mengikuti upacara, kamu menunjukkan rasa hormat, disiplin, dan cinta tanah air. Penolakan dengan cara yang halus juga menunjukkan kedewasaan dalam bergaul tanpa merusak persahabatan.",
    funFact: "Upacara bendera pertama kali diadakan di Indonesia pada 17 Agustus 1945, tepat setelah Proklamasi Kemerdekaan. Bendera merah putih yang dikibarkan saat itu dijahit langsung oleh Ibu Fatmawati, istri Presiden Soekarno, dan kini disimpan sebagai pusaka di Istana Merdeka.",
    category: QuizCategory.ETIKA_BERBANGSA
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: "Lagu kebangsaan Indonesia Raya diciptakan oleh...",
    options: ["Ismail Marzuki", "W.R. Supratman", "H. Mutahar", "C. Simanjuntak"],
    correctAnswer: 1,
    explanation: "Benar! Wage Rudolf Supratman adalah pencipta lagu Indonesia Raya.",
    correction: "Penciptanya adalah W.R. Supratman.",
    reason: "Lagu ini pertama kali diperdengarkan pada Kongres Pemuda II tahun 1928.",
    detailedExplanation: "Wage Rudolf Supratman (atau dikenal sebagai W.R. Supratman) adalah pencipta lagu kebangsaan Indonesia Raya. Beliau lahir di Purworejo, Jawa Tengah, pada 9 Maret 1903. Lagu Indonesia Raya pertama kali diperdengarkan pada tanggal 28 Oktober 1928 saat Kongres Pemuda II di Jakarta. Supratman memainkan lagu tersebut dengan biolanya. Lagu ini awalnya terdiri dari tiga stanza, namun yang dijadikan lagu kebangsaan resmi adalah stanza pertama saja. Indonesia Raya resmi menjadi lagu kebangsaan sejak kemerdekaan tahun 1945.",
    funFact: "W.R. Supratman menciptakan lagu Indonesia Raya dengan biola kesayangannya yang dibeli dengan menabung. Saat pertama kali memainkannya di Kongres Pemuda II, para peserta kongres sangat terharu dan memberikan standing ovation. Sayangnya, Supratman meninggal muda pada usia 35 tahun karena penyakit jantung, tepat 10 tahun sebelum Indonesia merdeka.",
    category: QuizCategory.TOKOH_SEJARAH
  },
  {
    id: 5,
    type: 'true-false',
    question: "Pancasila adalah dasar negara yang menjadi sumber dari segala sumber hukum di Indonesia.",
    correctAnswer: true,
    explanation: "Tepat! Pancasila adalah landasan fundamental negara kita.",
    correction: "Pernyataan tersebut Benar.",
    reason: "Pancasila berkedudukan sebagai staatsfundamentalnorm (norma fundamental negara).",
    detailedExplanation: "Pancasila adalah dasar negara Republik Indonesia yang berkedudukan sebagai sumber dari segala sumber hukum (staatsfundamentalnorm). Artinya, semua peraturan perundang-undangan yang berlaku di Indonesia harus bersumber dan tidak boleh bertentangan dengan nilai-nilai Pancasila. Kedudukan Pancasila sebagai dasar negara tercantum dalam Pembukaan UUD 1945 alinea keempat. Pancasila terdiri dari lima sila: Ketuhanan Yang Maha Esa, Kemanusiaan yang Adil dan Beradab, Persatuan Indonesia, Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan, dan Keadilan Sosial bagi Seluruh Rakyat Indonesia.",
    funFact: "Nama 'Pancasila' dicetuskan oleh Ir. Soekarno dalam sidang BPUPKI pada 1 Juni 1945. Kata 'Pancasila' berasal dari bahasa Sansekerta: 'panca' berarti lima dan 'sila' berarti asas atau prinsip. Tanggal 1 Juni kemudian diperingati sebagai Hari Lahir Pancasila setiap tahunnya.",
    category: QuizCategory.PANCASILA
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: "Batik telah diakui UNESCO sebagai warisan budaya pada tahun 2009. Apa makna pengakuan ini bagi identitas nasional Indonesia?",
    options: [
      "Hanya sebagai prestise internasional",
      "Sebagai bukti kekayaan budaya dan jati diri bangsa Indonesia di mata dunia",
      "Supaya harga batik naik",
      "Tidak ada pengaruhnya"
    ],
    correctAnswer: 1,
    explanation: "Tepat sekali! Pengakuan UNESCO adalah bukti identitas budaya Indonesia yang kuat.",
    correction: "Jawaban yang benar adalah sebagai bukti kekayaan budaya dan jati diri bangsa.",
    reason: "Pengakuan UNESCO menunjukkan bahwa batik adalah warisan budaya yang mencerminkan identitas dan kekayaan bangsa Indonesia di kancah internasional.",
    detailedExplanation: "Pengakuan UNESCO terhadap batik sebagai Warisan Kemanusiaan untuk Budaya Lisan dan Nonbendawi pada tahun 2009 memiliki makna yang sangat dalam bagi identitas nasional Indonesia. Batik bukan sekadar kain bermotif, tetapi merupakan representasi filosofi hidup, nilai-nilai luhur, dan keberagaman budaya Indonesia. Setiap motif batik memiliki makna dan cerita yang mencerminkan kearifan lokal dari berbagai daerah. Pengakuan ini memperkuat posisi Indonesia sebagai bangsa yang kaya akan warisan budaya dan menjadi kebanggaan nasional.",
    funFact: "Setelah diakui UNESCO, tanggal 2 Oktober ditetapkan sebagai Hari Batik Nasional. Sejak saat itu, penggunaan batik meningkat drastis tidak hanya di acara formal, tetapi juga dalam kehidupan sehari-hari sebagai simbol kebanggaan identitas Indonesia.",
    category: QuizCategory.IDENTITAS_NASIONAL
  },
  {
    id: 7,
    type: 'opinion',
    question: "Banyak anak muda sekarang jarang memakai batik karena dianggap kuno. Sebagai generasi penerus bangsa, sikap yang tepat adalah...",
    options: [
      "Membiarkan batik dilupakan karena tidak modern",
      "Memaksa semua orang memakai batik setiap hari",
      "Mengadaptasi batik ke gaya modern sambil tetap menghargai filosofinya sebagai identitas bangsa",
      "Hanya memakai saat ada acara resmi saja"
    ],
    correctAnswer: 2,
    explanation: "Luar biasa! Sikap ini menunjukkan cinta budaya yang adaptif dan bijaksana.",
    correction: "Pilihan terbaik adalah mengadaptasi batik ke gaya modern sambil menghargai filosofinya.",
    reason: "Melestarikan budaya bukan berarti menolak modernitas, tetapi mengintegrasikan nilai-nilai budaya ke dalam kehidupan kontemporer.",
    detailedExplanation: "Menjaga identitas budaya di era modern membutuhkan kreativitas dan keterbukaan. Batik dapat diadaptasi ke dalam berbagai gaya pakaian modern seperti kemeja kasual, dress, sneakers, bahkan aksesori. Yang penting adalah memahami dan menghargai filosofi di balik motif-motif batik sebagai bagian dari identitas bangsa. Dengan cara ini, batik tetap relevan bagi generasi muda tanpa kehilangan makna kulturalnya. Inovasi seperti batik printing yang terjangkau dan motif kontemporer justru membantu batik tetap hidup di tengah masyarakat modern.",
    funFact: "Desainer muda Indonesia kini banyak yang berkolaborasi dengan pengrajin batik tradisional untuk menciptakan fashion modern dengan sentuhan batik. Hasilnya, batik Indonesia bahkan masuk ke runway fashion internasional seperti Paris Fashion Week!",
    category: QuizCategory.IDENTITAS_NASIONAL
  },
  {
    id: 8,
    type: 'true-false',
    question: "Setiap motif batik tradisional memiliki makna filosofis yang mencerminkan nilai-nilai kehidupan dan identitas budaya Indonesia.",
    correctAnswer: true,
    explanation: "Benar! Batik adalah kanvas filosofi dan nilai-nilai luhur bangsa.",
    correction: "Pernyataan tersebut Benar.",
    reason: "Motif batik seperti Parang, Kawung, dan lainnya memiliki makna mendalam yang mengajarkan nilai-nilai kehidupan.",
    detailedExplanation: "Batik Indonesia bukan sekadar seni tekstil, tetapi juga merupakan media penyampaian filosofi dan nilai-nilai kehidupan. Motif Parang yang menyerupai ombak melambangkan semangat pantang menyerah. Motif Kawung dari buah kolang-kaling melambangkan kesucian hati dan keadilan. Motif Truntum melambangkan cinta yang tumbuh kembali. Setiap goresan canting membawa doa dan harapan pembuat batik. Inilah yang membedakan batik Indonesia dengan tekstil bermotif lainnya di dunia - ada jiwa, ada cerita, dan ada identitas bangsa yang tertuang di dalamnya.",
    funFact: "Motif batik Parang Rusak dulunya hanya boleh dipakai oleh keluarga kerajaan Solo dan Yogyakarta karena dianggap sakral. Kini, meski sudah bisa dipakai siapa saja, motif ini tetap menjadi simbol kekuatan dan kepemimpinan.",
    category: QuizCategory.BUDAYA_NUSANTARA
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: "Apa makna ikrar ketiga Sumpah Pemuda 'Kami menjunjung bahasa persatuan, Bahasa Indonesia' bagi identitas nasional?",
    options: [
      "Hanya formalitas saja",
      "Bahasa sebagai alat pemersatu berbagai suku dan identitas lokal dalam satu kesatuan bangsa",
      "Untuk menghapus bahasa daerah",
      "Supaya mudah berkomunikasi dengan turis"
    ],
    correctAnswer: 1,
    explanation: "Tepat! Bahasa Indonesia adalah jembatan emas pemersatu bangsa.",
    correction: "Jawaban yang benar adalah bahasa sebagai alat pemersatu bangsa.",
    reason: "Dengan 700+ bahasa daerah, Bahasa Indonesia menjadi identitas bersama yang menyatukan seluruh suku bangsa tanpa menghilangkan keunikan lokal.",
    detailedExplanation: "Ikrar Sumpah Pemuda pada 28 Oktober 1928 adalah momen bersejarah yang menegaskan Bahasa Indonesia sebagai identitas pemersatu bangsa. Bayangkan Indonesia dengan lebih dari 300 kelompok etnik dan 700+ bahasa daerah yang berbeda. Tanpa bahasa persatuan, komunikasi antar suku akan sangat sulit dan perpecahan mudah terjadi. Para pemuda visioner tahun 1928 memilih Bahasa Melayu Riau (yang kemudian berkembang menjadi Bahasa Indonesia) sebagai bahasa pemersatu karena sifatnya yang egaliter dan mudah dipelajari. Keputusan ini adalah bukti kearifan dan visi jauh ke depan untuk membangun identitas nasional yang kuat.",
    funFact: "Indonesia adalah satu-satunya negara di dunia yang berhasil menjadikan bahasa minoritas sebagai bahasa nasional yang diterima mayoritas (termasuk suku Jawa yang merupakan mayoritas) tanpa paksaan atau pertumpahan darah. Ini adalah keajaiban sosiologis!",
    category: QuizCategory.IDENTITAS_NASIONAL
  },
  {
    id: 10,
    type: 'true-false',
    question: "Indonesia adalah satu-satunya negara yang berhasil menjadikan bahasa minoritas (Melayu Riau) menjadi bahasa nasional yang diterima mayoritas tanpa pertumpahan darah.",
    correctAnswer: true,
    explanation: "Benar! Ini adalah pencapaian luar biasa yang mencerminkan kebijaksanaan bangsa.",
    correction: "Pernyataan tersebut Benar.",
    reason: "Penerimaan Bahasa Indonesia oleh berbagai suku menunjukkan semangat persatuan yang kuat dalam identitas nasional.",
    detailedExplanation: "Fenomena ini sangat unik dalam sejarah dunia. Biasanya, bahasa nasional adalah bahasa mayoritas atau bahasa penjajah. Namun Indonesia berbeda. Meskipun penutur Bahasa Jawa adalah mayoritas, para pendiri bangsa dengan besar hati memilih Bahasa Melayu Riau yang penuturnya minoritas. Yang lebih menakjubkan, semua suku besar seperti Jawa, Sunda, Batak, Minang, dan lainnya menerima keputusan ini tanpa konflik. Ini menunjukkan bahwa identitas nasional Indonesia dibangun atas dasar kerelaan, bukan paksaan. Bahasa Indonesia menjadi simbol persatuan yang melampaui ego kesukuan dan menjadi identitas bersama yang kuat.",
    funFact: "Pada awal kemerdekaan, Bahasa Indonesia masih sangat sederhana dan banyak meminjam kata dari bahasa daerah. Kini, Bahasa Indonesia memiliki lebih dari 100.000 kosakata dan terus berkembang, bahkan digunakan di negara-negara tetangga sebagai bahasa komunikasi regional!",
    category: QuizCategory.TOKOH_SEJARAH
  },
  {
    id: 11,
    type: 'opinion',
    question: "Di era globalisasi, banyak anak muda lebih lancar bahasa Inggris daripada bahasa Indonesia. Apa yang harus dilakukan untuk menjaga bahasa Indonesia sebagai identitas nasional?",
    options: [
      "Melarang penggunaan bahasa asing",
      "Bangga menggunakan bahasa Indonesia dengan baik sambil tetap belajar bahasa asing",
      "Tidak perlu peduli karena bahasa akan berkembang sendiri",
      "Mengganti bahasa Indonesia dengan bahasa Inggris"
    ],
    correctAnswer: 1,
    explanation: "Sempurna! Sikap yang bijaksana dan mencerminkan nasionalisme yang sehat.",
    correction: "Pilihan terbaik adalah bangga menggunakan bahasa Indonesia dengan baik sambil belajar bahasa asing.",
    reason: "Identitas nasional tidak berarti menutup diri dari dunia, tetapi tetap bangga dengan bahasa sendiri.",
    detailedExplanation: "Menjaga identitas bahasa di era global membutuhkan keseimbangan yang bijaksana. Menguasai bahasa asing seperti Inggris, Mandarin, atau Arab adalah keterampilan penting di dunia modern. Namun, hal itu tidak boleh mengorbankan penguasaan Bahasa Indonesia yang baik dan benar. Yang perlu dilakukan adalah: 1) Bangga menggunakan Bahasa Indonesia dalam komunikasi sehari-hari, 2) Mempelajari dan menggunakan kosakata Indonesia yang kaya daripada selalu menggunakan istilah asing, 3) Menulis dan berbicara dengan tata bahasa yang benar, 4) Menjadi contoh penggunaan bahasa Indonesia yang baik bagi orang lain. Dengan cara ini, kita bisa go international tanpa kehilangan identitas nasional.",
    funFact: "Negara-negara maju seperti Prancis, Jepang, dan Korea Selatan sangat bangga dengan bahasa mereka. Di Prancis bahkan ada undang-undang yang mewajibkan penggunaan bahasa Prancis di ruang publik. Kecintaan mereka pada bahasa tidak menghalangi mereka menjadi negara maju!",
    category: QuizCategory.IDENTITAS_NASIONAL
  },
  {
    id: 12,
    type: 'multiple-choice',
    question: "Bahasa Indonesia tidak mengenal tingkatan tutur (undak-usuk) yang kaku. Hal ini mencerminkan nilai identitas bangsa yang...",
    options: [
      "Tidak sopan",
      "Egaliter dan demokratis (setara tanpa membeda-bedakan status)",
      "Tidak berbudaya",
      "Mudah dipelajari saja"
    ],
    correctAnswer: 1,
    explanation: "Benar! Bahasa Indonesia mencerminkan nilai kesetaraan dalam identitas bangsa.",
    correction: "Jawaban yang benar adalah egaliter dan demokratis.",
    reason: "Tidak adanya tingkatan bahasa yang kaku membuat semua orang setara dalam berkomunikasi, sesuai dengan nilai Pancasila.",
    detailedExplanation: "Salah satu keunikan Bahasa Indonesia adalah sifatnya yang egaliter atau demokratis. Berbeda dengan beberapa bahasa daerah yang memiliki tingkatan tutur yang rumit (seperti bahasa Jawa dengan ngoko, krama, dan krama inggil), Bahasa Indonesia menggunakan kata yang sama untuk berbicara kepada siapa pun - baik presiden, guru, atau teman sebaya. Yang membedakan hanya penambahan kata 'Bapak', 'Ibu', atau 'Saudara' sebagai penghormatan. Sifat egaliter ini mencerminkan nilai-nilai Pancasila, khususnya sila Kemanusiaan yang Adil dan Beradab, di mana setiap manusia memiliki kedudukan yang setara tanpa memandang status sosial. Ini adalah bagian penting dari identitas nasional Indonesia yang menghargai kesetaraan.",
    funFact: "Karena sifatnya yang egaliter, Bahasa Indonesia menjadi salah satu bahasa yang paling cepat berkembang di dunia. Kosakata baru mudah diterima dari berbagai bahasa dan budaya, membuat Bahasa Indonesia sangat adaptif dan modern!",
    category: QuizCategory.IDENTITAS_NASIONAL
  },
  {
    id: 13,
    type: 'multiple-choice',
    question: "Rendang dinobatkan sebagai makanan terlezat nomor 1 dunia oleh CNN. Apa makna ini bagi identitas bangsa Indonesia?",
    options: [
      "Hanya kebanggaan sesaat",
      "Bukti bahwa kuliner Indonesia bisa menjadi soft power dan identitas bangsa di kancah internasional",
      "Supaya restoran Indonesia laris",
      "Tidak ada artinya"
    ],
    correctAnswer: 1,
    explanation: "Tepat sekali! Kuliner adalah soft power yang memperkuat identitas bangsa.",
    correction: "Jawaban yang benar adalah kuliner sebagai soft power dan identitas bangsa.",
    reason: "Pengakuan internasional terhadap rendang menunjukkan bahwa Indonesia memiliki kekayaan budaya kuliner yang menjadi kebanggaan dan identitas di mata dunia.",
    detailedExplanation: "Ketika CNN World's 50 Best Foods menobatkan rendang sebagai makanan terlezat nomor 1 dunia pada tahun 2011, ini bukan sekadar pencapaian kuliner. Ini adalah pengakuan bahwa Indonesia memiliki soft power yang kuat melalui budaya kuliner. Soft power adalah kemampuan mempengaruhi dan menarik perhatian dunia tanpa kekerasan, melainkan melalui budaya, nilai, dan daya tarik. Rendang menjadi duta Indonesia yang memperkenalkan kekayaan rasa, filosofi, dan identitas Minangkabau ke seluruh dunia. Ini membuka pintu bagi wisata kuliner, meningkatkan kebanggaan nasional, dan memperkuat posisi Indonesia di kancah global. Kuliner menjadi salah satu identitas terkuat yang membedakan Indonesia dengan bangsa lain.",
    funFact: "Setelah dinobatkan sebagai makanan terlezat di dunia, permintaan rendang melonjak drastis di restoran Indonesia di berbagai negara. Bahkan, chef-chef Michelin star mulai mempelajari teknik memasak rendang untuk menu fusion mereka!",
    category: QuizCategory.IDENTITAS_NASIONAL
  },
  {
    id: 14,
    type: 'opinion',
    question: "Saat KTT G20 Bali 2022, Indonesia menyajikan rendang dan sate untuk pemimpin dunia. Ini menunjukkan bahwa...",
    options: [
      "Kuliner nusantara bisa menjadi identitas dan alat diplomasi bangsa (gastrodiplomasi)",
      "Hanya untuk menghemat biaya katering",
      "Tidak ada makanan internasional yang tersedia",
      "Sekadar mengikuti tradisi"
    ],
    correctAnswer: 0,
    explanation: "Luar biasa! Anda memahami konsep gastrodiplomasi sebagai identitas bangsa.",
    correction: "Pilihan terbaik adalah kuliner sebagai identitas dan alat diplomasi.",
    reason: "Gastrodiplomasi adalah strategi menggunakan kuliner untuk memperkenalkan budaya dan membangun hubungan baik antar negara.",
    detailedExplanation: "Gastrodiplomasi adalah penggunaan kuliner sebagai alat diplomasi untuk membangun citra positif negara di mata internasional. Ketika para pemimpin dunia seperti Presiden AS Joe Biden, PM Inggris Rishi Sunak, dan Presiden Prancis Emmanuel Macron menyantap rendang dan sate di KTT G20 Bali 2022, mereka tidak hanya menikmati makanan enak, tetapi juga mengalami langsung kekayaan budaya Indonesia. Ini adalah momen diplomasi yang sangat efektif - lebih berkesan daripada pidato panjang. Kuliner menciptakan pengalaman emosional yang membuat para pemimpin dunia mengingat Indonesia dengan positif. Thailand dan Korea Selatan sudah lama menggunakan strategi ini dengan sukses, dan Indonesia kini mengikuti jejak mereka dengan kuliner nusantara sebagai identitas nasional yang kuat.",
    funFact: "Pemerintah Thailand memiliki program 'Global Thai' yang secara sistematis mempromosikan masakan Thailand ke seluruh dunia. Kini ada lebih dari 15.000 restoran Thai di luar negeri. Indonesia bisa mengikuti strategi serupa dengan kekayaan kuliner nusantara yang jauh lebih beragam!",
    category: QuizCategory.IDENTITAS_NASIONAL
  },
  {
    id: 15,
    type: 'true-false',
    question: "Proses memasak rendang yang memakan waktu 8-10 jam dengan api kecil melambangkan musyawarah dan kesabaran dalam budaya Minangkabau.",
    correctAnswer: true,
    explanation: "Benar! Rendang bukan hanya masakan, tetapi juga filosofi hidup.",
    correction: "Pernyataan tersebut Benar.",
    reason: "Dalam budaya Minangkabau, proses memasak rendang yang panjang dan hati-hati melambangkan musyawarah untuk mencapai mufakat.",
    detailedExplanation: "Rendang adalah representasi filosofi hidup masyarakat Minangkabau yang mendalam. Proses memasaknya yang memakan waktu 8-10 jam dengan api kecil dan pengadukan konstan agar santan tidak pecah melambangkan proses musyawarah yang sabar dan penuh perhatian. Setiap bahan memiliki makna: daging melambangkan Niniak Mamak (pemimpin adat), kelapa melambangkan Cadiak Pandai (cendekiawan), cabai melambangkan Alim Ulama (tokoh agama), dan bumbu-bumbu melambangkan masyarakat umum. Ketika semua bahan ini dimasak bersama hingga menyatu, itu melambangkan tercapainya mufakat dalam keberagaman. Filosofi ini sangat relevan dengan identitas Indonesia yang juga dibangun atas dasar Bhinneka Tunggal Ika - berbeda-beda tetapi tetap satu.",
    funFact: "Rendang yang sudah matang bisa bertahan hingga berminggu-minggu tanpa kulkas karena santan yang sudah mengering menjadi pengawet alami. Di masa lalu, rendang adalah bekal pelaut dan pedagang Minang yang berlayar berbulan-bulan!",
    category: QuizCategory.BUDAYA_NUSANTARA
  },
  {
    id: 16,
    type: 'multiple-choice',
    question: "Dari Sate Madura, Sate Lilit Bali, hingga Sate Padang - semua berbeda bumbu tapi tetap disebut 'sate'. Ini mencerminkan identitas Indonesia yang...",
    options: [
      "Tidak konsisten",
      "Bhinneka Tunggal Ika (berbeda-beda tetapi tetap satu)",
      "Suka meniru budaya lain",
      "Tidak punya ciri khas"
    ],
    correctAnswer: 1,
    explanation: "Sempurna! Anda memahami makna Bhinneka Tunggal Ika dalam kehidupan nyata.",
    correction: "Jawaban yang benar adalah Bhinneka Tunggal Ika.",
    reason: "Keberagaman sate dari berbagai daerah dengan bumbu dan cara berbeda tapi tetap satu kesatuan adalah cerminan identitas Indonesia.",
    detailedExplanation: "Sate adalah metafora sempurna untuk identitas nasional Indonesia. Bayangkan: Sate Madura dengan bumbu kacang yang kental, Sate Lilit Bali dengan ikan laut dan bumbu basa genep, Sate Padang dengan kuah kuning pedas, Sate Maranggi dengan daging sapi khas Sunda, Sate Taichan yang minimalis namun menggigit - semuanya berbeda bahan, bumbu, dan cara penyajian. Namun semuanya adalah 'sate' - makanan yang disatukan dengan tusuk bambu dan api arang. Ini persis seperti Indonesia: 300+ suku, 700+ bahasa, berbagai agama, budaya yang beragam, tapi semuanya adalah 'Indonesia' - disatukan oleh Pancasila, Bahasa Indonesia, dan bendera Merah Putih. Keberagaman bukan kelemahan, justru kekuatan yang membuat Indonesia unik di mata dunia.",
    funFact: "Kata 'satai' pertama kali tercatat dalam naskah Jawa kuno Serat Centhini pada abad ke-19. Dari sana, sate menyebar ke seluruh nusantara dan setiap daerah mengadaptasinya dengan cita rasa lokal, menciptakan ratusan variasi sate yang berbeda!",
    category: QuizCategory.IDENTITAS_NASIONAL
  },
  {
    id: 17,
    type: 'multiple-choice',
    question: "Rumah adat Indonesia seperti rumah Sasak dan Joglo terbukti lebih tahan gempa daripada bangunan modern. Ini menunjukkan bahwa...",
    options: [
      "Nenek moyang kita sudah memiliki kearifan dan teknologi tinggi yang menjadi identitas bangsa",
      "Kebetulan saja",
      "Bangunan modern lebih buruk",
      "Gempa di Indonesia lemah"
    ],
    correctAnswer: 0,
    explanation: "Tepat! Kearifan lokal leluhur adalah bagian penting dari identitas bangsa.",
    correction: "Jawaban yang benar adalah nenek moyang memiliki kearifan dan teknologi tinggi.",
    reason: "Arsitektur tradisional yang tahan gempa adalah bukti kecerdasan dan kearifan lokal yang menjadi kebanggaan identitas Indonesia.",
    detailedExplanation: "Indonesia berada di Cincin Api Pasifik, zona gempa paling aktif di dunia. Namun ribuan tahun lalu, nenek moyang kita sudah menemukan solusi arsitektur anti-gempa yang luar biasa: rumah panggung dengan pondasi umpak batu (batu pipih yang memungkinkan tiang bergeser saat gempa tanpa patah), sambungan pasak kayu yang elastis dan fleksibel (menyerap energi gempa seperti peredam kejut), dan struktur ringan dari kayu dan bambu (mengurangi risiko korban saat runtuh). Bukti nyata: saat gempa Lombok 2018 dan Palu 2018, banyak rumah modern roboh tetapi rumah adat tetap berdiri. Ini menunjukkan bahwa kearifan lokal bukan hal yang kuno, tetapi teknologi canggih yang patut menjadi kebanggaan identitas bangsa dan diadaptasi ke arsitektur modern.",
    funFact: "Universitas-universitas arsitektur di Jepang dan Amerika kini mempelajari sistem sambungan kayu rumah adat Indonesia sebagai inspirasi untuk bangunan tahan gempa modern. Teknologi leluhur kita jadi rujukan dunia!",
    category: QuizCategory.IDENTITAS_NASIONAL
  },
  {
    id: 18,
    type: 'opinion',
    question: "Banyak orang lebih memilih rumah modern daripada rumah adat. Sebagai anak muda Indonesia, sikap yang mencerminkan cinta identitas bangsa adalah...",
    options: [
      "Memaksa semua orang tinggal di rumah adat",
      "Mempelajari dan mengadaptasi kearifan lokal arsitektur tradisional ke bangunan modern",
      "Membiarkan rumah adat punah",
      "Hanya dijadikan museum saja"
    ],
    correctAnswer: 1,
    explanation: "Luar biasa! Sikap yang bijaksana dan progresif namun tetap menghargai identitas.",
    correction: "Pilihan terbaik adalah mengadaptasi kearifan lokal ke bangunan modern.",
    reason: "Melestarikan identitas budaya bukan berarti menolak kemajuan, tetapi mengintegrasikan nilai-nilai luhur ke dalam konteks modern.",
    detailedExplanation: "Pelestarian arsitektur tradisional tidak berarti semua orang harus tinggal di rumah panggung atau Joglo. Yang penting adalah memahami dan mengadaptasi prinsip-prinsip kearifan lokal ke dalam arsitektur modern. Contoh nyata: arsitek Indonesia kini menggabungkan sistem ventilasi alami rumah tropis dengan AC hemat energi, menggunakan material lokal yang ramah lingkungan seperti bambu dan kayu berkelanjutan, menerapkan konsep ruang terbuka (pendopo) dalam desain rumah modern, dan mengadaptasi sistem konstruksi tahan gempa dari rumah adat. Dengan cara ini, kita tetap bisa hidup nyaman dengan fasilitas modern sambil menjaga identitas dan kearifan lokal. Beberapa hotel mewah di Bali bahkan menggunakan arsitektur tradisional yang dipadu dengan teknologi modern, menarik wisatawan dunia sekaligus melestarikan budaya.",
    funFact: "Pemenang sayembara Arsitektur Masjid Istiqlal, Friedrich Silaban, terinspirasi dari arsitektur Jawa dalam desainnya. Tiang-tiang besar Istiqlal mengadaptasi konsep Soko Guru dari rumah Joglo - perpaduan sempurna antara tradisi dan modernitas!",
    category: QuizCategory.IDENTITAS_NASIONAL
  },
  {
    id: 19,
    type: 'true-false',
    question: "Rumah panggung, sambungan pasak kayu, dan pondasi umpak batu adalah teknologi anti-gempa yang dikembangkan leluhur Indonesia ratusan tahun lalu.",
    correctAnswer: true,
    explanation: "Benar! Ini adalah warisan teknologi yang membanggakan dari leluhur.",
    correction: "Pernyataan tersebut Benar.",
    reason: "Ketiga teknologi ini adalah bukti kecerdasan arsitektur tradisional Indonesia yang tahan terhadap gempa.",
    detailedExplanation: "Teknologi anti-gempa leluhur Indonesia adalah bukti kearifan luar biasa yang patut menjadi kebanggaan identitas nasional. Sistem umpak batu memungkinkan tiang kayu bergeser saat gempa lalu kembali ke posisi semula tanpa patah - seperti shock absorber alami. Sambungan pasak kayu (tanpa paku besi) memberikan fleksibilitas yang menyerap energi gempa, berbeda dengan sambungan kaku yang mudah patah. Rumah panggung mengurangi kontak langsung dengan getaran tanah dan memberikan ruang evakuasi saat terjadi bencana. Ketiga teknologi ini dikembangkan ratusan tahun lalu tanpa perhitungan matematis modern, murni dari pengamatan alam dan pengalaman turun-temurun. Ini menunjukkan bahwa nenek moyang Indonesia bukan hanya berbudaya tinggi, tetapi juga berteknologi tinggi dengan cara mereka sendiri.",
    funFact: "Setelah gempa Yogyakarta 2006, pemerintah dan arsitek mulai meneliti ulang rumah Joglo kuno yang selamat. Hasilnya, kini ada standar bangunan tahan gempa Indonesia yang mengadaptasi prinsip-prinsip arsitektur tradisional!",
    category: QuizCategory.BUDAYA_NUSANTARA
  },
  {
    id: 20,
    type: 'multiple-choice',
    question: "Struktur rumah Joglo yang megah tanpa paku, hanya sistem knock-down kayu jati, menunjukkan bahwa nenek moyang Indonesia memiliki...",
    options: [
      "Keahlian teknik dan filosofi arsitektur yang tinggi sebagai bagian identitas budaya",
      "Tidak ada uang untuk membeli paku",
      "Takut gempa",
      "Mengikuti trend zaman itu"
    ],
    correctAnswer: 0,
    explanation: "Sempurna! Rumah Joglo adalah mahakarya teknik dan filosofi.",
    correction: "Jawaban yang benar adalah keahlian teknik dan filosofi arsitektur yang tinggi.",
    reason: "Sistem knock-down kayu Joglo adalah bukti keahlian teknik tinggi yang mencerminkan kecerdasan dan kearifan budaya Indonesia.",
    detailedExplanation: "Rumah Joglo adalah puncak pencapaian arsitektur vernakular Jawa yang menggabungkan keahlian teknik tinggi dengan filosofi kosmologi yang mendalam. Sistem knock-down (bongkar-pasang) tanpa paku membutuhkan presisi perhitungan yang sangat akurat - setiap sambungan kayu pas sempurna tanpa celah. 4 tiang utama (Soko Guru) melambangkan 4 penjuru mata angin dan poros dunia, atap bertingkat (tumpang sari) melambangkan jenjang spiritual menuju kesempurnaan. Yang menakjubkan, Joglo berusia ratusan tahun masih berdiri kokoh, bahkan lebih tahan lama dari bangunan beton modern. Ini bukan kebetulan, tetapi hasil pemahaman mendalam tentang sifat kayu, struktur, beban, dan filosofi kehidupan. Rumah Joglo adalah identitas budaya yang menunjukkan bahwa bangsa Indonesia memiliki peradaban tinggi jauh sebelum modernisasi.",
    funFact: "Satu rumah Joglo autentik bisa bernilai miliaran rupiah. Banyak orang kaya yang membeli dan memindahkan Joglo tua ke lokasi baru - membuktikan bahwa arsitektur tradisional tetap bernilai tinggi di era modern!",
    category: QuizCategory.IDENTITAS_NASIONAL
  },
  {
    id: 21,
    type: 'true-false',
    question: "Rumah Tongkonan Tana Toraja menghadap ke utara (arah kampung leluhur/Puya), mencerminkan penghormatan terhadap leluhur sebagai bagian identitas budaya Toraja.",
    correctAnswer: true,
    explanation: "Benar! Orientasi Tongkonan adalah cerminan kosmologi dan nilai budaya Toraja.",
    correction: "Pernyataan tersebut Benar.",
    reason: "Arah hadap Tongkonan yang khusus menunjukkan hubungan spiritual dengan leluhur, bagian penting dari identitas budaya Toraja.",
    detailedExplanation: "Rumah Tongkonan adalah jantung kosmologi masyarakat Toraja yang membagi dunia menjadi tiga: Puya (alam leluhur di utara), Lino (dunia manusia), dan Langi' (dunia dewa). Orientasi rumah yang menghadap utara bukan sekadar tradisi, tetapi representasi hubungan spiritual yang dalam antara yang hidup dan yang telah pergi. Ini menunjukkan bahwa dalam budaya Toraja, leluhur bukan hanya kenangan, tetapi tetap menjadi bagian aktif dalam kehidupan. Atap Tongkonan yang melengkung seperti perahu melambangkan perjalanan jiwa menuju Puya. Tanduk kerbau di fasad menunjukkan status sosial karena kerbau adalah hewan sakral dalam upacara. Seluruh elemen Tongkonan adalah manifestasi fisik dari worldview dan identitas budaya Toraja yang unik, menjadi bagian dari kekayaan keberagaman Indonesia.",
    funFact: "Tongkonan bisa bertahan hingga 300 tahun! Konstruksinya yang kuat dan sistem pengawetan kayu tradisional membuat Tongkonan menjadi warisan yang diturunkan dari generasi ke generasi, menjaga identitas budaya Toraja tetap hidup.",
    category: QuizCategory.BUDAYA_NUSANTARA
  },
  {
    id: 22,
    type: 'opinion',
    question: "Gudeg dimasak 8-12 jam dengan api kecil, mengajarkan filosofi 'alon-alon waton kelakon' (pelan-pelan asal tercapai). Nilai ini relevan dengan identitas bangsa Indonesia yang...",
    options: [
      "Malas dan lambat",
      "Sabar, teliti, dan menghargai proses menuju kesempurnaan",
      "Ketinggalan zaman",
      "Tidak efisien"
    ],
    correctAnswer: 1,
    explanation: "Tepat sekali! Filosofi ini mengajarkan kearifan, bukan kemalasan.",
    correction: "Pilihan terbaik adalah sabar, teliti, dan menghargai proses.",
    reason: "Alon-alon waton kelakon bukan tentang lambat, tetapi tentang kesabaran dan ketekunan dalam mencapai hasil terbaik.",
    detailedExplanation: "Filosofi 'alon-alon waton kelakon' sering disalahpahami sebagai pembenaran untuk bermalas-malasan. Padahal makna sebenarnya adalah: melakukan sesuatu dengan sabar, teliti, dan fokus pada kualitas proses, bukan sekadar mengejar kecepatan. Dalam konteks gudeg, memasak 8-12 jam dengan api kecil bukan karena malas, tetapi karena proses ini menghasilkan cita rasa terbaik - nangka yang empuk meresap sempurna, warna cokelat pekat yang cantik, dan rasa manis mendalam dari gula aren. Jika terburu-buru, hasilnya tidak akan maksimal. Filosofi ini sangat relevan di era modern yang serba instant: kita perlu ingat bahwa hal-hal berharga membutuhkan waktu dan proses. Pendidikan, membangun karakter, mencapai cita-cita - semuanya butuh kesabaran dan ketekunan, bukan jalan pintas.",
    funFact: "Warna cokelat pekat gudeg tidak menggunakan pewarna buatan, murni hasil reaksi Maillard antara gula aren dan protein selama memasak berjam-jam. Semakin gelap warnanya, semakin sempurna prosesnya - bukti bahwa kesabaran membuahkan hasil!",
    category: QuizCategory.IDENTITAS_NASIONAL
  },
  {
    id: 23,
    type: 'multiple-choice',
    question: "Indonesia memiliki 300+ kelompok etnik, 700+ bahasa daerah, berbagai agama, dan ribuan budaya lokal. Ini adalah identitas bangsa yang...",
    options: [
      "Merepotkan dan membuat perpecahan",
      "Kekayaan luar biasa yang memperkuat identitas Indonesia sebagai bangsa yang unik dan toleran",
      "Harus dihapuskan demi persatuan",
      "Tidak penting"
    ],
    correctAnswer: 1,
    explanation: "Luar biasa! Keberagaman adalah kekuatan terbesar identitas Indonesia.",
    correction: "Jawaban yang benar adalah kekayaan yang memperkuat identitas Indonesia.",
    reason: "Keberagaman adalah identitas unik Indonesia yang membedakannya dengan negara lain dan menjadi kekuatan, bukan kelemahan.",
    detailedExplanation: "Indonesia adalah salah satu negara paling beragam di dunia, dan ini adalah identitas yang luar biasa. Bayangkan: dalam satu negara, ada ratusan suku dengan budaya unik, ratusan bahasa yang berbeda, 6 agama resmi ditambah kepercayaan lokal, ribuan tarian, musik, kuliner, dan tradisi yang beragam. Banyak negara dengan keberagaman lebih kecil mengalami konflik berkepanjangan, tetapi Indonesia berhasil menjaga persatuan dengan semboyan Bhinneka Tunggal Ika. Keberagaman ini bukan kelemahan, justru menjadi soft power Indonesia di mata dunia. Wisatawan datang karena ingin melihat keunikan budaya yang tidak ada di tempat lain. UNESCO mengakui banyak warisan budaya Indonesia. Toleransi beragama di Indonesia menjadi contoh bagi dunia. Ini semua adalah identitas nasional yang patut dibanggakan dan dijaga.",
    funFact: "Indonesia adalah negara dengan jumlah bahasa terbanyak ke-2 di dunia setelah Papua Nugini! Dari 7.000+ bahasa di dunia, sekitar 700 ada di Indonesia. Setiap bahasa adalah representasi budaya dan cara pandang unik - kekayaan yang tak ternilai!",
    category: QuizCategory.IDENTITAS_NASIONAL
  },
  {
    id: 24,
    type: 'true-false',
    question: "Dalam filosofi Minangkabau, rendang dengan berbagai bahan yang berbeda tapi menyatu dalam satu rasa melambangkan musyawarah dan keberagaman yang harmonis.",
    correctAnswer: true,
    explanation: "Benar! Rendang adalah simbol persatuan dalam keberagaman.",
    correction: "Pernyataan tersebut Benar.",
    reason: "Setiap bahan dalam rendang mewakili elemen masyarakat yang berbeda, tapi menyatu harmonis seperti nilai Bhinneka Tunggal Ika.",
    detailedExplanation: "Rendang bukan sekadar masakan lezat, tetapi juga pelajaran politik dan sosial yang mendalam dari budaya Minangkabau. Daging mewakili Niniak Mamak (pemimpin adat), kelapa mewakili Cadiak Pandai (cendekiawan), cabai mewakili Alim Ulama (tokoh agama), dan berbagai bumbu mewakili masyarakat umum dengan beragam latar belakang. Setiap elemen ini berbeda fungsi, rasa, dan karakternya. Namun ketika dimasak bersama dengan sabar dalam waktu yang lama, semuanya melebur menjadi satu rasa yang harmonis dan lezat. Tidak ada yang mendominasi, tidak ada yang diabaikan - semua penting dan berkontribusi. Ini adalah cerminan sistem musyawarah mufakat Minangkabau dan juga filosofi Bhinneka Tunggal Ika Indonesia: keberagaman yang dikelola dengan bijaksana akan menghasilkan kekuatan yang luar biasa.",
    funFact: "Dalam upacara adat Minang, rendang selalu disajikan sebagai simbol kesepakatan dan persatuan. Ketika rendang dibagikan dan dimakan bersama, itu menandakan bahwa musyawarah telah mencapai mufakat dan semua pihak menerima keputusan dengan lapang dada.",
    category: QuizCategory.BUDAYA_NUSANTARA
  },
  {
    id: 25,
    type: 'opinion',
    question: "Di era media sosial dan globalisasi, banyak budaya asing masuk ke Indonesia. Sikap yang tepat untuk menjaga identitas nasional adalah...",
    options: [
      "Menutup diri dari budaya luar",
      "Menerima budaya asing sambil tetap bangga dan mempraktikkan nilai-nilai budaya Indonesia",
      "Menolak semua yang berbau modern",
      "Melupakan budaya sendiri dan mengikuti budaya luar"
    ],
    correctAnswer: 1,
    explanation: "Sempurna! Sikap yang bijaksana dan seimbang dalam menjaga identitas.",
    correction: "Pilihan terbaik adalah menerima budaya asing sambil bangga dengan budaya Indonesia.",
    reason: "Identitas nasional yang kuat bukan tentang isolasi, tetapi tentang memiliki akar budaya yang kokoh sambil terbuka terhadap dunia.",
    detailedExplanation: "Di era globalisasi, budaya asing mudah masuk melalui media sosial, film, musik, dan internet. Ini bukan ancaman jika kita memiliki identitas nasional yang kuat. Yang penting adalah: 1) Memahami dan bangga dengan budaya sendiri - mengenal sejarah, bahasa, nilai-nilai, dan tradisi Indonesia, 2) Mempraktikkan budaya Indonesia dalam kehidupan sehari-hari - berbahasa Indonesia yang baik, menghargai toleransi, mengenakan batik, menonton film Indonesia, mendengarkan musik lokal, 3) Terbuka menerima hal positif dari budaya lain tanpa kehilangan jati diri, 4) Menjadi filter yang bijak - menerima nilai universal seperti disiplin, kejujuran, inovasi, namun menolak nilai yang bertentangan dengan Pancasila. Negara-negara maju seperti Jepang dan Korea membuktikan bahwa bisa modern dan go international tanpa kehilangan identitas budaya. Indonesia bisa melakukan hal yang sama.",
    funFact: "BTS dan K-Pop terkenal di seluruh dunia, tapi mereka tetap bangga menggunakan bahasa Korea dan mempromosikan budaya Korea. Ini membuktikan bahwa identitas budaya yang kuat justru bisa menjadi daya tarik global!",
    category: QuizCategory.IDENTITAS_NASIONAL
  }
];
