import './Status.css';

const Status = () => {
  return (
    <section className="section status-section" data-aos="fade-up">
      <h2 className="section-title">Estado general — Hoy</h2>
      <div className="status-grid">
        
        <div className="status-card active-green interactive">
          <div className="status-icon icon-green">
            <i className="fa-solid fa-wheelchair"></i>
          </div>
          <div className="status-info">
            <span className="status-number text-green">12</span>
            <span className="status-label text-green text-sm">Disponibles</span>
          </div>
        </div>

        <div className="status-card interactive">
          <div className="status-icon icon-red">
            <i className="fa-solid fa-wheelchair"></i>
          </div>
          <div className="status-info">
            <span className="status-number text-red">8</span>
            <span className="status-label text-red text-sm">Ocupados</span>
          </div>
        </div>

        <div className="status-card interactive">
          <div className="status-icon icon-blue">
            <i className="fa-regular fa-calendar-days"></i>
          </div>
          <div className="status-info">
            <span className="status-number text-blue">5</span>
            <span className="status-label text-blue text-sm">Reservas Activas</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Status;