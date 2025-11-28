"use client";

import { useState } from "react";

const quizData = [
    { question: "Apa semboyan negara Indonesia yang tertulis pada pita Burung Garuda?", options: ["Tut Wuri Handayani", "Bhinneka Tunggal Ika", "Eka Prasetya Pancakarsa", "Satya Darma Pramuka"], correct: 1 },
    { question: "Identitas nasional Indonesia yang berbentuk hukum dasar tertulis adalah...", options: ["Pancasila", "UUD 1945", "Tap MPR", "Peraturan Presiden"], correct: 1 },
    { question: "Lagu kebangsaan Indonesia Raya diciptakan oleh...", options: ["Ismail Marzuki", "W.R. Supratman", "H. Mutahar", "C. Simanjuntak"], correct: 1 },
    { question: "Berikut ini yang BUKAN merupakan unsur identitas nasional adalah...", options: ["Bendera Negara", "Bahasa Indonesia", "Lagu Kebangsaan", "Mata Uang Asing"], correct: 3 },
    { question: "Pancasila sebagai dasar negara berfungsi sebagai...", options: ["Pandangan hidup bangsa", "Alat kekuasaan", "Dokumen sejarah semata", "Simbol militer"], correct: 0 }
];

export default function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleAnswer = (index: number) => {
    if (selectedOption !== null) return;

    setSelectedOption(index);
    const correct = index === quizData[currentQuestion].correct;
    setIsCorrect(correct);

    if (correct) setScore(score + 20);
  };

  const nextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
        setIsCorrect(null);
    } else {
        setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  return (
    <section id="kuis" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/10 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-8 md:px-16 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-10">
                <h2 className="font-heading text-4xl font-bold mb-2">Uji Pemahaman</h2>
                <p className="text-gray-400">Seberapa jauh kamu mengenal identitas bangsamu?</p>
            </div>

            <div className="glass-card rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 relative text-left">
                {showResult ? (
                    <div className="text-center py-8 animate-in fade-in zoom-in duration-500">
                        <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(225,27,34,0.6)]">
                            <i className="fas fa-trophy text-4xl text-white"></i>
                        </div>
                        <h3 className="text-3xl font-bold mb-2">Selamat!</h3>
                        <div className="text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-8">
                            {score}<span className="text-2xl text-gray-500">/100</span>
                        </div>
                        <button onClick={restartQuiz} className="px-8 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition-colors text-white">
                            Coba Lagi
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="absolute top-0 left-0 w-full h-2 bg-gray-800 rounded-t-3xl overflow-hidden">
                            <div 
                                className="h-full bg-gradient-to-r from-red-500 to-rose-600 transition-all duration-500"
                                style={{ width: `${((currentQuestion) / quizData.length) * 100}%` }}
                            ></div>
                        </div>

                        <div className="flex justify-between items-center mb-8">
                            <span className="text-sm font-mono text-red-400 bg-red-400/10 px-3 py-1 rounded-full">Soal {currentQuestion + 1}/{quizData.length}</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-8 leading-snug min-h-[100px]">
                            {quizData[currentQuestion].question}
                        </h3>
                        <div className="space-y-4">
                            {quizData[currentQuestion].options.map((opt, index) => {
                                let btnClass = "w-full text-left p-4 rounded-xl border transition-all duration-200 flex justify-between items-center group ";
                                if (selectedOption === null) {
                                    btnClass += "bg-white/5 border-white/10 hover:bg-white/10";
                                } else {
                                    if (index === quizData[currentQuestion].correct) {
                                        btnClass += "bg-green-500/20 border-green-500 text-green-400 ring-2 ring-green-500";
                                    } else if (index === selectedOption) {
                                        btnClass += "bg-red-500/20 border-red-500 text-red-400 ring-2 ring-red-500";
                                    } else {
                                        btnClass += "bg-white/5 border-white/10 opacity-50";
                                    }
                                }

                                return (
                                    <button 
                                        key={index} 
                                        onClick={() => handleAnswer(index)}
                                        disabled={selectedOption !== null}
                                        className={btnClass}
                                    >
                                        <span>{opt}</span>
                                        <span className={`w-4 h-4 rounded-full border ${selectedOption === index ? 'bg-white border-transparent' : 'border-gray-500 group-hover:border-white'}`}></span>
                                    </button>
                                );
                            })}
                        </div>
                        <div className="mt-8 flex justify-end h-12">
                            {selectedOption !== null && (
                                <button onClick={nextQuestion} className="px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors flex items-center gap-2 animate-in fade-in slide-in-from-right-4">
                                    Selanjutnya <i className="fas fa-arrow-right"></i>
                                </button>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    </section>
  );
}
