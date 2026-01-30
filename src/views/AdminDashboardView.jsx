import React, { useEffect, useState } from "react";
import { AdminService } from "../services/adminService";
import {
    LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';

export default function AdminDashboardView({ user, onBack }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('overview'); // overview, users, activity

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        setLoading(true);
        try {
            const stats = await AdminService.getDashboardStats();
            setData(stats);
        } catch (err) {
            setError("Error al cargar los datos del dashboard.");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center text-slate-500 flex-col gap-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
                <p>Cargando datos del sistema...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-8 text-center">
                <p className="text-red-500 mb-4">{error}</p>
                <button onClick={onBack} className="text-indigo-600 underline">Volver</button>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-slate-50 pb-12">
            {/* Navbar Admin */}
            <div className="bg-slate-900 text-white px-6 py-4 shadow-md sticky top-0 z-10">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <span className="text-2xl">🛡️</span>
                        <div>
                            <h1 className="font-bold text-lg leading-tight">Panel de Administración</h1>
                            <p className="text-xs text-slate-400">Simulacro Médico</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={loadData}
                            className="text-sm bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg transition-colors border border-slate-700"
                        >
                            ↻ Actualizar
                        </button>
                        <button
                            onClick={onBack}
                            className="text-sm bg-indigo-600 hover:bg-indigo-700 px-4 py-1.5 rounded-lg font-medium transition-colors"
                        >
                            Salir del Panel
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">

                {/* Tabs */}
                <div className="flex gap-2 mb-8 border-b border-slate-200">
                    <button
                        onClick={() => setActiveTab('overview')}
                        className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${activeTab === 'overview' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
                    >
                        Visión General
                    </button>
                    <button
                        onClick={() => setActiveTab('users')}
                        className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${activeTab === 'users' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
                    >
                        Ranking de Usuarios
                    </button>
                    <button
                        onClick={() => setActiveTab('activity')}
                        className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${activeTab === 'activity' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
                    >
                        Registro de Actividad
                    </button>
                </div>

                {/* Content */}
                {activeTab === 'overview' && (
                    <div className="animate-fade-in space-y-6">
                        {/* KPI Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <KpiCard title="Usuarios Totales" value={data.kpi.totalUsers} icon="👥" color="blue" />
                            <KpiCard title="Sesiones Activas" value={data.kpi.activeSessions} icon="🟢" color="emerald" />
                            <KpiCard title="Simulacros Realizados" value={data.kpi.totalAttempts} icon="📝" color="purple" />
                            <KpiCard title="Promedio Global" value={`${data.kpi.avgGlobalScore}%`} icon="⭐" color="amber" />
                        </div>

                        {/* Charts */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                <h3 className="font-bold text-slate-700 mb-4">Actividad (Últimos 7 días)</h3>
                                <div className="h-64">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={data.activityChart}>
                                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                            <XAxis dataKey="date" tickFormatter={(v) => new Date(v).getDate()} />
                                            <YAxis />
                                            <Tooltip
                                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                                labelFormatter={(v) => new Date(v).toLocaleDateString()}
                                            />
                                            <Legend />
                                            <Bar dataKey="sessions" name="Sesiones" fill="#6366f1" radius={[4, 4, 0, 0]} />
                                            <Bar dataKey="exams" name="Exámenes" fill="#10b981" radius={[4, 4, 0, 0]} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                <h3 className="font-bold text-slate-700 mb-4">Top 5 Usuarios (Puntaje Promedio)</h3>
                                <div className="space-y-4">
                                    {data.users.slice(0, 5).map((u, i) => (
                                        <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${i === 0 ? 'bg-amber-100 text-amber-700' : 'bg-slate-200 text-slate-600'}`}>
                                                    {i + 1}
                                                </div>
                                                <div>
                                                    <p className="font-medium text-sm text-slate-800">{u.email}</p>
                                                    <p className="text-xs text-slate-500">{u.locations || 'Ubicación desconocida'}</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-bold text-indigo-600">{u.avgScore}%</div>
                                                <div className="text-xs text-slate-400">{u.attempts} exámenes</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'users' && (
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden animate-fade-in">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-slate-50 text-slate-500 uppercase text-xs font-semibold">
                                    <tr>
                                        <th className="px-6 py-4">Usuario</th>
                                        <th className="px-6 py-4">Última Conexión</th>
                                        <th className="px-6 py-4">Ubicación / Dispositivo</th>
                                        <th className="px-6 py-4 text-center">Exámenes</th>
                                        <th className="px-6 py-4 text-right">Promedio</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {data.users.map((u, i) => (
                                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 font-medium text-slate-700">{u.email}</td>
                                            <td className="px-6 py-4 text-slate-500">
                                                {new Date(u.lastLogin).toLocaleString()}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-slate-700">{u.locations}</div>
                                                <div className="text-xs text-slate-400">{u.devices}</div>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-bold">
                                                    {u.attempts}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right font-bold text-indigo-600">
                                                {u.avgScore}%
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {activeTab === 'activity' && (
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden animate-fade-in">
                        <div className="p-4 border-b border-slate-100 bg-slate-50">
                            <h3 className="font-semibold text-slate-700">Registro de Sesiones Recientes</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white text-slate-500 uppercase text-xs font-semibold border-b">
                                    <tr>
                                        <th className="px-6 py-3">Fecha/Hora</th>
                                        <th className="px-6 py-3">Usuario</th>
                                        <th className="px-6 py-3">IP / Ubicación</th>
                                        <th className="px-6 py-3">Dispositivo</th>
                                        <th className="px-6 py-3">Estado</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {data.recentActivity.map((session) => (
                                        <tr key={session.id} className="hover:bg-slate-50">
                                            <td className="px-6 py-3 text-slate-600">
                                                {new Date(session.loginDate).toLocaleString()}
                                            </td>
                                            <td className="px-6 py-3 font-medium text-slate-800">
                                                {session.userEmail}
                                            </td>
                                            <td className="px-6 py-3 text-slate-500">
                                                {session.ip} <br />
                                                <span className="text-xs text-slate-400">{session.city}, {session.country}</span>
                                            </td>
                                            <td className="px-6 py-3 text-slate-500">
                                                {session.deviceType}
                                            </td>
                                            <td className="px-6 py-3">
                                                {session.logoutDate ? (
                                                    <span className="text-slate-400 text-xs">Finalizada</span>
                                                ) : (
                                                    <span className="text-emerald-600 font-bold text-xs animate-pulse">● En línea</span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

            </div>
        </main>
    );
}

function KpiCard({ title, value, icon, color }) {
    const colorClasses = {
        blue: "text-blue-600 bg-blue-50 border-blue-100",
        emerald: "text-emerald-600 bg-emerald-50 border-emerald-100",
        purple: "text-purple-600 bg-purple-50 border-purple-100",
        amber: "text-amber-600 bg-amber-50 border-amber-100",
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start justify-between">
            <div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">{title}</p>
                <p className="text-2xl font-bold text-slate-800">{value}</p>
            </div>
            <div className={`p-3 rounded-xl text-xl ${colorClasses[color] || colorClasses.blue}`}>
                {icon}
            </div>
        </div>
    );
}
