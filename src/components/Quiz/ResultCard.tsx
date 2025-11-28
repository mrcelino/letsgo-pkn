import Link from "next/link";

interface ResultCardProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export default function ResultCard({ score, totalQuestions, onRestart }: ResultCardProps) {
  const percentage = Math.round((score / (totalQuestions * 20)) * 100); // Assuming 20 points per question
  
  let message = "";
  let subMessage = "";
  let icon = "";
  let colorClass = "";

  if (percentage >= 80) {
    message = "Luar Biasa!";
    subMessage = "Kamu memiliki pemahaman yang sangat baik tentang identitas nasional.";
    icon = "fa-trophy";
    colorClass = "text-yellow-400";
  } else if (percentage >= 60) {
    message = "Bagus!";
    subMessage = "Pemahamanmu sudah cukup baik, terus tingkatkan!";
    icon = "fa-star";
    colorClass = "text-blue-400";
  } else {
    message = "Terus Belajar!";
    subMessage = "Jangan menyerah, pelajari lagi materi tentang identitas nasional.";
    icon = "fa-book-reader";
    colorClass = "text-red-400";
  }

  return (
    <div className="max-w-2xl mx-auto text-center animate-in fade-in zoom-in duration-500">
      <div className={`w-32 h-32 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-8 ring-4 ring-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]`}>
        <i className={`fas ${icon} text-6xl ${colorClass} drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]`}></i>
      </div>

      <h2 className="text-5xl font-heading font-bold mb-2">{message}</h2>
      <p className="text-xl text-gray-400 mb-8">{subMessage}</p>

      <div className="bg-white/5 rounded-2xl p-8 mb-10 border border-white/10">
        <div className="text-sm text-gray-400 uppercase tracking-widest mb-2">Skor Akhir</div>
        <div className="text-7xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
            {percentage}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button 
            onClick={onRestart}
            className="px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
        >
            <i className="fas fa-redo"></i> Coba Lagi
        </button>
        <Link 
            href="/"
            className="px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
        >
            <i className="fas fa-home"></i> Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
