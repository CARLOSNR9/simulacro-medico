import React, { useState, useRef } from "react";
import Header from "./components/Header";
import LoginView from "./views/LoginView";
import MenuView from "./views/MenuView";
import ExamView from "./views/ExamView";
import ResultsView from "./views/ResultsView";
import { useExamEngine, EXAM_CATALOG } from "./hooks/useExamEngine";
import { formatTime } from "./utils/formatTime";
import { exportReportPDF } from "./utils/pdfExport";

const ACCESS_KEY = "DRJM25";

export default function App() {
  // Estado local para Auth (separado del engine del examen)
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  // Hook del motor del examen
  const engine = useExamEngine();
  const {
    stage, setStage, secondsLeft,
    handleReset, startExam, questions, current
  } = engine;

  // Ref para el reporte PDF
  const resultRef = useRef(null);

  // Lógica de Login
  function handleLogin() {
    if (password === ACCESS_KEY) {
      setStage("menu");
      setAuthError("");
    } else {
      setAuthError("Clave incorrecta");
    }
  }

  // Lógica de salida
  function handleExit() {
    if (window.confirm("¿Estás seguro de que quieres salir al menú? Se perderá el progreso actual de este examen.")) {
      handleReset();
    }
  }

  // Exportar PDF
  function handleExportPDF() {
    exportReportPDF(resultRef.current, `reporte_${engine.currentExamId || "medico"}.pdf`);
  }

  // Cálculo de progreso para el Header
  const progress = questions.length ? ((current + 1) / questions.length) * 100 : 0;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header
        formattedTime={formatTime(secondsLeft)}
        progress={progress}
        stage={stage}
        onExit={handleExit}
      />

      {stage === "login" && (
        <LoginView
          password={password}
          setPassword={setPassword}
          onLogin={handleLogin}
          error={authError}
        />
      )}

      {stage === "menu" && (
        <MenuView
          exams={EXAM_CATALOG}
          onStartExam={startExam}
        />
      )}

      {stage === "exam" && (
        <ExamView
          examTitle={engine.examTitle}
          current={engine.current}
          total={engine.questions.length}
          question={engine.questions[engine.current]}
          selectedAnswer={engine.answers[engine.current]}
          isMarked={engine.marked.includes(engine.current)}
          // Props para el Grid
          answers={engine.answers}
          marked={engine.marked}
          onJump={engine.jumpToQuestion}
          onOptionSelect={engine.chooseOption}
          onToggleMark={() => engine.toggleMark(engine.current)}
          onNext={engine.nextQuestion}
          onPrev={engine.prevQuestion}
        />
      )}

      {stage === "result" && (
        <ResultsView
          ref={resultRef}
          result={engine.result}
          examTitle={engine.examTitle}
          questions={engine.questions}
          answers={engine.answers}
          onReset={handleReset}
          onExportPDF={handleExportPDF}
        />
      )}

      <footer className="py-8 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Simulacro Médico DR Juan • v2.1 (Modular)
      </footer>
    </div>
  );
}
