import './Footer.css';
import { motion } from 'framer-motion'; // 1. Importamos la librería

function Footer() {
  // 2. Definimos las variantes de animación para el contenedor de las columnas
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Hace que las columnas aparezcan una tras otra con retraso
      }
    }
  };

  // 3. Definimos la animación para cada columna individual
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    // Transformamos la etiqueta en motion.footer para animar el fondo al cargar
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <i className="fa-solid fa-wheelchair"></i>
            </div>
            <div className="footer__brand-text">
              <h3 className="footer__name">EPN Accesible</h3>
              <p className="footer__slogan">Gestión de Espacios Preferenciales</p>
            </div>
          </div>
          <p className="footer__desc">
            Facilitamos la movilidad y autonomía de la comunidad politécnica,
            conectando personas con los espacios que necesitan.
          </p>
        </div>

        <hr className="footer__divider" />

        {/* El contenedor principal de las columnas coordinará la aparición en cascada */}
        <motion.div 
          className="footer__links"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // La animación inicia cuando el usuario baja con el scroll hasta el footer
          viewport={{ once: true, amount: 0.2 }} // Ocurre solo una vez
        >
          {/* Columna 1 */}
          <motion.div className="footer__col" variants={itemVariants}>
            <h4 className="footer__col-title">Navegación</h4>
            <ul className="footer__list">
              <li><a href="#"><i className="fa-solid fa-house"></i> Inicio</a></li>
              <li><a href="#"><i className="fa-regular fa-calendar-days"></i> Mis Reservas</a></li>
              <li><a href="#"><i className="fa-solid fa-clock-rotate-left"></i> Historial</a></li>
              <li><a href="#"><i className="fa-solid fa-chart-line"></i> Reportes</a></li>
            </ul>
          </motion.div>

          {/* Columna 2 */}
          <motion.div className="footer__col" variants={itemVariants}>
            <h4 className="footer__col-title">Contacto</h4>
            <ul className="footer__list">
              <li><i className="fa-solid fa-location-dot"></i> Ladrón de Guevara E11-253</li>
              <li><i className="fa-solid fa-envelope"></i> accesible@epn.edu.ec</li>
              <li><i className="fa-solid fa-phone"></i> +593 2 2976 300</li>
            </ul>
          </motion.div>

          {/* Columna 3 */}
          <motion.div className="footer__col" variants={itemVariants}>
            <h4 className="footer__col-title">Equipo</h4>
            <ul className="footer__list footer__list--plain">
              <li>Gregory Araujo</li>
              <li>Jhonathan Gualcapiña</li>
              <li>Cristhian Veliz</li>
              <li>Jordy Cajas</li>
            </ul>
          </motion.div>
        </motion.div>

        <hr className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copy">
            © 2026 EPN Accesible · Proyecto de Diseño de Interfaces · Escuela Politécnica Nacional
          </p>
          <div className="footer__socials">
            <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" aria-label="X">
              <i className="fa-brands fa-square-x-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
