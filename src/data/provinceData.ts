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
  'aceh': { title: "Aceh", subtitle: "Serambi Mekkah", suku: "", rumah: "", value: "", makanan: "", fakta: "", landmark: "" },
  'sumatera utara': { title: "Sumatera Utara", subtitle: "Tanah Batak & Melayu Deli", suku: "", rumah: "", value: "", makanan: "", fakta: "", landmark: "" },
  'sumatera barat': { title: "Sumatera Barat", subtitle: "Ranah Minang", suku: "", rumah: "", value: "", makanan: "", fakta: "", landmark: "" },
  'riau': { title: "Riau", subtitle: "Bumi Lancang Kuning", suku: "", rumah: "", value: "", makanan: "", fakta: "", landmark: "" },
  'kepulauan riau': { title: "Kepulauan Riau", subtitle: "Gerbang Bahari", suku: "", rumah: "", value: "", makanan: "", fakta: "", landmark: "" },
  'jambi': { title: "Jambi", subtitle: "Sepucuk Jambi Sembilan Lurah", suku: "", rumah: "", value: "", makanan: "", fakta: "", landmark: "" },
  'bengkulu': { title: "Bengkulu", subtitle: "Bumi Rafflesia", suku: "", rumah: "", value: "", makanan: "", fakta: "", landmark: "" },
  'sumatera selatan': { title: "Sumatera Selatan", subtitle: "Bumi Sriwijaya", suku: "", rumah: "", value: "", makanan: "", fakta: "", landmark: "" },
  'bangka belitung': { title: "Kep. Bangka Belitung", subtitle: "Serumpun Sebalai", suku: "", rumah: "", value: "", makanan: "", fakta: "", landmark: "" },
  'lampung': { title: "Lampung", subtitle: "Sang Bumi Ruwa Jurai", suku: "", rumah: "", value: "", makanan: "", fakta: "", landmark: "" },

  // --- JAWA ---
  'banten': { title: "Banten", subtitle: "Tanah Jawara", suku: "", rumah: "", value: "", makanan: "", fakta: "", landmark: "" },
  'jakarta': { title: "DKI Jakarta", subtitle: "Ibukota Negara", suku: "", rumah: "", value: "", makanan: "", fakta: "", landmark: "" },
  'jawa barat': { title: "Jawa Barat", subtitle: "Tatar Sunda", suku: "", rumah: "", value: "", makanan: "", fakta: "", landmark: "" },
  'jawa tengah': { title: "Jawa Tengah", subtitle: "Pusat Kebudayaan Jawa", suku: "", rumah: "", value: "", makanan: "", fakta: "", landmark: "" },
  'yogyakarta': { title: "DI Yogyakarta", subtitle: "Daerah Istimewa", suku: "", rumah: "", value: "", makanan: "", fakta: "", landmark: "" },
  'jawa timur': { title: "Jawa Timur", subtitle: "Bumi Majapahit", suku: "", rumah: "", value: "", makanan: "", fakta: "", landmark: "" },

  // --- BALI & NUSA TENGGARA ---
  'bali': { title: "Bali", subtitle: "Pulau Dewata", suku: "", rumah: "", value: "", makanan: "", fakta: "", landmark: "" },
  'nusa tenggara barat': { title: "Nusa Tenggara Barat", subtitle: "Bumi Gora", suku: "", rumah: "", value: "", makanan: "", fakta: "", landmark: "" },
  'nusa tenggara timur': { title: "Nusa Tenggara Timur", subtitle: "Flobamora", suku: "", rumah: "", value: "", makanan: "", fakta: "", landmark: "" },

  // --- KALIMANTAN ---
  'kalimantan barat': { title: "Kalimantan Barat", subtitle: "Bumi Khatulistiwa", suku: "", rumah: "", value: "", makanan: "", fakta: "", landmark: "" },
  'kalimantan tengah': { title: "Kalimantan Tengah", subtitle: "Bumi Tambun Bungai", suku: "", rumah: "", value: "", makanan: "", fakta: "", landmark: "" },
  'kalimantan selatan': { title: "Kalimantan Selatan", subtitle: "Bumi Lambung Mangkurat", suku: "", rumah: "", value: "", makanan: "", fakta: "", landmark: "" },
  'kalimantan timur': { title: "Kalimantan Timur", subtitle: "Benua Etam", suku: "", rumah: "", value: "", makanan: "", fakta: "", landmark: "" },
  'kalimantan utara': { title: "Kalimantan Utara", subtitle: "Benuanta", suku: "", rumah: "", value: "", makanan: "", fakta: "", landmark: "" },

  // --- SULAWESI ---
  'sulawesi utara': { title: "Sulawesi Utara", subtitle: "Nyiur Melambai", suku: "", rumah: "", value: "", makanan: "", fakta: "", landmark: "" },
  'gorontalo': { title: "Gorontalo", subtitle: "Serambi Madinah", suku: "", rumah: "", value: "", makanan: "", fakta: "", landmark: "" },
  'sulawesi tengah': { title: "Sulawesi Tengah", subtitle: "Negeri Seribu Megalit", suku: "", rumah: "", value: "", makanan: "", fakta: "", landmark: "" },
  'sulawesi barat': { title: "Sulawesi Barat", subtitle: "Melayu Malaqbi", suku: "", rumah: "", value: "", makanan: "", fakta: "", landmark: "" },
  'sulawesi selatan': { title: "Sulawesi Selatan", subtitle: "Anging Mammiri", suku: "", rumah: "", value: "", makanan: "", fakta: "", landmark: "" },
  'sulawesi tenggara': { title: "Sulawesi Tenggara", subtitle: "Bumi Anoa", suku: "", rumah: "", value: "", makanan: "", fakta: "", landmark: "" },

  // --- MALUKU & PAPUA ---
  'maluku': { title: "Maluku", subtitle: "Kepulauan Rempah", suku: "", rumah: "", value: "", makanan: "", fakta: "", landmark: "" },
  'maluku utara': { title: "Maluku Utara", subtitle: "Moloku Kie Raha", suku: "", rumah: "", value: "", makanan: "", fakta: "", landmark: "" },
  'papua': { title: "Papua", subtitle: "Bumi Cenderawasih", suku: "", rumah: "", value: "", makanan: "", fakta: "", landmark: "" },
  'papua barat': { title: "Papua Barat", subtitle: "Konservasi Bahari", suku: "", rumah: "", value: "", makanan: "", fakta: "", landmark: "" },
  'papua tengah': { title: "Papua Tengah", subtitle: "Jantung Papua", suku: "", rumah: "", value: "", makanan: "", fakta: "", landmark: "" },
  'papua pegunungan': { title: "Papua Pegunungan", subtitle: "Atap Indonesia", suku: "", rumah: "", value: "", makanan: "", fakta: "", landmark: "" },
  'papua selatan': { title: "Papua Selatan", subtitle: "Bumi Anim Ha", suku: "", rumah: "", value: "", makanan: "", fakta: "", landmark: "" },
  'papua barat daya': { title: "Papua Barat Daya", subtitle: "Gerbang Raja Ampat", suku: "", rumah: "", value: "", makanan: "", fakta: "", landmark: "" }
};

