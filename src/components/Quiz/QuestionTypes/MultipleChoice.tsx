import { Question } from "../quizData";

interface MultipleChoiceProps {
  question: Question;
  onAnswer: (answer: number) => void;
  selectedAnswer: number | null;
  isAnswered: boolean;
}

export default function MultipleChoice({ question, onAnswer, selectedAnswer, isAnswered }: MultipleChoiceProps) {
  return (
    <div className="space-y-4">
      {question.options?.map((option, index) => {
        let btnClass = "w-full text-left p-5 rounded-xl border transition-all duration-300 flex justify-between items-center group relative overflow-hidden ";
        
        if (!isAnswered) {
            if (selectedAnswer === index) {
                btnClass += "bg-white/10 border-red-500 ring-1 ring-red-500";
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
            <span className="relative z-10 font-medium text-lg">{option}</span>
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                isAnswered && index === question.correctAnswer ? 'border-green-500 bg-green-500' : 
                isAnswered && index === selectedAnswer ? 'border-red-500 bg-red-500' :
                selectedAnswer === index ? 'border-red-500 bg-red-500' : 'border-gray-500 group-hover:border-white'
            }`}>
                {(isAnswered && index === question.correctAnswer) && <i className="fas fa-check text-white text-xs"></i>}
                {(isAnswered && index === selectedAnswer && index !== question.correctAnswer) && <i className="fas fa-times text-white text-xs"></i>}
            </div>
          </button>
        );
      })}
    </div>
  );
}
