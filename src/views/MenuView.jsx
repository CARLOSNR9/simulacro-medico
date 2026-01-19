import React from "react";

export default function MenuView({ exams, onStartExam }) {
    return (
        <main className="max-w-5xl mx-auto px-4 py-10">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-slate-800">Seleccione un Simulacro</h2>
                <p className="text-slate-600 mt-2">Elija el examen que desea presentar hoy</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {exams.map((exam) => (
                    <div
                        key={exam.id}
                        className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow"
                    >
                        <div className="bg-blue-50 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-4">
                            📝
                        </div>
                        <h3 className="text-xl font-bold mb-2">{exam.title}</h3>
                        <p className="text-slate-500 mb-6 flex-grow">{exam.description}</p>

                        <button
                            onClick={() => !exam.disabled && onStartExam(exam.id)}
                            disabled={exam.disabled}
                            className={`w-full px-6 py-3 rounded-xl font-semibold transition-colors shadow-sm ${exam.disabled
                                    ? "bg-slate-200 text-slate-400 cursor-not-allowed border border-slate-300"
                                    : "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200"
                                }`}
                        >
                            {exam.disabled ? "No disponible" : `Iniciar ${exam.title}`}
                        </button>
                    </div>
                ))}
            </div>
        </main>
    );
}
