import { useState, useCallback } from "react";
import { db } from "../firebase/config";
import { collection, addDoc, query, where, orderBy, getDocs, Timestamp } from "firebase/firestore";

export function useExamHistory() {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Guardar resultado
    const saveResult = useCallback(async (userId, resultData) => {
        if (!userId) return;
        setLoading(true);
        try {
            await addDoc(collection(db, "exam_results"), {
                userId,
                ...resultData,
                timestamp: Timestamp.now()
            });
            console.log("Resultado guardado en Firebase");
        } catch (err) {
            console.error("Error guardando resultado:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []);

    // Traer historial
    const getHistory = useCallback(async (userId) => {
        if (!userId) return;
        setLoading(true);
        try {
            const q = query(
                collection(db, "exam_results"),
                where("userId", "==", userId)
            );
            const querySnapshot = await getDocs(q);
            const data = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
                date: doc.data().timestamp?.toDate() || new Date() // Convertir Timestamp a Date
            }));

            // Ordenar en cliente para evitar necesidad de índice compuesto en Firestore
            data.sort((a, b) => b.date - a.date);

            setHistory(data);
        } catch (err) {
            console.error("Error obteniendo historial:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []);

    // Calcular estadísticas
    const stats = {
        totalExams: history.length,
        averageScore: history.length
            ? Math.round(history.reduce((acc, curr) => acc + curr.score, 0) / history.length)
            : 0,
        bestExam: history.length
            ? history.reduce((prev, current) => (prev.score > current.score) ? prev : current)
            : null
    };

    return {
        history,
        loading,
        error,
        saveResult,
        getHistory,
        stats
    };
}
