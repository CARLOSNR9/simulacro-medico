import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * Simulacro Médico – Versión inicial funcional
 * -------------------------------------------------
 * Características:
 * - Pantalla de clave (DRJuanjo) en modal al cargar.
 * - Menú principal con tarjeta “Iniciar Simulacro”.
 * - 80 preguntas (o tantas como existan en el banco), 4 opciones c/u, sin retroalimentación hasta el final.
 * - Evita repeticiones (baraja Fisher-Yates + slice).
 * - Temporizador 2h 30m (150 minutos) con auto-envío al expirar.
 * - Pantalla de resultados: # correctas/incorrectas, puntaje 0–100, desglose por tema y retroalimentación por pregunta.
 * - Persistencia opcional de progreso en localStorage (activar/desactivar con FLAGS).
 *
 * Notas para ampliación rápida:
 * - Para llegar a 80 preguntas: añade objetos al arreglo QUESTIONS. El motor tomará hasta 80 sin repetir.
 * - Se recomienda mantener opciones muy parecidas para simular exámenes de residencia.
 */

// ===================== CONFIG =====================
const ACCESS_KEY = "DRJuanjo";
const EXAM_DURATION_MIN = 150; // 2h 30m
const MAX_QUESTIONS = 80; // meta
const ENABLE_PERSISTENCE = true; // Guarda progreso en localStorage

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

// ===================== BANCO DE PREGUNTAS (muestras) =====================
/**
 * Estructura:
 * {
 *   id: string,
 *   topic: string,
 *   stem: string, // enunciado clínico
 *   options: [string, string, string, string],
 *   correctIndex: 0..3,
 *   feedbackCorrect: string,
 *   feedbackIncorrect: string
 * }
 *
 * Agrega más preguntas para llegar (o superar) 80. El motor tomará hasta 80.
 */
const QUESTIONS = [
  {
    id: "TX-NTX-TENSION",
    topic: "Trauma de tórax / Urgencias",
    stem:
      "Paciente politraumatizado con disnea intensa, ingurgitación yugular, hemid tórax derecho sin murmullo vesicular e hiperresonante, desviación traqueal a la izquierda e inestabilidad hemodinámica. ¿Cuál es la acción inmediata?",
    options: [
      "Radiografía portátil de tórax antes de intervenir",
      "Toracostomía con tubo tras evaluación secundaria",
      "Punción descompresiva con aguja de gran calibre en 5º EIC anterior a la LAM derecha",
      "Ventilación con presión positiva mientras llega cirugía"
    ],
    correctIndex: 2,
    feedbackCorrect:
      "El neumotórax a tensión es diagnóstico clínico y amenaza la vida; se descomprime de inmediato con aguja #14 o mayor en 5º EIC levemente anterior a LAM y luego toracostomía.",
    feedbackIncorrect:
      "Retrasar por imagen o diferir la descompresión aumenta mortalidad. La toracostomía va después de estabilizar con punción si el paciente está inestable."
  },
  {
    id: "TX-HEMOTRAX-MASIVO",
    topic: "Trauma de tórax / Urgencias",
    stem:
      "Varón con herida penetrante torácica. A la toracostomía se drenan 1700 mL de sangre inmediata. ¿Cuál es la conducta?",
    options: [
      "Continuar solo con reposición y observar 24 h",
      "Toracotomía urgente",
      "Repetir RX supina para estimar volumen",
      "Administrar ácido tranexámico y vigilar"
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Hemotórax masivo se define por >1500 mL inmediatos o >200 mL/h por 2–4 h: indica toracotomía de control de daño.",
    feedbackIncorrect:
      "El volumen de drenaje inicial obliga a toracotomía; observar o solo imagen retrasa el control de la hemorragia."
  },
  {
    id: "TF-ORBITA-PISO",
    topic: "Trauma facial / Oftalmología",
    stem:
      "Joven golpeado por pelota presenta hipoestesia en mejilla, enfisema subcutáneo y diplopía con limitación para elevar la mirada. ¿Lesión más probable?",
    options: [
      "Fractura de pared medial con daño del canal nasolagrimal",
      "Fractura del piso orbitario con atrapamiento del recto inferior",
      "Fractura del techo orbitario con proptosis por hematoma epidural",
      "Fractura cigomática aislada sin compromiso orbitario"
    ],
    correctIndex: 1,
    feedbackCorrect:
      "El golpe con objeto grande aumenta presión orbitaria: fractura del piso (blow-out) → enoftalmos, hipoestesia infraorbitaria, diplopía por atrapamiento del recto/oblicuo inferior.",
    feedbackIncorrect:
      "La clínica clásica (enoftalmos/diplopía vertical/hipoestesia) orienta a piso orbitario, no pared medial o techo."
  },
  {
    id: "OJO-QUIMICO-LAVADO",
    topic: "Trauma ocular / Urgencias",
    stem:
      "Quemadura ocular por álcalis hace 10 minutos. ¿Cuál es la primera medida?",
    options: [
      "Aplicar corticoide tópico y ocluir",
      "Irrigación copiosa 15–30 min con al menos 3000 mL y monitoreo de pH",
      "Valorar con lámpara de hendidura antes del lavado",
      "Instilar antibiótico y proteger con parche compresivo"
    ],
    correctIndex: 1,
    feedbackCorrect:
      "En quemadura química lo esencial es lavado inmediato y abundante (cristaloide/agua), evertir párpados y vigilar pH hasta 7–8. No ocluir.",
    feedbackIncorrect:
      "Diferir el lavado empeora pronóstico. El parche compresivo está contraindicado en estas lesiones."
  },
  {
    id: "IA-INDICACION-CIRUGIA",
    topic: "Cardiología / Valvulopatías",
    stem:
      "Mujer asintomática con insuficiencia aórtica severa, FEVI 52% y diámetro telesistólico VI 51 mm. ¿Conducta?",
    options: [
      "Seguimiento anual con eco",
      "Iniciar vasodilatadores y reevaluar en 6 meses",
      "Indicar cirugía valvular por repercusión ventricular",
      "Resonancia magnética y esperar FEVI <50%"
    ],
    correctIndex: 2,
    feedbackCorrect:
      "En IA severa asintomática, FEVI <55% o DTSVI >50 mm (o >25 mm/m²) son criterios de cirugía electiva por repercusión ventricular.",
    feedbackIncorrect:
      "Esperar a que la FEVI caiga más aumenta riesgo de deterioro irreversible."
  },
  {
    id: "FERROPENIA-FERRITINA",
    topic: "Hematología",
    stem:
      "Adulto con fatiga, microcitosis y ferritina 22 ng/mL, sin datos inflamatorios. ¿Diagnóstico más probable?",
    options: [
      "Anemia por enfermedad crónica",
      "Anemia sideroblástica",
      "Anemia ferropénica",
      "Talasemia minor"
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Ferritina <30 ng/mL en ausencia de inflamación es muy sugestiva de ferropenia. La sideroblástica cursa con ferritina alta.",
    feedbackIncorrect:
      "La anemia de enfermedad crónica suele tener ferritina normal/alta; talasemia tiene VCM muy bajo con GR aumentados."
  },
  {
    id: "DM-CRITERIOS",
    topic: "Endocrinología",
    stem:
      "¿Cuál par confirma diabetes mellitus en un paciente asintomático?",
    options: [
      "A1c 6.6% y ayuno 119 mg/dL",
      "Ayuno 128 mg/dL y A1c 6.6% en días distintos",
      "Glucosa poscarga 186 mg/dL y A1c 6.4%",
      "Glucosa al azar 195 mg/dL sin síntomas"
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Se requieren dos pruebas alteradas (misma prueba en momentos distintos o pruebas diferentes) ≥ umbral: ayuno ≥126 y/o A1c ≥6.5% y/o PTOG ≥200 mg/dL.",
    feedbackIncorrect:
      "Un solo valor alterado no confirmado o cifras bajo umbral no establecen el diagnóstico en asintomáticos."
  },
  {
    id: "TOXI-DIF-ANTICOL-SEROT",
    topic: "Toxicología",
    stem:
      "Paciente agitado, hipertenso y taquicárdico con midriasis. Piel seca, anhidrosis y disminución del peristaltismo. ¿Toxidrome más probable?",
    options: [
      "Serotoninérgico",
      "Simpaticomimético",
      "Anticolinérgico",
      "Colinérgico"
    ],
    correctIndex: 2,
    feedbackCorrect:
      "El anticolinérgico cursa con piel seca/ caliente, midriasis, retención y peristaltismo disminuido. El serotoninérgico tiene hiperreflexia y peristaltismo aumentado.",
    feedbackIncorrect:
      "La diaforesis y la hiperreflexia orientan lejos del anticolinérgico; el simpaticomimético suele tener piel húmeda."
  },
  {
    id: "LEFORT-CLASIF",
    topic: "Trauma facial",
    stem:
      "La línea de fractura que pasa por sutura cigomático-frontal, raiz nasal y apófisis pterigoides corresponde a:",
    options: [
      "Le Fort I (horizontal)",
      "Le Fort II (piramidal)",
      "Le Fort III (disyunción craneofacial)",
      "Fractura naso-orbito-etmoidal"
    ],
    correctIndex: 2,
    feedbackCorrect:
      "Le Fort III es disyunción craneofacial con trazo alto que separa el macizo facial del cráneo a través de suturas frontocigomáticas y pterigoides.",
    feedbackIncorrect:
      "Le Fort II es piramidal más bajo; Le Fort I es horizontal maxilar."
  },
  {
    id: "PED-DDH-MANIOBRAS",
    topic: "Ortopedia pediátrica",
    stem:
      "En RN con sospecha de displasia del desarrollo de cadera, ¿qué pruebas clínicas son básicas?",
    options: [
      "Jobe y Neer",
      "Barlow y Ortolani",
      "Lachman y Pivot-Shift",
      "FABER y FADIR"
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Barlow (aducción y presión posterior) y Ortolani (abducción y presión anterior) buscan resalto/luxación reducible en DDH.",
    feedbackIncorrect:
      "Las otras pruebas evalúan hombro, rodilla o cadera en adultos, no DDH neonatal."
  },
  {
    id: "EPIFISIOLISIS-ADOLES",
    topic: "Ortopedia pediátrica",
    stem:
      "Adolescente obeso con cojera y dolor referido a rodilla; limitación de rotación interna de cadera. ¿Diagnóstico principal a descartar?",
    options: [
      "Sinovitis transitoria",
      "Epifisiolisis femoral proximal",
      "Perthes",
      "Osteocondritis disecante"
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Toda cojera en adolescente obeso es epifisiolisis hasta demostrar lo contrario; duele ingle/rodilla y limita RI/abducción.",
    feedbackIncorrect:
      "Perthes es 4–8 años; sinovitis transitoria asocia cuadro viral y cursa más leve."
  },
  {
    id: "MINOCA-ALG",
    topic: "Cardiología / MINOCA",
    stem:
      "Paciente con clínica y enzimas de IAM, coronarias sin lesiones obstructivas en angiografía. ¿Siguiente paso para etiología?",
    options: [
      "Iniciar anticoagulación indefinida",
      "OCT/IVUS coronario, ETT y RM cardiaca para filiar causa",
      "Dar de alta con AAS y estatina sin más estudios",
      "Solo prueba de esfuerzo convencional"
    ],
    correctIndex: 1,
    feedbackCorrect:
      "En MINOCA se recomienda imagen intracoronaria (OCT/IVUS) + ETT/RM para diferenciar rotura de placa, vasoespasmo, miocarditis, TCM, etc.",
    feedbackIncorrect:
      "Tratar como IAM genérico sin filiar etiología puede ser inadecuado; la prueba de esfuerzo no define causas de MINOCA."
  },
  {
    id: "LRA-KDIGO",
    topic: "Nefrología",
    stem:
      "En LRA por criterios KDIGO, ¿cuál hallazgo apoya origen prerrenal?",
    options: [
      "Sodio urinario alto con FeNa >2%",
      "Osm urinaria >500 mOsm/kg y FeNa <1%",
      "Cilindros granulosos y FeNa >2%",
      "Proteinuria en rango nefrótico"
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Prerrenal: FeNa <1% y osmU concentrada; intrínseca tubular suele tener FeNa >2% y cilindros granulosos.",
    feedbackIncorrect:
      "FeNa alta orienta a necrosis tubular aguda; proteinuria nefrótica sugiere glomerulopatía."
  },
  {
    id: "TLS-MANEJO",
    topic: "Onco-urgencias",
    stem:
      "Alto riesgo de síndrome de lisis tumoral previo a quimioterapia. ¿Medida clave de prevención inicial?",
    options: [
      "Restricción hídrica y alopurinol",
      "Hidratación vigorosa, control electrolítico y rasburicasa según riesgo",
      "Diuréticos de asa de rutina",
      "Bicarbonato para alcalinizar orina"
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Prevención: hidratación intensa, vigilancia estricta de electrolitos y uso de rasburicasa (o alopurinol en menor riesgo) según estratificación.",
    feedbackIncorrect:
      "Alcalinizar orina no es estándar; la diuresis forzada no es de rutina y puede ser perjudicial."
  },
  {
    id: "OBST-DG-GDM",
    topic: "Obstetricia",
    stem:
      "Gestante con FR para DM. ¿Tamizaje y prueba diagnóstica de elección?",
    options: [
      "Glucosa al azar en cada control",
      "PTOG 75 g en 24–28 semanas o antes si alto riesgo",
      "A1c trimestral",
      "Ayuno semanal"
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Se recomienda PTOG 75 g a las 24–28 semanas (o antes si alto riesgo) con puntos de corte estandarizados para DG.",
    feedbackIncorrect:
      "A1c no es prueba diagnóstica estándar de DG; el azar y el ayuno aislado no son suficientes."
  },
  {
    id: "OJO-ROJO-GL-UVE",
    topic: "Oftalmología",
    stem:
      "Ojo rojo doloroso: pupila midriática poco reactiva, AV muy baja y córnea opaca. ¿Diagnóstico más probable?",
    options: [
      "Uveítis anterior aguda",
      "Glaucoma agudo de ángulo cerrado",
      "Epiescleritis",
      "Queratitis herpética"
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Midriasis arreactiva + dolor intenso + AV muy baja + córnea edematosa sugieren glaucoma agudo. La uveítis suele tener miosis.",
    feedbackIncorrect:
      "La epiescleritis es benigna; la uveítis aguda da miosis; la queratitis no siempre da midriasis fija."
  },
  {
    id: "MRC-OBESIDAD-FARMACO",
    topic: "Endocrinología / Obesidad",
    stem:
      "Paciente con IMC 36 kg/m² y DM2 mal controlada pese a metformina. ¿Terapia con mayor beneficio metabólico y ponderal?",
    options: [
      "Añadir DPP-4",
      "Añadir agonista GLP-1 (p. ej., semaglutida)",
      "Añadir sulfonilurea",
      "Cambiar a insulina basal de inmediato"
    ],
    correctIndex: 1,
    feedbackCorrect:
      "Los agonistas GLP-1 mejoran control glucémico y reducen peso. DPP-4 es menos efectivo en peso; sulfonilureas pueden ganar peso.",
    feedbackIncorrect:
      "Iniciar insulina sin intentar GLP-1 en obesidad no aprovecha el beneficio ponderal; DPP-4 tiene menor efecto en A1c."
  },
];

// ===================== COMPONENTE PRINCIPAL =====================
export default function App() {
  const [stage, setStage] = useState("login"); // 'login' | 'menu' | 'exam' | 'result'
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]); // index seleccionado por pregunta, o null
  const [secondsLeft, setSecondsLeft] = useState(EXAM_DURATION_MIN * 60);
  const [startedAt, setStartedAt] = useState(null);
  const [finished, setFinished] = useState(false);

  // Cargar desde localStorage si está habilitado
  useEffect(() => {
    if (!ENABLE_PERSISTENCE) return;
    try {
      const raw = localStorage.getItem("simulacro_state_v1");
      if (raw) {
        const st = JSON.parse(raw);
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

  // Guardar a localStorage
  useEffect(() => {
    if (!ENABLE_PERSISTENCE) return;
    const payload = {
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

  // Timer
  useEffect(() => {
    if (stage !== "exam" || finished) return;
    const t = setInterval(() => setSecondsLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, [stage, finished]);

  // Auto-finalizar al llegar a 0
  useEffect(() => {
    if (stage === "exam" && secondsLeft === 0 && !finished) {
      handleFinish();
    }
  }, [secondsLeft, stage, finished]);

  const selectedAnswer = answers[current] ?? null;

  function handleLogin() {
    if (password === ACCESS_KEY) {
      setStage("menu");
      setAuthError("");
    } else {
      setAuthError("Clave incorrecta");
    }
  }

  function startExam() {
    // Barajar y tomar hasta 80
    const pool = shuffleArray(QUESTIONS);
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
    // si está en la última, finalizar
    handleFinish();
  }

  function prevQuestion() {
    if (current > 0) setCurrent((c) => c - 1);
  }

  function handleFinish() {
    setFinished(true);
    setStage("result");
  }

  // Cálculos de resultado
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

  // Exportar reporte JSON
  function exportReport() {
    const payload = {
      timestamp: new Date().toISOString(),
      durationMinutes: Math.round((EXAM_DURATION_MIN * 60 - secondsLeft) / 60),
      questions: questions.map((q, i) => ({
        id: q.id,
        topic: q.topic,
        stem: q.stem,
        chosen: answers[i],
        correctIndex: q.correctIndex,
        correct: answers[i] === q.correctIndex,
      })),
      result,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "reporte_simulacro.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Simulacro Médico</h1>
          {stage === "exam" && (
            <div className={`text-lg font-mono font-semibold ${secondsLeft <= 600 ? "text-red-600" : "text-slate-700"}`}>
              ⏳ {formatTime(secondsLeft)}
            </div>
          )}
        </div>
      </header>

      {/* LOGIN MODAL */}
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
            <p className="text-slate-600 mb-6">80 casos clínicos exigentes, 2 h 30 min, sin retroalimentación hasta el final.</p>
            <button
              onClick={startExam}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold"
            >
              Iniciar Simulacro
            </button>
            <div className="mt-6 text-sm text-slate-500">
              <p>Los casos abarcan: Urgencias, Medicina Interna, Cardiología, Endocrinología, Nefrología/Onco, Obstetricia, Oftalmología, Ortopedia.</p>
              <p>Progreso guardado localmente (solo en este navegador).</p>
            </div>
          </div>
        </main>
      )}

      {/* EXAMEN */}
      {stage === "exam" && (
        <main className="max-w-5xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-slate-600">Pregunta {current + 1} de {questions.length}</div>
            <div className="text-sm text-slate-600">Tiempo restante: <span className={`${secondsLeft <= 600 ? "text-red-600" : ""}`}>{formatTime(secondsLeft)}</span></div>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6">
            <div className="text-xs inline-block px-2 py-1 rounded-full bg-slate-100 text-slate-700 mb-2">{questions[current]?.topic}</div>
            <h3 className="text-xl font-semibold mb-4 leading-relaxed">{questions[current]?.stem}</h3>

            <div className="space-y-3">
              {questions[current]?.options.map((opt, idx) => {
                const selected = selectedAnswer === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => chooseOption(idx)}
                    className={`w-full text-left border rounded-xl px-4 py-3 transition ${selected ? "border-blue-600 bg-blue-50" : "border-slate-200 hover:border-slate-300"}`}
                  >
                    <span className="font-semibold mr-2">{String.fromCharCode(65 + idx)}.</span> {opt}
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
        <main className="max-w-6xl mx-auto px-4 py-10">
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
                  <div key={topic} className="">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="font-medium">{topic}</span>
                      <span className="text-slate-600">{info.correct}/{info.total} ({pct}%)</span>
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
                    <div className="text-xs inline-block px-2 py-1 rounded-full bg-slate-100 text-slate-700 mb-2">{q.topic}</div>
                    <p className="font-medium mb-2">{q.stem}</p>
                    <div className="text-sm mb-2">
                      <span className="font-semibold">Tu respuesta:</span> {chosen !== null ? `${String.fromCharCode(65 + chosen)}. ${q.options[chosen]}` : "(no respondida)"}
                    </div>
                    <div className="text-sm mb-2">
                      <span className="font-semibold">Respuesta correcta:</span> {String.fromCharCode(65 + correct)}. {q.options[correct]}
                    </div>
                    <div className={`text-sm ${isRight ? "text-emerald-700" : "text-rose-700"}`}>
                      {isRight ? q.feedbackCorrect : q.feedbackIncorrect}
                    </div>
                  </li>
                );
              })}
            </ol>

            <div className="flex gap-3 mt-6">
              <button onClick={() => setStage("menu")} className="px-4 py-2 rounded-lg border border-slate-300">Volver al menú</button>
              <button onClick={exportReport} className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold">Exportar reporte JSON</button>
            </div>
          </div>
        </main>
      )}

      <footer className="py-8 text-center text-xs text-slate-500">© {new Date().getFullYear()} Simulacro Médico • v1.0</footer>
    </div>
  );
}
