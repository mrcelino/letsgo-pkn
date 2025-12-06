# 🇮🇩 Archipelago Insights

<div align="center">
  
  **Menjelajahi Jati Diri Bangsa Melalui Kepulauan Nusantara**
  
  ![Next.js](https://img.shields.io/badge/Next.js-15.1.3-black?style=flat&logo=next.js)
  ![React](https://img.shields.io/badge/React-19.2.0-blue?style=flat&logo=react)
  ![Three.js](https://img.shields.io/badge/Three.js-0.181.2-green?style=flat&logo=three.js)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)
  
</div>

---

## 📖 Tentang Proyek

**Archipelago Insights** adalah platform pembelajaran interaktif yang mengeksplorasi identitas nasional Indonesia melalui pendekatan visual dan edukatif yang modern.

### 🌟 Filosofi Nama

- **Archipelago** (Kepulauan) — Melambangkan Indonesia sebagai negara kepulauan
- **Insights** (Pemahaman) — Memberikan wawasan mendalam tentang jati diri bangsa

Konsep ini berangkat dari filosofi bahwa Indonesia, seperti kepulauan, terdiri dari bagian-bagian yang berbeda namun saling terhubung — **keseimbangan antara kemandirian dan keterhubungan dalam satu jati diri bangsa**.

---

## ✨ Fitur Utama

### 🗺️ Peta Interaktif 3D Nusantara

- Visualisasi peta Indonesia dengan teknologi **Three.js** dan **WebGL**
- Eksplorasi interaktif 38 provinsi dengan animasi 3D yang smooth
- Informasi detail setiap daerah: suku bangsa, rumah adat, fakta unik, dan kearifan lokal

### 📚 Materi Pembelajaran

- Konten edukatif tentang identitas nasional Indonesia
- Pembahasan identitas primer: suku, budaya, dan nilai luhur daerah
- Artikel eksploratif dengan perspektif budaya, sejarah, dan kuliner

### 🎯 Kuis Interaktif

- Evaluasi pemahaman melalui kuis yang engaging
- Sistem penilaian otomatis dengan feedback langsung
- Materi kuis mencakup sejarah, budaya, dan wawasan kebangsaan

### 🎨 UI/UX Modern

- Desain dark mode dengan tema "Royal Indonesia Emas"
- Animasi smooth dan responsif
- Efek visual premium dengan metallic gold aesthetic

---

## 🚀 Tech Stack

- **Framework:** Next.js 15.1.3 (App Router)
- **Language:** TypeScript 5
- **3D Graphics:** Three.js 0.181.2
- **Styling:** Tailwind CSS 4
- **Animation:** Framer Motion 12
- **Icons:** Lucide React

---

## 🛠️ Instalasi & Penggunaan

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Instalasi

```bash
# Clone repository
git clone https://github.com/mrcelino/letsgo-pkn.git
cd letsgo-pkn

# Install dependencies
npm install

# Run development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) untuk melihat hasilnya.

### Build untuk Production

```bash
npm run build
npm start
```

---

## 📁 Struktur Proyek

```
project-pkn/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── page.tsx      # Landing page
│   │   ├── layout.tsx    # Root layout
│   │   └── globals.css   # Global styles
│   └── components/       # React Components
│       ├── ThreeScene.tsx       # 3D Map Component
│       ├── LandingContent.tsx   # Hero & Content Sections
│       ├── MapOverlay.tsx       # Province Info Overlay
│       └── QuizSection.tsx      # Interactive Quiz
├── public/
│   └── indonesia.json    # GeoJSON data Indonesia
└── package.json
```

---

## 🎨 Design System

### Color Palette

- **Primary:** `#D4AF37` (Royal Gold) — Melambangkan Indonesia Emas
- **Accent:** `#E11B22` (Indonesia Red) — Semangat dan keberanian
- **Base:** `#1a1a1a` (Dark Background) — Modern & Premium

### Typography

- **Heading:** Inter, sans-serif (Bold)
- **Body:** System UI, sans-serif

---

## 📄 Lisensi

Proyek ini dibuat untuk keperluan edukasi Pendidikan Kewarganegaraan.

---

<div align="center">
  
  **🇮🇩 Bhinneka Tunggal Ika 🇮🇩**
  
  *Berbeda-beda tetapi tetap satu*
  
</div>
