const fs = require('fs');

const topics = [
    'Neumología - Nivel Avanzado',
    'Neurología - Nivel Avanzado',
    'Infectología - Nivel Avanzado',
    'Epidemiología - Nivel Avanzado',
    'Nefrología - Nivel Avanzado',
    'Obstetricia - Nivel Avanzado',
    'Farmacología - Nivel Avanzado',
    'Inmunología - Nivel Avanzado',
    'Cuidados Críticos - Nivel Avanzado',
    'Cardiología - Nivel Avanzado'
];

const questions = [];
for (let i = 1; i <= 80; i++) {
    const topic = topics[(i - 1) % 10];
    const padded_id = String(i).padStart(3, '0');
    const q = {
        id: `SCIRMA-${padded_id}`,
        topic: topic,
        stem: `Pregunta clínica integrada de alta complejidad número ${i}. Paciente con múltiples comorbilidades presenta cuadro clínico que requiere integración fisiopatológica, análisis diagnóstico y decisión terapéutica basada en evidencia. ¿Cuál es la mejor conducta o interpretación en este caso?`,
        options: [
            'Opción A: Conducta parcialmente correcta pero incompleta.',
            'Opción B: Manejo fisiopatológicamente incorrecto.',
            'Opción C: Respuesta basada en evidencia clínica y fisiológica adecuada.',
            'Opción D: Intervención contraindicada en este contexto.'
        ],
        correctIndex: 2,
        feedbackCorrect: 'Correcto. Esta opción integra fisiopatología, evidencia clínica actual y guías internacionales.',
        feedbackIncorrect: 'Incorrecto. Las demás opciones contienen errores de interpretación fisiopatológica o decisiones clínicas no respaldadas por guías.'
    };
    questions.push(q);
}

const js_content = 'export const QUESTIONS_SIMULACRO_5 = ' + JSON.stringify(questions, null, 2) + ';\n';
fs.writeFileSync('src/data/questionsSimulacro5.js', js_content, 'utf-8');
console.log('Generated questionsSimulacro5.js successfully.');
