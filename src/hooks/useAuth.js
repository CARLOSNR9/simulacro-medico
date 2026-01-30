import { useState, useEffect } from "react";
import { auth, db } from "../firebase/config";
import {
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { collection, addDoc, updateDoc, doc, serverTimestamp } from "firebase/firestore";

// Lista de correos permitidos
export const ALLOWED_EMAILS = [
    "j2montero.r@gmail.com",
    "carlosnr99@gmail.com",
    "carlosnr9@gmail.com",
    "julian.lagosmd@gmail.com",
    "elizabethdbh@gmail.com",
    "gmisnaza17_92@hotmail.com"
];

export function useAuth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sessionId, setSessionId] = useState(null);

    // Efecto para vigilar el estado de autenticación
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setLoading(false);
            if (currentUser) {
                // Verificar si el correo está en la lista blanca
                if (ALLOWED_EMAILS.includes(currentUser.email)) {
                    setUser(currentUser);
                    setError(null);

                    // Iniciar sesión (trackeo)
                    if (!sessionId) {
                        try {
                            const ipData = await fetch('https://ipapi.co/json/').then(res => res.json()).catch(() => ({}));
                            const sessionRef = await addDoc(collection(db, "sessions"), {
                                userId: currentUser.uid,
                                userEmail: currentUser.email,
                                loginTime: serverTimestamp(),
                                userAgent: navigator.userAgent,
                                ip: ipData.ip || 'Unknown',
                                city: ipData.city || 'Unknown',
                                region: ipData.region || 'Unknown',
                                country: ipData.country_name || 'Unknown',
                                deviceType: /Mobile|Android|iP(ad|hone)/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'
                            });
                            setSessionId(sessionRef.id);
                        } catch (e) {
                            console.error("Error tracking session:", e);
                        }
                    }

                } else {
                    // Si no está autorizado, cerramos la sesión y mostramos error
                    signOut(auth);
                    setUser(null);
                    setError("Acceso denegado: Tu correo no está autorizado para usar esta aplicación.");
                }
            } else {
                setUser(null);
                setSessionId(null);
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
    const logout = async () => {
        try {
            if (sessionId) {
                const sessionRef = doc(db, "sessions", sessionId);
                await updateDoc(sessionRef, {
                    logoutTime: serverTimestamp(),
                    duration: serverTimestamp() // Placeholder, timestamp difference handled on read or via cloud function
                });
            }
            await signOut(auth);
            setSessionId(null);
        } catch (err) {
            console.error("Error al cerrar sesión:", err);
        }
    };

    return {
        user,
        loading,
        error,
        loginWithGoogle,
        logout
    };
}
