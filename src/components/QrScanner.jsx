import React, { useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

function QrScanner({ onResult, scanError }) {
  useEffect(() => {
    function handleScanSuccess(decodedText) { onResult(decodedText); }
    function handleScanError(error) {}

    const config = {
      fps: 10,
      qrbox: { width: 250, height: 250 },
      rememberLastUsedCamera: true,
      videoConstraints: { facingMode: "environment" }
    };

    const scanner = new Html5QrcodeScanner('qr-scanner-container', config, false);
    scanner.render(handleScanSuccess, handleScanError);

    return () => {
      scanner.clear().catch(error => console.error("Fallo al limpiar.", error));
    };
  }, [onResult]);

  return (
    // Usamos una nueva clase 'scanner-wrapper' para darle un estilo único
    <div className="scanner-wrapper">
      <h1>Escanear QR</h1>
      <p>Apunta la cámara al código QR que encontraste.</p>
      
      {scanError && <div className="scan-error">{scanError}</div>}
      
      {/* Este es el div donde la librería crea el visor */}
      <div id="qr-scanner-container"></div>
    </div>
  );
}

export default QrScanner;