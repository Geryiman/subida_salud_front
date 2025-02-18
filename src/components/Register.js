import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    nss: '',
    edad: '',
    sexo: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await fetch('https://bob-esponja-yh539.ondigitalocean.app/auth/register', { // Ajusta la URL según tu backend
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      console.log(formData)

      const data = await response.json();
      setLoading(false);

      if (!response.ok) {
        setError(data.error || 'Error al registrar');
        return;
      }

      // Guardar el token en localStorage para mantener la sesión
      localStorage.setItem('token', data.token);
      alert('Registro exitoso');
      
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
        onSubmit={handleRegister}
        style={{
          backgroundColor: '#AED9E0',
          padding: '20px',
          borderRadius: '10px',
          width: '300px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2 style={{ textAlign: 'center', color: '#5E6472' }}>Registro</h2>
        {['nombre', 'nss', 'edad', 'sexo', 'password'].map((field) => (
          <div key={field} style={{ marginBottom: '15px' }}>
            <label style={{ color: '#5E6472' }}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input
              type={field === 'password' ? 'password' : 'text'}
              name={field}
              value={formData[field]}
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
        {error && <p style={{ color: 'red' }}>{error}</p>}
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
          {loading ? 'Registrando...' : 'Registrarse'}
        </button>
      </form>
    </div>
  );
};

export default Register;