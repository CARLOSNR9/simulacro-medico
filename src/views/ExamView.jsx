import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import QuestionGrid from "../components/QuestionGrid";

export default function ExamView({
    examTitle,
    current,
    total,
    question,
    selectedAnswer,
    isMarked,
    answers,
    marked,
    onOptionSelect,
    onNext,
    onPrev,
    onToggleMark,
    onJump,
}) {
    const [showGrid, setShowGrid] = useState(false);

    if (!question) return null;

    return (
        <main className="max-w-5xl mx-auto px-4 py-8">
            <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                    <div className="text-sm font-semibold text-blue-800 bg-blue-50 px-3 py-1 rounded-lg">
                        {examTitle}
                    </div>
                    <button
                        onClick={onToggleMark}
                        className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-sm font-medium transition-colors ${isMarked
                            ? "bg-amber-100 text-amber-700 border border-amber-200"
                            : "text-slate-500 hover:bg-slate-100 border border-transparent"
                            }`}
                    >
                        {isMarked ? "🚩 Marcada" : "🏳️ Marcar"}
                    </button>
                    <button
                        onClick={() => setShowGrid(true)}
                        className="p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                        title="Ver todas las preguntas"
                    >
                        👁️‍🗨️
                    </button>
                </div>

                <div className="text-sm text-slate-600 w-full sm:w-auto text-right sm:text-left mt-2 sm:mt-0">
                    Pregunta {current + 1} de {total}
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={question.id || current}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className={`bg-white rounded-3xl shadow-sm border p-4 sm:p-6 relative transition-colors ${isMarked ? "border-amber-300" : "border-slate-200"
                        }`}
                >
                    {/* stem */}
                    <h3 className="text-lg sm:text-xl font-semibold mb-6 leading-relaxed text-slate-800">
                        {question.stem}
                    </h3>

                    <div className="space-y-3">
                        {question.options.map((opt, idx) => {
                            const selected = selectedAnswer === idx;
                            return (
                                <button
                                    key={idx}
                                    onClick={() => onOptionSelect(idx)}
                                    className={`w-full text-left border rounded-xl px-4 py-3 transition-all active:scale-[0.99] ${selected
                                        ? "border-blue-600 bg-blue-50 ring-1 ring-blue-600"
                                        : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                                        }`}
                                >
                                    <span className="font-bold mr-2 text-slate-500">
                                        {String.fromCharCode(65 + idx)}.
                                    </span>{" "}
                                    {opt}
                                </button>
                            );
                        })}
                    </div>

                    <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100 gap-4">
                        <button
                            onClick={onPrev}
                            disabled={current === 0}
                            className="flex-1 sm:flex-none px-5 py-3 sm:py-2.5 rounded-xl border border-slate-300 text-slate-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50 transition active:scale-[0.98]"
                        >
                            ← Anterior
                        </button>
                        <button
                            onClick={onNext}
                            disabled={selectedAnswer === null}
                            className="flex-1 sm:flex-none px-6 py-3 sm:py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition active:scale-[0.98]"
                        >
                            {current === total - 1 ? "Finalizar" : "Siguiente →"}
                        </button>
                    </div>
                </motion.div>
            </AnimatePresence>

            <QuestionGrid
                isOpen={showGrid}
                onClose={() => setShowGrid(false)}
                total={total}
                current={current}
                answers={answers}
                marked={marked}
                onJump={onJump}
            />
        </main>
    );
}
