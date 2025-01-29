import React from 'react';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  return (
    <div style={{ backgroundColor: '#FAF3DD', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2 style={{ color: '#5E6472' }}>¡Bienvenido a SaludApp!</h2>
        <p style={{ color: '#5E6472' }}>Gestiona tus tratamientos y alarmas con facilidad.</p>
        <div
          style={{
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              backgroundColor: '#B8F2E6',
              padding: '15px',
              borderRadius: '10px',
              width: '150px',
              textAlign: 'center',
              marginBottom: '10px',
            }}
          >
            <h3 style={{ color: '#5E6472' }}>Perfil</h3>
            <p style={{ color: '#5E6472' }}>Consulta tu información personal.</p>
          </div>
          <div
            style={{
              backgroundColor: '#AED9E0',
              padding: '15px',
              borderRadius: '10px',
              width: '150px',
              textAlign: 'center',
              marginBottom: '10px',
            }}
          >
            <h3 style={{ color: '#5E6472' }}>Tratamientos</h3>
            <p style={{ color: '#5E6472' }}>Administra tus tratamientos aquí.</p>
          </div>
          <div
            style={{
              backgroundColor: '#B8F2E6',
              padding: '15px',
              borderRadius: '10px',
              width: '150px',
              textAlign: 'center',
              marginBottom: '10px',
            }}
          >
            <h3 style={{ color: '#5E6472' }}>Alarmas</h3>
            <p style={{ color: '#5E6472' }}>Configura y revisa tus alarmas.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
