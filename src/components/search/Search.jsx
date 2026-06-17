import './Search.css';

const Search = () => {
  return (
    <section className="section search-section" data-aos="fade-up">
      <h2 className="section-title">Buscar Espacio</h2>
      <div className="search-filters">
        <div className="filter-row interactive-row">
          <i className="fa-regular fa-building filter-icon"></i>
          <span className="filter-label">Campus</span>
          <span className="filter-value">EPN - Ladrón de Guevara</span>
          <i className="fa-solid fa-arrow-down filter-arrow"></i>
        </div>
        <div className="filter-row interactive-row">
          <i className="fa-solid fa-location-dot filter-icon"></i>
          <span className="filter-label">Facultad / Edificio</span>
          <span className="filter-value">Sistemas</span>
          <i className="fa-solid fa-arrow-down filter-arrow"></i>
        </div>
        <div className="filter-row interactive-row">
          <i className="fa-solid fa-tags filter-icon"></i>
          <span className="filter-label">Tipo de Espacio</span>
          <span className="filter-value">Parqueadero accesible</span>
          <i className="fa-solid fa-arrow-down filter-arrow"></i>
        </div>
      </div>

      <div className="result-card interactive" data-aos="zoom-in">
        <div className="result-header">
          <h3>Parqueadero P1</h3>
        </div>
        <div className="result-body">
          <div className="result-details">
            <p><i className="fa-regular fa-building icon-detail"></i> <strong> Capacidad:</strong> 2 espacios</p>
            <p><i className="fa-solid fa-location-dot icon-detail"></i> <strong> Ubicación:</strong> Planta Baja</p>
            <p><i className="fa-regular fa-clock icon-detail"></i> <strong> Horario:</strong> 06h00 - 22h00</p>
            <div className="status-available"><span className="dot"></span> Disponible</div>
          </div>
          <div className="result-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7916501124523!2d-78.49207102432047!3d-0.20949549978844056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a107e1cd44b%3A0x88a284f66939ed4!2sESCUELA%20POLIT%C3%89CNICA%20NACIONAL!5e0!3m2!1ses!2sec!4v1779234836324!5m2!1ses!2sec"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;