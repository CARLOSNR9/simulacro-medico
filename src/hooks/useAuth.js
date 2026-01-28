import { useState, useEffect } from "react";
import { auth } from "../firebase/config";
import {
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

// Lista de correos permitidos
export const ALLOWED_EMAILS = [
    "j2montero.r@gmail.com",
    "carlosnr99@gmail.com",
    "carlosnr9@gmail.com"
];

export function useAuth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Efecto para vigilar el estado de autenticación
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false);
            if (currentUser) {
                // Verificar si el correo está en la lista blanca
                if (ALLOWED_EMAILS.includes(currentUser.email)) {
                    setUser(currentUser);
                    setError(null);
                } else {
                    // Si no está autorizado, cerramos la sesión y mostramos error
                    signOut(auth);
                    setUser(null);
                    setError("Acceso denegado: Tu correo no está autorizado para usar esta aplicación.");
                }
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    // Función para iniciar sesión con Google
    const loginWithGoogle = async () => {
        setLoading(true);
        setError(null);
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
        } catch (err) {
            console.error("Error en login:", err);
            // Manejo de errores específicos de Firebase
            if (err.code === 'auth/unauthorized-domain') {
                setError("Dominio no autorizado. Agrega 'localhost' en Firebase Console > Auth > Settings > Authorized domains.");
            } else if (err.code === 'auth/popup-closed-by-user') {
                setError("Inicio de sesión cancelado.");
            } else if (err.code === 'auth/cancelled-popup-request') {
                // Ignoramos este error si es por múltiples clicks
                setLoading(false);
                return;
            } else {
                setError(err.message || "Error al iniciar sesión.");
            }
            setLoading(false);
        }
    };

    // Función para cerrar sesión
    const logout = () => {
        signOut(auth).catch(err => console.error(err));
    };

    return {
        user,
        loading,
        error,
        loginWithGoogle,
        logout
    };
}
