// src/components/QuestionScreen.jsx
import React, { useState } from 'react';

function QuestionScreen({ step, onAnswerSubmit, error }) {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.trim() !== '') {
      onAnswerSubmit(answer);
    }
  };

  return (
    <>
      <img src={step.logo} alt="Logo del desafío" className="logo" />
      <div>
        <p className="intro-text">{step.introText}</p>
        <div className="riddle-box">
          <p>"{step.question}"</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="answer-form">
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Escribe tu respuesta aquí"
          className="answer-input"
        />
        <button type="submit">Comprobar</button>
      </form>
      {error && <p className="scan-error">{error}</p>}
    </>
  );
}
export default QuestionScreen;