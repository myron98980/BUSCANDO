import React from 'react';

function ResultScreen({ result, onReset }) {
  return (
    <div className="result-container">
      <h2>¡Código escaneado con éxito!</h2>
      <p>El contenido del código es:</p>
      <p className="result-text">{result}</p>
      <p>Has encontrado la primera pista. ¡Prepárate para el siguiente paso!</p>
      {/* Este botón nos servirá más adelante para buscar el siguiente QR */}
      <button onClick={onReset}>Volver a empezar</button>
    </div>
  );
}

export default ResultScreen;