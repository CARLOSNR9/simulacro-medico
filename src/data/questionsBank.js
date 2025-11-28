// Banco de preguntas clínicas auto-generado (Casos 1-10) - Estilo residencia Colombia
// Basado en los 40 PDFs proporcionados.

export const QUESTIONS_BANK = [
  {
    "id": "PED-BRONQ-001",
    "topic": "Pediatría / Bronquiolitis",
    "stem": "Lactante de 5 meses, con antecedente de prematurez (<32+0 semanas) que requirió oxígeno suplementario al nacer. Ingresa por 3 días de tos y dificultad respiratoria. Examen físico: Tiraje subcostal, frecuencia respiratoria de 55/min. Vive a 1800 msnm y la oximetría de pulso al aire ambiente es de 91%.",
    "options": [
      "Bronquiolitis moderada, iniciar oxigenoterapia si saturación cae a ≤ 90% y manejo ambulatorio.",
      "Bronquiolitis grave o de alto riesgo, iniciar oxígeno y prueba terapéutica con salbutamol inhalado.",
      "Bronquiolitis grave o de alto riesgo, iniciar ventilación con presión positiva continua (CPAP) por la hipoxemia.",
      "Bronquiolitis leve, iniciar antibióticos (Mycoplasma pneumoniae es causa común) y observación en casa."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "Este paciente cumple múltiples criterios de alto riesgo (menor de 6 meses con antecedente de prematurez) y gravedad (tiraje subcostal y saturación baja: ≤ 92% a 1800 msnm) [1-3]. La conducta inicial en bronquiolitis grave/alto riesgo es iniciar oxígeno y realizar una prueba terapéutica con salbutamol (2 inhalaciones cada 10 min x 3 veces) para evaluar mejoría [4].",
    "feedbackIncorrect": "La SaO2 de 91% a 1800 msnm está baja (corte ≤ 92%) y justifica oxígeno inmediato [2, 3]. El antecedente de prematurez menor de 6 meses lo clasifica inmediatamente como alto riesgo [3]. Los antibióticos no se recomiendan de rutina [5]."
  },
  {
    "id": "MEDINT-AR-002",
    "topic": "Medicina Interna / Artritis Reumatoide",
    "stem": "Mujer de 55 años que presenta poliartritis simétrica de 8 semanas de evolución, afectando ambas muñecas, 4 metacarpofalángicas (MCF) y 3 interfalángicas proximales (IFP). La rigidez matutina es de 90 minutos. Laboratorios: VSG 60 mm/h (elevada). Factor Reumatoideo (FR) positivo con títulos altos y Anticuerpos Anti-CCP positivos con títulos bajos.",
    "options": [
      "4 puntos; Artritis Reumatoidea no definida, requiere seguimiento en 6 meses.",
      "6 puntos; Artritis Reumatoidea definida, tratamiento con AINEs solamente.",
      "8 puntos; Artritis Reumatoidea definida, iniciar FAMEs (Metotrexato).",
      "5 puntos; Clasificación de Artritis de grandes articulaciones, descartar Osteoartritis."
    ],
    "correctIndex": 2,
    "feedbackCorrect": "Se aplica la clasificación ACR/EULAR 2010. Articulaciones afectadas (muñecas, MCF, IFP) son pequeñas. Total de articulaciones pequeñas afectadas (7) entra en el rango de 4-10, lo que otorga 3 puntos [6]. Serología (FR alto o CCP bajo/alto): 3 puntos [6]. Duración ≥ 6 semanas: 1 punto [7]. Reactantes de fase aguda elevados (VSG): 1 punto [7]. Total = 3 + 3 + 1 + 1 = 8 puntos. Un puntaje ≥ 6 define Artritis Reumatoidea [7]. El tratamiento de primera línea es el metotrexato (FAME) [8].",
    "feedbackIncorrect": "El puntaje es 8, que define AR. Los AINEs no modifican la evolución, solo alivian el dolor [8]. La afectación de muñecas, MCF e IFP es característica de AR, no de artrosis [9]."
  },
  {
    "id": "CIRUGIA-COLECIST-003",
    "topic": "Cirugía General / Colecistitis Aguda",
    "stem": "Paciente masculino de 45 años, con antecedente de colelitiasis. Presenta dolor intenso y continuo en hipocondrio derecho de 12 horas de evolución, asociado a fiebre de 38.5°C y náuseas. El examen físico es positivo para el signo de Murphy. Hemograma con leucocitosis (15.000/uL). La ecografía abdominal reporta engrosamiento de la pared vesicular a 5 mm.",
    "options": [
      "Sospecha diagnóstica de Colecistitis Aguda, requiere TAC para confirmación.",
      "Diagnóstico definitivo de Colecistitis Aguda.",
      "Cólico biliar, ya que la duración del dolor es mayor a 6 horas.",
      "Sospecha diagnóstica de Colecistitis Crónica."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "Según los Criterios de Tokio 2018, se cumplen los tres componentes para el diagnóstico definitivo de Colecistitis Aguda: Criterio A (Inflamación local: Murphy positivo y dolor) [10]; Criterio B (Signos Sistémicos: Fiebre y Leucocitosis) [11]; Criterio C (Hallazgos imagenológicos: grosor de pared > 4mm) [11].",
    "feedbackIncorrect": "El cólico biliar típicamente dura menos de 6 horas [12]. La presencia de fiebre y leucocitosis, sumada a los hallazgos ecográficos, descarta el cólico biliar simple y la colecistitis crónica [13, 14]. Se cumplen todos los criterios para diagnóstico definitivo."
  },
  {
    "id": "URG-TRAUMA-004",
    "topic": "Urgencias / Trauma Vascular de Extremidades",
    "stem": "Varón de 30 años ingresa a urgencias con una herida por proyectil de arma de fuego en el muslo, presentando sangrado activo pulsátil y ausencia de pulso distal. La presión arterial sistólica es de 75 mmHg. No presenta traumatismo craneoencefálico (TEC). Se ha aplicado un torniquete provisional sin lograr detener completamente la hemorragia.",
    "options": [
      "Reanimación agresiva con cristaloides hasta alcanzar PAS > 120 mmHg para asegurar la perfusión cerebral.",
      "Hipotensión permisiva con una meta de PAS entre 80 y 90 mmHg, limitando el volumen de cristaloides.",
      "Manejo con torniquete continuo y administrar hemoderivados sin límites hasta normotensión.",
      "Iniciar inmediatamente norepinefrina, ya que la hipotensión no responde a la compresión local."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "En el contexto de trauma vascular y choque hipovolémico, la estrategia recomendada es la hipotensión permisiva (PAS entre 80 y 90 mmHg) con el fin de mantener el flujo mínimo a órganos vitales mientras se lleva al paciente a quirófano para la corrección [15, 16]. Se debe limitar el volumen de cristaloides y considerar el uso temprano de hemoderivados [15]. La hipotensión permisiva está contraindicada en pacientes con TEC coexistente [16], lo cual no es el caso.",
    "feedbackIncorrect": "Una PAS > 120 mmHg puede aumentar el sangrado ('reventar el coágulo'). La meta de PAS de 80-90 mmHg es la indicada para la hipotensión permisiva [16]. La norepinefrina se utiliza en shock que no responde a la reanimación hídrica, pero la prioridad es la hipotensión permisiva en este contexto sin TEC [15, 16]."
  },
  {
    "id": "ORTO-FRACT-005",
    "topic": "Ortopedia / Fracturas de Radio y Cúbito",
    "stem": "Un paciente de 25 años sufre una caída y presenta dolor y deformidad en el antebrazo. Las radiografías confirman una fractura del tercio distal de la diáfisis del radio asociada a luxación de la articulación radio-cubital distal.",
    "options": [
      "Fractura de Monteggia; Férula braquimetacarpiana.",
      "Fractura de Smith; Férula de coaptación.",
      "Luxo-fractura de Galeazzi; Férula pinza de azúcar.",
      "Fractura de Barton; Férula espica al pulgar."
    ],
    "correctIndex": 2,
    "feedbackCorrect": "La fractura del tercio distal de la diáfisis del radio junto con la luxación de la articulación radio-cubital distal es la Luxo-fractura de Galeazzi [17]. La inmovilización inicial recomendada para las fracturas del radio diafisario y distal es la Férula pinza de azúcar [18].",
    "feedbackIncorrect": "La luxo-fractura de Monteggia es la fractura del tercio proximal del cúbito con luxación de la cúpula radial [19]. La fractura de Smith es una fractura extraarticular del radio distal con desplazamiento volar [20]. La Férula braquimetacarpiana es la inmovilización inicial para fracturas de codo como las supracondileas o de olécranon [21, 22]."
  },
  {
    "id": "CARDIO-SCA-006",
    "topic": "Medicina Interna / SCA - Biomarcadores",
    "stem": "Paciente de 70 años, diabético con enfermedad renal crónica (TFG 55 ml/min), ingresa por dolor torácico. Se solicita Troponina T ultrasensible. El valor inicial es positivo, 5 veces por encima del límite de normalidad. Una hora después, el valor de la segunda toma se ha incrementado en un 15% respecto a la primera medición.",
    "options": [
      "Infarto Agudo de Miocardio sin elevación del ST (IAMSEST), debe ser llevado a ICP urgente.",
      "Injuria miocárdica aguda, debido a que el valor inicial es 5 veces superior al límite de normalidad.",
      "Angina Inestable (AI), ya que el aumento porcentual es inferior al 20% en 1 hora.",
      "Lesión miocárdica crónica, debido a la ausencia de un delta significativo."
    ],
    "correctIndex": 3,
    "feedbackCorrect": "Se considera que un valor positivo de Troponina en la primera toma con un cambio (delta) inferior al 20% entre mediciones (en este caso 15%) se interpreta como lesión miocárdica crónica, lo cual es común en pacientes con comorbilidades como la enfermedad renal crónica [23]. Para confirmar lesión miocárdica aguda (IAM), el cambio debe ser superior al 20% (delta significativo) [23, 24].",
    "feedbackIncorrect": "Aunque el valor inicial es alto (injuria miocárdica) [25], la definición de IAM Agudo requiere un delta significativo (> 20%) para considerarse aguda [23]. La Angina Inestable se diferencia del IAMSEST precisamente por la ausencia de necrosis, es decir, biomarcadores negativos [24]."
  },
  {
    "id": "GYN-SOP-007",
    "topic": "Ginecología / Síndrome de Ovario Poliquístico (SOP)",
    "stem": "Mujer de 28 años con diagnóstico de oligomenorrea desde la adolescencia e hirsutismo moderado. Los análisis hormonales confirman hiperandrogenismo bioquímico (testosterona libre elevada). La ecografía transvaginal reporta un volumen ovárico derecho de 9.5 ml y 22 folículos por ovario en el izquierdo. No busca gestación actualmente.",
    "options": [
      "Fenotipo D (normoandrogénico); el tratamiento de primera línea es Metformina.",
      "Fenotipo B; se cumplen 2 de los 3 criterios de Rotterdam.",
      "Fenotipo A; cumple los 3 criterios de Rotterdam, el tratamiento de primera línea son los ACOs.",
      "Fenotipo C; el tratamiento debe ser espironolactona debido al hirsutismo."
    ],
    "correctIndex": 2,
    "feedbackCorrect": "La paciente cumple los tres criterios de Rotterdam (Fenotipo A, el más frecuente) [26, 27]: 1. Oligoovulación (Oligoovulación/anovulación) [27]. 2. Hiperandrogenismo (clínico y bioquímico) [27]. 3. Morfología de ovarios poliquísticos (≥ 20 folículos en un ovario) [28]. El tratamiento de primera línea en pacientes que no buscan gestación son los anticonceptivos orales combinados (ACOs) para proteger el endometrio y disminuir andrógenos ováricos [29, 30].",
    "feedbackIncorrect": "El Fenotipo D no presenta hiperandrogenismo [31]. El Fenotipo B presenta hiperandrogenismo y oligoovulación sin alteraciones morfológicas [26]. La espironolactona es un antiandrógeno que se adiciona a los ACOs si el hirsutismo persiste tras 6 meses [30, 32]."
  },
  {
    "id": "PSIQUI-FARMACOS-008",
    "topic": "Psiquiatría / Estabilizadores del Ánimo",
    "stem": "Paciente de 35 años inicia tratamiento con Carbonato de Litio por un episodio maníaco agudo (dosis inicial 1200 mg/día). Seis meses después, acude a consulta por poliuria, polidipsia y nicturia. Los análisis muestran hiponatremia y una litemia terapéutica de 0.8 mEq/L (rango de mantenimiento 0.6-1.2 mEq/L).",
    "options": [
      "Toxicidad por Litio, debe suspenderse inmediatamente y tratar con hemodiálisis.",
      "Diabetes insípida nefrogénica; el fármaco es Categoría D en el embarazo.",
      "Hipotiroidismo inducido por Litio; requiere inicio de levotiroxina.",
      "SIHAD (Síndrome de secreción inadecuada de ADH); requiere restricción hídrica."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "La poliuria, polidipsia, nicturia e hiponatremia son manifestaciones de la diabetes insípida nefrogénica, un efecto adverso del Litio [33, 34]. El Litio es Categoría D en el embarazo por su asociación con malformaciones cardíacas como la anomalía de Ebstein [34].",
    "feedbackIncorrect": "Aunque el litio tiene un margen terapéutico estrecho, el paciente tiene litemia normal (0.8 mEq/L) para mantenimiento [35, 36]. La diabetes insípida nefrogénica se caracteriza por poliuria, poliuria, nicturia e hiponatremia [33, 34]. El hipotiroidismo es un efecto adverso, pero la clínica de poliuria no es su presentación principal [34]."
  },
  {
    "id": "EPIDEMI-DIAG-009",
    "topic": "Epidemiología Clínica / Pruebas Diagnósticas",
    "stem": "Se está evaluando una nueva prueba diagnóstica para una enfermedad poco frecuente. El Gold Standard es invasivo, pero la prueba nueva tiene una sensibilidad de 98% y una especificidad de 95%. La prevalencia de la enfermedad en la población de tamizaje es del 1%.",
    "options": [
      "La sensibilidad y especificidad son intrínsecas y no se afectan por la prevalencia poblacional.",
      "Debido a la baja prevalencia, se espera un Valor Predictivo Negativo (VPN) bajo.",
      "Debido a la baja prevalencia, se espera un Valor Predictivo Positivo (VPP) bajo.",
      "El VPP incrementará si la prevalencia se mantiene baja."
    ],
    "correctIndex": 2,
    "feedbackCorrect": "Los valores predictivos (VPP y VPN) son influenciados por la prevalencia de la enfermedad [37]. El VPP se correlaciona directamente con la prevalencia: si la prevalencia de la enfermedad es baja (1%), el VPP será bajo (muchos falsos positivos) [38, 39].",
    "feedbackIncorrect": "La sensibilidad y especificidad son propiedades intrínsecas que no se afectan por la prevalencia [37]. El VPN disminuye cuando aumenta la prevalencia (se correlaciona inversamente), por lo que en este caso (baja prevalencia) el VPN sería alto [37, 39]."
  },
  {
    "id": "DERMA-MELANOMA-010",
    "topic": "Dermatología / Melanoma - Pronóstico",
    "stem": "Paciente masculino de 60 años es diagnosticado con Melanoma Nodular en el tronco. La biopsia reporta un grosor de Breslow de 4.5 mm, ulcerado. El paciente tiene una linfoadenopatía inguinal palpable ipsilateral. Seis meses después se confirma metástasis a distancia.",
    "options": [
      "El factor pronóstico más importante es el Nivel de Clark y se debe realizar imágenes diagnósticas iniciales.",
      "El grosor del tumor (>4 mm) confiere un muy mal pronóstico (supervivencia a 5 años del 50%).",
      "La variante nodular es la más frecuente en Colombia y tiene mejor pronóstico que el Lentiginoso Acral.",
      "El diagnóstico de metástasis indica que es elegible para el tratamiento con Ipilimumab, pero no con Vemurafenib."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "El Índice de Breslow es el factor pronóstico más importante en el melanoma [40]. Un grosor superior a 4 mm indica muy mal pronóstico, con una supervivencia a 5 años del 50% [40]. Dado que el paciente tiene compromiso ganglionar (N positivo) y metástasis (M positivo), el pronóstico es pobre [41, 42].",
    "feedbackIncorrect": "El factor pronóstico más importante es el Índice de Breslow, no el Nivel de Clark [40]. La variante más frecuente en Colombia es el Melanoma Lentiginoso Acral [43]. La enfermedad diseminada (metástasis) puede ser tratada tanto con Terapia Dirigida (Vemurafenib, Dabrafenib, si tiene mutación BRAF) como con Inmunoterapia (Ipilimumab, Nivolumab, Pembrolizumab), independientemente del estado del gen BRAF [44, 45]."
  },

  {
    "id": "GYN-SEPSIS-011",
    "topic": "Ginecología / Sepsis Puerperal (Endometritis)",
    "stem": "Puérpera de 3 días post-cesárea emergente. Ingresa por fiebre (39°C), dolor intenso en hipogastrio y loquios fétidos. El tacto vaginal es doloroso. Hemograma con leucocitosis. Se diagnostica Endometritis Puerperal. ¿Cuál es el esquema antibiótico de elección recomendado que ha mostrado menor falla terapéutica?",
    "options": [
      "Ampicilina sulbactam IV cada 6 horas.",
      "Clindamicina 900 mg IV cada 8 horas más Gentamicina 3-5 mg/kg/día IV.",
      "Vancomicina 1 gr IV cada 12 horas (por el riesgo de Staphilococcus).",
      "Cefazolina 1 gr IV cada 8 horas más Metronidazol 500 mg IV cada 8 horas."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "Para el tratamiento de la Endometritis Puerperal, la asociación de Clindamicina (900 mg cada 8 horas) más Gentamicina (3-5 mg/kg/día IV) es la que ha mostrado menor falla terapéutica [1].",
    "feedbackIncorrect": "El esquema de Clindamicina más Gentamicina es el de elección. Ampicilina sulbactam se considera en caso de no mejoría clínica después de 48-72 horas, ante sospecha de colonización por Estreptococo del grupo B. Vancomicina se usa en caso de alergia a la penicilina [1]."
  },
  {
    "id": "RN-ASFIXIA-012",
    "topic": "Pediatría / Reanimación Neonatal",
    "stem": "Neonato a término que nace no vigoroso. Se le realiza secado y posicionamiento. Después de 30 segundos de Ventilación con Presión Positiva (VPP) efectiva, su frecuencia cardíaca (FC) es de 50 latidos por minuto (lpm). La oximetría preductal marca 85%.",
    "options": [
      "Continuar la VPP y solicitar monitoreo de ECG.",
      "Administrar Adrenalina intravenosa y continuar VPP.",
      "Iniciar inmediatamente compresiones torácicas con una relación 3:1.",
      "Intubar al paciente para asegurar la vía aérea y aspirar secreciones."
    ],
    "correctIndex": 2,
    "feedbackCorrect": "Según el algoritmo de Reanimación Neonatal, si la frecuencia cardíaca es menor a 60 lpm después de 30 segundos de VPP adecuada, se debe iniciar compresiones torácicas con una relación de 3:1 (3 compresiones por 1 ventilación) [2, 3].",
    "feedbackIncorrect": "La adrenalina solo se administra si la FC sigue siendo menor a 60 lpm después de 30 segundos de VPP y compresiones torácicas adecuadas [4]. La prioridad en este punto es el masaje cardíaco junto a la ventilación."
  },
  {
    "id": "TRAUMA-TRM-013",
    "topic": "Ortopedia / Trauma Raquimedular (TRM)",
    "stem": "Hombre de 35 años, víctima de accidente en motocicleta. Presenta lesión medular completa a nivel de C7. Después de 48 horas, se clasifica como ASIA A. ¿Cuál es la indicación de manejo quirúrgico primario en este paciente?",
    "options": [
      "Cirugía descompresiva urgente en las primeras 24 horas para mejorar la función motora.",
      "Cirugía diferida para estabilización y fijación, con el fin de facilitar la sedestación y disminuir el dolor.",
      "Manejo conservador estricto, dado que la lesión ASIA A tiene 85% de no recuperación motora.",
      "El manejo se basa en la resolución del choque medular y no requiere intervención quirúrgica."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "Los pacientes clasificados como ASIA A (lesión completa) tienen perspectivas limitadas de recuperación funcional [5, 6]. El objetivo de la cirugía en estos casos (cirugía diferida) es la estabilización y fijación de fracturas inestables para facilitar la sedestación y el proceso de rehabilitación, y para disminuir el dolor, pero no se ofrece recuperación funcional [7].",
    "feedbackIncorrect": "La cirugía descompresiva urgente (primeras 24 horas) está indicada en lesiones incompletas (ASIA B, C, o D) con potencial de recuperación, no en ASIA A [8, 9]. El manejo conservador sin fijación puede dificultar la rehabilitación."
  },
  {
    "id": "PED-CF-014",
    "topic": "Pediatría / Convulsiones Febriles",
    "stem": "Lactante de 18 meses presenta una convulsión tónico-clónica generalizada de 5 minutos, asociada a otitis media aguda. Recupera rápidamente la conciencia. No tiene antecedentes neurológicos previos ni familiares con epilepsia. ¿Cuál es el factor que más fuertemente se relaciona con el incremento del riesgo de desarrollar epilepsia en el futuro?",
    "options": [
      "La corta duración de la convulsión (menor a 15 minutos).",
      "La edad de inicio temprana de la primera crisis (menor a 3 años).",
      "La clasificación de la crisis como compleja (ej. focalidad o duración >15 min).",
      "La aparición de la crisis dentro de la primera hora de inicio de la fiebre."
    ],
    "correctIndex": 2,
    "feedbackCorrect": "Los factores de riesgo más importantes para el desarrollo de epilepsia incluyen: retraso en el neurodesarrollo o examen neurológico anormal previo, **crisis febril compleja**, antecedente familiar de epilepsia y la ocurrencia de 4 o más convulsiones febriles [10].",
    "feedbackIncorrect": "La corta duración de la crisis (<15 min) define una crisis simple, que conlleva un riesgo bajo de epilepsia (1-2%) [11]. La aparición de la crisis dentro de la primera hora del inicio de la fiebre es un factor de riesgo de recurrencia, no necesariamente de epilepsia [12]."
  },
  {
    "id": "ANEST-AL-015",
    "topic": "Anestesiología / Toxicidad por Anestésicos Locales (AL)",
    "stem": "Paciente de 60 kg recibe 12 ml de Bupivacaína al 0.5% (60 mg) para un bloqueo nervioso. Inmediatamente presenta tinnitus, convulsiones tónico-clónicas y posteriormente, inestabilidad hemodinámica y bradicardia. ¿Cuál es la estrategia de manejo de la toxicidad cardiovascular por anestésicos locales?",
    "options": [
      "Administrar Fenitoína IV para el control de convulsiones y atropina para la bradicardia.",
      "Reanimación cardiopulmonar agresiva y sostenida acompañada de emulsión lipídica IV (Intralipid).",
      "Infundir solución salina normal rápidamente para expansión de volumen y norepinefrina para la hipotensión.",
      "Administrar bolos de propofol para las convulsiones y amiodarona para las arritmias ventriculares."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "La toxicidad cardiovascular por AL (especialmente Bupivacaína, que es la más cardiotóxica [13]) requiere reanimación cardiopulmonar agresiva y sostenida, acompañada de la administración intravenosa de emulsión lipídica (Intralipid) [14]. Las convulsiones se manejan con benzodiacepinas (ej. Diazepam) [13].",
    "feedbackIncorrect": "Aunque las convulsiones se manejan con benzodiacepinas, la pregunta se centra en la inestabilidad cardiovascular. En caso de inestabilidad hemodinámica o paro, la emulsión lipídica IV es la medida específica y prioritaria [14]. Fenitoína y Propofol no son el tratamiento de primera línea para la cardiotoxicidad inducida por AL."
  },
  {
    "id": "MEDINT-EH-016",
    "topic": "Medicina Interna / Emergencias Hipertensivas",
    "stem": "Paciente de 75 años ingresa a urgencias con dolor torácico súbito, intenso y desgarrante que se irradia a la espalda. La presión arterial es de 210/125 mmHg. Se sospecha Síndrome Aórtico Agudo (disección aórtica). ¿Cuál es la meta terapéutica y el agente farmacológico de primera línea?",
    "options": [
      "Reducción inicial del 25% de la PAS en la primera hora usando Labetalol.",
      "Mantener PAS < 140 mmHg usando Nitroglicerina, por sospecha de IAM concurrente.",
      "Descenso rápido de PAS < 120 mmHg y Frecuencia Cardíaca (FC) < 60 lpm, usando Esmolol.",
      "Nitroprusiato para reducción inmediata, con meta de PAS 160 mmHg en 24 horas."
    ],
    "correctIndex": 2,
    "feedbackCorrect": "En el Síndrome Aórtico Agudo (que es una emergencia hipertensiva), la meta es un descenso rápido y estricto de la PAS a < 120 mmHg y la FC a < 60 lpm, siendo el Esmolol el agente de primera línea recomendado [15].",
    "feedbackIncorrect": "La reducción del 25% es para la mayoría de las emergencias hipertensivas, pero el Síndrome Aórtico Agudo requiere metas más estrictas y rápidas. La Nitroglicerina es primera línea para Edema Pulmonar Cardiogénico y el IAM, no para la disección aórtica, donde el control de la FC es crucial y se logra con Betabloqueadores como el Esmolol [15]."
  },
  {
    "id": "GENETICA-AR-017",
    "topic": "Genética / Herencia Autosómica Recesiva",
    "stem": "Una pareja asintomática acude a consejería genética. Ambos son portadores heterocigotos para una enfermedad autosómica recesiva. ¿Cuál es la probabilidad de que su primer hijo nazca afectado por esta enfermedad?",
    "options": [
      "75%, ya que la enfermedad autosómica recesiva salta generaciones.",
      "50%, ya que el gen recesivo requiere de un alelo de cada padre.",
      "25%, ya que el hijo debe ser homocigoto para el alelo recesivo.",
      "0%, ya que al ser los padres sanos, la enfermedad no se expresará."
    ],
    "correctIndex": 2,
    "feedbackCorrect": "Cuando ambos padres son portadores sanos (heterocigotos), existe un riesgo del **25%** de tener hijos afectados o enfermos (homocigotos para el gen recesivo), un 50% de hijos sanos portadores y un 25% de hijos sanos no portadores [16, 17].",
    "feedbackIncorrect": "El 50% es la probabilidad de que el hijo sea portador sano (heterocigoto). El 75% es la probabilidad de tener un hijo sano (portador o no portador) [17]."
  },
  {
    "id": "QUEMADOS-MANEJO-018",
    "topic": "Urgencias / Enfoque del Paciente Quemado",
    "stem": "Un paciente de 25 años presenta una quemadura de segundo grado profundo en el 5% de su Superficie Corporal Quemada (SCQ) en el tronco, y una quemadura de tercer grado en el 2% de SCQ que compromete el dorso de la mano y los dedos.",
    "options": [
      "Manejo ambulatorio con curaciones, ya que la SCQ total es < 10% y es un adulto sano.",
      "Manejo intrahospitalario, pero no requiere remisión a la Unidad de Quemados por tener SCQ < 20%.",
      "Remisión obligatoria a una Unidad de Quemados, debido a la localización de la lesión.",
      "Iniciar reanimación hídrica inmediata con la fórmula de Parkland modificada (2ml x Kg x %SCQ)."
    ],
    "correctIndex": 2,
    "feedbackCorrect": "La remisión a un Centro con Unidad de Quemados está indicada en todo paciente con quemaduras de segundo o tercer grado que involucren cara, manos, pies, genitales, periné o sobre cualquier articulación, independientemente del porcentaje total de SCQ [18]. La lesión en la mano y dedos es un criterio absoluto de remisión.",
    "feedbackIncorrect": "La reanimación hídrica se inicia en adultos con SCQ > 20% [19]. Aunque la SCQ es baja, el compromiso de la mano es un criterio de remisión y tratamiento especializado [18]."
  },
  {
    "id": "PSIQUI-FARMACOS-019",
    "topic": "Psiquiatría / Antipsicóticos Atípicos",
    "stem": "Mujer de 30 años con esquizofrenia en fase de mantenimiento. Se prioriza un antipsicótico atípico con mínima probabilidad de producir síntomas extrapiramidales, a pesar de que pueda tener un riesgo metabólico moderado. ¿Cuál antipsicótico se ajusta mejor a esta descripción?",
    "options": [
      "Haloperidol (típico, con mayor riesgo de extrapiramidalismo).",
      "Risperidona (antipsicótico con mayor riesgo de extrapiramidalismo).",
      "Quetiapina (casi nulos efectos extrapiramidales).",
      "Clozapina (Gold Standard para esquizofrenia refractaria)."
    ],
    "correctIndex": 2,
    "feedbackCorrect": "Los antipsicóticos atípicos se usan en fase de mantenimiento y tienen menos efectos extrapiramidales que los típicos [20]. La Quetiapina se caracteriza por tener **casi nulos efectos extrapiramidales** y es la elección en Parkinsonismo [21].",
    "feedbackIncorrect": "Haloperidol es un típico con alto riesgo extrapiramidal [22]. La Risperidona, aunque es atípico, es el antipsicótico con mayor riesgo de extrapiramidalismo de su clase [23]. Clozapina se reserva como Gold Standard para casos refractarios y requiere monitoreo estricto (agranulocitosis) [24]."
  },
  {
    "id": "URG-OFIDICO-020",
    "topic": "Urgencias / Accidente Ofídico",
    "stem": "Joven de 18 años es mordido en el antebrazo por una serpiente Bothrops asper (X Mapaná) que se estima medía 1.20 metros. Presenta edema en 3 segmentos de la extremidad. Las pruebas de coagulación están prolongadas (TP/PTT). No hay compromiso hemodinámico. ¿Cómo se clasifica y cuál es el número de ampollas de antiveneno INS que debe recibir?",
    "options": [
      "Accidente moderado; 4 ampollas de antiveneno.",
      "Accidente grave; 4 ampollas de antiveneno.",
      "Accidente grave; 6 ampollas de antiveneno.",
      "Accidente leve; 2 ampollas de antiveneno."
    ],
    "correctIndex": 2,
    "feedbackCorrect": "El accidente ofídico se clasifica como Grave si presenta edema en 3 o más segmentos o si el ofidio es mayor a 1 metro, o si compromete cara/cuello [25]. Este paciente cumple dos criterios de gravedad. Para un accidente grave, se requieren 6 ampollas de antiveneno del INS [26].",
    "feedbackIncorrect": "Aunque el paciente no tiene choque hemodinámico, el tamaño del ofidio (> 1 metro) clasifica el accidente automáticamente como grave [25]. La dosis para un accidente moderado es de 4 ampollas del INS [26]."
  },

  {
    "id": "DERMA-MELANOMA-021",
    "topic": "Dermatología / Melanoma - Tratamiento",
    "stem": "Un paciente es diagnosticado con Melanoma de Extensión Superficial con un índice de Breslow de 1.8 mm, no ulcerado y sin compromiso ganglionar confirmado. ¿Cuál es el margen de extirpación quirúrgica recomendado en el segundo tiempo y a partir de qué estadio se recomienda la realización de imágenes diagnósticas para estadificación inicial?",
    "options": [
      "Margen de 1 cm; imágenes diagnósticas desde el estadio IB.",
      "Margen de 2 cm; imágenes diagnósticas desde el estadio III.",
      "Margen de 1 cm; imágenes diagnósticas desde el estadio IIIA.",
      "Margen de 1-2 cm; imágenes diagnósticas desde el estadio IIIA."
    ],
    "correctIndex": 3,
    "feedbackCorrect": "Un Breslow entre 1 y 2 mm requiere un margen quirúrgico de 1 a 2 cm. Según las guías, se recomienda realizar imágenes para la estadificación inicial desde el estadio IIIA en adelante.",
    "feedbackIncorrect": "El margen de 1 cm se recomienda para tumores menores o iguales a 1 mm o in situ. El margen de 2 cm aplica para tumores de 2 mm o más. El corte para estadificación con imágenes es el estadio IIIA, no IB ni exclusivamente el estadio III."
  },
  {
    "id": "PED-BRONQ-022",
    "topic": "Pediatría / Bronquiolitis - Prevención",
    "stem": "Se evalúa un recién nacido de 30+0 semanas de gestación que requirió oxígeno suplementario durante 35 días después del nacimiento. Actualmente tiene 4 meses de edad y está en el pico estacional del Virus Sincitial Respiratorio (VSR). ¿Cuál es la indicación de prevención para este lactante?",
    "options": [
      "Vacunación con Palivizumab hasta los 12 meses de vida.",
      "Administrar Palivizumab sólo si tiene cardiopatía congénita con compromiso hemodinámico.",
      "Palivizumab no está indicado, ya que los prematuros sanos de 29+0 semanas o más tienen riesgo similar a los nacidos a término.",
      "Se debe indicar Palivizumab durante el primer año de vida por ser prematuro menor de 32+0 semanas que requirió oxígeno suplementario por más de 28 días."
    ],
    "correctIndex": 3,
    "feedbackCorrect": "El Palivizumab debe indicarse durante el primer año de vida en lactantes con compromiso hemodinámico por patología cardíaca, patología pulmonar crónica o prematuros menores de 32+0 semanas de gestación que requirieron oxígeno suplementario por al menos 28 días de vida. Este paciente cumple este criterio.",
    "feedbackIncorrect": "En este caso, la indicación no depende de la cardiopatía. La exclusión de Palivizumab aplica a lactantes sanos de 29+0 semanas o más que NO requirieron oxígeno suplementario por al menos 28 días. Este paciente es menor de 32 semanas y requirió oxígeno más de 28 días."
  },
  {
    "id": "PSIQUI-FARMACOS-023",
    "topic": "Psiquiatría / Ácido Valproico",
    "stem": "Paciente de 25 años con Trastorno Afectivo Bipolar (TAB) y ciclos rápidos, se inicia tratamiento con Ácido Valproico. ¿Cuál de los siguientes es un predictor de buena respuesta a este fármaco y la acción inmediata que debe realizarse antes de iniciar el tratamiento?",
    "options": [
      "Curso episódico de la enfermedad; solicitar litemia y función tiroidea.",
      "Episodios maniacos con síntomas mixtos; solicitar hemograma, función hepática y prueba de embarazo.",
      "Sexo masculino y no ciclaje rápido; solicitar panel de tóxicos y ECG.",
      "Ausencia de comorbilidad con migraña; solicitar niveles de carbamazepina."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "Los episodios maniacos con síntomas mixtos y el ciclaje rápido son predictores de buena respuesta al Ácido Valproico. Antes de iniciar el tratamiento se debe solicitar hemograma, función hepática y prueba de embarazo, dado su potencial teratogénico.",
    "feedbackIncorrect": "El curso episódico y la ausencia de ciclaje rápido predicen mejor respuesta al Litio, no al Valproico. La litemia y la función tiroidea se solicitan antes de iniciar Litio. Los otros estudios mencionados no sustituyen la evaluación hematológica, hepática y la prueba de embarazo requerida para Valproato."
  },
  {
    "id": "PSIQUI-FARMACOS-024",
    "topic": "Psiquiatría / Antipsicóticos Atípicos",
    "stem": "En el tratamiento de la esquizofrenia refractaria, la Clozapina es considerada el 'Gold Standard'. ¿Cuál de las siguientes es una indicación para el uso de Clozapina y el riesgo adverso que requiere su monitoreo semanal inicial?",
    "options": [
      "Manejo de agitación psicomotora; riesgo de toxicidad por tiocianatos.",
      "Esquizofrenia resistente y riesgo suicida; riesgo de agranulocitosis.",
      "Elección en Parkinsonismo; riesgo de síntomas extrapiramidales.",
      "Síndrome de Gilles de la Tourette; riesgo de prolongación de QTc."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "La Clozapina es el Gold Standard para esquizofrenia resistente y también está indicada en pacientes con alto riesgo suicida. Su principal riesgo es la agranulocitosis, por lo que se requiere monitorizar hemograma semanalmente durante los primeros meses.",
    "feedbackIncorrect": "La Clozapina se caracteriza por bajo riesgo de síntomas extrapiramidales, por lo que no es el principal problema. La toxicidad por tiocianatos se relaciona con Nitroprusiato. Aunque puede prolongar el QTc, el evento adverso que determina el control estrecho inicial es la agranulocitosis."
  },
  {
    "id": "ANEST-AL-025",
    "topic": "Anestesiología / Dosis de Anestésicos Locales (AL)",
    "stem": "Paciente de 80 kg requiere bloqueo nervioso periférico utilizando Lidocaína con Epinefrina. ¿Cuál es la dosis máxima segura en miligramos y cuál es el volumen máximo en mililitros de una solución de Lidocaína al 1% que se le puede administrar?",
    "options": [
      "350 mg; 35 ml.",
      "560 mg; 56 ml.",
      "700 mg; 70 ml.",
      "400 mg; 40 ml."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "La dosis máxima de Lidocaína con Epinefrina es de 7 mg/kg. Para un paciente de 80 kg: 7 mg/kg × 80 kg = 560 mg. Una solución de Lidocaína al 1% contiene 10 mg/ml, por lo que 560 mg corresponden a 56 ml. Por eso, la dosis máxima segura es 560 mg (56 ml).",
    "feedbackIncorrect": "350 mg (35 ml) corresponde a un paciente de menor peso o a una dosis menor a la máxima. 700 mg (70 ml) excede la dosis máxima recomendada de 7 mg/kg para 80 kg. 400 mg (40 ml) es una dosis segura pero no representa el límite máximo calculado para este peso."
  },
  {
    "id": "MEDINT-AR-026",
    "topic": "Medicina Interna / Artritis Reumatoide - Extraarticular",
    "stem": "Mujer de 60 años con Artritis Reumatoide de larga evolución y Factor Reumatoideo (FR) con títulos altos. ¿Cuál es la manifestación extraarticular más frecuente en estos pacientes, y cuál es la manifestación ocular más común?",
    "options": [
      "Nódulos reumáticos (20%); Escleritis.",
      "Vasculitis necrosante; Glaucoma.",
      "Nódulos reumáticos (20%); Queratoconjuntivitis seca.",
      "Pericarditis; Polineuropatía."
    ],
    "correctIndex": 2,
    "feedbackCorrect": "Los nódulos reumáticos son la manifestación extraarticular más frecuente, presentes en alrededor del 20% de los pacientes con Artritis Reumatoide. La manifestación ocular más frecuente es la queratoconjuntivitis seca, a menudo asociada a síndrome de Sjögren.",
    "feedbackIncorrect": "La escleritis es una manifestación ocular posible pero no la más frecuente. La pericarditis es la manifestación cardíaca más común, no la extraarticular global más frecuente. La vasculitis necrosante y la polineuropatía son manifestaciones menos frecuentes y suelen asociarse a enfermedad más grave."
  },
  {
    "id": "ORTO-FRACT-027",
    "topic": "Ortopedia / Codo - Luxofracturas",
    "stem": "Un paciente cae sobre su mano extendida y sufre una lesión compleja en el codo. Los estudios de imagen confirman la presencia de fractura de la apófisis coronoides, fractura de la cúpula radial y luxación del codo. ¿Qué nombre recibe esta lesión y cuál es su manejo inicial en urgencias?",
    "options": [
      "Luxo-fractura de Monteggia; férula braquimetacarpiana.",
      "Fractura de Olécranon Tipo III de Mayo; reducción abierta y fijación interna (RAFI).",
      "Triada Terrible del Codo; férula braquimetacarpiana.",
      "Lesión de Essex-Lopresti; férula en pinza de azúcar."
    ],
    "correctIndex": 2,
    "feedbackCorrect": "La combinación de fractura de la apófisis coronoides, fractura de la cúpula radial y luxación del codo se conoce como Triada Terrible del Codo. El manejo inicial en urgencias por el médico general consiste en inmovilizar con férula braquimetacarpiana y derivar para manejo definitivo.",
    "feedbackIncorrect": "La luxo-fractura de Monteggia corresponde a la fractura del tercio proximal del cúbito asociada a luxación de la cabeza radial. La lesión de Essex-Lopresti es la fractura de la cabeza radial con lesión de la articulación radio-cubital distal. El tratamiento definitivo de las fracturas complejas del codo suele requerir RAFI, pero el manejo inicial en urgencias es la inmovilización adecuada."
  },
  {
    "id": "URG-TRAUMA-028",
    "topic": "Urgencias / Trauma Vascular - Diagnóstico",
    "stem": "Paciente con trauma penetrante en el muslo, sin sangrado activo visible, con pulso distal disminuido pero palpable y llenado capilar lento. ¿Cómo se clasifica esta lesión vascular, y cuál es el estudio diagnóstico más apropiado a seguir?",
    "options": [
      "Signo duro de lesión vascular; necesidad de cirugía urgente.",
      "Signo blando de sospecha de lesión vascular; solicitar Índice Tobillo-Brazo (ITB).",
      "Signo duro de lesión vascular; solicitar AngioTAC para confirmación.",
      "Ausencia de lesión vascular grave; se puede dar de alta con seguimiento ambulatorio."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "La disminución del pulso distal palpable y el llenado capilar lento se consideran signos blandos o de sospecha de lesión vascular. En presencia de signos blandos se requieren estudios complementarios, y el Índice Tobillo-Brazo es una herramienta útil de tamizaje: valores menores de 0.9 sugieren alta probabilidad de lesión arterial.",
    "feedbackIncorrect": "Los signos duros incluyen sangrado pulsátil, hematoma expansivo, ausencia de pulso o signos francos de isquemia y suelen indicar necesidad de intervención quirúrgica urgente sin estudios adicionales. La ausencia de signos duros no descarta lesión significativa, por lo que no es adecuado dar de alta sin estudio cuando hay signos blandos."
  },
  {
    "id": "GENETICA-AD-029",
    "topic": "Genética / Herencia Autosómica Dominante",
    "stem": "En el estudio de una enfermedad Autosómica Dominante que afecta a una familia, se observa que no todos los individuos que tienen el gen lo expresan. ¿Qué término genético describe la capacidad de un gen para expresarse, y cuál es el porcentaje de riesgo de un hijo afectado si uno de los padres es heterocigoto afectado y el otro es sano?",
    "options": [
      "Expresividad variable; 25% de riesgo.",
      "Penetrancia; 50% de riesgo.",
      "Heterogeneidad alélica; 100% de riesgo.",
      "Neomutación; 75% de riesgo."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "La capacidad de un gen para expresarse en el fenotipo se denomina penetrancia. En una enfermedad autosómica dominante, si uno de los padres es heterocigoto afectado y el otro es sano, el riesgo de que cada hijo herede el alelo mutado y, por tanto, esté afectado es del 50%.",
    "feedbackIncorrect": "La expresividad variable describe variaciones en la intensidad o forma de presentación clínica, no la probabilidad de que el gen se exprese. El riesgo del 25% es típico de enfermedades autosómicas recesivas cuando ambos padres son portadores. La neomutación explica casos esporádicos sin antecedentes familiares, pero no modifica el riesgo mendeliano cuando el progenitor ya es heterocigoto."
  },
  {
    "id": "GYN-SOP-030",
    "topic": "Ginecología / Síndrome de Ovario Poliquístico (SOP) - Fisiopatología",
    "stem": "Una paciente con diagnóstico de SOP presenta hiperandrogenismo clínico y metabólico. ¿Cuáles son los dos componentes fisiopatológicos principales que interactúan para generar la hiperandrogenemia en el SOP?",
    "options": [
      "Deficiencia de FSH y aumento de la SHBG.",
      "Exceso de LH y la hiperinsulinemia.",
      "Aumento de GnRH y disminución de la Hormona Antimülleriana.",
      "Hipotiroidismo y Síndrome de Cushing subyacente."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "Los dos componentes fisiopatológicos clave en el SOP son el exceso de LH, que estimula la producción de andrógenos ováricos, y la hiperinsulinemia, que aumenta la resistencia a la insulina y disminuye la SHBG, incrementando la fracción libre de andrógenos.",
    "feedbackIncorrect": "La FSH suele estar normal o relativamente baja, y la SHBG disminuida, no aumentada. El hipotiroidismo y el síndrome de Cushing deben excluirse como diagnósticos diferenciales, pero no son parte de la fisiopatología central del SOP. La hormona antimülleriana suele estar elevada en el SOP."
  },
  {
    "id": "MEDINT-SCA-031",
    "topic": "Medicina Interna / SCA - Estratificación GRACE",
    "stem": "Un paciente con IAMSEST presenta un puntaje GRACE de 150. ¿Cuál es la implicación clínica de este puntaje de riesgo y cuál debe ser la estrategia terapéutica invasiva recomendada?",
    "options": [
      "Riesgo bajo (<140); estrategia invasiva selectiva (24-72 horas).",
      "Riesgo muy alto (≥140); estrategia invasiva inmediata (primeras 2 horas).",
      "Riesgo alto (≥140); estrategia invasiva temprana (primeras 24 horas).",
      "Riesgo intermedio; revascularización mediante cirugía (CABG)."
    ],
    "correctIndex": 2,
    "feedbackCorrect": "Un puntaje GRACE mayor o igual a 140 se considera de alto riesgo. En estos pacientes se recomienda una estrategia invasiva temprana, con coronariografía y potencial intervención en las primeras 24 horas.",
    "feedbackIncorrect": "Los puntajes bajos de GRACE se manejan de forma más conservadora o con estrategia invasiva selectiva. La estrategia invasiva inmediata (primeras 2 horas) se reserva para pacientes con muy alto riesgo clínico (inestabilidad hemodinámica, choque, arritmias malignas, etc.), no solo por el puntaje GRACE."
  },
  {
    "id": "QUEMADOS-HIDRICA-032",
    "topic": "Urgencias / Reanimación Hídrica en Quemados",
    "stem": "Adulto de 40 años, 70 kg, con quemaduras de segundo y tercer grado que cubren el 30% de la Superficie Corporal Quemada (SCQ). Según la fórmula recomendada por la American Burn Association (ABA) y el ATLS, ¿cuántos mililitros de Lactato de Ringer debe recibir en las primeras 8 horas y cuál es la meta de diuresis horaria?",
    "options": [
      "2100 ml; meta de 0.5 a 1 ml/kg/hora.",
      "4200 ml; meta de 2 a 3 ml/kg/hora.",
      "5600 ml; meta de 0.5 a 1 ml/kg/hora.",
      "1400 ml; meta de 1 a 2 ml/kg/hora."
    ],
    "correctIndex": 0,
    "feedbackCorrect": "La fórmula de reanimación hídrica recomendada es 2 ml × kg × %SCQ. Para este paciente: 2 ml × 70 kg × 30 = 4200 ml en 24 horas. La mitad de este volumen (2100 ml) debe administrarse en las primeras 8 horas desde el momento de la quemadura. La meta de diuresis es de 0.5 a 1 ml/kg/hora en adultos.",
    "feedbackIncorrect": "4200 ml corresponde al volumen total en 24 horas, no al volumen de las primeras 8 horas. 5600 ml no se deriva de la fórmula estándar empleada. 1400 ml correspondería a un porcentaje de superficie menor. La diuresis de 2 a 3 ml/kg/hora es meta en pediatría, no en adultos."
  },
  {
    "id": "RN-VPP-033",
    "topic": "Pediatría / Reanimación Neonatal - VPP",
    "stem": "Neonato a término que requiere Ventilación con Presión Positiva (VPP). ¿Cuál es el indicador más importante de que la VPP está siendo efectiva y cuál es la frecuencia recomendada para realizar esta ventilación?",
    "options": [
      "Mejoría del color rosado; 30 a 40 respiraciones por minuto.",
      "Aumento de la frecuencia cardíaca; 40 a 60 respiraciones por minuto.",
      "Aspiración de secreciones claras; 60 a 80 respiraciones por minuto.",
      "Movimiento del tórax y SaO2 > 90%; 20 a 30 respiraciones por minuto."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "El aumento de la frecuencia cardíaca es el indicador más importante de efectividad de la VPP en la reanimación neonatal. La frecuencia recomendada para la VPP es de 40 a 60 respiraciones por minuto.",
    "feedbackIncorrect": "La coloración y la saturación de oxígeno son parámetros útiles, pero la variable central para evaluar la respuesta a la reanimación es la frecuencia cardíaca. Frecuencias ventilatorias por debajo de 40 rpm o por encima de 60 rpm no se ajustan a las recomendaciones estándar."
  },

  {
    "id": "URG-TRAUMA-034",
    "topic": "Urgencias / Trauma Vascular de Extremidades",
    "stem": "Un paciente de 40 años sufre un trauma penetrante en el muslo. El examen físico revela pulsos distales palpables, pero disminuidos, y un hematoma no expansivo en el sitio de la lesión. La medición del Índice Tobillo-Brazo (ITB) en esa extremidad fue de 0.85. ¿Cuál es la implicación clínica de este valor y la conducta a seguir?",
    "options": [
      "El valor de ITB es normal, se debe mantener en observación clínica.",
      "El ITB es anormal (< 0.9), lo que implica una alta probabilidad de trauma arterial que requiere estudios adicionales.",
      "El ITB es una herramienta de tamizaje para trauma venoso y no es útil en este contexto.",
      "El ITB de 0.85 es un signo duro de lesión vascular, por lo que requiere cirugía urgente inmediata."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "Los signos blandos (pulso disminuido y hematoma no expansivo) justifican estudios adicionales. Un ITB menor de 0.9 o una diferencia mayor de 0.1 indica una alta probabilidad de trauma arterial. Este resultado, junto con los signos blandos, indica la necesidad de AngioTAC [1-3].",
    "feedbackIncorrect": "Un ITB > 0.9 tiene un alto valor predictivo negativo para lesión vascular, por lo que 0.85 es anormal [2]. Los signos duros indican cirugía urgente inmediata [1]. La presencia de signos blandos requiere estudios, no solo observación [1]."
  },
  {
    "id": "QUEMADOS-VIA AEREA-035",
    "topic": "Urgencias / Enfoque del Paciente Quemado",
    "stem": "Un paciente con quemaduras en el 35% de la Superficie Corporal Quemada (SCQ) presenta quemaduras faciales extensas y profundas, con esputo carbonáceo y dificultad progresiva para hablar (ronquera). ¿Cuál es la indicación de manejo de vía aérea más urgente?",
    "options": [
      "Oxigenoterapia con cánula nasal a 5L/min y monitoreo continuo de gases arteriales.",
      "Intubación temprana, debido a los signos de obstrucción y la extensión de las quemaduras faciales.",
      "CPAP (Presión positiva continua en la vía aérea) para evitar el colapso alveolar.",
      "Espera vigilante, ya que los signos de ronquera por sí solos no son criterio de intubación temprana."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "Las quemaduras faciales extensas y profundas, el esputo carbonáceo y los signos de obstrucción de las vías respiratorias (ronquera, estridor) son indicaciones de intubación temprana, según las pautas de ATLS [4].",
    "feedbackIncorrect": "Los signos de quemadura por inhalación y la ronquera indican riesgo inminente de obstrucción debido al edema de la vía aérea superior, por lo que la intubación temprana es prioritaria [4, 5]. La SCQ > 40-50% también es un criterio, pero la afectación de la vía aérea es más urgente [4]."
  },
  {
    "id": "MEDINT-EH-036",
    "topic": "Medicina Interna / Emergencias Hipertensivas",
    "stem": "Paciente con diagnóstico de Síndrome Aórtico Agudo (Disección Aórtica). Además de la meta de Presión Arterial Sistólica (PAS) < 120 mmHg, ¿cuál es el agente farmacológico de primera línea recomendado para lograr la meta de Frecuencia Cardíaca (FC) < 60 lpm?",
    "options": [
      "Nitroprusiato de sodio, por su inicio de acción en segundos.",
      "Nitroglicerina, para disminuir la poscarga y el dolor torácico.",
      "Esmolol, por su inicio de acción rápido y corto para el control estricto de la frecuencia cardíaca.",
      "Nicardipino, por ser un calcio-antagonista que actúa rápidamente a nivel periférico."
    ],
    "correctIndex": 2,
    "feedbackCorrect": "En el Síndrome Aórtico Agudo, se requieren metas estrictas y un descenso rápido de la PAS < 120 mmHg y FC < 60 lpm. El Esmolol es el fármaco de primera línea recomendado por su rápido inicio de acción (1-2 minutos) y capacidad para vigilar la bradicardia [6, 7].",
    "feedbackIncorrect": "El Nitroprusiato y la Nitroglicerina pueden aumentar la FC por reflejo, lo cual está contraindicado ya que se busca disminuir el estrés de cizallamiento en la aorta. El Nitroprusiato es tercera línea y la Nitroglicerina no es primera línea en esta patología [6, 8]."
  },
  {
    "id": "PSIQUI-FARMACOS-037",
    "topic": "Psiquiatría / Carbonato de Litio",
    "stem": "Un paciente de 40 años con Trastorno Afectivo Bipolar (TAB) estable ha estado en tratamiento con Carbonato de Litio por 3 años. ¿Cuál es la periodicidad recomendada para el seguimiento de la litemia en esta fase de mantenimiento?",
    "options": [
      "Cada 5 días, para asegurar que no exceda 1.5 mEq/L.",
      "Cada tres a seis meses, ya que los niveles deben mantenerse entre 0.6 y 1.2 mEq/L.",
      "Cada 12 meses, si los niveles séricos han sido estables y se mantienen dentro del rango de mantenimiento.",
      "El control es clínico, no requiere litemia si la dosis inicial fue ajustada."
    ],
    "correctIndex": 2,
    "feedbackCorrect": "En la fase de mantenimiento, los niveles de litemia deben estar entre 0.6 - 1.2 mEq/L [9]. El monitoreo de la litemia se solicita al quinto día, luego cada 15 días por 2 meses, luego cada tres a seis meses, y finalmente, si es estable, cada 12 meses [10, 11].",
    "feedbackIncorrect": "Solicitarla al quinto día es al inicio de la terapéutica, no en mantenimiento [10]. El seguimiento cada 3 a 6 meses se recomienda después de los primeros 2 meses, antes de pasar al control anual [11]."
  },
  {
    "id": "GENETICA-AR-038",
    "topic": "Genética / Herencia Autosómica Dominante",
    "stem": "Un hombre padece una enfermedad Autosómica Dominante y es heterocigoto (Aa). Su esposa no padece la enfermedad (aa). ¿Cuál es la probabilidad de que su segundo hijo nazca sano y que su tercer hijo sea portador del gen dominante y, por lo tanto, afectado?",
    "options": [
      "El 75% para ambos escenarios, ya que es una enfermedad de alta penetrancia.",
      "El 50% de probabilidad de ser sano y el 50% de probabilidad de ser afectado.",
      "El 50% de probabilidad de ser sano y el 100% de probabilidad de ser portador del gen dominante.",
      "El 25% de probabilidad de ser sano y el 75% de probabilidad de ser afectado."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "En un cruce de un padre heterocigoto afectado (Aa) y una madre sana (aa), el riesgo de que cualquier hijo herede el gen dominante y sea afectado es del 50%, y el riesgo de que cualquier hijo sea sano (homocigoto recesivo) es también del 50%. Cada evento es independiente [12].",
    "feedbackIncorrect": "El riesgo del 75% de ser afectado ocurre si ambos padres fueran afectados heterocigotos [13]. La probabilidad para el 50% de los hijos es ser sanos y el 50% será afectado [12]."
  },
  {
    "id": "MEDINT-AR-039",
    "topic": "Medicina Interna / Artritis Reumatoide - Pronóstico",
    "stem": "Un paciente masculino de 50 años es diagnosticado con Artritis Reumatoide (AR). ¿Cuál de los siguientes hallazgos al momento del diagnóstico se considera un factor de mal pronóstico para la evolución de la enfermedad?",
    "options": [
      "Rigidez matutina de 30 minutos de duración.",
      "Afectación de múltiples articulaciones con presencia de Factor Reumatoideo positivo.",
      "Edad de inicio temprana, antes de los 40 años.",
      "Presencia de títulos bajos de Anticuerpos Anti-CCP."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "Los factores de mal pronóstico en AR incluyen: afectación de múltiples articulaciones, afectación temprana de grandes articulaciones, presencia de FR y anti-CCP, elevación de reactantes de fase aguda (VSG y PCR), presencia de cambios radiológicos tempranos, clase funcional pobre al inicio del diagnóstico, y retraso en el inicio del tratamiento [14].",
    "feedbackIncorrect": "La afectación de múltiples articulaciones es un criterio de mal pronóstico, especialmente si coexiste con FR positivo [14]. Los títulos altos de Anti-CCP se correlacionan con mal pronóstico, mientras que la rigidez matutina prolongada es un síntoma cardinal, no necesariamente un factor de mal pronóstico en sí mismo [15, 16]."
  },
  {
    "id": "ORTO-FRACT-040",
    "topic": "Ortopedia / Luxofracturas de Antebrazo",
    "stem": "Un paciente sufre una fractura del tercio proximal del cúbito asociada a luxación de la cúpula radial. ¿Cuál es el nombre de esta lesión y el nervio que se lesiona con mayor frecuencia en esta entidad?",
    "options": [
      "Luxo-fractura de Galeazzi; Lesión del nervio radial.",
      "Triada Terrible del Codo; Lesión del nervio cubital.",
      "Luxo-fractura de Monteggia; Lesión del nervio interóseo posterior.",
      "Fractura de Olécranon; Lesión del nervio interóseo anterior."
    ],
    "correctIndex": 2,
    "feedbackCorrect": "La Luxo-fractura de Monteggia es la fractura del tercio proximal del cúbito con luxación de la cúpula radial [17]. La complicación nerviosa más común asociada a la lesión de Monteggia es la lesión del nervio interóseo posterior [17].",
    "feedbackIncorrect": "La Luxo-fractura de Galeazzi es la fractura del tercio distal del radio con luxación radio-cubital distal [18]. La Triada Terrible del Codo es la fractura de coronoides, cúpula radial y luxación del codo [19]."
  },
  {
    "id": "PED-DIGESTIVA-041",
    "topic": "Pediatría / Estenosis Pilórica Hipertrófica",
    "stem": "Lactante masculino de 5 semanas de vida que inicia con vómitos proyectivos de contenido alimentario, no bilioso, que ocurren inmediatamente después de la toma. La gasimetría muestra alcalosis metabólica hipoclorémica. La ecografía es el estudio de elección y, para confirmar el diagnóstico, ¿cuáles son los hallazgos ecográficos que se buscan?",
    "options": [
      "Signo de la doble burbuja en el duodeno.",
      "Grosor del músculo pilórico mayor a 3 mm y longitud mayor a 15 mm.",
      "Signo del pseudo riñón y masa palpable en hipocondrio derecho.",
      "Neumatosis intestinal y aire libre abdominal."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "La presentación clínica (vómito proyectivo, no bilioso, a las 4-6 semanas de vida) sugiere Estenosis Pilórica Hipertrófica [20]. La ecografía abdominal es la técnica de elección, y los hallazgos son un grosor del músculo pilórico mayor a 3 mm y una longitud mayor a 15 mm [21].",
    "feedbackIncorrect": "El signo de la doble burbuja es característico de Atresia de Duodeno [22]. La neumatosis intestinal es un hallazgo radiológico de Enterocolitis Necrotizante [23]. El signo del pseudo riñón es un hallazgo ecográfico de Invaginación Intestinal [24, 25]."
  },
  {
    "id": "CARDIO-SCA-042",
    "topic": "Medicina Interna / SCA - Antiagregación",
    "stem": "Un paciente ingresa con un IAMSEST y se le programa para Intervencionismo Coronario Percutáneo (ICP) temprano (dentro de las primeras 24 horas) con anatomía coronaria aún desconocida. Se inicia ASA 300 mg. ¿Cuál es la recomendación actual con respecto a los inhibidores de P2Y12 (Prasugrel/Ticagrelor) antes de la ICP?",
    "options": [
      "Iniciar Ticagrelor 180 mg inmediatamente, ya que disminuye la mortalidad a corto plazo.",
      "No se recomienda el uso de inhibidores de P2Y12 como pretratamiento hasta conocer la anatomía coronaria.",
      "Administrar Clopidogrel 600 mg inmediatamente, ya que es el de primera línea.",
      "Iniciar Prasugrel, ya que es el inhibidor de P2Y12 más potente."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "No se recomienda el uso de inhibidores de P2Y12 (Prasugrel, Ticagrelor) como pretratamiento en pacientes con anatomía coronaria desconocida que serán llevados a ICP temprano (menos de 24 horas), ya que esta práctica aumenta el riesgo de sangrado [26].",
    "feedbackIncorrect": "Prasugrel es primera línea solo si se conoce la anatomía coronaria y está contraindicado en ACV previo [27]. El Clopidogrel es segunda línea [28]. La terapia antiagregante dual se recomienda después del ICP, no necesariamente antes si la anatomía es desconocida [27]."
  },
  {
    "id": "GYN-SEPSIS-043",
    "topic": "Ginecología / Sepsis Puerperal - Endometritis",
    "stem": "Una paciente con Endometritis Puerperal post-cesárea ha recibido tratamiento con Clindamicina más Gentamicina por 48 horas, pero persiste febril con dolor abdominal. ¿Cuál es el paso terapéutico recomendado a seguir?",
    "options": [
      "Cambiar el esquema antibiótico a Ampicilina Sulbactam debido a la sospecha de colonización por Estreptococo del grupo B.",
      "Añadir Fluconazol al esquema para cubrir una posible infección fúngica.",
      "Realizar histerectomía abdominal de emergencia por sospecha de miometritis necrotizante.",
      "Suspender el tratamiento, ya que la falla terapéutica a las 48 horas indica un diagnóstico erróneo."
    ],
    "correctIndex": 0,
    "feedbackCorrect": "El esquema de elección (Clindamicina + Gentamicina) ha mostrado la menor falla terapéutica en endometritis puerperal. En caso de no mejoría clínica posterior a 48 a 72 horas de iniciar tratamiento, se debe considerar el uso de Ampicilina Sulbactam para cubrir otros patógenos como el Estreptococo del grupo B [29].",
    "feedbackIncorrect": "La histerectomía abdominal está indicada en caso de miometritis con áreas necróticas que llevan a sepsis o choque séptico, pero la primera línea de acción ante la falla terapéutica a las 48h es el cambio/adición de antibióticos [29, 30]. Los cultivos de sangre se indicarían ante la no mejoría [29]."
  },

  {
    "id": "RN-VPP-044",
    "topic": "Pediatría / Reanimación Neonatal - Meconio",
    "stem": "Un recién nacido a término presenta líquido amniótico teñido de meconio. Al nacer, el neonato no está vigoroso (no respira/llora, tiene mal tono). ¿Cuál es la primera acción en el manejo de este neonato, según las recomendaciones actuales?",
    "options": [
      "Intubación endotraqueal inmediata y aspiración de secreciones, ya que el meconio no vigoroso requiere asegurar la vía aérea.",
      "Inmediatamente iniciar ventilación con presión positiva (VPP), sin realizar aspiración nasotraqueal de rutina.",
      "Aspiración orofaríngea y nasofaríngea profunda con sonda rígida antes de la VPP.",
      "Traslado inmediato a UCI neonatal para monitoreo y soporte con CPAP."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "En neonatos con líquido amniótico teñido de meconio que no están vigorosos, la recomendación actual es no realizar aspiración endotraqueal ni nasotraqueal de rutina. La prioridad es iniciar la ventilación con presión positiva (VPP) para evitar demoras [31].",
    "feedbackIncorrect": "La intubación y aspiración endotraqueal se realiza si el paciente presenta obstrucción evidente al realizar la VPP, no de rutina [31, 32]. La succión nasofaríngea intraparto no se recomienda de rutina, ni siquiera con meconio [33]."
  },
  {
    "id": "PED-CF-045",
    "topic": "Pediatría / Convulsiones Febriles - Estudios",
    "stem": "Lactante de 10 meses de edad con esquema de vacunación incompleto, que presenta una crisis convulsiva febril simple. Recupera la consciencia rápidamente y no tiene signos de neuroinfección. ¿Cuál de los siguientes estudios está indicado considerar en este paciente?",
    "options": [
      "Punción lumbar, por la edad y el esquema de vacunación incompleto.",
      "Electroencefalograma (EEG) de urgencia, por ser menor de 12 meses.",
      "Resonancia Magnética (RM) cerebral para descartar patología estructural.",
      "Ningún estudio de extensión está indicado, solo búsqueda de la causa de la fiebre."
    ],
    "correctIndex": 0,
    "feedbackCorrect": "En niños de 6 a 12 meses, la punción lumbar debe ser considerada, especialmente si tienen un esquema de vacunación incompleto para *H. Influenzae* tipo B o neumococo, para descartar neuroinfección [34].",
    "feedbackIncorrect": "El EEG y la RM no se toman de rutina en convulsiones febriles simples [35]. La RM se requiere de urgencia si hay examen neurológico persistentemente anormal o signos de aumento de la presión intracraneal [35]."
  },
  {
    "id": "ANEST-AL-046",
    "topic": "Anestesiología / Toxicidad por Anestésicos Locales (AL)",
    "stem": "Al realizar un bloqueo periférico, el paciente desarrolla toxicidad por Anestésicos Locales (AL). La toxicidad en el Sistema Nervioso Central (SNC) aparece primero, seguida de cardiotoxicidad. ¿Cuál de los AL es reconocido como el más cardiotóxico debido a su alteración en los canales de Ca y K del miocardio?",
    "options": [
      "Lidocaína, por su alta potencia.",
      "Ropivacaína, por ser un aminoéster.",
      "Clorprocaína, por ser de vida media muy corta.",
      "Bupivacaína, por su efecto sobre los canales de Ca y K."
    ],
    "correctIndex": 3,
    "feedbackCorrect": "La Bupivacaína es el anestésico local más cardiotóxico, ya que además de bloquear los canales de Na, causa alteración en los canales de Ca y K del miocardio [36].",
    "feedbackIncorrect": "La Lidocaína es una amida [37]. La Clorprocaína es un éster y no se menciona como el más cardiotóxico [37]. La toxicidad cardiovascular requiere concentraciones sanguíneas mayores de AL que la toxicidad del SNC [36]."
  },
  {
    "id": "URG-OFIDICO-047",
    "topic": "Urgencias / Accidente Ofídico - Clasificación",
    "stem": "Un agricultor es mordido en la pierna por una serpiente Bothrops asper de menos de 1 metro. Presenta edema que se limita a dos segmentos de la extremidad. Hay gingivorragia y epistaxis leves, y las pruebas de coagulación están prolongadas. No presenta compromiso hemodinámico. ¿Cómo se clasifica el envenenamiento y cuál es la dosis inicial de antiveneno del INS?",
    "options": [
      "Accidente leve; 2 ampollas.",
      "Accidente moderado; 4 ampollas.",
      "Accidente grave; 6 ampollas.",
      "Accidente grave; 4 ampollas."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "La presencia de edema limitado a 2 o 3 segmentos, la hemorragia local activa (gingivorragia, epistaxis) y la prolongación de TP/TPT, sin compromiso hemodinámico o necrosis, define un accidente **moderado** [38]. La dosis de antiveneno del INS para un accidente moderado es de **4 ampollas** [39].",
    "feedbackIncorrect": "El accidente leve no presenta sangrado sistémico ni prolongación de pruebas de coagulación [38]. El accidente grave se caracteriza por edema en 3 o más segmentos o compromiso hemodinámico. Si el ofidio fuera > 1 metro, clasificaría como grave [40]."
  },
  {
    "id": "CIRUGIA-COLANGITIS-048",
    "topic": "Cirugía General / Colangitis Aguda",
    "stem": "Paciente de 65 años ingresa con fiebre, ictericia y dolor en hipocondrio derecho. En la sala de urgencias presenta hipotensión arterial refractaria a líquidos y alteración del sensorio. ¿Qué indica esta combinación de signos clínicos y cuál es el paso terapéutico de máxima prioridad, después de la estabilización inicial?",
    "options": [
      "Tríada de Charcot, el manejo es antibióticos y descompresión biliar electiva.",
      "Péntada de Reynolds, indica colangitis grave/sepsis biliar, se requiere descompresión biliar urgente.",
      "Colecistitis Aguda Grado III, requiere colecistectomía de urgencia.",
      "Coledocolitiasis, requiere CPRE diagnóstica, sin necesidad de descompresión urgente."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "La combinación de Tríada de Charcot (fiebre, ictericia, dolor en HCD) más hipotensión y alteración del sensorio conforma la Péntada de Reynolds, lo cual indica colangitis grave/sepsis biliar [41]. Esta condición requiere soporte inicial, antibióticos de amplio espectro y descompresión biliar urgente (siendo la CPRE terapéutica la elección) [42, 43].",
    "feedbackIncorrect": "La Tríada de Charcot es menos grave que la Péntada de Reynolds [41]. La Colecistitis Aguda es inflamación de la vesícula, no de los conductos biliares [44]. La descompresión es urgente, no electiva, en este contexto [43]."
  },
  {
    "id": "MEDINT-EH-049",
    "topic": "Medicina Interna / Emergencias Hipertensivas",
    "stem": "Un paciente acude a urgencias con una presión arterial de 200/115 mmHg. Refiere cefalea leve inespecífica, pero niega dolor torácico, disnea o déficit neurológico focal. El fondo de ojo es normal y no hay compromiso renal agudo. ¿Cómo se clasifica este cuadro clínico, según la terminología de la AHA 2024?",
    "options": [
      "Emergencia Hipertensiva, requiere ingreso a UCI y reducción de la PAS < 140 mmHg en la primera hora.",
      "Presión arterial marcadamente elevada asintomática, el manejo es ambulatorio con ajuste de medicación oral.",
      "Urgencia Hipertensiva, requiere tratamiento endovenoso para reducción del 25% de la PAS en las primeras 24 horas.",
      "Hipertensión Arterial Grado 3, requiere ingreso hospitalario para descartar daño de órgano blanco."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "La presión arterial marcadamente elevada asintomática (antes llamada urgencia hipertensiva) se define por PAS/PAD > 180/110-120 mmHg SIN evidencia de daño de órgano blanco nuevo o empeorado [45]. Estos pacientes no suelen requerir tratamiento endovenoso y el manejo puede realizarse de forma ambulatoria con ajustes en los medicamentos orales [46].",
    "feedbackIncorrect": "La Emergencia Hipertensiva siempre implica daño de órgano blanco [45]. La reducción agresiva (25% o meta < 140 mmHg en la primera hora) es para las emergencias hipertensivas [47]. La Cefalea leve e inespecífica puede estar presente en la Presión arterial marcadamente elevada asintomática [48]."
  },
  {
    "id": "TRM-SINDROME-050",
    "topic": "Trauma / Trauma Raquimedular (TRM)",
    "stem": "Un paciente sufre una lesión medular incompleta tras un trauma. Al examen, presenta pérdida de la sensación de dolor y temperatura en el lado izquierdo por debajo de la lesión, pero conserva la función motora, el tacto ligero y la propiocepción en ese mismo lado. ¿Qué síndrome medular típico presenta?",
    "options": [
      "Síndrome medular anterior.",
      "Síndrome medular central.",
      "Síndrome medular posterior.",
      "Hemisección medular (Brown-Séquard)."
    ],
    "correctIndex": 3,
    "feedbackCorrect": "El Síndrome de Brown-Séquard (Hemisección medular) causa daño unilateral que resulta en pérdida de la sensación de dolor y temperatura contralateral (tracto espino-talámico) y pérdida de la función motora, tacto ligero y propiocepción ipsilateral [49, 50].",
    "feedbackIncorrect": "El síndrome medular anterior causa pérdida de función motora y sensación de dolor-temperatura por debajo de la lesión [51]. El síndrome medular posterior causa pérdida de propiocepción y vibración profunda [49]."
  },
  {
    "id": "GYN-SOP-051",
    "topic": "Ginecología / Síndrome de Ovario Poliquístico (SOP)",
    "stem": "En el diagnóstico del Síndrome de Ovario Poliquístico (SOP), se utiliza la ecografía para evaluar la morfología ovárica. ¿Cuál es el marcador ecográfico más eficaz para detectar la morfología de ovario poliquístico en mujeres adultas, según los criterios de diagnóstico?",
    "options": [
      "Presencia de quistes mayores a 10 mm de diámetro.",
      "Volumen ovárico menor de 10 ml.",
      "Número de folículos por ovario igual o mayor a 20.",
      "Engrosamiento de la pared endometrial mayor a 8 mm."
    ],
    "correctIndex": 2,
    "feedbackCorrect": "Para la morfología del ovario poliquístico, los criterios principales a evaluar en la ecografía son: 1) Número de folículos por ovario: ≥ 20 en al menos un ovario (marcador más eficaz); y 2) Volumen ovárico: ≥ 10 ml [52].",
    "feedbackIncorrect": "El volumen ovárico debe ser *mayor* o igual a 10 ml [52]. El marcador más eficaz no es el tamaño del quiste sino el número de folículos [52]."
  },
  {
    "id": "DERMA-MELANOMA-052",
    "topic": "Dermatología / Melanoma - Estadificación",
    "stem": "Un paciente es diagnosticado con Melanoma Cutáneo, clasificado histológicamente como T1b (grosor menor de 1 mm, pero ulcerado). ¿Cuál de las siguientes es una indicación clave de manejo para este estadio?",
    "options": [
      "Iniciar inmunoterapia con Ipilimumab para el control de la enfermedad diseminada.",
      "Realizar imágenes diagnósticas para estadificación inicial (TAC de tórax y abdomen).",
      "Considerar la toma de ganglio centinela.",
      "Extirpación con un margen quirúrgico amplio de 2 cm."
    ],
    "correctIndex": 2,
    "feedbackCorrect": "El ganglio centinela debe considerarse desde el estadio IB (T1b) en adelante [53]. T1b se refiere a tumores de menos de 1 mm que están ulcerados (o > 1mm con índice mitótico > 1) [54, 55].",
    "feedbackIncorrect": "Las imágenes para estadificación inicial se recomiendan desde el estadio IIIA en adelante [56]. La inmunoterapia se utiliza para enfermedad diseminada o adyuvancia en estadios IIB o IIC [56, 57]. Un tumor de menos de 1 mm (como T1b) requiere un margen de 1 cm, no 2 cm [58]. "
  },
  {
    "id": "EPIDEMI-DIAG-053",
    "topic": "Epidemiología Clínica / Pruebas Diagnósticas",
    "stem": "En el contexto de un programa de cribado (tamizaje) poblacional para una enfermedad poco frecuente pero grave, se utiliza una prueba en dos pasos. ¿Qué características deben tener, respectivamente, la prueba inicial de cribado y la prueba de confirmación subsiguiente?",
    "options": [
      "Prueba de cribado: Alta especificidad; Prueba de confirmación: Alta sensibilidad.",
      "Prueba de cribado: Alta sensibilidad; Prueba de confirmación: Alta especificidad.",
      "Ambas pruebas deben tener alta razón de probabilidad negativa (LR-).",
      "Ambas pruebas deben tener valores predictivos (VPP/VPN) independientes de la prevalencia."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "En las estrategias de tamización, primero se aplica una prueba **muy sensible** para detectar el mayor número de posibles enfermos (aunque con falsos positivos). Luego, en un segundo paso, se utiliza una prueba de **alta especificidad** para confirmar el diagnóstico y minimizar los falsos positivos [59, 60].",
    "feedbackIncorrect": "Si la prueba inicial tuviera alta especificidad, muchos enfermos pasarían desapercibidos (muchos falsos negativos) [61, 62]. Los valores predictivos sí son influenciados por la prevalencia de la enfermedad [63]."
  },

  {
    "id": "MEDINT-AAA-054",
    "topic": "Medicina Interna / Aneurisma de Aorta Abdominal (AAA)",
    "stem": "Un paciente masculino de 70 años, fumador, es diagnosticado incidentalmente con un Aneurisma de Aorta Abdominal (AAA) infra-renal de 5.7 cm. El paciente está hemodinámicamente estable. ¿Cuál es el riesgo aproximado de ruptura anual de este aneurisma y cuál es la indicación de manejo quirúrgico?",
    "options": [
      "Riesgo de ruptura < 1%; manejo quirúrgico electivo no está indicado.",
      "Riesgo de ruptura entre 9.4% y 10.2%; manejo quirúrgico abierto o endovascular electivo.",
      "Riesgo de ruptura > 32%; manejo quirúrgico inmediato debido al alto riesgo.",
      "Riesgo de ruptura < 5%; se recomienda solo control de la presión arterial y seguimiento ecográfico en 6 meses."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "Un AAA con un tamaño de 5.5 cm - 5.9 cm tiene un riesgo de ruptura del 9.40% [1]. Los criterios para cirugía en hombres estables son un tamaño ≥ 5.5 cm [2], siendo la reparación electiva la medida más efectiva para prevenir la ruptura [3].",
    "feedbackIncorrect": "Los AAA se definen como dilataciones superiores a 3 cm [4]. Un riesgo de ruptura > 32% aplica para aneurismas mayores de 7 cm [1]. El seguimiento ecográfico cada 6 meses se realiza en AAA de 4.0-4.9 cm, pero para 5.7 cm está indicada la reparación [5]."
  },
  {
    "id": "PED-DIGESTIVA-055",
    "topic": "Pediatría / Obstrucción Intestinal Congénita",
    "stem": "Neonato con Atresia de Duodeno. Se le realiza una Radiografía de abdomen simple. ¿Cuál es el hallazgo clásico que confirma la obstrucción proximal y cuál es la indicación terapéutica de urgencia?",
    "options": [
      "Imagen de única burbuja en el píloro; corrección de la deshidratación y luego piloromiotomía.",
      "Signo de la doble burbuja; sonda nasogástrica, antibiótico y cirugía infantil.",
      "Panal de abeja en colon por material fecal impactado; enema de contraste para desimpactación.",
      "Aire por debajo de la válvula ileocecal; resección del segmento aganglionar."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "La atresia de duodeno presenta el **signo de doble burbuja** en la radiografía de abdomen, indicando obstrucción proximal [6]. El tratamiento de las obstrucciones congénitas incluye sonda nasogástrica, líquidos dextrosados, antibiótico de amplio espectro, unidad de cuidados intensivos neonatales e **intervención quirúrgica por cirugía infantil** [7].",
    "feedbackIncorrect": "La imagen de única burbuja se ve en la atresia de píloro [8]. El panal de abeja se asocia a Íleo meconial [9]. La resección del segmento aganglionar es el tratamiento quirúrgico para el Megacolon Aganglionar (Hirschsprung) [10]."
  },
  {
    "id": "MEDINT-SCA-056",
    "topic": "Medicina Interna / SCA - Angina Inestable vs IAMSEST",
    "stem": "Paciente con dolor torácico opresivo de 3 horas de evolución. El ECG de ingreso muestra depresión del segmento ST. La primera medición de Troponina T ultrasensible es negativa (inferior al límite de normalidad). ¿Cuál es el diagnóstico clínico más probable y la conducta respecto a la Troponina?",
    "options": [
      "Infarto Agudo de Miocardio (IAMSEST); repetir Troponina a las 3 horas para confirmar delta significativo.",
      "Angina Inestable (AI); no requiere repetir Troponina si el ECG es no diagnóstico.",
      "Angina Inestable (AI); repetir la medición de Troponina a la hora, pues el dolor persiste y el ECG es sugestivo de isquemia.",
      "Injuria miocárdica aguda; administrar Ticagrelor 180 mg inmediatamente y esperar el delta."
    ],
    "correctIndex": 2,
    "feedbackCorrect": "El diagnóstico de Angina Inestable (AI) se caracteriza por la clínica (dolor torácico opresivo) y hallazgos isquémicos en el ECG (depresión del ST) pero con **ausencia de necrosis**, es decir, biomarcadores negativos [11], [12]. Ante la sospecha clínica que persiste, se debe solicitar una medición inicial y la siguiente a la hora, para establecer su tendencia [13], y diferenciarla de un IAMSEST.",
    "feedbackIncorrect": "Un IAMSEST siempre presenta biomarcadores positivos. El ECG es sugestivo de isquemia (depresión del ST) [14]. La injuria miocárdica aguda se define con un valor superior al límite de normalidad, lo cual es negativo en este caso [13]. No se recomienda el pretratamiento con P2Y12 si la anatomía coronaria es desconocida [15], [16]."
  },
  {
    "id": "CIRUGIA-PANCREATITIS-057",
    "topic": "Cirugía General / Pancreatitis Aguda",
    "stem": "Paciente con dolor epigástrico intenso irradiado en banda a la espalda, asociado a vómito. Laboratorios: Lipasa 4 veces el límite superior normal. ¿Cuál es el criterio diagnóstico adicional de la clasificación de Atlanta 2012 que confirmaría el diagnóstico de Pancreatitis Aguda?",
    "options": [
      "Amilasa o lipasa ≥ 3 veces el límite superior normal, dolor abdominal típico o hallazgos compatibles en imagen.",
      "Presencia de falla orgánica persistente (>48 horas) o necrosis extensa en el TAC.",
      "Signo de Cullen o Grey-Turner en el examen físico.",
      "Litiasis biliar como causa subyacente."
    ],
    "correctIndex": 0,
    "feedbackCorrect": "El diagnóstico de Pancreatitis Aguda se confirma con ≥2 de 3 criterios de Atlanta 2012: 1) Dolor abdominal típico; 2) Amilasa o lipasa ≥3 veces el límite superior normal (la Lipasa es más específica); y 3) Hallazgos compatibles en imagen [17].",
    "feedbackIncorrect": "La falla orgánica persistente o necrosis extensa define pancreatitis grave [17]. Los signos de Cullen o Grey-Turner son signos de necrosis hemorrágica, indicativos de gravedad, no de diagnóstico inicial [18]. La litiasis biliar es la causa más común (70-80%), pero no un criterio diagnóstico necesario [19]."
  },
  {
    "id": "MEDINT-AAA-058",
    "topic": "Medicina Interna / Aneurisma de Aorta Abdominal (AAA)",
    "stem": "Paciente con AAA roto que ingresa a la sala de urgencias en choque hipovolémico. ¿Cuál es la estrategia de manejo de la presión arterial recomendada para reanimar a este paciente antes de la reparación vascular emergente?",
    "options": [
      "Administrar cristaloides y hemoderivados hasta lograr PAS > 120 mmHg.",
      "Reanimación con meta de PAS entre 70 y 90 mmHg (Hipotensión permisiva).",
      "Iniciar norepinefrina para mantener una Presión Arterial Media (PAM) > 90 mmHg.",
      "Transfusión de glóbulos rojos solamente, ya que los cristaloides están contraindicados."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "En pacientes con AAA roto hemodinámicamente inestables, se requiere una reanimación con cifras de Presión Arterial Sistólica (PAS) entre **70 y 90 mmHg**, mientras se prepara para la reparación vascular emergente [20].",
    "feedbackIncorrect": "Una PAS > 120 mmHg puede aumentar el sangrado. La norepinefrina solo se utiliza si el paciente no responde a la reanimación hídrica. La reanimación incluye cristaloides y hemoderivados, pero se debe limitar el volumen de cristaloides [20]."
  },
  {
    "id": "ANEST-AL-059",
    "topic": "Anestesiología / Dosis de Anestésicos Locales (AL)",
    "stem": "Un paciente de 60 kg requiere anestesia local con Bupivacaína sin epinefrina al 0.5%. ¿Cuál es la dosis máxima segura en miligramos y el volumen máximo en mililitros de esta solución que se le puede administrar?",
    "options": [
      "120 mg; 24 ml.",
      "180 mg; 36 ml.",
      "240 mg; 48 ml.",
      "300 mg; 60 ml."
    ],
    "correctIndex": 0,
    "feedbackCorrect": "La dosis máxima de Bupivacaína sin epinefrina es de **2 mg/kg** [21]. Para un paciente de 60 kg: 2 mg/kg * 60 kg = **120 mg**. La Bupivacaína al 0.5% tiene **5 mg/ml** [22]. Por lo tanto, el volumen máximo es: 120 mg / 5 mg/ml = **24 ml**.",
    "feedbackIncorrect": "180 mg serían 3 mg/kg (dosis para Bupivacaína con epinefrina) o 36 ml. 240 mg y 48 ml es el doble de la dosis máxima sin epinefrina. Se debe ser estricto con la dosis máxima segura para evitar toxicidad [23]."
  },
  {
    "id": "TRAUMA-TRM-060",
    "topic": "Trauma / Trauma Raquimedular (TRM)",
    "stem": "Paciente con Trauma Raquimedular (TRM) que presenta hipotensión arterial (PAM 60 mmHg) y bradicardia (FC 50 lpm). El nivel de lesión se encuentra por encima de T6. Se le han administrado bolos de cristaloides sin respuesta. ¿Cuál es el diagnóstico sindrómico más probable y el manejo inicial recomendado?",
    "options": [
      "Choque Medular; administrar bolos de esteroides a altas dosis (Metilprednisolona).",
      "Choque Neuro-génico; iniciar vasopresor (Norepinefrina) y evaluar necesidad de atropina.",
      "Lesión completa ASIA A; manejo quirúrgico diferido para estabilización.",
      "Hipotensión permisiva; esperar a que la presión se normalice espontáneamente."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "La presencia de **hipotensión refractaria más bradicardia**, especialmente con lesiones por encima de T6, define el **Choque Neuro-génico** [24], [25]. El manejo inicial, una vez excluidas otras causas de choque, es el inicio temprano de **vasopresor (norepinefrina es el más recomendado)** para mantener la PAM > 90 mmHg [26].",
    "feedbackIncorrect": "El Choque Medular es la arreflexia generalizada que se resuelve en 24-48 horas, no un síndrome de inestabilidad hemodinámica [27]. El uso de corticoides es controversial [28], [29]. La hipotensión permisiva (PAS 80-90 mmHg) se usa en trauma vascular con choque hipovolémico, no en choque neurogénico [30], [26]."
  },
  {
    "id": "MEDINT-SCA-061",
    "topic": "Medicina Interna / SCA - Estrategia Terapéutica",
    "stem": "Un paciente con IAMSEST es estratificado con un puntaje GRACE de 160. El paciente está estable, sin arritmias ventriculares ni complicaciones mecánicas. ¿Cuál es la estrategia terapéutica invasiva recomendada, según el riesgo de mortalidad?",
    "options": [
      "Estrategia invasiva selectiva (más de 72 horas).",
      "Estrategia invasiva inmediata (primeras 2 horas).",
      "Estrategia invasiva temprana (primeras 24 horas).",
      "Tratamiento médico exclusivo y revascularización solo si falla."
    ],
    "correctIndex": 2,
    "feedbackCorrect": "Un puntaje GRACE mayor a 140 es de **alto riesgo** de mortalidad [31]. En pacientes de alto riesgo (sin signos de muy alto riesgo como choque o complicaciones mecánicas), se debe implementar la **estrategia invasiva temprana** en las primeras 24 horas [15], [32], [33].",
    "feedbackIncorrect": "La estrategia inmediata (primeras 2 horas) es para riesgo muy alto (choque cardiogénico, arritmias colapsantes, complicaciones mecánicas) [33]. El tratamiento médico exclusivo se reserva para riesgo bajo o intermedio, pero el riesgo de 160 es alto [31]."
  },
  {
    "id": "ORTOPEDIA-CODO-062",
    "topic": "Ortopedia / Fracturas de Húmero y Codo",
    "stem": "En el contexto de una fractura de la diáfisis humeral, ¿cuál es el nervio que con mayor frecuencia se lesiona y la angulación máxima en varo/valgo aceptable para un manejo no quirúrgico en adultos?",
    "options": [
      "Nervio axilar; angulación aceptable < 20º.",
      "Nervio radial; angulación aceptable < 30º.",
      "Nervio interóseo posterior; angulación aceptable < 15º.",
      "Nervio cubital; angulación aceptable < 20º."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "Las fracturas de la diáfisis humeral se asocian a lesiones del **nervio radial** [34]. Los criterios de alineación aceptable para manejo no quirúrgico son: angulación anterior < 20º, **angulación varo/valgo < 30º**, y acortamiento < 3 cm [35].",
    "feedbackIncorrect": "El nervio axilar es la lesión nerviosa más común en las fracturas de húmero proximal [36]. La angulación en varo/valgo máxima aceptable es < 30º."
  },
  {
    "id": "EPIDEMI-DIAG-063",
    "topic": "Epidemiología Clínica / Pruebas Diagnósticas",
    "stem": "Una prueba diagnóstica tiene un Valor Predictivo Positivo (VPP) muy alto en una población específica. Si se aplica esta misma prueba a una nueva población donde la prevalencia de la enfermedad es significativamente menor. ¿Cómo afectará este cambio a la Sensibilidad, Especificidad y VPP?",
    "options": [
      "Sensibilidad y especificidad disminuyen; el VPP aumenta.",
      "Sensibilidad y especificidad se mantienen estables; el VPP disminuye.",
      "Sensibilidad disminuye; especificidad y VPP se mantienen estables.",
      "Sensibilidad y especificidad se mantienen estables; el VPP aumenta."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "La sensibilidad y la especificidad son propiedades intrínsecas de la prueba y no se ven afectadas por la prevalencia de la enfermedad [37]. El Valor Predictivo Positivo (VPP) se correlaciona directamente con la prevalencia, por lo que si la prevalencia disminuye, el VPP disminuirá [38], [39].",
    "feedbackIncorrect": "La disminución de la prevalencia incrementa el Valor Predictivo Negativo (VPN), no el VPP [37], [39]. La sensibilidad y especificidad solo se afectan con el test diagnóstico [37]."
  },


  {
    "id": "MEDINT-AR-064",
    "topic": "Medicina Interna / Artritis Reumatoide - Diagnóstico",
    "stem": "Mujer de 45 años presenta dolor y tumefacción simétrica en las articulaciones metacarpofalángicas (MCF) de ambas manos (6 articulaciones en total) y en una interfalángica proximal (IFP), de 4 meses de evolución. Los reactantes de fase aguda son normales. Serología: FR positivo (títulos bajos), anti-CCP negativo. ¿Cuál es la puntuación según los criterios ACR/EULAR 2010 y la clasificación resultante?",
    "options": [
      "4 puntos; No define Artritis Reumatoidea.",
      "6 puntos; Artritis Reumatoidea definida.",
      "5 puntos; Artritis Reumatoidea no definida, requiere seguimiento.",
      "3 puntos; Requiere confirmación con líquido sinovial inflamatorio."
    ],
    "correctIndex": 2,
    "feedbackCorrect": "Puntuación: 1) Articulaciones afectadas (7 pequeñas): 4-10 articulaciones pequeñas dan 3 puntos [40]. 2) Serología: Títulos bajos de FR o CCP dan 2 puntos (en este caso, FR bajo) [40]. 3) Duración: < 6 semanas da 0 puntos. 4) Reactantes de fase aguda: Normales dan 0 puntos. Total = 3 + 2 + 0 + 0 = 5 puntos. Un puntaje < 6 no define Artritis Reumatoidea, pero la paciente requiere seguimiento [41].",
    "feedbackIncorrect": "El puntaje es 5. Se requiere ≥ 6 puntos para definir AR [41]. La duración de los síntomas (4 meses < 6 semanas) es incorrecta, se deben contar como <6 semanas para obtener 0 puntos, lo que deja el total en 5 puntos. Si la duración hubiera sido ≥6 semanas, el puntaje sería 6 (3+2+1+0=6), definiendo AR [40]."
  },
  {
    "id": "PED-DIGESTIVA-065",
    "topic": "Pediatría / Invaginación Intestinal",
    "stem": "Lactante de 1 año ingresa con dolor abdominal intenso e intermitente, palidez y letargia. Durante la evaluación, se observa una deposición con moco y sangre ('jalea de grosella'). El estudio de elección es la ecografía. ¿Cuál es el hallazgo ecográfico que apoya el diagnóstico de Invaginación Intestinal y cuál es el tratamiento de primera línea?",
    "options": [
      "Signo del pseudo riñón y signo de la doble burbuja; laparotomía de urgencia.",
      "Signo de la dona y masa palpable en hipocondrio derecho; reducción con enema de aire/agua.",
      "Grosor del músculo pilórico > 3 mm; piloromiotomía.",
      "Neumatosis intestinal; antibiótico de amplio espectro e intervención quirúrgica."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "La tríada clásica incluye dolor intermitente, letargia y deposición en jalea de grosella [42]. El estudio de elección es la ecografía, que muestra el **signo del pseudo riñón** o el **signo de la dona** [42]. El tratamiento de primera línea es la **reducción mediante enema con bario o aire/agua** guiada por fluoroscopia, a menos que existan contraindicaciones (ej. peritonitis) [43].",
    "feedbackIncorrect": "La piloromiotomía es el manejo de la Estenosis Pilórica Hipertrófica [8]. La neumatosis intestinal es un signo radiológico de Enterocolitis Necrotizante [44]. El signo de la doble burbuja es de Atresia Duodenal [6]."
  },
  {
    "id": "CIRUGIA-PANCREATITIS-066",
    "topic": "Cirugía General / Pancreatitis Aguda",
    "stem": "Paciente con Pancreatitis Aguda. ¿Cuál de las siguientes es una indicación clave de manejo hídrico y la nutrición recomendada en las primeras 48 horas?",
    "options": [
      "Reanimación agresiva con bolo de Lactato de Ringer (10-20 cc/kg) y nutrición enteral tan pronto como tolere.",
      "Restricción hídrica estricta para evitar edema pancreático y nutrición parenteral total (NPT).",
      "Administrar únicamente cristaloides a 2-3 cc/kg/hora y ayuno de 7 días.",
      "Bolo de cristaloides de 5 cc/kg y nutrición enteral a las 48 horas si no hay dolor."
    ],
    "correctIndex": 0,
    "feedbackCorrect": "Los pilares del tratamiento incluyen la reanimación con líquidos endovenosos, comenzando con un **bolo de Lactato de Ringer (10-20 cc/kg)**, seguido de 2-3 cc/kg/h, y la **nutrición** debe iniciarse lo más pronto posible (nutrición enteral) cuando el dolor esté modulado y no haya emesis, idealmente en los primeros 3 a 5 días [45].",
    "feedbackIncorrect": "La restricción hídrica es incorrecta. El ayuno prolongado se debe evitar, ya que la nutrición se debe iniciar precozmente (nutrición enteral) [45]. La NPT está desaconsejada salvo indicación precisa."
  },
  {
    "id": "PSIQUI-FARMACOS-067",
    "topic": "Psiquiatría / Antipsicóticos Atípicos",
    "stem": "Paciente con diagnóstico de Trastorno Afectivo Bipolar (TAB) con depresión bipolar. ¿Cuál es el antipsicótico atípico que tiene indicación y dosis específicas para su uso como antidepresivo o estabilizador del ánimo, y se caracteriza por tener casi nulos efectos extrapiramidales?",
    "options": [
      "Risperidona (1 a 6 mg/día); por su alto riesgo de extrapiramidalismo.",
      "Haloperidol (20-60 mg/día); por ser efectivo en síntomas positivos.",
      "Quetiapina (150 mg o 300-600 mg/día); por ser de elección en Parkinsonismo.",
      "Clozapina (100-900 mg/día); por ser el Gold Standard para esquizofrenia refractaria."
    ],
    "correctIndex": 2,
    "feedbackCorrect": "La **Quetiapina** tiene indicaciones en esquizofrenia, manía, mantenimiento del TAB y **depresión bipolar** [46]. Se caracteriza por tener **casi nulos efectos extrapiramidales** y es la elección en Parkinsonismo [47]. La dosis como antidepresivo es de 150 mg de liberación prolongada o como estabilizador del ánimo 300-600 mg de liberación prolongada [47].",
    "feedbackIncorrect": "Risperidona es el antipsicótico con mayor riesgo de extrapiramidalismo de su clase [46]. Clozapina se reserva para esquizofrenia resistente y riesgo suicida [48]. Haloperidol es un típico [49]."
  },
  {
    "id": "MEDINT-AAA-068",
    "topic": "Medicina Interna / Aneurisma de Aorta Abdominal (AAA)",
    "stem": "Un paciente de 60 años, fumador, presenta un aneurisma de aorta abdominal (AAA) de 4.2 cm. ¿Cuál es la recomendación de tamizaje, según el tamaño, y cuál es el factor de riesgo más importante para esta patología?",
    "options": [
      "Tamizaje anual; HTA.",
      "Tamizaje cada 3 meses; tabaquismo.",
      "Tamizaje cada 6 meses; aterosclerosis.",
      "Tamizaje cada 2-3 años; historia familiar de AAA."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "El tabaquismo es el **factor de riesgo más importante** [50]. Un AAA de 4.2 cm cae en el rango de 4.0-4.9 cm, y la Figura 2 muestra que el tamizaje recomendado es **cada 3 meses** [5].",
    "feedbackIncorrect": "El tamizaje anual es para aneurismas menores de 4.0 cm [5]. La HTA y la aterosclerosis son factores de riesgo, pero el tabaquismo es el más importante [50]."
  },
  {
    "id": "TRAUMA-TRM-069",
    "topic": "Trauma / Trauma Raquimedular (TRM) - Clasificación",
    "stem": "Un paciente con lesión medular incompleta conserva la sensibilidad por debajo del nivel de la lesión (S4-S5), pero la fuerza motora es menor a 3/5 (no vence la gravedad). ¿Cómo se clasifica esta lesión en la escala ASIA y cuál es la perspectiva de manejo quirúrgico?",
    "options": [
      "ASIA B; cirugía descompresiva urgente.",
      "ASIA C; cirugía descompresiva urgente.",
      "ASIA D; manejo quirúrgico diferido para estabilización.",
      "ASIA E; manejo médico y rehabilitación."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "La lesión incompleta con sensibilidad conservada y **fuerza motora menor de 3/5** (no anti-gravitatoria) por debajo del nivel neurológico afectado se clasifica como **ASIA C** [51], [52]. Las lesiones ASIA B, C o D (incompletas) tienen potencial de recuperación y deben ser llevadas a **manejo quirúrgico descompresivo urgente** (en las primeras 24 horas) para mejorar el pronóstico [53], [29].",
    "feedbackIncorrect": "ASIA B conserva sensibilidad pero no hay función motora. ASIA D tiene fuerza > 3/5 (vence gravedad). La cirugía diferida es para ASIA A, donde no se ofrece recuperación funcional [54]."
  },
  {
    "id": "RN-RCP-070",
    "topic": "Pediatría / Reanimación Neonatal - Adrenalina",
    "stem": "Neonato en reanimación. Después de 30 segundos de Ventilación con Presión Positiva (VPP) efectiva y otros 30 segundos de compresiones torácicas coordinadas con VPP, la Frecuencia Cardíaca (FC) es de 45 lpm. ¿Cuál es la indicación terapéutica y la dosis preferida para la administración?",
    "options": [
      "Suspender el masaje cardíaco y administrar DAD 10% para expandir volumen.",
      "Administrar adrenalina endotraqueal (0,05-0,1 mg/kg) y continuar el masaje cardíaco.",
      "Administrar adrenalina intravenosa (0,01-0,03 mg/kg) y continuar masaje cardíaco y VPP.",
      "Aumentar la VPP a 100 rpm y continuar el masaje cardíaco por 1 minuto adicional."
    ],
    "correctIndex": 2,
    "feedbackCorrect": "Si la FC sigue siendo < 60 lpm después de VPP y compresiones torácicas adecuadas por más de 30 segundos, se debe **administrar adrenalina** [55], [56]. La vía intravenosa se prefiere [56]. La dosis intravenosa es de **0,01 – 0,03 mg/kg** (o 10 – 30 ucgr/kg) y se debe continuar masaje cardíaco y VPP [56].",
    "feedbackIncorrect": "La adrenalina endotraqueal (ET) es menos efectiva y la dosis es diferente. Se debe continuar la VPP y el masaje cardíaco. La VPP se realiza a 40-60 respiraciones por minuto [57], [55]."
  },
  {
    "id": "DERMA-MELANOMA-071",
    "topic": "Dermatología / Melanoma - Pronóstico y Factores de Riesgo",
    "stem": "En un paciente diagnosticado con Melanoma Lentiginoso Acral en la planta del pie, ¿cuál de los siguientes enunciados sobre el pronóstico y la epidemiología es correcto?",
    "options": [
      "Es la forma clínica más frecuente en personas de raza caucásica, asociada a exposición solar intermitente.",
      "Es de peor pronóstico que el Melanoma Nodular, debido a su crecimiento exclusivamente vertical.",
      "Es la presentación clínica más frecuente en Colombia y se considera que el trauma tiene un papel más relevante que el sol.",
      "El factor pronóstico más importante es el Nivel de Clark, ya que el diagnóstico es tardío en esta variante."
    ],
    "correctIndex": 2,
    "feedbackCorrect": "El Melanoma Lentiginoso Acral (MLA) es la **presentación clínica más frecuente diagnosticada en Colombia** y en poblaciones asiáticas/latinoamericanas [58]. Se considera que el sol no tiene un papel relevante, sino el trauma [58].",
    "feedbackIncorrect": "La forma clínica más frecuente en caucásicos es el Melanoma de Extensión Superficial [59]. El Melanoma Nodular tiene peor pronóstico porque su crecimiento es solo vertical [60]. El factor pronóstico más importante es el Índice de Breslow [61]."
  },
  {
    "id": "ORTOPEDIA-CODO-072",
    "topic": "Ortopedia / Luxofracturas de Antebrazo",
    "stem": "Un paciente sufre una fractura extraarticular del radio distal con desplazamiento del fragmento distal hacia el margen volar. ¿Cómo se denomina clásicamente esta fractura y cuál es la inmovilización inicial recomendada?",
    "options": [
      "Fractura de Colles; Férula espica al pulgar.",
      "Fractura de Smith (Colles invertido); Férula pinza de azúcar.",
      "Fractura de Barton; Férula braquimetacarpiana.",
      "Fractura de Monteggia; Férula braquimetacarpiana."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "La fractura extraarticular del radio distal con desplazamiento volar del fragmento distal se conoce como **Fractura de Smith** o Colles invertido [62]. La inmovilización inicial para todas las fracturas de radio diafisario y distal es la **Férula pinza de azúcar** [63].",
    "feedbackIncorrect": "La Fractura de Colles desplaza el fragmento distal a dorsal y radial ('en dorso de tenedor') [64]. La Férula espica al pulgar se usa para fracturas de escafoides [65]. La fractura de Barton es una luxofractura intraarticular [62]."
  },
  {
    "id": "MEDINT-AR-073",
    "topic": "Medicina Interna / Artritis Reumatoide - Complicación Renal",
    "stem": "Paciente con Artritis Reumatoide de larga data, que desarrolla proteinuria en rango nefrótico y aumento del tamaño renal. ¿Cuál es la manifestación extraarticular y complicación renal más probable en este contexto?",
    "options": [
      "Vasculitis necrosante.",
      "Síndrome de Felty.",
      "Amiloidosis renal.",
      "Glomerulonefritis aguda."
    ],
    "correctIndex": 2,
    "feedbackCorrect": "La manifestación extraarticular que se relaciona con nefropatía en la AR y se manifiesta con proteinuria en rango nefrótico y aumento del tamaño renal es la **amiloidosis** [66]. Esta es una complicación muy avanzada de la AR [66].",
    "feedbackIncorrect": "El Síndrome de Felty es la asociación de AR, esplenomegalia y neutropenia [66]. La Vasculitis necrosante se manifiesta con úlceras cutáneas o polineuropatía, aunque también se relaciona con títulos altos de FR [67]."
  },

  {
    "id": "ANEST-AL-074",
    "topic": "Anestesiología / Dosis de Anestésicos Locales (AL)",
    "stem": "Paciente de 70 kg requiere bloqueo nervioso con Lidocaína sin epinefrina al 1%. ¿Cuál es la dosis máxima segura en miligramos y el volumen máximo en mililitros de esta solución que se le puede administrar?",
    "options": [
      "350 mg; 35 ml.",
      "490 mg; 49 ml.",
      "700 mg; 70 ml.",
      "560 mg; 56 ml."
    ],
    "correctIndex": 0,
    "feedbackCorrect": "La dosis máxima de Lidocaína sin epinefrina es de **5 mg/kg** [1]. Para un paciente de 70 kg: 5 mg/kg * 70 kg = **350 mg** [2]. Una solución de Lidocaína al 1% tiene 10 mg/ml [3]. Por lo tanto, el volumen máximo es: 350 mg / 10 mg/ml = **35 ml** [2, 3].",
    "feedbackIncorrect": "490 mg sería la dosis máxima con epinefrina (7 mg/kg) [1]. 700 mg es la dosis para 10 mg/kg, lo cual excede el límite seguro [1]."
  },
  {
    "id": "MEDINT-AR-075",
    "topic": "Medicina Interna / Artritis Reumatoide - FAMEs",
    "stem": "En el tratamiento farmacológico de la Artritis Reumatoide (AR), un paciente necesita iniciar un Fármaco Modificador de la Evolución de la Enfermedad (FAME). ¿Cuál es el FAME convencional de primera elección que ha demostrado retrasar la progresión radiológica de la enfermedad?",
    "options": [
      "Leflunomida.",
      "Metotrexato.",
      "Rituximab.",
      "Cloroquina."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "Entre los FAMEs convencionales, el de primera elección es el **Metotrexato** [4]. Este medicamento, además de mejorar los síntomas, **retrasan la progresión radiológica** [4].",
    "feedbackIncorrect": "Leflunomida, Sulfasalazina, Cloroquina e Hidroxicloroquina son otros FAMEs [5]. Rituximab es un fármaco biológico (Anti CD20) [6]."
  },
  {
    "id": "PSIQUI-FARMACOS-076",
    "topic": "Psiquiatría / Carbamazepina",
    "stem": "Mujer de 30 años con Trastorno Afectivo Bipolar y ciclaje rápido, que presenta intolerancia al Litio. Se inicia Carbamazepina. ¿Cuál es la principal precaución y el efecto adverso grave que requiere monitoreo con hemograma?",
    "options": [
      "Alto riesgo de disfunción tiroidea; solicitar TSH semanal.",
      "Precaución en trastornos de la conducción cardíaca; riesgo de agranulocitosis.",
      "Riesgo de hepatotoxicidad; Categoría D en el embarazo por riesgo de alteración del tubo neural.",
      "Riesgo de Síndrome de Stevens-Johnson; riesgo de desarrollar discinesia tardía."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "La Carbamazepina debe usarse con precaución en trastornos de la conducción cardíaca [7]. Su efecto adverso grave, la **agranulocitosis** [7], requiere control al inicio del tratamiento con hemograma [8].",
    "feedbackIncorrect": "El Ácido Valproico es Categoría D por alteraciones del tubo neural, craneofaciales y de las extremidades [7, 9]. El monitoreo semanal de TSH es para el Litio [10]. La discinesia tardía se asocia más a antipsicóticos típicos [11]."
  },
  {
    "id": "GYN-SOP-077",
    "topic": "Ginecología / Síndrome de Ovario Poliquístico (SOP)",
    "stem": "Una paciente con SOP no busca gestación, pero presenta hirsutismo importante. El pilar del tratamiento incluye Anticonceptivos Orales Combinados (ACOs). ¿Cuál es el manejo complementario si no hay respuesta al hirsutismo después de 6 meses de ACOs?",
    "options": [
      "Cambiar a Progestinas solas, ya que las ACOs tienen poca respuesta.",
      "Adicionar espironolactona (antiandrógeno).",
      "Iniciar Metformina, por el riesgo metabólico.",
      "Suspender ACOs y realizar depilación láser."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "Si el hirsutismo es importante o no hay respuesta con ACOs después de 6 meses, se recomienda **adicionar un antiandrógeno**, siendo la **espironolactona** el más usado por su efecto antiandrogénico [12, 13]. Los ACOs son el pilar del tratamiento cuando no se busca gestación [14].",
    "feedbackIncorrect": "La Metformina se recomienda en IMC ≥ 25 kg/m2 o en casos de intolerancia a carbohidratos/diabetes [13]. Las progestinas se usan si no se toleran los ACOs [12]. La depilación láser es un tratamiento estético, no farmacológico."
  },
  {
    "id": "URG-QUEMADOS-078",
    "topic": "Urgencias / Quemaduras - Clasificación",
    "stem": "Un joven de 15 años presenta quemaduras que abarcan el tórax (9%), el abdomen (9%) y la cara (3%), todas de segundo grado superficial. ¿Cuál es la SCQ total para la reanimación hídrica, y se requiere remisión a la Unidad de Quemados?",
    "options": [
      "SCQ 21%; no requiere remisión, solo manejo ambulatorio.",
      "SCQ 18%; requiere remisión, por la SCQ > 10%.",
      "SCQ 21%; requiere remisión, por el compromiso facial.",
      "SCQ 10%; requiere reanimación hídrica y antibiótico profiláctico."
    ],
    "correctIndex": 2,
    "feedbackCorrect": "La SCQ total es de 9% (tórax) + 9% (abdomen) + 3% (cara) = **21%** [15]. La remisión obligatoria a un Centro con Unidad de Quemados se indica en quemaduras de segundo o tercer grado que involucren **cara**, independientemente de la SCQ [16].",
    "feedbackIncorrect": "La cara es un criterio de remisión absoluto [16]. La SCQ es > 20%, lo que también es un criterio para iniciar reanimación hídrica [17]. Los antibióticos profilácticos no se recomiendan [18]."
  },
  {
    "id": "GENETICA-AR-079",
    "topic": "Genética / Herencia Ligada al X",
    "stem": "Un padre padece Hemofilia A (enfermedad recesiva ligada al X) y la madre es sana no portadora. ¿Cuál es la probabilidad de que su hija sea portadora y de que su hijo sea afectado?",
    "options": [
      "La hija tiene 50% de probabilidad de ser portadora; el hijo tiene 50% de probabilidad de ser afectado.",
      "La hija tiene 100% de probabilidad de ser portadora; el hijo tiene 0% de probabilidad de ser afectado.",
      "Ambos tienen 50% de probabilidad de ser portadores, ya que el gen recesivo se hereda del padre.",
      "La hija tiene 0% de ser portadora; el hijo tiene 100% de ser afectado."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "En la herencia ligada al X, un padre afectado (XhY) y una madre sana no portadora (XX) tendrán: 1) Hijas sanas portadoras (XhX) al **100%**, ya que heredan el X afectado del padre y un X sano de la madre. 2) Hijos varones sanos no afectados (XY) al **0%** de ser afectados, ya que el padre solo transmite el cromosoma Y al hijo varón [19, 20].",
    "feedbackIncorrect": "Los varones afectados solo transmiten el cromosoma Y a sus hijos varones, por lo que el riesgo de afectación es 0% [19, 20]. Las hijas siempre heredan un X afectado del padre y un X sano de la madre, siendo portadoras (100%) [19]."
  },
  {
    "id": "MEDINT-AAA-080",
    "topic": "Medicina Interna / Aneurisma de Aorta Abdominal (AAA)",
    "stem": "Un hombre de 75 años, exfumador, tiene un AAA de 3.8 cm (infra-renal). Está estable y asintomático. ¿Cuál es el periodo de tamizaje ecográfico recomendado y el tratamiento farmacológico con estatina?",
    "options": [
      "Tamizaje cada 6 meses; estatina de baja intensidad.",
      "Tamizaje cada 2-3 años; estatina de moderada a alta intensidad.",
      "Tamizaje anual; suspender estatina, ya que el riesgo es bajo.",
      "Tamizaje cada 3 meses; estatina de moderada a alta intensidad."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "Un AAA entre 3.0 cm y 3.9 cm requiere tamizaje ecográfico cada **2-3 años** [21]. Se indica el inicio de **estatinas** en esquemas de **intensidad moderada a alta** [22].",
    "feedbackIncorrect": "El tamizaje cada 6 meses es para AAA de 4.0 a 4.9 cm [21]. La estatina debe iniciarse o continuarse con intensidad moderada a alta, no suspenderse [22]."
  }
  

]