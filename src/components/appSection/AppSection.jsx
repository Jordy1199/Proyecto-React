import './AppSection.css';

const AppSection = () => {
  return (
    <section className="container app section app-section" data-aos="fade-right">
      <div className="mobile">
        <h2 className="mobile__title">Descarga la aplicación</h2>
        <p className="mobile__description">Reserva espacios y consulta disponibilidad.</p>
        <div className="mobile__buttons">
          <img src="/images/app1.jpeg" alt="PlayStore" loading="lazy" className="interactive" />
          <img src="/images/app2.jpg" alt="GooglePlay" loading="lazy" className="interactive" />
        </div>
      </div>
      <div className="mobile__img" data-aos="fade-left" data-aos-delay="200">
        <img src="/images/im4.png" alt="Carmobile" loading="lazy" />
      </div>
    </section>
  );
};

export default AppSection;