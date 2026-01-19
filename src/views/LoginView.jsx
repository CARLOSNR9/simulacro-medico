import React from "react";

export default function LoginView({ password, setPassword, onLogin, error }) {
  return (
    <div className="fixed inset-0 bg-slate-900/40 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
        <h2 className="text-2xl font-bold mb-2">Acceso DR Juan</h2>
        <p className="text-sm text-slate-600 mb-4">Ingrese la clave para continuar.</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onLogin()}
          className="w-full border rounded-xl px-4 py-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Clave"
          autoFocus
        />
        {error && <p className="text-red-600 text-sm mb-3">{error}</p>}
        <button
          onClick={onLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 font-semibold"
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
