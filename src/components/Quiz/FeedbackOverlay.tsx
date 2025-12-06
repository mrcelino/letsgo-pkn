import { Question } from "./quizData";

interface FeedbackOverlayProps {
    isCorrect: boolean;
    question: Question;
    onNext: () => void;
}

export default function FeedbackOverlay({ isCorrect, question, onNext }: FeedbackOverlayProps) {
    return (
        <>
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity" onClick={onNext} />
            
            {/* Main Sheet */}
            <div className={`fixed bottom-0 left-0 w-full z-50 transition-transform duration-500 transform translate-y-0
                rounded-t-[2.5rem] shadow-[0_-10px_60px_rgba(0,0,0,0.8)] border-t border-white/20
                flex flex-col max-h-[75vh] w-full
                ${isCorrect 
                    ? 'bg-gradient-to-b from-green-900/95 via-green-900/98 to-green-950' 
                    : 'bg-gradient-to-b from-red-900/95 via-red-900/98 to-red-950'
                } backdrop-blur-2xl`}>
                
                {/* Drag Handle (Visual only) */}
                <div className="w-full flex justify-center pt-4 pb-2 flex-shrink-0 cursor-pointer group" onClick={onNext}>
                    <div className="w-16 h-1.5 rounded-full bg-white/20 group-hover:bg-white/40 transition-colors shadow-sm" />
                </div>

                <div className="container mx-auto max-w-3xl px-6 pb-6 flex flex-col overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center gap-4 py-2 flex-shrink-0">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ring-2 ring-white/20 ${isCorrect ? 'bg-green-500' : 'bg-red-500'}`}>
                            <i className={`fas ${isCorrect ? 'fa-check' : 'fa-times'} text-white text-xl`}></i>
                        </div>
                        <div>
                            <h3 className={`text-2xl font-bold ${isCorrect ? 'text-green-300' : 'text-red-300'}`}>
                                {isCorrect ? 'Jawaban Benar!' : 'Jawaban Kurang Tepat'}
                            </h3>
                            <p className="text-white/60 text-sm font-medium">
                                {isCorrect ? 'Hebat! Lanjutkan progresmu.' : 'Jangan menyerah, pelajari penjelasannya.'}
                            </p>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px w-full bg-white/10 my-4 flex-shrink-0" />

                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto custom-scrollbar space-y-4 pr-1 mb-2">
                        {/* Main Status Text */}
                        <div className="">
                            <h4 className="text-white text-xl font-semibold mb-2 leading-relaxed">
                                {isCorrect ? question.explanation : question.correction}
                            </h4>
                            {!isCorrect && (
                                <p className="text-white/70 text-base italic border-l-4 border-white/20 pl-4 py-1">
                                    "{question.reason}"
                                </p>
                            )}
                        </div>

                        {/* Detailed Explanation */}
                        <div className="bg-black/20 rounded-2xl p-5 border border-white/10 hover:bg-black/30 transition-all active:scale-[0.99]">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-300">
                                    <i className="fas fa-book-open text-sm"></i>
                                </span>
                                <span className="font-bold text-xs text-blue-300 uppercase tracking-widest">Penjelasan Lengkap</span>
                            </div>
                            <p className="text-white/90 text-sm leading-relaxed text-justify opacity-90">
                                {question.detailedExplanation}
                            </p>
                        </div>

                        {/* Fun Fact */}
                        <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/5 rounded-2xl p-5 border border-yellow-500/20 hover:border-yellow-500/30 transition-all active:scale-[0.99]">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-300">
                                    <i className="fas fa-lightbulb text-sm"></i>
                                </span>
                                <span className="font-bold text-xs text-yellow-300 uppercase tracking-widest">Tahukah Kamu?</span>
                            </div>
                            <p className="text-white/90 text-sm leading-relaxed italic opacity-90">
                                {question.funFact}
                            </p>
                        </div>
                    </div>

                    {/* Footer / Next Button */}
                    <div className="pt-2 flex-shrink-0">
                        <button
                            onClick={onNext}
                            className={`w-full py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] active:scale-[0.95] shadow-xl flex items-center justify-center gap-3 ${isCorrect
                                    ? 'bg-white text-green-900 hover:bg-green-50'
                                    : 'bg-white text-red-900 hover:bg-red-50'
                                }`}
                        >
                            <span>Lanjut</span>
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.3);
                }
            `}</style>
        </>
    );
}
