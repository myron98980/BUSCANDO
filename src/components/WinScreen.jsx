import React from 'react';

function WinScreen({ treasure, onPlayAgain }) {
  return (
    <div>
      <img src={treasure.logo} alt="Logo del Tesoro" className="logo" />
      <h1 className="win-title">{treasure.message}</h1>
      <p className="win-details">{treasure.details}</p>
      <button onClick={onPlayAgain}>Jugar de Nuevo</button>
    </div>
  );
}

export default WinScreen;