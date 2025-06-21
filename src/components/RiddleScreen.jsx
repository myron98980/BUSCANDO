import React from 'react';

function RiddleScreen({ step, onStartScan, onProceed }) {
  // Añadimos el número del equipo al texto de introducción
  const introText = step.introText && step.introText.includes('Equipo') ? `${step.introText} ${step.id || ''}`.trim() : step.introText;
  
  return (
    <>
      <img src={step.logo} alt="Logo del acertijo" className="logo" />
      <div>
        <p className="intro-text">{introText}</p>
        <div className="riddle-box">
          <p>"{step.riddle}"</p>
        </div>
      </div>
      
      {/* Si tiene la función 'onStartScan', muestra el botón de escanear */}
      {onStartScan && (
        <button onClick={onStartScan}>Escanear</button>
      )}

      {/* Si tiene la función 'onProceed', muestra el botón de continuar */}
      {onProceed && (
        <button onClick={onProceed}>Escanear QR</button>
      )}
    </>
  );
}

export default RiddleScreen;