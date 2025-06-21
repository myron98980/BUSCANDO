import React from 'react';

function InstructionScreen({ step, onStartScan }) {
  return (
    <>
      <img src={step.logo} alt="Logo de instrucción" className="logo" />
      <div className="main-text-box">
        <h1>{step.title}</h1>
        <p>{step.message}</p>
      </div>
      <button onClick={onStartScan}>{step.buttonText || "Escanear Siguiente QR"}</button>
    </>
  );
}
export default InstructionScreen;