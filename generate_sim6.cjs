const fs = require('fs');
const data = JSON.parse(fs.readFileSync('C:/Users/USUARIO/Downloads/Banco_Simulacro_Epidemiologia_80_Preguntas.json', 'utf8'));
fs.writeFileSync('src/data/questionsSimulacro6.js', 'export const QUESTIONS_SIMULACRO_6 = ' + JSON.stringify(data, null, 2) + ';');
console.log('Done');
