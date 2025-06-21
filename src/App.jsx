// src/App.jsx

import { useState } from 'react';
import { welcomeScreenData, libraryRiddle, finalMissions, commonStages, finalTreasure } from './gameData.js';
import WelcomeScreen from './components/WelcomeScreen.jsx';
import RiddleScreen from './components/RiddleScreen.jsx';
import QuestionScreen from './components/QuestionScreen.jsx';
import InstructionScreen from './components/InstructionsScreen.jsx';
import QrScanner from './components/QrScanner.jsx';
import WinScreen from './components/WinScreen.jsx';
import './App.css';

function App() {
  const [gameState, setGameState] = useState('welcome');
  const [currentMissionId, setCurrentMissionId] = useState(null);
  const [scanError, setScanError] = useState('');
  const [answerError, setAnswerError] = useState('');
  const [previousGameState, setPreviousGameState] = useState('welcome');

  const handleStartScan = () => {
    setScanError('');
    setAnswerError('');
    setPreviousGameState(gameState);
    setGameState('scanning');
  };

  const handleAnswerSubmit = (answer) => {
    setAnswerError('');
    const stageData = commonStages[gameState];
    const cleanUserAnswer = answer.trim().toUpperCase();
    const cleanExpectedAnswer = stageData.expectedAnswer.toUpperCase();

    if (cleanUserAnswer === cleanExpectedAnswer) {
      if (gameState === 'preguntaFinal') {
        setGameState('finished');
      } else {
        setGameState(stageData.nextStageId);
      }
    } else {
      setAnswerError('Respuesta incorrecta. ¡Vuelve a intentarlo!');
    }
  };

  const handleScanResult = (scannedData) => {
    setScanError('');
    const cleanData = scannedData.trim().toUpperCase();

    if (previousGameState === 'welcome') {
      if (cleanData === welcomeScreenData.expectedQr) setGameState('libraryRiddle');
      else setScanError('¡QR incorrecto! Busca la primera pista en la biblioteca.');
      return;
    }

    if (previousGameState === 'glorietaInstructions') {
      if (finalMissions[cleanData]) {
        setCurrentMissionId(cleanData);
        setGameState('finalMissionRiddle');
      } else {
        setScanError('¡QR de equipo no válido! Asegúrate de escanear el QR de tu sobre.');
      }
      return;
    }

    if (previousGameState === 'finalMissionRiddle') {
      if (cleanData === finalMissions[currentMissionId].expectedQr) {
        setGameState('complejo');
      } else {
        setScanError('¡QR incorrecto! Busca bien en el lugar al que te llevó tu acertijo.');
      }
      return;
    }

    const stageData = commonStages[previousGameState];
    if (stageData && cleanData === stageData.expectedQr) {
      setGameState(stageData.nextStageId);
    } else {
      setScanError('QR incorrecto o fuera de secuencia. ¡Habla con el organizador!');
    }
  };

  const handlePlayAgain = () => {
    setGameState('welcome');
    setCurrentMissionId(null);
    setAnswerError('');
    setScanError('');
  };

  const renderGameContent = () => {
    const stageData = commonStages[gameState];
    if (stageData) {
      switch (stageData.type) {
        case 'riddle':
          return <RiddleScreen step={stageData.content} onStartScan={handleStartScan} />;
        case 'instruction':
          return <InstructionScreen step={stageData.content} onStartScan={handleStartScan} />;
        case 'question':
          return <QuestionScreen step={stageData.content} onAnswerSubmit={handleAnswerSubmit} error={answerError} />;
      }
    }

    switch (gameState) {
      case 'welcome': return <WelcomeScreen screenData={welcomeScreenData} onStartScan={handleStartScan} />;
      case 'libraryRiddle': return <RiddleScreen step={libraryRiddle.content} onProceed={() => setGameState('glorietaInstructions')} />;
      case 'glorietaInstructions': return <div className="main-text-box"><h1>¡Misión en la Glorieta!</h1><p>Ahora, reciban su sobre del organizador. ¡Escaneen el QR que encuentren dentro para conocer su destino!</p><button onClick={handleStartScan}>Escanear QR del Sobre</button></div>;
      case 'finalMissionRiddle': return <RiddleScreen step={finalMissions[currentMissionId].content} onStartScan={handleStartScan} />;
      case 'scanning': return <QrScanner onResult={handleScanResult} scanError={scanError} />;
      case 'finished': return <WinScreen treasure={finalTreasure} onPlayAgain={handlePlayAgain} />;
      default: return <div>Cargando...</div>;
    }
  };

  const getScreenClass = () => {
    const currentThemeState = gameState === 'scanning' ? previousGameState : gameState;
    const stageData = commonStages[currentThemeState];
    if (stageData) {
      return stageData.themeClass;
    }
    switch (currentThemeState) {
      case 'welcome': return welcomeScreenData.themeClass;
      case 'libraryRiddle': return libraryRiddle.themeClass;
      case 'glorietaInstructions': return 'screen-riddle-orange';
      case 'finalMissionRiddle': return finalMissions[currentMissionId]?.themeClass || 'screen-riddle-orange';
      case 'finished': return finalTreasure.themeClass;
      default: return 'screen-start-purple';
    }
  };

  return (
    <div className={`App ${getScreenClass()} ${gameState === 'scanning' ? 'scanning-active' : ''}`}>
      <div className="game-content">{renderGameContent()}</div>
    </div>
  );
}

export default App;