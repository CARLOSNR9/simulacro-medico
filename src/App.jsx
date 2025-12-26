import React, { useEffect, useMemo, useRef, useState } from "react";
import Header from "./Header";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

// 1. IMPORTAMOS AMBOS BANCOS DE PREGUNTAS
import { QUESTIONS_BANK as BANK_NOV } from "./data/questionsBank"; // El original (Noviembre)
import { QUESTIONS_26DIC as BANK_DIC } from "./data/questionsBank_26DIC"; // El nuevo (26DIC)

// ===================== CONFIG =====================
const ACCESS_KEY = "DRJM25";
const EXAM_DURATION_MIN = 150; // 2h 30m
const MAX_QUESTIONS = 80;
const ENABLE_PERSISTENCE = true;
const CONTENT_VERSION = "DRJUAN_V25_MULTI"; // Actualizamos versión para limpiar caché viejo

// 2. DEFINIMOS EL CATÁLOGO DE EXÁMENES
const EXAM_CATALOG = [
  {
    id: "noviembre",
    title: "Simulacro Noviembre",
    description: "Banco original de preguntas (Casos 1-80)",
    data: BANK_NOV,
    disabled: true,
  },
  {
    id: "26dic",
    title: "Simulacro 26DIC",
    description: "Nuevos casos clínicos complejos (Actualización Dic)",
    data: BANK_DIC,
  },
];
// =================================================

// ===================== UTILS =====================
function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function formatTime(totalSeconds) {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  const pad = (x) => String(x).padStart(2, "0");
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

// ===================== COMPONENTE PRINCIPAL =====================
export default function App() {
  const [stage, setStage] = useState("login");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  // Estado para saber qué examen se eligió
  const [currentExamId, setCurrentExamId] = useState(null);
  const [examTitle, setExamTitle] = useState("");

  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(EXAM_DURATION_MIN * 60);
  const [startedAt, setStartedAt] = useState(null);
  const [finished, setFinished] = useState(false);

  const resultRef = useRef(null);

  // ===================== PERSISTENCIA: LECTURA =====================
  useEffect(() => {
    if (!ENABLE_PERSISTENCE) return;
    try {
      const raw = localStorage.getItem("simulacro_state_v2"); // Cambié a v2 para evitar conflictos
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
          setSecondsLeft(st.secondsLeft ?? EXAM_DURATION_MIN * 60);
          setStartedAt(st.startedAt || null);
          setFinished(st.finished || false);

          // Recuperamos cual examen estaba haciendo
          setCurrentExamId(st.currentExamId || null);
          const catalogItem = EXAM_CATALOG.find((e) => e.id === st.currentExamId);
          if (catalogItem) setExamTitle(catalogItem.title);
        }
      }
    } catch {}
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
      secondsLeft,
      startedAt,
      finished,
      currentExamId, // Guardamos el ID del examen actual
    };
    localStorage.setItem("simulacro_state_v2", JSON.stringify(payload));
  }, [stage, questions, current, answers, secondsLeft, startedAt, finished, currentExamId]);

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

  // ===================== LOGIN =====================
  function handleLogin() {
    if (password === ACCESS_KEY) {
      setStage("menu");
      setAuthError("");
    } else {
      setAuthError("Clave incorrecta");
    }
  }

  // ===================== INICIO DEL EXAMEN (MODIFICADO) =====================
  function startExam(examId) {
    // 1. Buscamos el examen seleccionado en el catálogo
    const selectedExam = EXAM_CATALOG.find((ex) => ex.id === examId);
    if (!selectedExam) return;

    // 2. Preparamos las preguntas de ESE examen
    const pool = shuffleArray(selectedExam.data);
    const take = Math.min(MAX_QUESTIONS, pool.length);
    const examQs = pool.slice(0, take);

    // 3. Reseteamos estados
    setQuestions(examQs);
    setAnswers(Array(take).fill(null));
    setCurrent(0);
    setSecondsLeft(EXAM_DURATION_MIN * 60);
    setStartedAt(Date.now());
    setFinished(false);

    // 4. Guardamos la info del examen actual
    setCurrentExamId(selectedExam.id);
    setExamTitle(selectedExam.title);

    setStage("exam");
  }

  // ===================== NAVEGACIÓN =====================
  function chooseOption(idx) {
    setAnswers((prev) => {
      const a = prev.slice();
      a[current] = idx;
      return a;
    });
  }

  function nextQuestion() {
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
      return;
    }
    handleFinish();
  }

  function prevQuestion() {
    if (current > 0) setCurrent((c) => c - 1);
  }

  function handleFinish() {
    setFinished(true);
    setStage("result");
  }

  function handleReset() {
    // Borramos persistencia y volvemos al menú
    localStorage.removeItem("simulacro_state_v2");
    setStage("menu");
    setQuestions([]);
    setAnswers([]);
    setCurrentExamId(null);
  }

  // --- NUEVA FUNCIÓN PARA EL BOTÓN DE SALIDA ---
  function handleExit() {
    if (
      window.confirm(
        "¿Estás seguro de que quieres salir al menú? Se perderá el progreso actual de este examen."
      )
    ) {
      handleReset(); // Reutilizamos la lógica de resetear
    }
  }

  // ===================== RESULTADOS =====================
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

  // ===================== PDF =====================
  async function exportReportPDF() {
    if (!resultRef.current) return;
    const element = resultRef.current;

    // Pequeño hack para asegurar que el PDF capture bien los estilos
    const canvas = await html2canvas(element, {
      scale: 2,
      backgroundColor: "#ffffff",
      useCORS: true,
    });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = 210;
    const pageHeight = 297;
    const imgProps = pdf.getImageProperties(imgData);
    const imgWidth = pageWidth;
    const imgHeight = (imgProps.height * imgWidth) / imgProps.width;
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
    while (heightLeft > 0) {
      position -= pageHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }
    pdf.save(`reporte_${currentExamId}.pdf`);
  }

  // ===================== RENDER =====================
  const selectedAnswer = answers[current] ?? null;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header
        formattedTime={formatTime(secondsLeft)}
        progress={questions.length ? ((current + 1) / questions.length) * 100 : 0}
        stage={stage}
        onExit={handleExit} // <--- AGREGA ESTA LÍNEA
      />

      {/* LOGIN */}
      {stage === "login" && (
        <div className="fixed inset-0 bg-slate-900/40 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
            <h2 className="text-2xl font-bold mb-2">Acceso DR Juan</h2>
            <p className="text-sm text-slate-600 mb-4">Ingrese la clave para continuar.</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              className="w-full border rounded-xl px-4 py-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Clave"
              autoFocus
            />
            {authError && <p className="text-red-600 text-sm mb-3">{authError}</p>}
            <button
              onClick={handleLogin}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 font-semibold"
            >
              Entrar
            </button>
          </div>
        </div>
      )}

      {/* MENÚ DE SELECCIÓN (NUEVO DISEÑO) */}
     
{stage === "menu" && (
  <main className="max-w-5xl mx-auto px-4 py-10">
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-slate-800">Seleccione un Simulacro</h2>
      <p className="text-slate-600 mt-2">Elija el examen que desea presentar hoy</p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      {EXAM_CATALOG.map((exam) => (
        <div
          key={exam.id}
          className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow"
        >
          <div className="bg-blue-50 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-4">
            📝
          </div>
          <h3 className="text-xl font-bold mb-2">{exam.title}</h3>
          <p className="text-slate-500 mb-6 flex-grow">{exam.description}</p>

          {/* BOTÓN ACTUALIZADO PARA RESPETAR BLOQUEO */}
          <button
            onClick={() => !exam.disabled && startExam(exam.id)}
            disabled={exam.disabled}
            className={`w-full px-6 py-3 rounded-xl font-semibold transition-colors shadow-sm ${
              exam.disabled
                ? "bg-slate-200 text-slate-400 cursor-not-allowed border border-slate-300" // Estilo bloqueado
                : "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200" // Estilo activo
            }`}
          >
            {exam.disabled ? "No disponible" : `Iniciar ${exam.title}`}
          </button>
        </div>
      ))}
    </div>
  </main>
)}






      {/* EXAMEN */}
      {stage === "exam" && (
        <main className="max-w-5xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm font-semibold text-blue-800 bg-blue-50 px-3 py-1 rounded-lg">
              {examTitle}
            </div>
            <div className="text-sm text-slate-600">
              Pregunta {current + 1} de {questions.length}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 relative">
            {/* stem */}
            <h3 className="text-xl font-semibold mb-6 leading-relaxed text-slate-800">
              {questions[current]?.stem}
            </h3>

            <div className="space-y-3">
              {questions[current]?.options.map((opt, idx) => {
                const selected = selectedAnswer === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => chooseOption(idx)}
                    className={`w-full text-left border rounded-xl px-4 py-3 transition-all ${
                      selected
                        ? "border-blue-600 bg-blue-50 ring-1 ring-blue-600"
                        : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <span className="font-bold mr-2 text-slate-500">
                      {String.fromCharCode(65 + idx)}.
                    </span>{" "}
                    {opt}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
              <button
                onClick={prevQuestion}
                disabled={current === 0}
                className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50 transition"
              >
                ← Anterior
              </button>
              <button
                onClick={nextQuestion}
                disabled={selectedAnswer === null}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition"
              >
                {current === questions.length - 1 ? "Finalizar Examen" : "Siguiente →"}
              </button>
            </div>
          </div>
        </main>
      )}

      {/* RESULTADOS */}
      {stage === "result" && result && (
        <main ref={resultRef} className="max-w-6xl mx-auto px-4 py-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Resultados: {examTitle}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-2xl border p-6 text-center">
              <div className="text-sm text-slate-500 uppercase font-bold tracking-wide">
                Puntaje
              </div>
              <div className="text-5xl font-bold mt-2">{result.score}/100</div>
            </div>
            <div className="bg-white rounded-2xl border p-6 text-center">
              <div className="text-sm text-slate-500 uppercase font-bold tracking-wide">
                Correctas
              </div>
              <div className="text-5xl font-bold text-emerald-600 mt-2">
                {result.correct}
              </div>
            </div>
            <div className="bg-white rounded-2xl border p-6 text-center">
              <div className="text-sm text-slate-500 uppercase font-bold tracking-wide">
                Incorrectas
              </div>
              <div className="text-5xl font-bold text-rose-600 mt-2">
                {result.wrong}
              </div>
            </div>
          </div>

          {/* ... (Resto del componente de resultados igual, con la lógica de byTopic) ... */}
          <div className="bg-white rounded-2xl border p-6 mb-8">
            <h3 className="text-lg font-semibold mb-4">Desempeño por tema</h3>
            <div className="space-y-4">
              {Object.entries(result.byTopic).map(([topic, info]) => {
                const pct = Math.round((info.correct / info.total) * 100);
                return (
                  <div key={topic}>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="font-medium text-slate-700">{topic}</span>
                      <span className="text-slate-500">
                        {info.correct}/{info.total} ({pct}%)
                      </span>
                    </div>
                    <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${
                          pct >= 60 ? "bg-emerald-500" : "bg-amber-500"
                        }`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-2xl border p-6">
            <h3 className="text-lg font-semibold mb-6">Retroalimentación detallada</h3>
            <ol className="space-y-6 list-decimal pl-5">
              {questions.map((q, i) => {
                const chosen = answers[i];
                const correct = q.correctIndex;
                const isRight = chosen === correct;
                return (
                  <li
                    key={q.id || i}
                    className="border-b border-slate-100 pb-6 last:border-0 last:pb-0"
                  >
                    <div className="text-xs inline-block px-2 py-1 rounded bg-slate-100 text-slate-600 mb-2 font-medium">
                      {q.topic}
                    </div>
                    <p className="font-medium mb-3 text-lg leading-snug">{q.stem}</p>

                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div
                        className={`p-3 rounded-lg ${
                          isRight
                            ? "bg-emerald-50 border border-emerald-100"
                            : "bg-rose-50 border border-rose-100"
                        }`}
                      >
                        <span className="font-bold block mb-1">Tu respuesta:</span>
                        {chosen !== null ? q.options[chosen] : "(No respondida)"}
                      </div>
                      <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="font-bold block mb-1">Respuesta correcta:</span>
                        {q.options[correct]}
                      </div>
                    </div>

                    <div
                      className={`mt-3 text-sm p-4 rounded-lg ${
                        isRight ? "bg-emerald-50 text-emerald-800" : "bg-slate-50 text-slate-700"
                      }`}
                    >
                      <span className="font-bold">📝 Explicación: </span>
                      {isRight ? q.feedbackCorrect : q.feedbackIncorrect}
                    </div>
                  </li>
                );
              })}
            </ol>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t">
              <button
                onClick={handleReset}
                className="px-6 py-3 rounded-xl border border-slate-300 font-medium hover:bg-slate-50 transition"
              >
                Volver al menú principal
              </button>

              <button
                onClick={exportReportPDF}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-200 transition"
              >
                Descargar Reporte PDF
              </button>
            </div>
          </div>
        </main>
      )}

      <footer className="py-8 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Simulacro Médico DR Juan • v2.0
      </footer>
    </div>
  );
}
