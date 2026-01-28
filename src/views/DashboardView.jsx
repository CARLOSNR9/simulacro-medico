import React, { useEffect } from "react";
import { useExamHistory } from "../hooks/useExamHistory";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function DashboardView({ user, onBack }) {
    const { history, loading, getHistory, stats } = useExamHistory();

    useEffect(() => {
        if (user?.uid) {
            getHistory(user.uid);
        }
    }, [user, getHistory]);

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center text-slate-500">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    // Preparar datos para la gráfica (invertir para que vaya de antiguo a nuevo)
    const chartData = [...history].reverse().map(item => ({
        name: new Date(item.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
        score: item.score
    }));

    return (
        <main className="max-w-6xl mx-auto px-4 py-8 animate-fade-in">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
                <button
                    onClick={onBack}
                    className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                >
                    <span className="text-2xl">←</span>
                </button>
                <div>
                    <h2 className="text-3xl font-bold text-slate-800">Tu Progreso</h2>
                    <p className="text-slate-500">Estadísticas de entrenamiento</p>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Simulacros Realizados</p>
                    <p className="text-4xl font-bold text-blue-600 mt-2">{stats.totalExams}</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Promedio General</p>
                    <p className={`text-4xl font-bold mt-2 ${stats.averageScore >= 60 ? 'text-green-600' : 'text-amber-500'}`}>
                        {stats.averageScore}%
                    </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Mejor Desempeño</p>
                    <p className="text-4xl font-bold text-purple-600 mt-2">
                        {stats.bestExam ? `${stats.bestExam.score}%` : '-'}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                        {stats.bestExam ? new Date(stats.bestExam.date).toLocaleDateString() : ''}
                    </p>
                </div>
            </div>

            {/* Chart Section */}
            {history.length > 0 && (
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-8">
                    <h3 className="text-lg font-bold text-slate-700 mb-6">Evolución de Puntaje</h3>
                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                                <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#64748B' }} axisLine={false} tickLine={false} dy={10} />
                                <YAxis domain={[0, 100]} tick={{ fontSize: 12, fill: '#64748B' }} axisLine={false} tickLine={false} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="score"
                                    stroke="#2563EB"
                                    strokeWidth={3}
                                    dot={{ r: 4, fill: '#2563EB', strokeWidth: 2, stroke: '#fff' }}
                                    activeDot={{ r: 6 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            )}

            {/* History Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100">
                    <h3 className="text-lg font-bold text-slate-700">Historial Detallado</h3>
                </div>
                {history.length === 0 ? (
                    <div className="p-8 text-center text-slate-500">
                        No has realizado ningún simulacro todavía.
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                                <tr>
                                    <th className="px-6 py-3 font-semibold">Fecha</th>
                                    <th className="px-6 py-3 font-semibold">Examen</th>
                                    <th className="px-6 py-3 font-semibold">Puntaje</th>
                                    <th className="px-6 py-3 font-semibold">Resultado</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {history.map((item) => (
                                    <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 text-sm text-slate-600">
                                            {new Date(item.date).toLocaleDateString()}
                                            <span className="block text-xs text-slate-400">
                                                {new Date(item.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-slate-800">
                                            {item.examTitle || "Simulacro Genérico"}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${item.score >= 60 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                                }`}>
                                                {item.score}%
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-500">
                                            {item.correct} / {item.total} aciertos
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </main>
    );
}
