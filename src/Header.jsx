// src/Header.jsx
import React from "react";

const Header = ({ formattedTime, progress = 0, stage }) => {
  return (
    <header className="bg-white/70 backdrop-blur-md border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        
        {/* --- Logo y título --- */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.svg" // <-- viene de /public/logo.png
            alt="Logo DR Juan"
            className="h-10 w-auto md:h-12 transition-transform hover:scale-105"
          />
          <h1 className="text-2xl md:text-3xl font-bold text-blue-700 tracking-tight">
            Simulacro Médico <span className="text-gray-600">DR Juan</span>
          </h1>
        </div>

        {/* --- Temporizador solo si está en examen --- */}
        {stage === "exam" && (
          <div
            className={`text-sm md:text-base font-medium bg-blue-50 px-4 py-2 rounded-xl shadow-sm ${
              formattedTime?.startsWith("00:") ? "text-red-600" : "text-gray-700"
            }`}
          >
            ⏳ {formattedTime}
          </div>
        )}
      </div>

      {/* --- Barra de progreso (opcional, solo durante el examen) --- */}
      {stage === "exam" && (
        <div className="h-2 bg-gray-200">
          <div
            className="h-2 bg-blue-600 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
