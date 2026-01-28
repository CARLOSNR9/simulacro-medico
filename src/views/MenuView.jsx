import React from "react";



export default function MenuView({ user, exams, onStartExam, onLogout, onGoToDashboard }) {
    // Mapeo de correos a nombres reales
    const USER_NAMES = {
        "j2montero.r@gmail.com": "Juan Montero",
        "carlosnr99@gmail.com": "Carlos",
        "carlosnr9@gmail.com": "Carlos",
        "julian.lagosmd@gmail.com": "Julián",
        "elizabethdbh@gmail.com": "Elizabeth",
        "gmisnaza17_92@hotmail.com": "Gmisnaza"
    };

    // Extraer nombre del correo (ej: carlosnr99@gmail.com -> Carlosnr99)
    const getDisplayName = () => {
        if (!user) return "Doctor(a)";

        // 1. Verificar si hay un nombre personalizado mapeado
        if (user.email && USER_NAMES[user.email]) {
            return USER_NAMES[user.email];
        }

        // 2. Si hay nombre real en la cuenta de Google, usarlo
        if (user.displayName) return user.displayName;

        // 3. Fallback al correo
        if (!user.email) return "Doctor(a)";
        const namePart = user.email.split("@")[0];
        // Capitalizar primera letra
        return namePart.charAt(0).toUpperCase() + namePart.slice(1);
    };

    return (
        <main className="max-w-6xl mx-auto px-4 py-8">
            {/* Header de Bienvenida */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 mb-8 flex flex-col md:flex-row items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold text-slate-800 mb-2">
                        Hola, <span className="text-blue-600">{getDisplayName()}</span>
                    </h2>
                    <p className="text-slate-600">
                        Bienvenido a tu panel de entrenamiento exclusivo.
                    </p>
                    <div className="flex items-center gap-4 mt-2">
                        <p className="text-xs text-slate-400">
                            Cuenta autorizada: {user?.email}
                        </p>
                        <button
                            onClick={onLogout}
                            className="text-xs text-red-500 hover:text-red-700 font-medium underline"
                        >
                            Cerrar Sesión
                        </button>
                    </div>

                </div>
                <div className="mt-4 md:mt-0 flex flex-col items-center md:items-end gap-2">
                    <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                        Plan Premium Activo
                    </div>
                    <button
                        onClick={onGoToDashboard}
                        className="w-full md:w-auto justify-center flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors bg-slate-50 hover:bg-blue-50 px-4 py-2 rounded-full"
                    >
                        <span>📊</span> Ver Progreso
                    </button>
                </div>
            </div>

            <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-slate-700">Seleccione su Simulacro</h3>
                <p className="text-sm text-slate-500">Cada módulo contiene 80 preguntas únicas</p>
            </div>

            {/* Grid de Exámenes */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {exams.map((exam) => (
                    <button
                        key={exam.id}
                        onClick={() => !exam.disabled && onStartExam(exam.id)}
                        disabled={exam.disabled}
                        className={`group relative overflow-hidden bg-white rounded-2xl p-6 text-left border transition-all duration-300 ${exam.disabled
                            ? "border-slate-200 opacity-60 cursor-not-allowed"
                            : "border-slate-200 hover:border-blue-300 hover:shadow-lg hover:-translate-y-1 active:scale-[0.98]"
                            }`}
                    >
                        <div className="flex items-start gap-4">
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm flex-shrink-0 ${exam.color || "bg-slate-100"}`}>
                                {exam.icon || "📄"}
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                                    {exam.title}
                                </h4>
                                <p className="text-sm font-semibold text-slate-600 mb-1">
                                    {exam.subtitle}
                                </p>
                                <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                                    {exam.description}
                                </p>
                            </div>
                        </div>

                        {!exam.disabled && (
                            <div className="absolute bottom-4 right-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                                <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium shadow-sm">
                                    Iniciar
                                </span>
                            </div>
                        )}
                    </button>
                ))}
            </div>
        </main>
    );
}
