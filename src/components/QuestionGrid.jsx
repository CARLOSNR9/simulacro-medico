import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function QuestionGrid({
    isOpen,
    onClose,
    total,
    current,
    answers,
    marked,
    onJump
}) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        className="relative bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[80vh] flex flex-col overflow-hidden"
                    >
                        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                            <h3 className="font-bold text-lg">Navegador de Preguntas</h3>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-slate-100 rounded-full text-slate-500"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="p-6 overflow-y-auto grid grid-cols-5 sm:grid-cols-8 gap-3">
                            {Array.from({ length: total }).map((_, idx) => {
                                const isAnswered = answers[idx] !== null && answers[idx] !== undefined;
                                const isMarked = marked.includes(idx);
                                const isCurrent = current === idx;

                                // Priority: Current > Marked > Answered > Default
                                let bgClass = "bg-slate-100 text-slate-600 hover:bg-slate-200";

                                if (isCurrent) {
                                    bgClass = "ring-2 ring-blue-600 ring-offset-2 bg-blue-50 text-blue-700 font-bold";
                                } else if (isMarked) {
                                    bgClass = "bg-amber-100 text-amber-700 border border-amber-300";
                                } else if (isAnswered) {
                                    bgClass = "bg-emerald-100 text-emerald-700 border border-emerald-200";
                                }

                                return (
                                    <button
                                        key={idx}
                                        onClick={() => {
                                            onJump(idx);
                                            onClose();
                                        }}
                                        className={`aspect-square rounded-lg flex items-center justify-center text-sm transition-all ${bgClass}`}
                                    >
                                        {idx + 1}
                                        {isMarked && <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-amber-500 rounded-full" />}
                                    </button>
                                );
                            })}
                        </div>

                        <div className="p-4 bg-slate-50 border-t border-slate-100 text-xs text-slate-500 flex justify-center gap-4">
                            <div className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-emerald-100 border border-emerald-200" /> Respondida</div>
                            <div className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-amber-100 border border-amber-300" /> Marcada</div>
                            <div className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-slate-100" /> Pendiente</div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
