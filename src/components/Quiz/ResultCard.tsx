import Link from "next/link";
import { Question } from "./quizData";
import { useState } from "react";

interface AnswerHistory {
  question: Question;
  userAnswer: any;
  isCorrect: boolean;
}

interface ResultCardProps {
  score: number;
  totalQuestions: number;
  answerHistory: AnswerHistory[];
  onRestart: () => void;
  onRetryWrong: () => void;
}

export default function ResultCard({ score, totalQuestions, answerHistory, onRestart, onRetryWrong }: ResultCardProps) {
  const [showReview, setShowReview] = useState(false);
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

  // Calculate category breakdown
  const categoryStats: Record<string, { correct: number; total: number }> = {};
  answerHistory.forEach(({ question, isCorrect }) => {
    if (!categoryStats[question.category]) {
      categoryStats[question.category] = { correct: 0, total: 0 };
    }
    categoryStats[question.category].total++;
    if (isCorrect) {
      categoryStats[question.category].correct++;
    }
  });

  const wrongAnswers = answerHistory.filter(a => !a.isCorrect);
  const correctAnswers = answerHistory.filter(a => a.isCorrect);

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in zoom-in duration-500 px-4 pb-8">
      {!showReview ? (
        <>
          {/* Score Display */}
          <div className="text-center mb-8">
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
              <div className="text-gray-400 mt-2">{score} dari {totalQuestions * 20} poin</div>
            </div>
          </div>

          {/* Category Breakdown */}
          <div className="bg-white/5 rounded-2xl p-6 mb-6 border border-white/10">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <i className="fas fa-chart-pie text-blue-400"></i>
              Hasil per Kategori
            </h3>
            <div className="space-y-3">
              {Object.entries(categoryStats).map(([category, stats]) => {
                const categoryPercentage = Math.round((stats.correct / stats.total) * 100);
                return (
                  <div key={category}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">{category}</span>
                      <span className="text-sm text-gray-400">{stats.correct}/{stats.total}</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ${categoryPercentage >= 80 ? 'bg-green-500' : categoryPercentage >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
                        style={{ width: `${categoryPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Summary */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/30">
              <div className="flex items-center gap-2 mb-2">
                <i className="fas fa-check-circle text-green-400"></i>
                <span className="font-bold text-green-400">Sudah Paham</span>
              </div>
              <div className="text-2xl font-bold mb-1">{correctAnswers.length} Soal</div>
              <div className="text-xs text-gray-400">Pertahankan pemahamanmu!</div>
            </div>

            <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/30">
              <div className="flex items-center gap-2 mb-2">
                <i className="fas fa-times-circle text-red-400"></i>
                <span className="font-bold text-red-400">Perlu Dipelajari</span>
              </div>
              <div className="text-2xl font-bold mb-1">{wrongAnswers.length} Soal</div>
              <div className="text-xs text-gray-400">Jangan khawatir, belajar lagi yuk!</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4">
            {wrongAnswers.length > 0 && (
              <button
                onClick={() => setShowReview(true)}
                className="w-full px-8 py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <i className="fas fa-list-check"></i> Review Jawaban
              </button>
            )}

            {wrongAnswers.length > 0 && (
              <button
                onClick={onRetryWrong}
                className="w-full px-8 py-4 rounded-xl bg-orange-600 text-white font-bold hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
              >
                <i className="fas fa-redo"></i> Ulangi Soal yang Salah ({wrongAnswers.length})
              </button>
            )}

            <button
              onClick={onRestart}
              className="w-full px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
            >
              <i className="fas fa-refresh"></i> Mulai dari Awal
            </button>

            <Link
              href="/"
              className="w-full px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <i className="fas fa-home"></i> Kembali ke Beranda
            </Link>
          </div>
        </>
      ) : (
        <>
          {/* Review Mode */}
          <div className="mb-6">
            <button
              onClick={() => setShowReview(false)}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-4"
            >
              <i className="fas fa-arrow-left"></i> Kembali ke Hasil
            </button>
            <h2 className="text-3xl font-heading font-bold mb-2">Review Jawaban</h2>
            <p className="text-gray-400">Pelajari kembali soal yang kamu jawab</p>
          </div>

          <div className="space-y-4">
            {answerHistory.map(({ question, userAnswer, isCorrect }, index) => (
              <div
                key={question.id}
                className={`rounded-xl p-6 border-2 ${isCorrect ? 'bg-green-500/5 border-green-500/30' : 'bg-red-500/5 border-red-500/30'}`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${isCorrect ? 'bg-green-500' : 'bg-red-500'}`}>
                    <i className={`fas ${isCorrect ? 'fa-check' : 'fa-times'} text-white text-sm`}></i>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-400 mb-1">Soal {index + 1} - {question.category}</div>
                    <h3 className="font-bold text-lg mb-2">{question.question}</h3>

                    {!isCorrect && (
                      <div className="space-y-3 mt-4">
                        <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                          <div className="text-xs text-gray-400 mb-1">Penjelasan:</div>
                          <p className="text-sm text-white/90">{question.detailedExplanation}</p>
                        </div>

                        <div className="bg-yellow-500/10 rounded-lg p-3 border border-yellow-500/30">
                          <div className="flex items-center gap-2 mb-1">
                            <i className="fas fa-lightbulb text-yellow-400 text-xs"></i>
                            <span className="text-xs text-yellow-400 font-bold">Tahukah Kamu?</span>
                          </div>
                          <p className="text-sm text-white/90 italic">{question.funFact}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex gap-4">
            {wrongAnswers.length > 0 && (
              <button
                onClick={onRetryWrong}
                className="flex-1 px-6 py-3 rounded-xl bg-orange-600 text-white font-bold hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
              >
                <i className="fas fa-redo"></i> Ulangi yang Salah
              </button>
            )}
            <button
              onClick={() => setShowReview(false)}
              className="flex-1 px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              Tutup Review
            </button>
          </div>
        </>
      )}
    </div>
  );
}
