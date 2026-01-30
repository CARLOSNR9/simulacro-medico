import React, { useState, useRef, useEffect } from "react";
import Header from "./components/Header";
import LoginView from "./views/LoginView";
import MenuView from "./views/MenuView";
import ExamView from "./views/ExamView";
import ResultsView from "./views/ResultsView";
import DashboardView from "./views/DashboardView";
import { useExamEngine, EXAM_CATALOG } from "./hooks/useExamEngine";
import { useExamHistory } from "./hooks/useExamHistory";
import { formatTime } from "./utils/formatTime";
import { exportReportPDF } from "./utils/pdfExport";
import { useAuth } from "./hooks/useAuth";

const ACCESS_KEY = "DRJM25";

export default function App() {
  // Hook de autenticación
  const { user, loading, error: authError, loginWithGoogle, logout } = useAuth();
  const { saveResult } = useExamHistory();


  // Hook del motor del examen
  const engine = useExamEngine();
  const {
    stage, setStage, secondsLeft,
    handleReset, startExam, questions, current
  } = engine;

  // Ref para el reporte PDF
  const resultRef = useRef(null);

  // Efecto para sincronizar el stage con el estado de auth
  useEffect(() => {
    if (user) {
      // Si ya estábamos en login, pasamos a menu
      if (stage === "login") {
        setStage("menu");
      }
    } else {
      // Si no hay usuario, forzamos login
      setStage("login");
    }
  }, [user, stage, setStage]);

  // Lógica de salida del examen
  function handleExit() {
    if (window.confirm("¿Estás seguro de que quieres salir al menú? Se perderá el progreso actual de este examen.")) {
      handleReset();
      setStage("menu"); // Aseguramos volver al menú
    }
  }

  // Logout manual
  function handleLogout() {
    if (window.confirm("¿Cerrar sesión?")) {
      handleReset();
      logout();
    }
  }

  // Efecto para guardar resultado automáticamente
  useEffect(() => {
    if (engine.finished && user && engine.result) {
      // Evitar guardar duplicados si ya se guardó (podríamos usar un ref para flag)
      saveResult(user.uid, {
        examId: engine.currentExamId,
        examTitle: engine.examTitle,
        score: engine.result.score,
        correct: engine.result.correct,
        total: engine.result.total,
        wrong: engine.result.wrong,
        userEmail: user.email,
        userName: user.displayName || user.email.split('@')[0]
      });
    }
  }, [engine.finished]); // Dependencias: solo cuando cambia el estado de finalización

  // Exportar PDF
  function handleExportPDF() {
    exportReportPDF(resultRef.current, `reporte_${engine.currentExamId || "medico"}.pdf`);
  }

  function handleGoToDashboard() {
    setStage("dashboard");
  }

  function handleGoToAdmin() {
    setStage("admin-dashboard");
  }

  function handleBackToMenu() {
    setStage("menu");
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
          onLogin={loginWithGoogle}
          loading={loading}
          error={authError}
        />
      )}

      {stage === "menu" && (
        <MenuView
          user={user}
          exams={EXAM_CATALOG}
          onStartExam={startExam}
          onLogout={handleLogout}
          onGoToDashboard={handleGoToDashboard}
          onGoToAdmin={handleGoToAdmin}
        />
      )}

      {stage === "dashboard" && (
        <DashboardView
          user={user}
          onBack={handleBackToMenu}
        />
      )}

      {stage === "admin-dashboard" && (
        <React.Suspense fallback={<div>Cargando...</div>}>
          {/* Dynamic import to avoid circular dependencies or load only when needed */}
          {(() => {
            const AdminDashboardView = React.lazy(() => import("./views/AdminDashboardView"));
            return <AdminDashboardView user={user} onBack={handleBackToMenu} />;
          })()}
        </React.Suspense>
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
