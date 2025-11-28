import React, { useEffect, useMemo, useRef, useState } from "react";
import Header from "./Header";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { QUESTIONS_BANK } from "./data/questionsBank";

// ===================== CONFIG =====================
const ACCESS_KEY = "DRJUAN25";
const EXAM_DURATION_MIN = 150; // 2h 30m
const MAX_QUESTIONS = 80;
const ENABLE_PERSISTENCE = true;
const CONTENT_VERSION = "DRJUAN_V25"; // 👈 Cambia esta versión cuando actualices el banco
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
      const raw = localStorage.getItem("simulacro_state_v1");
      if (raw) {
        const st = JSON.parse(raw);

        // 🚨 Si la versión NO coincide, borrar progreso
        if (st.contentVersion !== CONTENT_VERSION) {
          localStorage.removeItem("simulacro_state_v1");
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
        }
      }
    } catch {}
  }, []);

  // ===================== PERSISTENCIA: GUARDADO =====================
  useEffect(() => {
    if (!ENABLE_PERSISTENCE) return;
    const payload = {
      contentVersion: CONTENT_VERSION, // 👈 Guardamos la versión
      stage,
      questions,
      current,
      answers,
      secondsLeft,
      startedAt,
      finished,
    };
    localStorage.setItem("simulacro_state_v1", JSON.stringify(payload));
  }, [stage, questions, current, answers, secondsLeft, startedAt, finished]);

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

  // ===================== INICIO DEL EXAMEN =====================
  function startExam() {
    const pool = shuffleArray(QUESTIONS_BANK);
    const take = Math.min(MAX_QUESTIONS, pool.length);
    const examQs = pool.slice(0, take);

    setQuestions(examQs);
    setAnswers(Array(take).fill(null));
    setCurrent(0);
    setSecondsLeft(EXAM_DURATION_MIN * 60);
    setStartedAt(Date.now());
    setFinished(false);
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

    pdf.save("reporte_simulacro.pdf");
  }

  // ===================== RENDER =====================
  const selectedAnswer = answers[current] ?? null;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header
        formattedTime={formatTime(secondsLeft)}
        progress={questions.length ? ((current + 1) / questions.length) * 100 : 0}
        stage={stage}
      />

      {/* LOGIN */}
      {stage === "login" && (
        <div className="fixed inset-0 bg-slate-900/40 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
            <h2 className="text-2xl font-bold mb-2">Acceso</h2>
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

      {/* MENU */}
      {stage === "menu" && (
        <main className="max-w-5xl mx-auto px-4 py-10">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 text-center">
            <h2 className="text-3xl font-bold mb-2">Simulacro Médico de Especialización</h2>
            <p className="text-slate-600 mb-6">
              80 casos clínicos exigentes, 2 h 30 min, sin retroalimentación hasta el final.
            </p>
            <button
              onClick={startExam}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold"
            >
              Iniciar Simulacro
            </button>
            <div className="mt-6 text-sm text-slate-500">
              <p>
                Los casos abarcan: Urgencias, Medicina Interna, Cardiología, Endocrinología,
                Nefrología/Onco, Obstetricia, Oftalmología, Ortopedia.
              </p>
              <p>Progreso guardado localmente (solo en este navegador).</p>
            </div>
          </div>
        </main>
      )}

      {/* EXAMEN */}
      {stage === "exam" && (
        <main className="max-w-5xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-slate-600">
              Pregunta {current + 1} de {questions.length}
            </div>
            <div className="text-sm text-slate-600">
              Tiempo restante:{" "}
              <span className={`${secondsLeft <= 600 ? "text-red-600 font-semibold" : ""}`}>
                {formatTime(secondsLeft)}
              </span>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-xl font-semibold mb-4 leading-relaxed">
              {questions[current]?.stem}
            </h3>

            <div className="space-y-3">
              {questions[current]?.options.map((opt, idx) => {
                const selected = selectedAnswer === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => chooseOption(idx)}
                    className={`w-full text-left border rounded-xl px-4 py-3 transition ${
                      selected ? "border-blue-600 bg-blue-50" : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <span className="font-semibold mr-2">{String.fromCharCode(65 + idx)}.</span>{" "}
                    {opt}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between mt-6">
              <button
                onClick={prevQuestion}
                disabled={current === 0}
                className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 disabled:opacity-50"
              >
                ← Anterior
              </button>
              <button
                onClick={nextQuestion}
                disabled={selectedAnswer === null}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold disabled:opacity-50"
              >
                {current === questions.length - 1 ? "Finalizar" : "Siguiente →"}
              </button>
            </div>
          </div>
        </main>
      )}

      {/* RESULTADOS */}
      {stage === "result" && result && (
        <main ref={resultRef} className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-2xl border p-6">
              <div className="text-sm text-slate-500">Puntaje</div>
              <div className="text-4xl font-bold">{result.score}/100</div>
            </div>
            <div className="bg-white rounded-2xl border p-6">
              <div className="text-sm text-slate-500">Correctas</div>
              <div className="text-4xl font-bold text-emerald-600">{result.correct}</div>
            </div>
            <div className="bg-white rounded-2xl border p-6">
              <div className="text-sm text-slate-500">Incorrectas</div>
              <div className="text-4xl font-bold text-rose-600">{result.wrong}</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border p-6 mb-8">
            <h3 className="text-lg font-semibold mb-4">Desempeño por tema</h3>
            <div className="space-y-3">
              {Object.entries(result.byTopic).map(([topic, info]) => {
                const pct = Math.round((info.correct / info.total) * 100);
                return (
                  <div key={topic}>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="font-medium">{topic}</span>
                      <span className="text-slate-600">
                        {info.correct}/{info.total} ({pct}%)
                      </span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-2xl border p-6">
            <h3 className="text-lg font-semibold mb-4">Retroalimentación por pregunta</h3>
            <ol className="space-y-4 list-decimal pl-5">
              {questions.map((q, i) => {
                const chosen = answers[i];
                const correct = q.correctIndex;
                const isRight = chosen === correct;
                return (
                  <li key={q.id} className="border rounded-xl p-4">
                    <div className="text-xs inline-block px-2 py-1 rounded-full bg-slate-100 text-slate-700 mb-2">
                      {q.topic}
                    </div>
                    <p className="font-medium mb-2">{q.stem}</p>
                    <div className="text-sm mb-2">
                      <span className="font-semibold">Tu respuesta:</span>{" "}
                      {chosen !== null
                        ? `${String.fromCharCode(65 + chosen)}. ${q.options[chosen]}`
                        : "(no respondida)"}
                    </div>
                    <div className="text-sm mb-2">
                      <span className="font-semibold">Respuesta correcta:</span>{" "}
                      {String.fromCharCode(65 + correct)}. {q.options[correct]}
                    </div>
                    <div className={`text-sm ${isRight ? "text-emerald-700" : "text-rose-700"}`}>
                      {isRight ? q.feedbackCorrect : q.feedbackIncorrect}
                    </div>
                  </li>
                );
              })}
            </ol>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setStage("menu")}
                className="px-4 py-2 rounded-lg border border-slate-300"
              >
                Volver al menú
              </button>

              <button
                onClick={exportReportPDF}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold"
              >
                Descargar PDF
              </button>
            </div>
          </div>
        </main>
      )}

      <footer className="py-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Simulacro Médico • v1.0
      </footer>
    </div>
  );
}
