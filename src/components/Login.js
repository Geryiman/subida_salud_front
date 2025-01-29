import React, { useState } from 'react';

const Login = () => {
  const [nss, setNss] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica para iniciar sesión
    console.log('Inicio de sesión:', { nss, password });
  };

  return (
    <div style={{ backgroundColor: '#FAF3DD', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <form
        onSubmit={handleLogin}
        style={{
          backgroundColor: '#AED9E0',
          padding: '20px',
          borderRadius: '10px',
          width: '300px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2 style={{ textAlign: 'center', color: '#5E6472' }}>Iniciar Sesión</h2>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ color: '#5E6472' }}>Número de Seguro Social</label>
          <input
            type="text"
            value={nss}
            onChange={(e) => setNss(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              marginTop: '5px',
              border: '1px solid #5E6472',
              borderRadius: '5px',
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ color: '#5E6472' }}>Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              marginTop: '5px',
              border: '1px solid #5E6472',
              borderRadius: '5px',
            }}
          />
        </div>
        <button
          type="submit"
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
          Iniciar Sesión
        </button>
        <div style={{ marginTop: '15px', textAlign: 'center' }}>
          <a href="/register" style={{ color: '#5E6472' }}>
            ¿No tienes una cuenta? Regístrate
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
