"use client";

import { useState } from "react";
import { quizData } from "./quizData";
import QuestionCard from "./QuestionCard";
import FeedbackOverlay from "./FeedbackOverlay";
import ResultCard from "./ResultCard";

export default function QuizContainer() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<any>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const currentQuestion = quizData[currentQuestionIndex];

  const handleAnswer = (answer: any) => {
    if (isAnswered) return;

    setSelectedAnswer(answer);
    setIsAnswered(true);

    const correct = answer === currentQuestion.correctAnswer;
    setIsCorrect(correct);

    if (correct) {
        setScore((prev) => prev + 20); // Assuming equal weight
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizData.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
        setSelectedAnswer(null);
        setIsAnswered(false);
        setIsCorrect(false);
    } else {
        setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setIsCorrect(false);
  };

  if (showResult) {
    return <ResultCard score={score} totalQuestions={quizData.length} onRestart={handleRestart} />;
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto px-6 pb-32 pt-10">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-white/10">
            <div 
                className="h-full bg-red-600 transition-all duration-500 ease-out"
                style={{ width: `${((currentQuestionIndex + 1) / quizData.length) * 100}%` }}
            ></div>
        </div>

        {/* Header Stats */}
        <div className="flex justify-between items-center mb-12 text-sm font-mono text-gray-400">
            <span>SOAL {currentQuestionIndex + 1} / {quizData.length}</span>
            <span>SKOR: {score}</span>
        </div>

        <QuestionCard 
            question={currentQuestion}
            onAnswer={handleAnswer}
            selectedAnswer={selectedAnswer}
            isAnswered={isAnswered}
        />

        {isAnswered && (
            <FeedbackOverlay 
                isCorrect={isCorrect} 
                question={currentQuestion} 
                onNext={handleNext} 
            />
        )}
    </div>
  );
}
