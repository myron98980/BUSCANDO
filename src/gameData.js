// src/gameData.js

// Pantalla de bienvenida (la primera de todas)
export const welcomeScreenData = {
  id: "welcome",
  title: "Búsqueda del Tesoro",
  details: "La aventura comienza. Presionen para activar el escáner y busquen la primera pista en la biblioteca.",
  logo: "/images/pirate-logo.png",
  themeClass: "screen-start-purple",
  expectedQr: "QR_BIBLIOTECA", // Este es el QR que se escanea primero
};

// ACERTIJO 1: El que se muestra después de escanear en la biblioteca.
export const libraryRiddle = {
  id: "library-riddle",
  content: {
    introText: "¡Primera Pista Desbloqueada!",
    riddle: "Azul como el cielo y firme en su andar, cuenta las horas sin descansar. En el centro del pueblo, no pasa desapercibida, bajo su techo se esconde una nueva pista escondida. ¿Dónde estoy?", // Respuesta: La Glorieta
    logo: "/images/pirate-logo.png",
  },
  themeClass: "screen-riddle-orange",
};

// ACERTIJOS FINALES: Los que se reciben en la Glorieta.
// ¡IMPORTANTE! Hemos modificado "expectedQr" para que TODOS apunten al mismo QR.
export const finalMissions = {
  "GLORIETA_1": {
    content: {
      introText: "Misión del Equipo ",
      riddle: "Soy el oído que escucha al vecino,y la voz que decide su destino.Si tienes una idea o una queja que dar,este es el primer lugar al que debes llegar.",
      logo: "/images/pirate-logo.png",
    },
    expectedQr: "QR_HACIA_COMPLEJO",
    themeClass: "screen-start-purple",
  },
  "GLORIETA_2": {
    content: {
      introText: "Misión del Equipo ",
      riddle: "De morado viste su santa fachada, y en octubre su fe es venerada.Allí descansa el Señor del amor,búscalo y hallarás la pista, con fervor.",
      logo: "/images/pirate-logo.png",
    },
    expectedQr: "QR_HACIA_COMPLEJO",
    themeClass: "screen-riddle-orange",
  },
  "GLORIETA_3": {
    content: {
      introText: "Misión del Equipo ",
      riddle: "Entre frutas, voces y vendedores,se cruzan aromas, sabores y colores. Si buscas pistas sin perder el norte,ve al lugar donde todo se vende por corte.",
      logo: "/images/pirate-logo.png",
    },
    expectedQr: "QR_HACIA_COMPLEJO",
    themeClass: "screen-start-purple",
  },
  "GLORIETA_4": {
    content: {
      introText: "Misión del Equipo ",
      riddle: "Acertijo para el grupo 4.",
      logo: "/images/pirate-logo.png",
    },
    expectedQr: "QR_HACIA_COMPLEJO",
    themeClass: "screen-riddle-orange",
  },
  "GLORIETA_5": {
    content: {
      introText: "Misión del Equipo ",
      riddle: "Acertijo para el grupo 5.",
      logo: "/images/pirate-logo.png",
    },
    expectedQr: "QR_HACIA_COMPLEJO",
    themeClass: "screen-start-purple",
  },
  "GLORIETA_6": {
    content: {
      introText: "Misión del Equipo ",
      riddle: "Acertijo para el grupo 6.",
      logo: "/images/pirate-logo.png",
    },
    expectedQr: "QR_HACIA_COMPLEJO",
    themeClass: "screen-riddle-orange",
  },
  "GLORIETA_7": {
    content: {
      introText: "Misión del Equipo",
      riddle: "Acertijo para el grupo 7.",
      logo: "/images/pirate-logo.png",
    },
    expectedQr: "QR_HACIA_COMPLEJO",
    themeClass: "screen-start-purple",
  },
  "GLORIETA_8": {
    content: {
      introText: "Misión del Equipo",
      riddle: "Acertijo para el grupo 8.",
      logo: "/images/pirate-logo.png",
    },
    expectedQr: "QR_HACIA_COMPLEJO",
    themeClass: "screen-riddle-orange",
  },
  "GLORIETA_9": {
    content: {
      introText: "Misión del Equipo",
      riddle: "Acertijo para el grupo 9.",
      logo: "/images/pirate-logo.png",
    },
    expectedQr: "QR_HACIA_COMPLEJO",
    themeClass: "screen-start-purple",
  },
  "GLORIETA_10": {
    content: {
      introText: "Misión del Equipo",
      riddle: "Acertijo para el grupo 10.",
      logo: "/images/pirate-logo.png",
    },
    expectedQr: "QR_HACIA_COMPLEJO",
    themeClass: "screen-riddle-orange",
  },
};

// --- NUEVA SECCIÓN: CADENA DE PASOS COMUNES ---
export const commonStages = {
  // ETAPA 1: ACERTIJO PARA LLEGAR AL COMPLEJO
  "complejo": {
    type: "riddle", // Acertijo para ir a un lugar
    content: {
      introText: "¡Primer Punto de Encuentro!",
      riddle: "Aplausos, danzas y fiesta sin fin,hay gradas, un campo… ¿ya sabes por fin? Si hay algo importante, ahí va a pasar"
    },
    expectedQr: "QR_HACIA_MUSEO",
    nextStageId: "museo",
    themeClass: "screen-riddle-blue",
  },

  // ETAPA 2: ACERTIJO PARA LLEGAR AL MUSEO
  "museo": {
    type: "riddle",
    content: {
      introText: "¡La cultura te acerca a la meta!",
      riddle: "Fachada amarilla, historia sin fin,junto a un tren quieto que mira el jardín.No hay rótulos claros, ni mucho que ver, pero si preguntas, lo vas a saber.",
      logo: "/images/pirate-logo.png",
    },
    expectedQr: "QR_INSTRUCCIONES_FINALES",
    nextStageId: "instruccionesFinales",
    themeClass: "screen-riddle-green",
  },

  // ETAPA 3: PANTALLA DE INSTRUCCIONES DEL ORGANIZADOR
  "instruccionesFinales": {
    type: "instruction", // Pantalla estática de mensaje
    content: {
      title: "¡Felicidades por llegar a este nivel!",
      message: "Ahora, presten atención y sigan las instrucciones del organizador del evento. Él los guiará a su próximo desafío.",
      logo: "/images/pirate-logo.png",
    },
    // El organizador les dirá qué QR escanear ahora
    buttonText: "¡Listos para el desafío!",
    expectedQr: "QR_PREGUNTA_MATEMATICA",
    nextStageId: "preguntaMatematica",
    themeClass: "screen-instruction-purple",
  },

  // ETAPA 4: PREGUNTA DE MATEMÁTICAS
  "preguntaMatematica": {
    type: "question", // Pantalla con campo de respuesta
    content: {
      introText: "Primer Desafío: Mente Matemática",
      question: "Si en una caja hay 5 docenas de lápices y se reparten en partes iguales entre 10 estudiantes, ¿cuántos lápices recibe cada uno?",
      logo: "/images/pirate-logo.png",
    },
    expectedAnswer: "6",
    nextStageId: "postPreguntaMatematica",
    themeClass: "screen-question-blue",
  },

  // ETAPA 4.5: MENSAJE DESPUÉS DE LA PREGUNTA DE MATEMÁTICAS
  "postPreguntaMatematica": {
    type: "instruction",
    content: {
      title: "¡Respuesta Correcta!",
      message: "Han demostrado su ingenio. Informen al organizador para que los guíe a la siguiente prueba.",
      logo: "/images/pirate-logo.png",
    },
    buttonText: "Continuar al siguiente reto",
    expectedQr: "QR_PREGUNTA_LENGUAJE",
    nextStageId: "preguntaLenguaje",
    themeClass: "screen-instruction-green",
  },

  // ETAPA 5: PREGUNTA DE LENGUAJE
  "preguntaLenguaje": {
    type: "question",
    content: {
      introText: "Segundo Desafío: Dominio del Lenguaje",
      question: "Un niño tiene 12 años y su hermana tiene la mitad de su edad. ¿Cuántos años tendrá su hermana cuando él tenga 20?",
      logo: "/images/pirate-logo.png",
    },
    expectedAnswer: "14", // La respuesta esperada no distingue mayúsculas/minúsculas
    nextStageId: "postPreguntaLenguaje",
    themeClass: "screen-question-red",
  },

  // ETAPA 5.5: MENSAJE DESPUÉS DE LA PREGUNTA DE LENGUAJE
  "postPreguntaLenguaje": {
    type: "instruction",
    content: {
      title: "¡Respuesta Correcta!",
      message: "¡Excelente! Solo queda un desafío. El organizador los llevará a la ubicación final.",
      logo: "/images/pirate-logo.png",
    },
    buttonText: "Ir al desafío final",
    expectedQr: "QR_PREGUNTA_FINAL",
    nextStageId: "preguntaFinal",
    themeClass: "screen-instruction-purple",
  },

  // ETAPA 6: PREGUNTA FINAL
  "preguntaFinal": {
    type: "question",
    content: {
      introText: "El Desafío Final en la Puerta",
      question: "¿Cuál es el sinónimo más cercano de la palabra “valiente”? A) Miedoso, B) Cobarde,C) Audaz,D) Dócil",
      logo: "/images/pirate-logo.png",
    },
    expectedAnswer: "c",
    // No hay nextStageId, al acertar se gana.
    themeClass: "screen-question-gold",
  },
};

// Pantalla final del juego
export const finalTreasure = {
    message: "¡VICTORIA!",
    details: "¡Han superado todos los desafíos y encontrado el tesoro! Pueden entrar.",
    logo: "/images/pirate-logo.png",
    themeClass: "screen-treasure",
};