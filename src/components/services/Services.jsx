import './Services.css';

const Services = () => {
  return (
    <section className="section services-section" data-aos="fade-up">
      <h2 className="section-title">Servicios Disponibles</h2>
      <div className="services-grid">
        <div className="service-card interactive">
          <i className="fa-solid fa-map-location-dot service-icon"></i>
          <div className="service-content">
            <h3 className="service-card-title">Mapa en Vivo</h3>
            <p className="service-card-desc">Disponibilidad en tiempo real.</p>
          </div>
        </div>
        <div className="service-card interactive">
          <i className="fa-solid fa-calendar-check service-icon"></i>
          <div className="service-content">
            <h3 className="service-card-title">Reservas</h3>
            <p className="service-card-desc">Reserva espacios preferenciales.</p>
          </div>
        </div>
        <div className="service-card interactive">
          <i className="fa-solid fa-route service-icon"></i>
          <div className="service-content">
            <h3 className="service-card-title">Rutas</h3>
            <p className="service-card-desc">Caminos accesibles optimizados.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;