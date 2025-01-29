import React, { useState } from 'react';

const Treatments = () => {
  const [treatments, setTreatments] = useState([]);
  const [newTreatment, setNewTreatment] = useState({
    nombreTratamiento: '',
    nombreMedicamento: '',
    horaInicio: '',
    frecuencia: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTreatment({ ...newTreatment, [name]: value });
  };

  const addTreatment = () => {
    setTreatments([...treatments, newTreatment]);
    setNewTreatment({ nombreTratamiento: '', nombreMedicamento: '', horaInicio: '', frecuencia: '' });
  };

  return (
    <div style={{ backgroundColor: '#FAF3DD', minHeight: '100vh', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', color: '#5E6472' }}>Tratamientos</h2>
      <div
        style={{
          backgroundColor: '#AED9E0',
          padding: '20px',
          borderRadius: '10px',
          margin: '20px auto',
          width: '300px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h3 style={{ color: '#5E6472' }}>Agregar Tratamiento</h3>
        {['nombreTratamiento', 'nombreMedicamento', 'horaInicio', 'frecuencia'].map((field) => (
          <div key={field} style={{ marginBottom: '10px' }}>
            <label style={{ color: '#5E6472' }}>
              {field === 'horaInicio'
                ? 'Hora de Inicio'
                : field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              type={field === 'horaInicio' ? 'time' : 'text'}
              name={field}
              value={newTreatment[field]}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '10px',
                marginTop: '5px',
                border: '1px solid #5E6472',
                borderRadius: '5px',
              }}
            />
          </div>
        ))}
        <button
          onClick={addTreatment}
          style={{
            backgroundColor: '#B8F2E6',
            color: '#5E6472',
            padding: '10px',
            width: '100%',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Agregar Tratamiento
        </button>
      </div>

      <div>
        {treatments.map((treatment, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#AED9E0',
              padding: '10px',
              borderRadius: '5px',
              margin: '10px 0',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h4 style={{ color: '#5E6472' }}>{treatment.nombreTratamiento}</h4>
            <p style={{ color: '#5E6472' }}>
              Medicamento: {treatment.nombreMedicamento}
            </p>
            <p style={{ color: '#5E6472' }}>
              Hora de Inicio: {treatment.horaInicio}
            </p>
            <p style={{ color: '#5E6472' }}>
              Frecuencia: Cada {treatment.frecuencia} horas
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Treatments;
