import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: '#5E6472',
        color: '#FAF3DD',
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <h1 style={{ fontSize: '20px' }}>SaludApp</h1>
      <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
        <li style={{ margin: '0 10px' }}>
          <Link to="/dashboard" style={{ color: '#FAF3DD', textDecoration: 'none' }}>
            Inicio
          </Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/profile" style={{ color: '#FAF3DD', textDecoration: 'none' }}>
            Perfil
          </Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/treatments" style={{ color: '#FAF3DD', textDecoration: 'none' }}>
            Tratamientos
          </Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/alarm" style={{ color: '#FAF3DD', textDecoration: 'none' }}>
            Alarmas
          </Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link
            to="/"
            onClick={() => localStorage.removeItem('token')}
            style={{ color: '#FAF3DD', textDecoration: 'none' }}
          >
            Cerrar Sesión
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
