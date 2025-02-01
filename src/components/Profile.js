import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState({
    nombre: '',
    nss: '',
    edad: '',
    sexo: '',
    fotoPerfil: '',
  });
  const [error, setError] = useState('');

  const getDataUser = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('No se encontró el token de autenticación.');
      return;
    }

    try {
      const response = await fetch('https://bob-esponja-yh539.ondigitalocean.app/users/user', {
        // headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) {
        throw new Error('Error al obtener los datos del perfil');
      }

      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getDataUser();
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setUser({ ...user, fotoPerfil: event.target.result });
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ backgroundColor: '#FAF3DD', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div
        style={{
          backgroundColor: '#AED9E0',
          padding: '20px',
          borderRadius: '10px',
          width: '300px',
          textAlign: 'center',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2 style={{ color: '#5E6472', marginBottom: '15px' }}>Perfil del Usuario</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <img
          src={user.fotoPerfil || 'https://via.placeholder.com/150'}
          alt="Foto de perfil"
          style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px' }}
        />
        <h3 style={{ color: '#5E6472' }}>{user.nombre}</h3>
        <p style={{ color: '#5E6472' }}>NSS: {user.nss}</p>
        <p style={{ color: '#5E6472' }}>Edad: {user.edad}</p>
        <p style={{ color: '#5E6472' }}>Sexo: {user.sexo}</p>

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ marginTop: '15px', display: 'block', margin: '0 auto' }}
        />
        <button
          style={{
            backgroundColor: '#B8F2E6',
            color: '#5E6472',
            padding: '10px',
            marginTop: '15px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '100%',
          }}
        >
          Actualizar Foto
        </button>
      </div>
    </div>
  );
};

export default Profile;