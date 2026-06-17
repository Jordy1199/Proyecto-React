import './Reservation.css';

const Reservation = () => {
  return (
    <section className="section reservation-section" data-aos="fade-up">
      <h2 className="section-title">Reservar Espacio</h2>
      <form className="reservation-form">
        <div className="form-grid">
          <div className="form-item interactive-row">
            <i className="fa-regular fa-calendar icon-left"></i>
            <span className="label">Fecha</span>
            <span className="value">24 / 03 / 2026</span>
          </div>
          <div className="form-item interactive-row">
            <i className="fa-regular fa-clock icon-left"></i>
            <span className="label">Inicio</span>
            <span className="value">10:00</span>
          </div>
          <div className="form-item interactive-row">
            <i className="fa-regular fa-clock icon-left"></i>
            <span className="label">Fin</span>
            <span className="value">12:00</span>
          </div>
          <div className="form-item interactive-row">
            <i className="fa-solid fa-wheelchair icon-left"></i>
            <span className="label">Discapacidad</span>
            <span className="value">Física</span>
          </div>
          <div className="form-item full-width interactive-row">
            <i className="fa-solid fa-list icon-left"></i>
            <div className="column-text">
              <span className="label">Obs. <span className="text-xs">(opcional)</span></span>
            </div>
            <span className="value placeholder">Ej: Silla de Ruedas</span>
          </div>
        </div>
        <button type="button" className="btn-reservar interactive-btn">
          <i className="fa-solid fa-address-card"></i> Reservar Espacio
        </button>
      </form>
    </section>
  );
};

export default Reservation;