function Footer() {
  return (
    <footer className="footer">

      <div className="footer__inner">

        {/* Fila superior: logo + descripcion */}
        <div className="footer__top">

          <div className="footer__brand">

            <div className="footer__logo">
              <i className="fa-solid fa-wheelchair"></i>
            </div>

            <div className="footer__brand-text">
              <h3 className="footer__name">
                EPN Accesible
              </h3>

              <p className="footer__slogan">
                Gestión de Espacios Preferenciales
              </p>
            </div>

          </div>

          <p className="footer__desc">
            Facilitamos la movilidad y autonomía de la comunidad politécnica,
            conectando personas con los espacios que necesitan.
          </p>

        </div>

        {/* Separador */}
        <hr className="footer__divider" />

        {/* Fila central: 3 columnas */}
        <div className="footer__links">

          <div className="footer__col">

            <h4 className="footer__col-title">
              Navegación
            </h4>

            <ul className="footer__list">

              <li>
                <a href="#">
                  <i className="fa-solid fa-house"></i> Inicio
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="fa-regular fa-calendar-days"></i> Mis Reservas
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="fa-solid fa-clock-rotate-left"></i> Historial
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="fa-solid fa-chart-line"></i> Reportes
                </a>
              </li>

            </ul>

          </div>

          <div className="footer__col">

            <h4 className="footer__col-title">
              Contacto
            </h4>

            <ul className="footer__list">

              <li>
                <i className="fa-solid fa-location-dot"></i>
                {' '}Ladrón de Guevara E11-253
              </li>

              <li>
                <i className="fa-solid fa-envelope"></i>
                {' '}accesible@epn.edu.ec
              </li>

              <li>
                <i className="fa-solid fa-phone"></i>
                {' '}+593 2 2976 300
              </li>

            </ul>

          </div>

          <div className="footer__col">

            <h4 className="footer__col-title">
              Equipo
            </h4>

            <ul className="footer__list footer__list--plain">

              <li>Gregory Araujo</li>
              <li>Jhonathan Guacapiña</li>
              <li>Cristhian Veliz</li>
              <li>Jordy Cajas</li>

            </ul>

          </div>

        </div>

        {/* Separador */}
        <hr className="footer__divider" />

        {/* Fila inferior */}
        <div className="footer__bottom">

          <p className="footer__copy">
            © 2026 EPN Accesible · Proyecto de Diseño de Interfaces · Escuela Politécnica Nacional
          </p>

          <div className="footer__socials">

            <a href="#" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>

            <a href="#" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="#" aria-label="X">
              <i
                className="fa-brands fa-square-x-twitter"
                style={{ fontSize: '17px' }}
              ></i>
            </a>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer