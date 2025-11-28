export type QuestionType = 'multiple-choice' | 'image-selection' | 'true-false' | 'opinion' | 'drag-drop';

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
    reason: "Semboyan ini menggambarkan persatuan dan kesatuan Bangsa dan Negara Kesatuan Republik Indonesia."
  },
  {
    id: 2,
    type: 'true-false',
    question: "Identitas nasional hanya mencakup simbol-simbol negara seperti bendera dan lagu kebangsaan.",
    correctAnswer: false,
    explanation: "Benar! Identitas nasional lebih luas dari sekadar simbol.",
    correction: "Pernyataan tersebut Salah.",
    reason: "Identitas nasional juga mencakup nilai-nilai, budaya, adat istiadat, dan karakter bangsa yang membedakan dengan bangsa lain."
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
    reason: "Mengikuti upacara adalah bentuk penghormatan kepada jasa pahlawan dan wujud disiplin sebagai warga negara."
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: "Lagu kebangsaan Indonesia Raya diciptakan oleh...",
    options: ["Ismail Marzuki", "W.R. Supratman", "H. Mutahar", "C. Simanjuntak"],
    correctAnswer: 1,
    explanation: "Benar! Wage Rudolf Supratman adalah pencipta lagu Indonesia Raya.",
    correction: "Penciptanya adalah W.R. Supratman.",
    reason: "Lagu ini pertama kali diperdengarkan pada Kongres Pemuda II tahun 1928."
  },
  {
    id: 5,
    type: 'true-false',
    question: "Pancasila adalah dasar negara yang menjadi sumber dari segala sumber hukum di Indonesia.",
    correctAnswer: true,
    explanation: "Tepat! Pancasila adalah landasan fundamental negara kita.",
    correction: "Pernyataan tersebut Benar.",
    reason: "Pancasila berkedudukan sebagai staatsfundamentalnorm (norma fundamental negara)."
  }
];
