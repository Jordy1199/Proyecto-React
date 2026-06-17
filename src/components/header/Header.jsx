import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  const typedTarget = useRef(null);

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

        <div className="header-user">
          <i className="fa-regular fa-user"></i>
          <i className="fa-solid fa-arrow-down"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;