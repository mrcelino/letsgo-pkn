import { Question } from "../quizData";

interface OpinionScenarioProps {
  question: Question;
  onAnswer: (answer: number) => void;
  selectedAnswer: number | null;
  isAnswered: boolean;
}

export default function OpinionScenario({ question, onAnswer, selectedAnswer, isAnswered }: OpinionScenarioProps) {
  return (
    <div className="space-y-6">
      <div className="bg-blue-900/20 border border-blue-500/30 p-6 rounded-xl mb-6">
        <div className="flex items-center gap-3 mb-2 text-blue-400">
            <i className="fas fa-info-circle"></i>
            <span className="font-bold text-sm uppercase tracking-wider">Studi Kasus</span>
        </div>
        <p className="text-lg italic text-gray-300">"{question.question}"</p>
      </div>

      <div className="grid gap-4">
        {question.options?.map((option, index) => {
            let btnClass = "w-full text-left p-5 rounded-xl border transition-all duration-300 group relative overflow-hidden ";
            
            if (!isAnswered) {
                if (selectedAnswer === index) {
                    btnClass += "bg-blue-600 text-white border-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.5)]";
                } else {
                    btnClass += "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/30";
                }
            } else {
                if (index === question.correctAnswer) {
                    btnClass += "bg-green-500/20 border-green-500 text-green-400 ring-1 ring-green-500";
                } else if (index === selectedAnswer) {
                    btnClass += "bg-red-500/20 border-red-500 text-red-400 ring-1 ring-red-500";
                } else {
                    btnClass += "bg-white/5 border-white/10 opacity-50";
                }
            }

            return (
            <button
                key={index}
                onClick={() => !isAnswered && onAnswer(index)}
                disabled={isAnswered}
                className={btnClass}
            >
                <div className="flex items-start gap-4">
                    <div className={`mt-1 min-w-[24px] h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                        !isAnswered && selectedAnswer === index ? 'border-white text-white' : 'border-gray-500 text-gray-500'
                    }`}>
                        {String.fromCharCode(65 + index)}
                    </div>
                    <span className="font-medium">{option}</span>
                </div>
            </button>
            );
        })}
      </div>
    </div>
  );
}
