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
  aceh: {
    title: "Aceh",
    subtitle: "Serambi Mekkah",
    suku: "Aceh, Gayo, Alas, Singkil, Tamiang, Aneuk Jamee, Kluet, Simeulue, Suku Laut",
    rumah: "Rumah Krong Bade",
    value:
      "Adat bersendikan Syarak, Syarak bersendikan Kitabullah (Adat berlandaskan syariat Islam)",
    makanan: "Mie Aceh, Ayam Tangkap, Kuah Pliek U, Sie Reuboh",
    fakta: "Satu-satunya provinsi di Indonesia yang menerapkan Syariat Islam.",
    landmark: "Masjid Raya Baiturrahman, Museum Tsunami Aceh",
  },
  "sumatera utara": {
    title: "Sumatera Utara",
    subtitle: "Tanah Batak & Melayu Deli",
    suku: "Batak (Toba, Karo, Mandailing, Simalungun), Melayu Deli, Nias",
    rumah: "Rumah Bolon (Batak Toba), Rumah Adat Karo",
    value:
      "Dalihan Na Tolu (Batak: Tiga tungku yang menjadi kesatuan/filosofi hidup)",
    makanan: "Bika Ambon, Lontong Medan, Soto Medan, Mie Gomak",
    fakta: "Danau Toba adalah danau vulkanik terbesar di dunia.",
    landmark:
      "Danau Toba & Pulau Samosir, Istana Maimun, Masjid Raya Al-Mashun",
  },
  "sumatera barat": {
    title: "Sumatera Barat",
    subtitle: "Ranah Minang",
    suku: "Minangkabau, Mentawai",
    rumah: "Rumah Gadang",
    value:
      "Adat Basandi Syarak, Syarak Basandi Kitabullah (Adat berlandaskan syariat Islam dan Al-Qur'an), Sistem Matrilineal",
    makanan:
      "Rendang, Sate Padang, Soto Padang, Dendeng Balado, Keripik Sanjai",
    fakta:
      "Suku Minangkabau menganut sistem kekerabatan Matrilineal (garis keturunan ibu). Rendang pernah dinobatkan sebagai makanan terlezat di dunia.",
    landmark: "Jam Gadang, Ngarai Sianok, Istana Pagaruyung",
  },
  riau: {
    title: "Riau",
    subtitle: "Bumi Lancang Kuning",
    suku: "Melayu Riau, Minangkabau, Batak, Jawa, Bugis",
    rumah: "Rumah Selaso Jatuh Kembar",
    value: "Tunjuk Ajar Melayu (nilai-nilai luhur dalam kehidupan sehari-hari)",
    makanan: "Gulai Ikan Patin, Asam Pedas Ikan Baung, Bolu Kemojo",
    fakta:
      "Dijuluki 'Bumi Lancang Kuning' karena legenda kapal kerajaan yang bernama Lancang Kuning.",
    landmark: "Masjid Agung An-Nur, Jembatan Siak IV",
  },
  "kepulauan riau": {
    title: "Kepulauan Riau",
    subtitle: "Gerbang Bahari",
    suku: "Melayu, Tionghoa, Bugis, Jawa, Batak, Suku Laut",
    rumah: "Rumah Belah Bubung",
    value: "Nilai-nilai Maritim dan Budaya Melayu",
    makanan: "Otak-otak, Gonggong, Mie Tarempa",
    fakta: "Merupakan jalur pelayaran internasional tersibuk di dunia.",
    landmark:
      "Pulau Penyengat, Patung Seribu Wajah Vihara Ksitigarbha Bodhisattva",
  },
  jambi: {
    title: "Jambi",
    subtitle: "Sepucuk Jambi Sembilan Lurah",
    suku: "Melayu Jambi, Batin, Kerinci, Kubu (Suku Anak Dalam)",
    rumah: "Rumah Panggung Kajang Lako",
    value: "Adat Berpucuk Jambi Sembilan Lurah (kesatuan wilayah adat)",
    makanan: "Tempoyak, Gulai Ikan Patin, Nasi Gemuk",
    fakta:
      "Merupakan pusat peradaban Melayu kuno, seperti Kerajaan Melayu dan Sriwijaya, dengan penemuan Candi Muaro Jambi.",
    landmark: "Candi Muaro Jambi, Jembatan Gentala Arasy",
  },
  bengkulu: {
    title: "Bengkulu",
    subtitle: "Bumi Rafflesia",
    suku: "Rejang, Serawai, Melayu Bengkulu, Lembak, Besemah",
    rumah: "Rumah Bubungan Lima",
    value: "Kelestarian alam dan nilai-nilai kesopanan",
    makanan: "Pendap, Bagar Hiu, Lemang Tapai",
    fakta:
      "Bunga bangkai raksasa Rafflesia Arnoldii pertama kali ditemukan di hutan Bengkulu.",
    landmark: "Benteng Marlborough, Rumah Kediaman Bung Karno",
  },
  "sumatera selatan": {
    title: "Sumatera Selatan",
    subtitle: "Bumi Sriwijaya",
    suku: "Melayu Palembang, Komering, Musi, Ogan",
    rumah: "Rumah Limas, Rumah Ulu",
    value:
      "Kekeluargaan dan gotong royong (tercermin pada arsitektur Rumah Limas)",
    makanan: "Pempek, Tekwan, Model, Kemplang, Martabak HAR",
    fakta:
      "Merupakan pusat Kerajaan Sriwijaya yang merupakan kerajaan maritim besar di Nusantara.",
    landmark: "Jembatan Ampera, Sungai Musi, Pulau Kemaro",
  },
  "bangka belitung": {
    title: "Kep. Bangka Belitung",
    subtitle: "Serumpun Sebalai",
    suku: "Melayu, Tionghoa, Suku Laut",
    rumah: "Rumah Limas, Rumah Rakit",
    value: "Serumpun Sebalai (kebersamaan dan persatuan)",
    makanan: "Mie Kuah Ikan, Lempah Kuning, Rusip",
    fakta:
      "Pulau Belitung terkenal dengan batu granit raksasa di pantainya yang menjadi lokasi syuting film Laskar Pelangi.",
    landmark: "Pantai Tanjung Kelayang, Jembatan Emas",
  },
  lampung: {
    title: "Lampung",
    subtitle: "Sang Bumi Ruwa Jurai",
    suku: "Lampung (Pepatih dan Pubian), Jawa, Sunda, Bali",
    rumah: "Nuwo Sesat",
    value:
      "Sang Bumi Ruwa Jurai (Satu bumi, dua keturunan, melambangkan persatuan suku Lampung dan suku pendatang)",
    makanan:
      "Seruit, Pisang Goreng Keju (berbagai olahan pisang), Kopi Robusta",
    fakta:
      "Dikenal sebagai 'Gerbang Pulau Sumatera' dan memiliki aksara sendiri yang disebut Aksara Lampung.",
    landmark: "Menara Siger, Taman Nasional Way Kambas",
  },
  banten: {
    title: "Banten",
    subtitle: "Tanah Jawara",
    suku: "Sunda Banten, Baduy (Kanekes), Jawa Serang, Betawi",
    rumah: "Rumah Adat Baduy (Suku Baduy), Rumah Panggung (Sunda Banten)",
    value:
      "Keseimbangan alam dan kesederhanaan (Suku Baduy), Semangat 'Jawara'",
    makanan: "Sate Bandeng, Rabeg, Nasi Uduk Pandeglang",
    fakta:
      "Suku Baduy sangat menjaga tradisi dan menolak modernisasi. Memiliki tempat penyimpanan padi tradisional bernama Leuit.",
    landmark: "Masjid Agung Banten, Gunung Krakatau, Kawasan Baduy",
  },
  jakarta: {
    title: "DKI Jakarta",
    subtitle: "Ibukota Negara",
    suku: "Betawi, Jawa, Sunda, Tionghoa, suku-suku lain dari seluruh Indonesia",
    rumah: "Rumah Kebaya",
    value: "Gotong Royong dan Keterbukaan",
    makanan: "Kerak Telor, Soto Betawi, Gado-Gado, Ketoprak",
    fakta:
      "Merupakan pusat akulturasi dari berbagai suku di Indonesia dan bangsa lain di dunia.",
    landmark: "Monumen Nasional (Monas), Kota Tua Jakarta, Bundaran HI",
  },
  "jawa barat": {
    title: "Jawa Barat",
    subtitle: "Tatar Sunda",
    suku: "Sunda",
    rumah: "Rumah Adat Kasepuhan (Cirebon), Rumah Julang Ngapak",
    value:
      "Silih Asih, Silih Asah, Silih Asuh (saling mengasihi, saling mendidik, saling menjaga)",
    makanan: "Karedok, Cilok, Batagor, Surabi, Peuyeum, Nasi Timbel",
    fakta:
      "Mayoritas penduduknya adalah Suku Sunda, yang dikenal dengan sifat ramah dan lemah lembut.",
    landmark: "Gedung Sate, Gunung Tangkuban Parahu, Kawah Putih",
  },
  "jawa tengah": {
    title: "Jawa Tengah",
    subtitle: "Pusat Kebudayaan Jawa",
    suku: "Jawa, Samin",
    rumah: "Rumah Joglo",
    value:
      "Keselarasan, Keseimbangan, dan Toleransi (tercermin dalam konsep arsitektur rumah tradisional)",
    makanan:
      "Lumpia Semarang, Nasi Gandul, Gudeg (juga Yogyakarta), Sate Blora",
    fakta:
      "Memiliki Rumah Adat Joglo yang memiliki filosofi dan pembagian ruang yang kompleks.",
    landmark: "Candi Borobudur, Candi Prambanan, Lawang Sewu",
  },
  yogyakarta: {
    title: "DI Yogyakarta",
    subtitle: "Daerah Istimewa",
    suku: "Jawa",
    rumah: "Rumah Bangsal Kencono",
    value:
      "Paugeran (aturan hidup yang mengutamakan keselarasan dan ketertiban) dan Keistimewaan",
    makanan: "Gudeg, Bakpia, Sate Klathak, Wedang Ronde",
    fakta:
      "Satu-satunya provinsi di Indonesia yang kepala daerahnya (Gubernur) adalah seorang Sultan (Sri Sultan Hamengkubuwono X) yang diatur dalam undang-undang keistimewaan.",
    landmark: "Keraton Yogyakarta, Jalan Malioboro, Candi Prambanan",
  },
  "jawa timur": {
    title: "Jawa Timur",
    subtitle: "Bumi Majapahit",
    suku: "Jawa (Mataraman), Madura, Osing (Banyuwangi), Tengger",
    rumah: "Rumah Joglo Jompongan, Rumah Limasan",
    value: "Gotong Royong dan Semangat Kepahlawanan (Arek Suroboyo)",
    makanan: "Rawon, Rujak Cingur, Pecel Madiun, Tahu Campur",
    fakta:
      "Merupakan lokasi berdirinya kerajaan-kerajaan besar, seperti Majapahit dan Singasari.",
    landmark: "Gunung Bromo, Tugu Pahlawan, Jembatan Suramadu",
  },
  bali: {
    title: "Bali",
    subtitle: "Pulau Dewata",
    suku: "Bali Aga, Bali Majapahit",
    rumah: "Gapura Candi Bentar (Bale Manten)",
    value:
      "Tri Hita Karana (tiga penyebab kesejahteraan: hubungan dengan Tuhan, sesama manusia, dan alam)",
    makanan: "Ayam Betutu, Babi Guling, Sate Lilit, Lawar",
    fakta:
      "Mayoritas penduduknya beragama Hindu Dharma yang sangat kental dengan tradisi. Dikenal secara internasional dengan sistem pengairan sawah Subak.",
    landmark: "Pura Besakih, Pura Tanah Lot, Garuda Wisnu Kencana (GWK)",
  },
  "nusa tenggara barat": {
    title: "Nusa Tenggara Barat",
    subtitle: "Bumi Gora",
    suku: "Sasak (Lombok), Samawa (Sumbawa), Mbojo (Bima)",
    rumah: "Rumah Adat Bale (Suku Sasak), Rumah Istana Sumbawa",
    value:
      "Gotong royong dan menjaga tata krama (tercermin pada Rumah Berugaq Sekenam)",
    makanan: "Ayam Taliwang, Plecing Kangkung, Sate Bulayak",
    fakta:
      "Suku Sasak di Lombok memiliki tradisi rumah adat dengan lantai yang dilumuri kotoran kerbau.",
    landmark: "Gunung Rinjani, Pantai Senggigi, Sirkuit Mandalika",
  },
  "nusa tenggara timur": {
    title: "Nusa Tenggara Timur",
    subtitle: "Flobamora",
    suku: "Dawan (Timor), Manggarai, Sumba, Flores",
    rumah: "Rumah Ume Bubu (Rumah Bundar Timor)",
    value: "Nilai kesetaraan dan musyawarah",
    makanan: "Se'i (daging asap), Jagung Bose, Kolo",
    fakta:
      "Memiliki pulau yang menjadi habitat alami Komodo, kadal terbesar di dunia.",
    landmark: "Taman Nasional Komodo, Danau Kelimutu, Pulau Padar",
  },

  "kalimantan barat": {
    title: "Kalimantan Barat",
    subtitle: "Bumi Khatulistiwa",
    suku: "Dayak, Melayu, Tionghoa",
    rumah: "Rumah Panjang (Radakng)",
    value: "Hidup harmonis antar budaya dan etnis",
    makanan: "Pengkang, Chai Kue, Bubur Pedas",
    fakta: "Garis Khatulistiwa melintas langsung di Pontianak",
    landmark: "Tugu Khatulistiwa",
  },
  "kalimantan tengah": {
    title: "Kalimantan Tengah",
    subtitle: "Bumi Tambun Bungai",
    suku: "Dayak Ngaju, Ot Danum",
    rumah: "Rumah Betang",
    value: "Filosofi Huma Betang: kebersamaan dalam keberagaman",
    makanan: "Juhu Umbut Rotan, Wadi",
    fakta: "Memiliki budaya Huma Betang yang sangat kuat",
    landmark: "Danau Tahai",
  },
  "kalimantan selatan": {
    title: "Kalimantan Selatan",
    subtitle: "Bumi Lambung Mangkurat",
    suku: "Banjar, Dayak Meratus",
    rumah: "Rumah Bubungan Tinggi",
    value: "Semangat persahabatan dan perdagangan masyarakat Banjar",
    makanan: "Soto Banjar, Ketupat Kandangan",
    fakta: "Terkenal dengan pasar terapung Sungai Barito",
    landmark: "Pasar Terapung Lok Baintan",
  },
  "kalimantan timur": {
    title: "Kalimantan Timur",
    subtitle: "Benua Etam",
    suku: "Kutai, Dayak Kenyah, Banjar",
    rumah: "Rumah Lamin",
    value: "Kearifan lokal menjaga kelestarian hutan",
    makanan: "Nasi Bekepor, Sate Payau",
    fakta: "Lokasi pembangunan Ibu Kota Negara (IKN) Nusantara",
    landmark: "Tenggarong Kutai",
  },
  "kalimantan utara": {
    title: "Kalimantan Utara",
    subtitle: "Benuanta",
    suku: "Tidung, Bulungan",
    rumah: "Rumah Panjang Tidung",
    value: "Budaya perbatasan yang terbuka dan harmonis",
    makanan: "Nasi Subut, Ikan Asin Richa",
    fakta: "Provinsi termuda di Kalimantan (2012)",
    landmark: "Tugu Perbatasan Sebatik",
  },
  "sulawesi utara": {
    title: "Sulawesi Utara",
    subtitle: "Nyiur Melambai",
    suku: "Minahasa, Sangihe, Talaud",
    rumah: "Rumah Wale",
    value: "Toleransi tinggi dan kehidupan multireligius",
    makanan: "Tinutuan, Cakalang Fufu",
    fakta: "Memiliki kawasan laut Bunaken yang terkenal dunia",
    landmark: "Taman Laut Bunaken",
  },
  gorontalo: {
    title: "Gorontalo",
    subtitle: "Serambi Madinah",
    suku: "Gorontalo",
    rumah: "Dulohupa",
    value: "Adat bersendikan syariat",
    makanan: "Binte Biluhuta, Bilenthango",
    fakta: "Dijuluki Serambi Madinah karena kuatnya nilai Islam",
    landmark: "Benteng Otanaha",
  },
  "sulawesi tengah": {
    title: "Sulawesi Tengah",
    subtitle: "Negeri Seribu Megalit",
    suku: "Kaili, Lore, Pamona",
    rumah: "Rumah Tambi",
    value: "Melestarikan peninggalan megalitikum",
    makanan: "Kaledo, Uta Dada",
    fakta: "Memiliki megalit kuno di Lembah Bada",
    landmark: "Taman Nasional Lore Lindu",
  },
  "sulawesi barat": {
    title: "Sulawesi Barat",
    subtitle: "Melayu Malaqbi",
    suku: "Mandar",
    rumah: "Boyang",
    value: "Filosofi Malaqbiq: kehormatan dan kejujuran",
    makanan: "Jepa, Bau Peapi",
    fakta: "Terkenal dengan perahu Sandeq",
    landmark: "Pantai Dato",
  },
  "sulawesi selatan": {
    title: "Sulawesi Selatan",
    subtitle: "Anging Mammiri",
    suku: "Bugis, Makassar, Toraja",
    rumah: "Tongkonan dan Rumah Panggung Bugis",
    value: "Siri’ na Pacce: kehormatan dan solidaritas",
    makanan: "Coto Makassar, Pallubasa, Kapurung",
    fakta: "Budaya Toraja terkenal secara internasional",
    landmark: "Tana Toraja",
  },
  "sulawesi tenggara": {
    title: "Sulawesi Tenggara",
    subtitle: "Bumi Anoa",
    suku: "Tolaki, Buton, Muna",
    rumah: "Rumah Adat Buton",
    value: "Kearifan adat Sara",
    makanan: "Sinonggi, Kapusu Nosu",
    fakta: "Habitat hewan endemik Anoa",
    landmark: "Benteng Keraton Buton",
  },
  maluku: {
    title: "Maluku",
    subtitle: "Kepulauan Rempah",
    suku: "Ambon, Seram, Kei",
    rumah: "Baileo",
    value: "Pela Gandong: persaudaraan antar desa",
    makanan: "Papeda, Ikan Kuah Kuning",
    fakta: "Dikenal sejak dulu sebagai pusat perdagangan rempah",
    landmark: "Pantai Ora",
  },
  "maluku utara": {
    title: "Maluku Utara",
    subtitle: "Moloku Kie Raha",
    suku: "Ternate, Tidore",
    rumah: "Sasadu",
    value: "Empat kesultanan besar yang menjaga harmoni",
    makanan: "Gohu Ikan, Nasi Jaha",
    fakta: "Wilayah empat kerajaan besar Maluku",
    landmark: "Gunung Gamalama",
  },
  papua: {
    title: "Papua",
    subtitle: "Bumi Cenderawasih",
    suku: "Dani, Asmat, Mee",
    rumah: "Honai",
    value: "Hidup selaras dengan alam dan hutan",
    makanan: "Sagu Bakar, Papeda, Udang Selingkuh",
    fakta: "Memiliki biodiversitas terbesar di Indonesia",
    landmark: "Lembah Baliem",
  },
  "papua barat": {
    title: "Papua Barat",
    subtitle: "Konservasi Bahari",
    suku: "Arfak, Biak",
    rumah: "Rumah Kaki Seribu",
    value: "Menjaga kelestarian hutan dan laut",
    makanan: "Ikan Bakar Manokwari",
    fakta: "Tempat wisata dunia Raja Ampat",
    landmark: "Raja Ampat",
  },
  "papua tengah": {
    title: "Papua Tengah",
    subtitle: "Jantung Papua",
    suku: "Mee Pago, Moni",
    rumah: "Honai Pegunungan",
    value: "Kehidupan komunal masyarakat pegunungan",
    makanan: "Keladi Bakar, Papeda",
    fakta: "Wilayah tengah pegunungan Papua",
    landmark: "Puncak Trikora",
  },
  "papua pegunungan": {
    title: "Papua Pegunungan",
    subtitle: "Atap Indonesia",
    suku: "Dani, Yali, Lani",
    rumah: "Honai",
    value: "Persatuan dan gotong royong masyarakat adat",
    makanan: "Babi Bakar, Sayur Pegunungan",
    fakta: "Memiliki dataran tinggi paling ekstrem di Indonesia",
    landmark: "Lembah Baliem",
  },
  "papua selatan": {
    title: "Papua Selatan",
    subtitle: "Bumi Anim Ha",
    suku: "Marind, Asmat",
    rumah: "Rumah Jew",
    value: "Seni ukir tradisional yang kaya makna",
    makanan: "Sagu Sep, Udang Selingkuh",
    fakta: "Pusat seni ukir Asmat yang terkenal dunia",
    landmark: "Taman Nasional Wasur",
  },
  "papua barat daya": {
    title: "Papua Barat Daya",
    subtitle: "Gerbang Raja Ampat",
    suku: "Maya, Moi, Biak",
    rumah: "Rumah Kaki Seribu (Arfak)",
    value: "Konservasi laut dan hutan Papua",
    makanan: "Ikan Bakar Papua, Sate Ulat Sagu",
    fakta: "Gerbang menuju kawasan Raja Ampat",
    landmark: "Waisai",
  },
};
