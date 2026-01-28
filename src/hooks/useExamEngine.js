import { useState, useEffect, useMemo } from "react";
import { QUESTIONS_BANK as BANK_NOV } from "../data/questionsBank";
import { QUESTIONS_26DIC as BANK_DIC } from "../data/questionsBank_26DIC";

// ===================== CONFIG =====================
const EXAM_DURATION_MIN = 150; // 2h 30m
const MAX_QUESTIONS = 80;
const ENABLE_PERSISTENCE = true;
const CONTENT_VERSION = "DRJUAN_V25_MULTI";

// ===================== DATA =====================
export const EXAM_CATALOG = [
    {
        id: "simulacro_1",
        title: "Simulacro 1",
        subtitle: "El Despertar Médico",
        description: "Fundamentos clínicos y casos esenciales para iniciar tu preparación.",
        data: BANK_DIC, // Placeholder
        color: "bg-emerald-50 text-emerald-600",
        icon: "🌱"
    },
    {
        id: "simulacro_2",
        title: "Simulacro 2",
        subtitle: "Código Hipócrates",
        description: "Diagnósticos diferenciales y toma de decisiones bajo presión.",
        data: BANK_DIC, // Placeholder
        color: "bg-blue-50 text-blue-600",
        icon: "🧬"
    },
    {
        id: "simulacro_3",
        title: "Simulacro 3",
        subtitle: "Desafío de Guardia",
        description: "Manejo de urgencias, pacientes críticos y situaciones complejas.",
        data: BANK_DIC, // Placeholder
        color: "bg-purple-50 text-purple-600",
        icon: "🏥"
    },
    {
        id: "simulacro_4",
        title: "Simulacro 4",
        subtitle: "Mente Maestra",
        description: "Casos de alta complejidad para expertos. La prueba final.",
        data: BANK_DIC, // Placeholder
        color: "bg-amber-50 text-amber-600",
        icon: "🧠"
    },
];

// ===================== UTILS =====================
function shuffleArray(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export function useExamEngine() {
    const [stage, setStage] = useState("login");
    const [currentExamId, setCurrentExamId] = useState(null);
    const [examTitle, setExamTitle] = useState("");
    const [questions, setQuestions] = useState([]);
    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [marked, setMarked] = useState([]); // Array of marked indices
    const [secondsLeft, setSecondsLeft] = useState(EXAM_DURATION_MIN * 60);
    const [startedAt, setStartedAt] = useState(null);
    const [finished, setFinished] = useState(false);

    // ===================== PERSISTENCIA: LECTURA =====================
    useEffect(() => {
        if (!ENABLE_PERSISTENCE) return;
        try {
            const raw = localStorage.getItem("simulacro_state_v2");
            if (raw) {
                const st = JSON.parse(raw);
                if (st.contentVersion !== CONTENT_VERSION) {
                    localStorage.removeItem("simulacro_state_v2");
                    return;
                }
                if (st && st.stage && st.stage !== "login") {
                    setStage(st.stage);
                    setQuestions(st.questions || []);
                    setCurrent(st.current || 0);
                    setAnswers(st.answers || []);
                    setMarked(st.marked || []);
                    setSecondsLeft(st.secondsLeft ?? EXAM_DURATION_MIN * 60);
                    setStartedAt(st.startedAt || null);
                    setFinished(st.finished || false);

                    setCurrentExamId(st.currentExamId || null);
                    const catalogItem = EXAM_CATALOG.find((e) => e.id === st.currentExamId);
                    if (catalogItem) setExamTitle(catalogItem.title);
                }
            }
        } catch { }
    }, []);

    // ===================== PERSISTENCIA: GUARDADO =====================
    useEffect(() => {
        if (!ENABLE_PERSISTENCE) return;
        const payload = {
            contentVersion: CONTENT_VERSION,
            stage,
            questions,
            current,
            answers,
            marked,
            secondsLeft,
            startedAt,
            finished,
            currentExamId,
        };
        localStorage.setItem("simulacro_state_v2", JSON.stringify(payload));
    }, [stage, questions, current, answers, marked, secondsLeft, startedAt, finished, currentExamId]);

    // ===================== TIMER =====================
    useEffect(() => {
        if (stage !== "exam" || finished) return;
        const t = setInterval(() => setSecondsLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
        return () => clearInterval(t);
    }, [stage, finished]);

    useEffect(() => {
        if (stage === "exam" && secondsLeft === 0 && !finished) {
            handleFinish();
        }
    }, [secondsLeft, stage, finished]);

    // ===================== ACTIONS =====================
    function startExam(examId) {
        const selectedExam = EXAM_CATALOG.find((ex) => ex.id === examId);
        if (!selectedExam) return;

        const pool = shuffleArray(selectedExam.data);
        const take = Math.min(MAX_QUESTIONS, pool.length);
        const examQs = pool.slice(0, take);

        setQuestions(examQs);
        setAnswers(Array(take).fill(null));
        setMarked([]);
        setCurrent(0);
        setSecondsLeft(EXAM_DURATION_MIN * 60);
        setStartedAt(Date.now());
        setFinished(false);

        setCurrentExamId(selectedExam.id);
        setExamTitle(selectedExam.title);
        setStage("exam");
    }

    function chooseOption(idx) {
        setAnswers((prev) => {
            const a = prev.slice();
            a[current] = idx;
            return a;
        });
    }

    function toggleMark(idx) {
        setMarked((prev) => {
            if (prev.includes(idx)) return prev.filter((i) => i !== idx);
            return [...prev, idx];
        });
    }

    function nextQuestion() {
        if (current < questions.length - 1) {
            setCurrent((c) => c + 1);
        } else {
            handleFinish();
        }
    }

    function prevQuestion() {
        if (current > 0) setCurrent((c) => c - 1);
    }

    function jumpToQuestion(idx) {
        if (idx >= 0 && idx < questions.length) {
            setCurrent(idx);
        }
    }

    function handleFinish() {
        setFinished(true);
        setStage("result");
    }

    function handleReset() {
        localStorage.removeItem("simulacro_state_v2");
        setStage("menu");
        setQuestions([]);
        setAnswers([]);
        setMarked([]);
        setCurrentExamId(null);
    }

    // ===================== RESULT CALC =====================
    const result = useMemo(() => {
        if (stage !== "result") return null;
        const total = questions.length;
        let correct = 0;
        const byTopic = {};
        questions.forEach((q, i) => {
            const ok = answers[i] === q.correctIndex;
            if (ok) correct += 1;
            if (!byTopic[q.topic]) byTopic[q.topic] = { total: 0, correct: 0 };
            byTopic[q.topic].total += 1;
            if (ok) byTopic[q.topic].correct += 1;
        });
        const score = Math.round((correct / (total || 1)) * 100);
        return { total, correct, wrong: total - correct, score, byTopic };
    }, [stage, questions, answers]);

    return {
        stage,
        setStage,
        currentExamId,
        examTitle,
        questions,
        current,
        answers,
        marked,
        secondsLeft,
        finished,
        result,
        chooseOption,
        toggleMark,
        nextQuestion,
        prevQuestion,
        jumpToQuestion,
        startExam,
        handleReset,
    };
}
