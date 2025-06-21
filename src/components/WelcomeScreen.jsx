import React from 'react';

// Este componente se muestra al principio del juego.
function WelcomeScreen({ screenData, onStartScan }) {
  return (
    <>
      <img src={screenData.logo} alt="Logo del Juego" className="logo" />
      
      <div>
        <h1>{screenData.title}</h1>
        <div className="main-text-box">
          <p>{screenData.details}</p>
        </div>
      </div>

      <button onClick={onStartScan}>Empezar a Escanear</button>
    </>
  );
}

export default WelcomeScreen;