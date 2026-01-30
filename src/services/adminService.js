import { db } from "../firebase/config";
import { collection, getDocs, query, orderBy, limit, where, Timestamp } from "firebase/firestore";

export const AdminService = {
    // Obtener estadísticas generales
    async getDashboardStats() {
        try {
            // 1. Obtener sesiones recientes
            const sessionsRef = collection(db, "sessions");
            // Quitamos el orderBy para evitar errores de índice. Ordenamos en cliente.
            const sessionsQuery = query(sessionsRef, limit(200));
            const sessionsSnapshot = await getDocs(sessionsQuery);
            const sessions = sessionsSnapshot.docs.map(doc => {
                const data = doc.data();
                return {
                    id: doc.id,
                    ...data,
                    loginDate: data.loginTime?.toDate ? data.loginTime.toDate() : new Date(),
                    logoutDate: data.logoutTime?.toDate ? data.logoutTime.toDate() : null
                };
            }).sort((a, b) => b.loginDate - a.loginDate); // Ordenado en cliente

            // 2. Obtener resultados de exámenes
            const resultsRef = collection(db, "exam_results");
            // Quitamos el orderBy.
            const resultsQuery = query(resultsRef, limit(500));
            const resultsSnapshot = await getDocs(resultsQuery);
            const results = resultsSnapshot.docs.map(doc => {
                const data = doc.data();
                return {
                    id: doc.id,
                    ...data,
                    date: data.timestamp?.toDate ? data.timestamp.toDate() : new Date()
                };
            }).sort((a, b) => b.date - a.date); // Ordenado en cliente

            console.log("Admin Dashboard Data Loaded:", { sessions: sessions.length, results: results.length });

            // 3. Calcular usuarios únicos
            const uniqueUsersMap = new Map();
            const userIdToEmail = new Map(); // Mapa auxiliar para relacionar ID con Email

            // Procesar desde sesiones
            sessions.forEach(s => {
                if (s.userEmail) {
                    userIdToEmail.set(s.userId, s.userEmail); // Guardar relación

                    if (!uniqueUsersMap.has(s.userEmail)) {
                        uniqueUsersMap.set(s.userEmail, {
                            email: s.userEmail,
                            userId: s.userId,
                            lastLogin: s.loginDate,
                            locations: new Set([s.city]),
                            devices: new Set([s.deviceType]),
                            attempts: 0,
                            avgScore: 0
                        });
                    } else {
                        const user = uniqueUsersMap.get(s.userEmail);
                        if (s.loginDate > user.lastLogin) user.lastLogin = s.loginDate;
                        if (s.city) user.locations.add(s.city);
                        if (s.deviceType) user.devices.add(s.deviceType);
                    }
                }
            });

            // Procesar desde resultados para completar datos
            results.forEach(r => {
                // Intentar obtener email del resultado o buscarlo por userId en el mapa de sesiones
                const email = r.userEmail || userIdToEmail.get(r.userId);

                if (email) {
                    if (!uniqueUsersMap.has(email)) {
                        uniqueUsersMap.set(email, {
                            email: email,
                            userId: r.userId,
                            lastLogin: r.date,
                            locations: new Set(),
                            devices: new Set(),
                            attempts: 0,
                            avgScore: 0
                        });
                    }
                    const user = uniqueUsersMap.get(email);
                    user.attempts += 1;
                    // Suma para promedio (se ajustará al final)
                    user.totalScore = (user.totalScore || 0) + r.score;
                }
            });

            // Finalizar cálculo de usuarios
            const users = Array.from(uniqueUsersMap.values()).map(u => ({
                ...u,
                avgScore: u.attempts ? Math.round(u.totalScore / u.attempts) : 0,
                locations: Array.from(u.locations).filter(Boolean).join(", "),
                devices: Array.from(u.devices).filter(Boolean).join(", ")
            }));

            // 4. Calcular KPIs
            const totalAttempts = results.length;
            const avgGlobalScore = totalAttempts
                ? Math.round(results.reduce((acc, curr) => acc + curr.score, 0) / totalAttempts)
                : 0;

            // 5. Preparar datos para gráficas
            // Actividad últimos 7 días
            const last7Days = [...Array(7)].map((_, i) => {
                const d = new Date();
                d.setDate(d.getDate() - i);
                return d.toISOString().split('T')[0];
            }).reverse();

            const activityChart = last7Days.map(dateStr => {
                return {
                    date: dateStr,
                    sessions: sessions.filter(s => s.loginDate.toISOString().startsWith(dateStr)).length,
                    exams: results.filter(r => r.date.toISOString().startsWith(dateStr)).length
                };
            });

            return {
                kpi: {
                    totalUsers: users.length,
                    activeSessions: sessions.filter(s => !s.logoutDate && (new Date() - s.loginDate < 24 * 60 * 60 * 1000)).length, // Asumiendo activas si < 24h sin logout
                    totalAttempts,
                    avgGlobalScore
                },
                users: users.sort((a, b) => b.avgScore - a.avgScore), // Ranking por puntaje
                recentActivity: sessions.slice(0, 20),
                activityChart
            };

        } catch (error) {
            console.error("Error fetching admin stats:", error);
            throw error;
        }
    }
};
