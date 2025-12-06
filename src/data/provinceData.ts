export interface ProvinceData {
  title: string;
  subtitle: string;
  suku: string;
  rumah: string;
  value: string;
  makanan?: string;
  fakta?: string;
  landmark?: string;
}

// Data for all 38 Provinces
export const culturalData: Record<string, ProvinceData> = {
    // --- SUMATERA ---
    'aceh': {
        title: "Aceh",
        subtitle: "Serambi Mekkah",
        suku: "Suku Aceh, Gayo, Alas. Masyarakat yang menjunjung tinggi nilai agama Islam dan adat istiadat.",
        rumah: "Rumoh Aceh (Rumah panggung dengan tiang tinggi).",
        value: "Keberanian dan keteguhan iman (Semangat Perang Sabil).",
        makanan: "Mie Aceh, Ayam Tangkap",
        fakta: "Satu-satunya provinsi yang menerapkan Hukum Syariat Islam secara formal.",
        landmark: "Masjid Raya Baiturrahman"
    },
    'sumatera utara': {
        title: "Sumatera Utara",
        subtitle: "Tanah Batak & Melayu Deli",
        suku: "Batak (Toba, Karo, Mandailing), Nias, Melayu. Dikenal dengan ketegasan dan kekerabatan marga.",
        rumah: "Rumah Bolon (Batak) dan Omo Hada (Nias).",
        value: "Dalihan Na Tolu (Tiga tungku kekerabatan).",
        makanan: "Bika Ambon, Arsik",
        fakta: "Danau Toba adalah danau vulkanik terbesar di dunia.",
        landmark: "Danau Toba"
    },
    'sumatera barat': {
        title: "Sumatera Barat",
        subtitle: "Ranah Minang",
        suku: "Minangkabau. Menganut sistem Matrilineal (garis keturunan ibu) terbesar di dunia.",
        rumah: "Rumah Gadang (Atap Gonjong menyerupai tanduk kerbau).",
        value: "Adat Basandi Syarak, Syarak Basandi Kitabullah.",
        makanan: "Rendang, Sate Padang",
        fakta: "Tradisi merantau sangat kuat bagi laki-laki Minang.",
        landmark: "Jam Gadang"
    },
    'riau': {
        title: "Riau",
        subtitle: "Bumi Lancang Kuning",
        suku: "Melayu Riau. Identik dengan sastra, pantun, dan bahasa yang halus.",
        rumah: "Balai Salaso Jatuh.",
        value: "Takkan Melayu Hilang di Bumi.",
        makanan: "Gulai Ikan Patin, Bolu Kemojo",
        fakta: "Bahasa Melayu Riau adalah cikal bakal Bahasa Indonesia.",
        landmark: "Istana Siak Sri Indrapura"
    },
    'kepulauan riau': {
        title: "Kepulauan Riau",
        subtitle: "Gerbang Bahari",
        suku: "Melayu Kepulauan, Laut. Hidup harmonis dengan laut.",
        rumah: "Rumah Belah Bubung.",
        value: "Keterbukaan dan adaptasi.",
        makanan: "Gonggong, Lakse",
        fakta: "Memiliki ribuan pulau dan berbatasan langsung dengan negara tetangga.",
        landmark: "Jembatan Barelang"
    },
    'jambi': {
        title: "Jambi",
        subtitle: "Sepucuk Jambi Sembilan Lurah",
        suku: "Melayu Jambi, Kubu (Anak Dalam).",
        rumah: "Rumah Panggung Kajang Leko.",
        value: "Keselarasan dengan alam.",
        makanan: "Tempoyak",
        fakta: "Terdapat Candi Muaro Jambi, kompleks candi bata merah terluas di Asia Tenggara.",
        landmark: "Candi Muaro Jambi"
    },
    'bengkulu': {
        title: "Bengkulu",
        subtitle: "Bumi Rafflesia",
        suku: "Rejang, Serawai, Melayu Bengkulu.",
        rumah: "Rumah Bubungan Lima.",
        value: "Keberanian dan kemandirian.",
        makanan: "Pendap",
        fakta: "Tempat pengasingan Bung Karno dan habitat bunga Rafflesia Arnoldii.",
        landmark: "Benteng Marlborough"
    },
    'sumatera selatan': {
        title: "Sumatera Selatan",
        subtitle: "Bumi Sriwijaya",
        suku: "Palembang, Komering. Pewaris kemegahan Kerajaan Sriwijaya.",
        rumah: "Rumah Limas.",
        value: "Kejayaan dan kemakmuran.",
        makanan: "Pempek, Tekwan",
        fakta: "Pernah menjadi pusat kerajaan maritim terbesar di Nusantara.",
        landmark: "Jembatan Ampera"
    },
    'bangka belitung': {
        title: "Kep. Bangka Belitung",
        subtitle: "Serumpun Sebalai",
        suku: "Melayu Bangka, Tionghoa. Contoh harmoni akulturasi budaya.",
        rumah: "Rumah Rakit dan Rumah Panggung.",
        value: "Toleransi antar etnis yang sangat tinggi.",
        makanan: "Lempah Kuning, Martabak Bangka",
        fakta: "Penghasil timah terbesar dan memiliki pantai batu granit yang indah.",
        landmark: "Mercusuar Lengkuas"
    },
    'lampung': {
        title: "Lampung",
        subtitle: "Sang Bumi Ruwa Jurai",
        suku: "Lampung (Pesisir dan Pepadun).",
        rumah: "Nuwo Sesat.",
        value: "Piil Pesenggiri (Harga diri dan kehormatan keluarga).",
        makanan: "Seruit",
        fakta: "Terkenal dengan Kain Tapis dan gajah Way Kambas.",
        landmark: "Menara Siger"
    },

    // --- JAWA ---
    'banten': {
        title: "Banten",
        subtitle: "Tanah Jawara",
        suku: "Banten, Baduy (Kanekes).",
        rumah: "Rumah Sulah Nyanda (Baduy).",
        value: "Kukuh pada prinsip (Baduy Dalam).",
        makanan: "Sate Bandeng",
        fakta: "Suku Baduy Dalam tidak menggunakan alas kaki dan teknologi.",
        landmark: "Masjid Agung Banten"
    },
    'jakarta': {
        title: "DKI Jakarta",
        subtitle: "Ibukota Negara",
        suku: "Betawi. Hasil akulturasi berbagai suku bangsa.",
        rumah: "Rumah Kebaya.",
        value: "Egaliter, terbuka, dan humoris.",
        makanan: "Kerak Telor, Soto Betawi",
        fakta: "Pusat pemerintahan dan ekonomi Indonesia.",
        landmark: "Monas"
    },
    'jawa barat': {
        title: "Jawa Barat",
        subtitle: "Tatar Sunda",
        suku: "Sunda. Dikenal ramah, sopan, dan humoris.",
        rumah: "Imah Julang Ngapak.",
        value: "Silih Asah Silih Asih Silih Asuh.",
        makanan: "Karedok, Batagor, Seblak",
        fakta: "Alat musik Angklung diakui UNESCO.",
        landmark: "Gedung Sate"
    },
    'jawa tengah': {
        title: "Jawa Tengah",
        subtitle: "Pusat Kebudayaan Jawa",
        suku: "Jawa. Menjunjung tinggi tata krama dan unggah-ungguh.",
        rumah: "Rumah Joglo.",
        value: "Alon-alon waton kelakon.",
        makanan: "Gudeg, Lumpia",
        fakta: "Terdapat Candi Borobudur, candi Buddha terbesar di dunia.",
        landmark: "Candi Borobudur"
    },
    'yogyakarta': {
        title: "DI Yogyakarta",
        subtitle: "Daerah Istimewa",
        suku: "Jawa. Sangat kental dengan tradisi Keraton.",
        rumah: "Bangsal Kencono.",
        value: "Hamemayu Hayuning Bawana.",
        makanan: "Gudeg, Bakpia",
        fakta: "Satu-satunya provinsi yang dipimpin oleh Sultan.",
        landmark: "Tugu Yogyakarta"
    },
    'jawa timur': {
        title: "Jawa Timur",
        subtitle: "Bumi Majapahit",
        suku: "Jawa, Madura, Tengger, Osing.",
        rumah: "Joglo Situbondo.",
        value: "Tegas, lugas, dan pekerja keras.",
        makanan: "Rawon, Rujak Cingur",
        fakta: "Memiliki Gunung Bromo dan Kawah Ijen.",
        landmark: "Gunung Bromo"
    },

    // --- BALI & NUSA TENGGARA ---
    'bali': {
        title: "Bali",
        subtitle: "Pulau Dewata",
        suku: "Bali. Mayoritas Hindu dengan budaya seni yang sangat tinggi.",
        rumah: "Gapura Candi Bentar.",
        value: "Tri Hita Karana.",
        makanan: "Ayam Betutu, Sate Lilit",
        fakta: "Destinasi wisata terpopuler di dunia.",
        landmark: "Pura Tanah Lot"
    },
    'nusa tenggara barat': {
        title: "Nusa Tenggara Barat",
        subtitle: "Bumi Gora",
        suku: "Sasak, Samawa, Mbojo.",
        rumah: "Dalam Loka, Bale Lumbung.",
        value: "Religius dan kekeluargaan.",
        makanan: "Ayam Taliwang",
        fakta: "Sirkuit Mandalika berada di sini.",
        landmark: "Gunung Rinjani"
    },
    'nusa tenggara timur': {
        title: "Nusa Tenggara Timur",
        subtitle: "Flobamora",
        suku: "Alor, Rote, Manggarai, Sumba.",
        rumah: "Mbaru Niang (Wae Rebo).",
        value: "Nusa Terindah Toleransi.",
        makanan: "Se'i Sapi, Jagung Bose",
        fakta: "Habitat asli Komodo, kadal terbesar di dunia.",
        landmark: "Pulau Komodo"
    },

    // --- KALIMANTAN ---
    'kalimantan barat': {
        title: "Kalimantan Barat",
        subtitle: "Bumi Khatulistiwa",
        suku: "Dayak, Melayu, Tionghoa.",
        rumah: "Rumah Radakng.",
        value: "Keharmonisan dalam keberagaman.",
        makanan: "Bubur Pedas",
        fakta: "Kota Pontianak dilalui garis Khatulistiwa.",
        landmark: "Tugu Khatulistiwa"
    },
    'kalimantan tengah': {
        title: "Kalimantan Tengah",
        subtitle: "Bumi Tambun Bungai",
        suku: "Dayak (Ngaju, Ot Danum).",
        rumah: "Rumah Betang.",
        value: "Huma Betang (Rukun dalam satu rumah).",
        makanan: "Juhu Singkah",
        fakta: "Memiliki Taman Nasional Tanjung Puting.",
        landmark: "Taman Nasional Tanjung Puting"
    },
    'kalimantan selatan': {
        title: "Kalimantan Selatan",
        subtitle: "Bumi Lambung Mangkurat",
        suku: "Banjar.",
        rumah: "Rumah Bubungan Tinggi.",
        value: "Bajaura (Semangat berdagang).",
        makanan: "Soto Banjar",
        fakta: "Terkenal dengan Pasar Terapung.",
        landmark: "Pasar Terapung Lok Baintan"
    },
    'kalimantan timur': {
        title: "Kalimantan Timur",
        subtitle: "Benua Etam",
        suku: "Dayak, Kutai, Banjar.",
        rumah: "Rumah Lamin.",
        value: "Ruhui Rahayu.",
        makanan: "Nasi Bekepor",
        fakta: "Lokasi Ibu Kota Negara (IKN) Nusantara.",
        landmark: "Pulau Derawan"
    },
    'kalimantan utara': {
        title: "Kalimantan Utara",
        subtitle: "Benuanta",
        suku: "Dayak, Tidung, Bulungan.",
        rumah: "Rumah Baloy.",
        value: "Penjaga perbatasan negara.",
        makanan: "Kepiting Soka",
        fakta: "Provinsi termuda di Pulau Kalimantan.",
        landmark: "Tugu Perbatasan Garuda Perkasa"
    },

    // --- SULAWESI ---
    'sulawesi utara': {
        title: "Sulawesi Utara",
        subtitle: "Nyiur Melambai",
        suku: "Minahasa, Bolaang Mongondow.",
        rumah: "Rumah Walewangko.",
        value: "Torang Samua Basudara.",
        makanan: "Tinutuan (Bubur Manado)",
        fakta: "Taman Laut Bunaken terkenal di dunia.",
        landmark: "Patung Yesus Memberkati"
    },
    'gorontalo': {
        title: "Gorontalo",
        subtitle: "Serambi Madinah",
        suku: "Gorontalo.",
        rumah: "Dulohupa.",
        value: "Adat bersendikan Syara'.",
        makanan: "Binte Biluhuta",
        fakta: "Terkenal dengan Hiu Paus di perairannya.",
        landmark: "Benteng Otanaha"
    },
    'sulawesi tengah': {
        title: "Sulawesi Tengah",
        subtitle: "Negeri Seribu Megalit",
        suku: "Kaili, Pamona, Mori.",
        rumah: "Souraja.",
        value: "Nosarara Nosabatutu.",
        makanan: "Kaledo",
        fakta: "Terdapat situs megalitikum tertua di Indonesia.",
        landmark: "Tugu Perdamaian"
    },
    'sulawesi barat': {
        title: "Sulawesi Barat",
        subtitle: "Melayu Malaqbi",
        suku: "Mandar.",
        rumah: "Rumah Boyang.",
        value: "Pelaut ulung yang berani.",
        makanan: "Bau Peapi",
        fakta: "Terkenal dengan perahu Sandeq yang cepat.",
        landmark: "Anjungan Pantai Manakarra"
    },
    'sulawesi selatan': {
        title: "Sulawesi Selatan",
        subtitle: "Anging Mammiri",
        suku: "Bugis, Makassar, Toraja.",
        rumah: "Tongkonan, Balla Lompoa.",
        value: "Siri' na Pacce.",
        makanan: "Coto Makassar, Konro",
        fakta: "Phinisi adalah kapal legendaris buatan suku Bugis-Makassar.",
        landmark: "Pantai Losari"
    },
    'sulawesi tenggara': {
        title: "Sulawesi Tenggara",
        subtitle: "Bumi Anoa",
        suku: "Tolaki, Buton, Muna.",
        rumah: "Istana Buton (Malige).",
        value: "Pertahanan dan strategi.",
        makanan: "Lapa-lapa",
        fakta: "Benteng Keraton Buton adalah benteng terluas di dunia.",
        landmark: "Benteng Keraton Buton"
    },

    // --- MALUKU & PAPUA ---
    'maluku': {
        title: "Maluku",
        subtitle: "Kepulauan Rempah",
        suku: "Ambon, Kei, Tanimbar.",
        rumah: "Baileo.",
        value: "Pela Gandong.",
        makanan: "Papeda, Ikan Kuah Kuning",
        fakta: "Pusat rempah-rempah dunia.",
        landmark: "Gong Perdamaian Dunia"
    },
    'maluku utara': {
        title: "Maluku Utara",
        subtitle: "Moloku Kie Raha",
        suku: "Ternate, Tidore.",
        rumah: "Sasadu.",
        value: "Marimoi Ngone Futuru.",
        makanan: "Gohu Ikan",
        fakta: "Terdapat Kesultanan Ternate dan Tidore.",
        landmark: "Masjid Sultan Ternate"
    },
    'papua': {
        title: "Papua",
        subtitle: "Bumi Cenderawasih",
        suku: "Dani, Biak, Sentani.",
        rumah: "Honai, Kariwari.",
        value: "Satu Tungku Tiga Batu.",
        makanan: "Papeda, Ulat Sagu",
        fakta: "Memiliki salju abadi di Puncak Jaya.",
        landmark: "Jembatan Youtefa"
    },
    'papua barat': {
        title: "Papua Barat",
        subtitle: "Konservasi Bahari",
        suku: "Arfak, Doreri.",
        rumah: "Rumah Kaki Seribu.",
        value: "Menjaga alam sebagai ibu.",
        makanan: "Ikan Bakar Manokwari",
        fakta: "Raja Ampat adalah surga penyelam dunia.",
        landmark: "Raja Ampat"
    },
    'papua tengah': {
        title: "Papua Tengah",
        subtitle: "Jantung Papua",
        suku: "Mee, Moni.",
        rumah: "Honai.",
        value: "Kehidupan komunal yang erat.",
        makanan: "Ubi jalar (Hipere)",
        fakta: "Wilayah pegunungan dengan tambang emas terbesar.",
        landmark: "Puncak Jaya"
    },
    'papua pegunungan': {
        title: "Papua Pegunungan",
        subtitle: "Atap Indonesia",
        suku: "Dani, Lani, Yali.",
        rumah: "Honai.",
        value: "Tradisi Bakar Batu.",
        makanan: "Babi Bakar Batu",
        fakta: "Satu-satunya provinsi landlocked di Indonesia.",
        landmark: "Lembah Baliem"
    },
    'papua selatan': {
        title: "Papua Selatan",
        subtitle: "Bumi Anim Ha",
        suku: "Asmat, Marind.",
        rumah: "Jew (Rumah Bujang).",
        value: "Seni ukir sebagai bahasa roh.",
        makanan: "Sagu Sep",
        fakta: "Suku Asmat terkenal dengan seni ukir kayu kelas dunia.",
        landmark: "Tugu Merauke (0 KM)"
    },
    'papua barat daya': {
        title: "Papua Barat Daya",
        subtitle: "Gerbang Raja Ampat",
        suku: "Moi, Maybrat.",
        rumah: "Rumah Kaki Seribu.",
        value: "Kearifan lokal Egek.",
        makanan: "Papeda",
        fakta: "Pintu gerbang utama menuju wisata Raja Ampat.",
        landmark: "Pulau Piaynemo"
    }
};
