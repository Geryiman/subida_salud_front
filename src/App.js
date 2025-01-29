import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './pages/Dashboard';
import Profile from './components/Profile';
import Treatments from './components/Treatments';
import Alarm from './components/Alarm';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/alarm" element={<Alarm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
