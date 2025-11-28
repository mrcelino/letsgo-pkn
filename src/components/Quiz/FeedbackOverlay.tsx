import { Question } from "./quizData";

interface FeedbackOverlayProps {
  isCorrect: boolean;
  question: Question;
  onNext: () => void;
}

export default function FeedbackOverlay({ isCorrect, question, onNext }: FeedbackOverlayProps) {
  return (
    <div className={`fixed bottom-0 left-0 w-full p-6 md:p-8 z-50 transition-transform duration-500 transform translate-y-0 ${
        isCorrect ? 'bg-green-900/90 border-t-4 border-green-500' : 'bg-red-900/90 border-t-4 border-red-500'
    } backdrop-blur-xl shadow-[0_-10px_40px_rgba(0,0,0,0.5)]`}>
      <div className="container mx-auto max-w-4xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isCorrect ? 'bg-green-500' : 'bg-red-500'}`}>
                    <i className={`fas ${isCorrect ? 'fa-check' : 'fa-times'} text-white`}></i>
                </div>
                <h3 className={`text-xl font-bold ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                    {isCorrect ? 'Jawaban Benar!' : 'Jawaban Kurang Tepat'}
                </h3>
            </div>
            
            <p className="text-white text-lg font-medium mb-1">
                {isCorrect ? question.explanation : question.correction}
            </p>
            {!isCorrect && (
                <p className="text-white/70 text-sm italic">
                    {question.reason}
                </p>
            )}
        </div>

        <button 
            onClick={onNext}
            className={`px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 whitespace-nowrap ${
                isCorrect 
                ? 'bg-white text-green-900 hover:bg-green-50' 
                : 'bg-white text-red-900 hover:bg-red-50'
            }`}
        >
            Lanjut <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
