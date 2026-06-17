import './Types.css';

const Types = () => {
  return (
    <section className="section types-section" data-aos="fade-up">
      <h2 className="section-title">Tipos de espacios</h2>
      <div className="types-grid">
        <div className="type-card interactive" data-aos="flip-left" data-aos-delay="100">
          <div className="type-icon"><i className="fa-solid fa-car"></i></div>
          <div className="type-content">
            <div className="badge-green">6 disp.</div>
            <p className="type-text">Parqueaderos<br />Accesibles</p>
          </div>
        </div>

        <div className="type-card interactive" data-aos="flip-left" data-aos-delay="200">
          <div className="type-icon"><i className="fa-solid fa-chair"></i></div>
          <div className="type-content">
            <div className="badge-green">6 disp.</div>
            <p className="type-text">Asientos<br />Preferenciales</p>
          </div>
        </div>

        <div className="type-card interactive" data-aos="flip-left" data-aos-delay="300">
          <div className="type-icon"><i className="fa-solid fa-elevator"></i></div>
          <div className="type-content">
            <div className="badge-green">6 disp.</div>
            <p className="type-text">Ascensores<br />Accesibles</p>
          </div>
        </div>

        <div className="type-card interactive" data-aos="flip-left" data-aos-delay="400">
          <div className="type-icon"><i className="fa-solid fa-wheelchair-move"></i></div>
          <div className="type-content">
            <div className="badge-green">6 disp.</div>
            <p className="type-text">Rutas y Rampas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Types;