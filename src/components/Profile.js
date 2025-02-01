import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = "https://bob-esponja-yh539.ondigitalocean.app";

const Profile = () => {
  const [user, setUser] = useState({
    nombre: '',
    nss: '',
    edad: '',
    sexo: '',
    fotoPerfil: '',
  });
  const [error, setError] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const getDataUser = async () => {
    const nss = localStorage.getItem('nss');
    if (!nss) {
      setError('No se encontró el NSS en el almacenamiento local.');
      return;
    }

    try {
      const { data } = await axios.get(`${API_URL}/users/profile?nss=${nss}`);
      setUser(data);
    } catch (err) {
      setError(err.response?.data?.error || 'Error al obtener los datos del perfil');
    }
  };

  useEffect(() => {
    getDataUser();
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (event) => setUser({ ...user, fotoPerfil: event.target.result });
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError('Selecciona una imagen para subir.');
      return;
    }

    setLoading(true);
    const nss = localStorage.getItem('nss');

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('nss', nss); // Enviar NSS en el formulario

    try {
      const { data } = await axios.post(`${API_URL}/users/uploadProfilePicture`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setUser({ ...user, fotoPerfil: data.imageUrl });
      setSelectedFile(null);
      setError('');
    } catch (err) {
      setError(err.response?.data?.error || 'Error al subir la imagen');
    } finally {
      setLoading(false);
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

        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button onClick={handleUpload} disabled={loading}>
          {loading ? 'Subiendo...' : 'Actualizar Foto'}
        </button>
      </div>
    </div>
  );
};

export default Profile;
