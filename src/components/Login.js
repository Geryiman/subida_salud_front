import React, { useState } from 'react';

const Login = () => {
  const [nss, setNss] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('https://bob-esponja-yh539.ondigitalocean.app/auth/login', { // Ajusta la URL según tu backend
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nss, password }),
      });

      const data = await response.json();
      setLoading(false);

      if (!response.ok) {
        setError(data.error || 'Error al iniciar sesión');
        return;
      }

      // Guardar el token en localStorage para mantener la sesión
      localStorage.setItem('token', data.token);
      localStorage.setItem('nss', nss);
      alert('Inicio de sesión exitoso');
      
      // Redirigir al usuario a la página principal
      window.location.href = '/dashboard';

    } catch (err) {
      setError('Error de conexión con el servidor');
      setLoading(false);
    }
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

        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

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
          disabled={loading}
        >
          {loading ? 'Cargando...' : 'Iniciar Sesión'}
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
