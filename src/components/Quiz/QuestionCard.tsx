import { Question } from "./quizData";
import MultipleChoice from "./QuestionTypes/MultipleChoice";
import TrueFalse from "./QuestionTypes/TrueFalse";
import OpinionScenario from "./QuestionTypes/OpinionScenario";

interface QuestionCardProps {
  question: Question;
  onAnswer: (answer: any) => void;
  selectedAnswer: any;
  isAnswered: boolean;
}

export default function QuestionCard({ question, onAnswer, selectedAnswer, isAnswered }: QuestionCardProps) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Question Header */}
      {question.type !== 'opinion' && (
        <h2 className="text-2xl md:text-4xl font-bold mb-8 leading-snug text-center font-heading">
            {question.question}
        </h2>
      )}

      {/* Dynamic Question Body */}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        {question.type === 'multiple-choice' && (
            <MultipleChoice 
                question={question} 
                onAnswer={onAnswer} 
                selectedAnswer={selectedAnswer} 
                isAnswered={isAnswered} 
            />
        )}
        {question.type === 'true-false' && (
            <TrueFalse 
                question={question} 
                onAnswer={onAnswer} 
                selectedAnswer={selectedAnswer} 
                isAnswered={isAnswered} 
            />
        )}
        {question.type === 'opinion' && (
            <OpinionScenario 
                question={question} 
                onAnswer={onAnswer} 
                selectedAnswer={selectedAnswer} 
                isAnswered={isAnswered} 
            />
        )}
        {/* Add other types here as needed */}
      </div>
    </div>
  );
}
