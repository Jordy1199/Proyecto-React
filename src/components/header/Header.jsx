import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';
import AuthModal from '../auth/AuthModal';
import { useAuth } from '../../context/AuthContext';
import './Header.css';

const Header = () => {
  const typedTarget = useRef(null);
  const [modalAbierto, setModalAbierto] = useState(false);
  const { user, perfil, logout } = useAuth();

  useEffect(() => {
    const typed = new Typed(typedTarget.current, {
      strings: [
        "EPN Accesible",
        "Gestión de Espacios",
        "Inclusión Universitaria"
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  const handleLoginClick = () => {
    setModalAbierto(true);
  };

  const handleLogoutClick = () => {
    logout();
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <motion.div 
            className="logo-circle"
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.4 }}
          >
            <i className="fa-solid fa-wheelchair"></i>
          </motion.div>
        </div>

        <div className="header-title">
          <h1 className="header-title-text">
            <span ref={typedTarget}></span>
          </h1>
          <p className="header-subtitle-text">
            Gestión de Espacios Preferenciales
          </p>
        </div>

        {user ? (
          <div className="header-user header-user-logged">
            <div className="header-user-info">
              <i className="fa-regular fa-user"></i>
              <span className="header-user-name">
                {perfil?.nombre || user.email}
              </span>
            </div>
            <button
              className="header-logout-btn"
              onClick={handleLogoutClick}
              title="Cerrar sesión"
            >
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
              <span>Cerrar sesión</span>
            </button>
          </div>
        ) : (
          <div className="header-user" onClick={handleLoginClick} title="Iniciar sesión">
            <span className="header-user-name">Login</span>
            <i className="fa-regular fa-user"></i>
            <i className="fa-solid fa-arrow-down"></i>
          </div>
        )}
      </div>

      <AuthModal isOpen={modalAbierto} onClose={() => setModalAbierto(false)} />
    </header>
  );
};

export default Header;