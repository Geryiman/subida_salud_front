import React, { useState } from 'react';

const Alarm = () => {
  const [currentAlarm, setCurrentAlarm] = useState({
    medicamento: 'Paracetamol',
    mensaje: '¡Es hora de tomar tu medicamento!',
  });

  const stopAlarm = () => {
    alert('Alarma apagada. Por favor, toma una foto como prueba.');
    setCurrentAlarm(null);
  };

  return (
    <div style={{ backgroundColor: '#FAF3DD', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {currentAlarm ? (
        <div
          style={{
            backgroundColor: '#AED9E0',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h2 style={{ color: '#5E6472' }}>{currentAlarm.mensaje}</h2>
          <p style={{ color: '#5E6472' }}>Medicamento: {currentAlarm.medicamento}</p>
          <button
            onClick={stopAlarm}
            style={{
              backgroundColor: '#B8F2E6',
              color: '#5E6472',
              padding: '10px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '15px',
            }}
          >
            Apagar Alarma
          </button>
        </div>
      ) : (
        <h2 style={{ color: '#5E6472' }}>No hay alarmas activas</h2>
      )}
    </div>
  );
};

export default Alarm;
