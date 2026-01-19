// src/Header.jsx
import React from "react";

const Header = ({ formattedTime, progress = 0, stage, onExit }) => {
  return (
    <header className="bg-white/70 backdrop-blur-md border-b border-gray-200 sticky top-0 z-10 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        
        {/* --- Lado Izquierdo: Botón Salir + Logo + Título --- */}
        <div className="flex items-center gap-3">
          
          {/* BOTÓN SALIR / HOME (Solo visible durante el examen) */}
          {stage === "exam" && (
            <button
              onClick={onExit}
              title="Salir al menú principal"
              className="mr-1 p-2 rounded-full text-gray-400 hover:bg-red-50 hover:text-red-600 transition-colors"
            >
              {/* Ícono de Puerta/Salida SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
              </svg>
            </button>
          )}

          <img
            src="/logo.svg" 
            alt="Logo DR Juan"
            className="h-10 w-auto md:h-12 transition-transform hover:scale-105"
          />
          <h1 className="text-xl md:text-3xl font-bold text-blue-700 tracking-tight leading-tight">
            Simulacro <span className="text-gray-600 hidden sm:inline">Médico</span>
          </h1>
        </div>

        {/* --- Temporizador (Lado Derecho) --- */}
        {stage === "exam" && (
          <div
            className={`text-sm md:text-base font-medium bg-blue-50 px-3 py-2 md:px-4 rounded-xl shadow-sm whitespace-nowrap ${
              formattedTime?.startsWith("00:") ? "text-red-600" : "text-gray-700"
            }`}
          >
            ⏳ {formattedTime}
          </div>
        )}
      </div>

      {/* --- Barra de progreso --- */}
      {stage === "exam" && (
        <div className="h-1.5 bg-gray-100 w-full">
          <div
            className="h-full bg-blue-600 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </header>
  );
};

export default Header;