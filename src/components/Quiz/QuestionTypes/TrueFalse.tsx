import { Question } from "../quizData";

interface TrueFalseProps {
  question: Question;
  onAnswer: (answer: boolean) => void;
  selectedAnswer: boolean | null;
  isAnswered: boolean;
}

export default function TrueFalse({ question, onAnswer, selectedAnswer, isAnswered }: TrueFalseProps) {
  return (
    <div className="grid grid-cols-2 gap-6">
      {[true, false].map((val) => {
        let btnClass = "h-40 rounded-2xl border-2 flex flex-col items-center justify-center gap-4 transition-all duration-300 group relative overflow-hidden ";
        const isTrue = val === true;
        const label = isTrue ? "BENAR" : "SALAH";
        const icon = isTrue ? "fa-check-circle" : "fa-times-circle";
        const baseColor = isTrue ? "text-green-500" : "text-red-500";

        if (!isAnswered) {
            if (selectedAnswer === val) {
                btnClass += isTrue ? "bg-green-500/20 border-green-500" : "bg-red-500/20 border-red-500";
            } else {
                btnClass += "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/30";
            }
        } else {
            if (val === question.correctAnswer) {
                btnClass += "bg-green-500/20 border-green-500 opacity-100";
            } else if (val === selectedAnswer) {
                btnClass += "bg-red-500/20 border-red-500 opacity-100";
            } else {
                btnClass += "bg-white/5 border-white/10 opacity-30";
            }
        }

        return (
          <button
            key={label}
            onClick={() => !isAnswered && onAnswer(val)}
            disabled={isAnswered}
            className={btnClass}
          >
            <i className={`fas ${icon} text-5xl ${!isAnswered ? baseColor : (val === question.correctAnswer ? 'text-green-500' : 'text-red-500')}`}></i>
            <span className="font-heading font-bold text-2xl tracking-wider">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
