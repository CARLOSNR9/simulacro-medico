import React, { forwardRef } from "react";
import { motion } from "framer-motion";

const ResultsView = forwardRef(({ result, examTitle, questions, answers, onReset, onExportPDF }, ref) => {
    if (!result) return null;

    return (
        <main ref={ref} className="max-w-6xl mx-auto px-4 py-10">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold">Resultados: {examTitle}</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-2xl border p-6 text-center">
                    <div className="text-sm text-slate-500 uppercase font-bold tracking-wide">
                        Puntaje
                    </div>
                    <div className="text-5xl font-bold mt-2">{result.score}/100</div>
                </div>
                <div className="bg-white rounded-2xl border p-6 text-center">
                    <div className="text-sm text-slate-500 uppercase font-bold tracking-wide">
                        Correctas
                    </div>
                    <div className="text-5xl font-bold text-emerald-600 mt-2">
                        {result.correct}
                    </div>
                </div>
                <div className="bg-white rounded-2xl border p-6 text-center">
                    <div className="text-sm text-slate-500 uppercase font-bold tracking-wide">
                        Incorrectas
                    </div>
                    <div className="text-5xl font-bold text-rose-600 mt-2">
                        {result.wrong}
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl border p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Desempeño por tema</h3>
                <div className="space-y-4">
                    {Object.entries(result.byTopic).map(([topic, info]) => {
                        const pct = Math.round((info.correct / info.total) * 100);
                        return (
                            <div key={topic}>
                                <div className="flex items-center justify-between text-sm mb-1">
                                    <span className="font-medium text-slate-700">{topic}</span>
                                    <span className="text-slate-500">
                                        {info.correct}/{info.total} ({pct}%)
                                    </span>
                                </div>
                                <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${pct}%` }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                        className={`h-full ${pct >= 60 ? "bg-emerald-500" : "bg-amber-500"
                                            }`}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="bg-white rounded-2xl border p-6">
                <h3 className="text-lg font-semibold mb-6">Retroalimentación detallada</h3>
                <ol className="space-y-6 list-decimal pl-5">
                    {questions.map((q, i) => {
                        const chosen = answers[i];
                        const correct = q.correctIndex;
                        const isRight = chosen === correct;
                        return (
                            <li
                                key={q.id || i}
                                className="border-b border-slate-100 pb-6 last:border-0 last:pb-0"
                            >
                                <div className="text-xs inline-block px-2 py-1 rounded bg-slate-100 text-slate-600 mb-2 font-medium">
                                    {q.topic}
                                </div>
                                <p className="font-medium mb-3 text-lg leading-snug">{q.stem}</p>

                                <div className="grid md:grid-cols-2 gap-4 text-sm">
                                    <div
                                        className={`p-3 rounded-lg ${isRight
                                            ? "bg-emerald-50 border border-emerald-100"
                                            : "bg-rose-50 border border-rose-100"
                                            }`}
                                    >
                                        <span className="font-bold block mb-1">Tu respuesta:</span>
                                        {chosen !== null ? q.options[chosen] : "(No respondida)"}
                                    </div>
                                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                                        <span className="font-bold block mb-1">Respuesta correcta:</span>
                                        {q.options[correct]}
                                    </div>
                                </div>

                                <div
                                    className={`mt-3 text-sm p-4 rounded-lg ${isRight ? "bg-emerald-50 text-emerald-800" : "bg-slate-50 text-slate-700"
                                        }`}
                                >
                                    <span className="font-bold">📝 Explicación: </span>
                                    {isRight ? q.feedbackCorrect : q.feedbackIncorrect}
                                </div>
                            </li>
                        );
                    })}
                </ol>

                <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t">
                    <button
                        onClick={onReset}
                        className="px-6 py-3 rounded-xl border border-slate-300 font-medium hover:bg-slate-50 transition"
                    >
                        Volver al menú principal
                    </button>

                    <button
                        onClick={onExportPDF}
                        className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-200 transition"
                    >
                        Descargar Reporte PDF
                    </button>
                </div>
            </div>
        </main>
    );
});

export default ResultsView;
