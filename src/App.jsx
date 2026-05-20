import Footer from './components/Footer'

function App() {
  return (
    <>
      <header className="header">
        <div className="header-container">

          <div className="header-logo">
            <div className="logo-circle">
              <i className="fa-solid fa-wheelchair"></i>
            </div>
          </div>

          <div className="header-title">
            <h1>EPN Accesible</h1>
            <p>Gestión de Espacios Preferenciales</p>
          </div>

          <div className="header-user">
            <i className="fa-regular fa-user"></i>
            <i className="fa-solid fa-arrow-down"></i>
          </div>

        </div>
      </header>

      <main className="main-content">

        <section className="section status-section">
          <h2 className="section-title">
            Estado general - Hoy
          </h2>
        </section>

        {/* TIPOS */}
        <section className="section">

          <h2 className="section-title">
            Tipos de espacios
          </h2>

          <div className="types-grid">

            <div className="type-card interactive">

              <div className="type-icon">
                <i className="fa-solid fa-car"></i>
              </div>

              <div className="type-content">
                <div className="badge-green">6 disp.</div>

                <p>
                  Parqueaderos
                  <br />
                  Accesibles
                </p>
              </div>

            </div>

            <div className="type-card interactive">

              <div className="type-icon">
                <i className="fa-solid fa-chair"></i>
              </div>

              <div className="type-content">
                <div className="badge-green">6 disp.</div>

                <p>
                  Asientos
                  <br />
                  Preferenciales
                </p>
              </div>

            </div>

            <div className="type-card interactive">

              <div className="type-icon">
                <i className="fa-solid fa-elevator"></i>
              </div>

              <div className="type-content">
                <div className="badge-green">6 disp.</div>

                <p>
                  Ascensores
                  <br />
                  Accesibles
                </p>
              </div>

            </div>

            <div className="type-card interactive">

              <div className="type-icon">
                <i className="fa-solid fa-wheelchair-move"></i>
              </div>

              <div className="type-content">
                <div className="badge-green">6 disp.</div>

                <p>Rutas y Rampas</p>
              </div>

            </div>

          </div>
        </section>

        {/* BUSCAR */}
        <section className="section">

          <h2 className="section-title">
            Buscar Espacio
          </h2>

          <div className="search-filters">

            <div className="filter-row interactive-row">
              <i className="fa-regular fa-building filter-icon"></i>

              <span className="filter-label">
                Campus
              </span>

              <span className="filter-value">
                EPN - Ladrón de Guevara
              </span>

              <i className="fa-solid fa-arrow-down filter-arrow"></i>
            </div>

            <div className="filter-row interactive-row">
              <i className="fa-solid fa-location-dot filter-icon"></i>

              <span className="filter-label">
                Facultad / Edificio
              </span>

              <span className="filter-value">
                Facultad de Ingeniería en Sistemas
              </span>

              <i className="fa-solid fa-arrow-down filter-arrow"></i>
            </div>

            <div className="filter-row interactive-row">
              <i className="fa-solid fa-tags filter-icon"></i>

              <span className="filter-label">
                Tipo de Espacio
              </span>

              <span className="filter-value">
                Parqueadero accesible
              </span>

              <i className="fa-solid fa-arrow-down filter-arrow"></i>
            </div>

          </div>

          <div className="result-card interactive">

            <div className="result-header">
              <h3>Parqueadero P1</h3>
            </div>

            <div className="result-body">

              <div className="result-details">

                <p>
                  <i className="fa-regular fa-building icon-detail"></i>
                  <strong> Capacidad:</strong> 2 espacios
                </p>

                <p>
                  <i className="fa-solid fa-location-dot icon-detail"></i>
                  <strong> Ubicación:</strong> Planta Baja
                </p>

                <p>
                  <i className="fa-regular fa-clock icon-detail"></i>
                  <strong> Horario:</strong> 06h00 - 22h00
                </p>

                <div className="status-available">
                  <span className="dot"></span>
                  Disponible
                </div>

              </div>

              <div className="result-map">

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7916501124523!2d-78.49207102432047!3d-0.20949549978844056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a107e1cd44b%3A0x88a284f66939ed4!2sESCUELA%20POLIT%C3%89CNICA%20NACIONAL!5e0!3m2!1ses!2sec!4v1779234836324!5m2!1ses!2sec"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

              </div>

            </div>

          </div>
        </section>

        {/* ABOUT */}
        <section className="section about-section">

          <h2 className="section-title">
            Sobre el Proyecto
          </h2>

          <div className="about-container">

            <div className="about-text">
              <p>
                <strong>EPN Accesible</strong> es una iniciativa académica
                de la <strong>ESFOT</strong>.
              </p>
            </div>

            <div className="about-stats">

              <div className="stat-item">
                <span className="stat-value">+50</span>

                <span className="stat-desc">
                  Espacios Mapeados
                </span>
              </div>

              <div className="stat-item">
                <span className="stat-value">100%</span>

                <span className="stat-desc">
                  Gestión Digital
                </span>
              </div>

            </div>

          </div>
        </section>

        {/* SERVICES */}
        <section className="section services-section">

          <h2 className="section-title">
            Servicios Disponibles
          </h2>

          <div className="services-grid">

            <div className="service-card interactive">
              <i className="fa-solid fa-map-location-dot service-icon"></i>

              <h3>Mapa en Vivo</h3>

              <p>
                Disponibilidad en tiempo real.
              </p>
            </div>

            <div className="service-card interactive">
              <i className="fa-solid fa-calendar-check service-icon"></i>

              <h3>Reservas</h3>

              <p>
                Reserva espacios preferenciales.
              </p>
            </div>

            <div className="service-card interactive">
              <i className="fa-solid fa-route service-icon"></i>

              <h3>Rutas</h3>

              <p>
                Caminos accesibles optimizados.
              </p>
            </div>

          </div>
        </section>

        {/* APP */}
        <section className="container app">

          <div className="mobile">

            <h2 className="mobile__title">
              Descarga la aplicación
            </h2>

            <p className="mobile__description">
              Reserva espacios y consulta disponibilidad.
            </p>

            <div className="mobile__buttons">

              <img
                src="/images/app1.jpeg"
                alt="PlayStore"
                loading="lazy"
              />

              <img
                src="/images/app2.jpg"
                alt="GooglePlay"
                loading="lazy"
              />

            </div>

          </div>

          <div className="mobile__img">

            <img
              src="/images/im4.png"
              alt="Carmobile"
              loading="lazy"
            />

          </div>

        </section>

        {/* GALLERY */}
        <section className="gallery">

          <h3 className="gallery__title">
            Galería
          </h3>

          <p className="gallery__description">
            Espacios accesibles del campus.
          </p>

          <div className="gallery__images">

            <img
              src="/images/im1.jpg"
              alt="Imagen 1"
            />

            <img
              src="/images/im2.jpg"
              alt="Imagen 2"
            />

            <img
              src="/images/im3.jpg"
              alt="Imagen 3"
            />

          </div>

        </section>

      </main>

      <Footer />

    </>
  )
}

export default App