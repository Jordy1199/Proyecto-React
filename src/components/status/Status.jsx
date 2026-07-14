import {
  cuposDisponibles,
  reservasActivas,
  tiposEspacio,
} from "../../data/spaces";
import { useReservations } from "../../hooks/useReservations";
import "./Status.css";

const Status = () => {
  const { reservas, cargandoReservas } = useReservations();

  const total = tiposEspacio.reduce(
    (suma, tipo) => suma + tipo.capacidad,
    0
  );

  const disponibles = tiposEspacio.reduce(
    (suma, tipo) => suma + cuposDisponibles(tipo.id, reservas),
    0
  );

  const ocupados = total - disponibles;
  const activas = reservasActivas(reservas).length;

  return (
    <section className="section status-section" data-aos="fade-up">
      <h2 className="section-title">Estado general</h2>

      <div className="status-grid">
        <div className="status-card interactive">
          <div className="status-icon icon-green">
            <i className="fa-solid fa-wheelchair"></i>
          </div>
          <div className="status-info">
            <span className="status-number text-green">
              {cargandoReservas ? "..." : disponibles}
            </span>
            <span className="status-label text-green">Disponibles</span>
          </div>
        </div>

        <div className="status-card interactive">
          <div className="status-icon icon-red">
            <i className="fa-solid fa-wheelchair"></i>
          </div>
          <div className="status-info">
            <span className="status-number text-red">
              {cargandoReservas ? "..." : ocupados}
            </span>
            <span className="status-label text-red">Ocupados</span>
          </div>
        </div>

        <div className="status-card interactive">
          <div className="status-icon icon-blue">
            <i className="fa-regular fa-calendar-days"></i>
          </div>
          <div className="status-info">
            <span className="status-number text-blue">
              {cargandoReservas ? "..." : activas}
            </span>
            <span className="status-label text-blue">
              Reservas activas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Status;