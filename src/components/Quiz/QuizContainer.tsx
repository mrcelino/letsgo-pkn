"use client";

import { useState } from "react";
import { quizData, Question } from "./quizData";
import QuestionCard from "./QuestionCard";
import FeedbackOverlay from "./FeedbackOverlay";
import ResultCard from "./ResultCard";
import { useSound } from "@/hooks/useSound";

interface AnswerHistory {
  question: Question;
  userAnswer: any;
  isCorrect: boolean;
}

export default function QuizContainer() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<any>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [answerHistory, setAnswerHistory] = useState<AnswerHistory[]>([]);
  const [questionsToShow, setQuestionsToShow] = useState<Question[]>(quizData);

  const { playSuccess, playError } = useSound();

  const currentQuestion = questionsToShow[currentQuestionIndex];

  const handleAnswer = (answer: any) => {
    if (isAnswered) return;

    setSelectedAnswer(answer);
    setIsAnswered(true);

    const correct = answer === currentQuestion.correctAnswer;
    setIsCorrect(correct);

    // Play sound effect
    if (correct) {
      playSuccess();
      setScore((prev) => prev + 20); // Assuming equal weight
    } else {
      playError();
    }

    // Record answer in history
    setAnswerHistory((prev) => [
      ...prev,
      {
        question: currentQuestion,
        userAnswer: answer,
        isCorrect: correct,
      },
    ]);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questionsToShow.length - 1) {
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
    setAnswerHistory([]);
    setQuestionsToShow(quizData);
  };

  const handleRetryWrong = () => {
    // Filter questions that were answered incorrectly
    const wrongQuestions = answerHistory
      .filter((h) => !h.isCorrect)
      .map((h) => h.question);

    if (wrongQuestions.length === 0) return;

    setQuestionsToShow(wrongQuestions);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setIsCorrect(false);
    setAnswerHistory([]);
  };

  if (showResult) {
    return (
      <div className="w-full max-w-5xl mx-auto px-6 pb-32 pt-10">
        <ResultCard
          score={score}
          totalQuestions={questionsToShow.length}
          answerHistory={answerHistory}
          onRestart={handleRestart}
          onRetryWrong={handleRetryWrong}
        />
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto px-6 pb-32 pt-10">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/10">
        <div
          className="h-full bg-red-600 transition-all duration-500 ease-out"
          style={{ width: `${((currentQuestionIndex + 1) / questionsToShow.length) * 100}%` }}
        ></div>
      </div>

      {/* Header Stats */}
      <div className="flex justify-between items-center mb-12 text-sm font-mono text-gray-400">
        <span>SOAL {currentQuestionIndex + 1} / {questionsToShow.length}</span>
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
