import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { useLocation } from "react-router-dom";

import { db } from "../../firebase/firebaseConfig";
import { cuposDisponibles, espacios } from "../../data/spaces";
import { useAuth } from "../../hooks/useAuth";
import { useReservations } from "../../hooks/useReservations";
import "./Reservation.css";

const Reservation = () => {
  const { user, perfil } = useAuth();
  const location = useLocation();
  const { reservas: todasLasReservas } = useReservations();

  const hoy = new Date().toISOString().split("T")[0];

  const [formulario, setFormulario] = useState({
    fecha: hoy,
    inicio: "08:00",
    fin: "10:00",
    espacioId: location.state?.espacioId || "p1",
    discapacidad: "Física",
    observaciones: "",
  });

  const [misReservas, setMisReservas] = useState([]);
  const [guardando, setGuardando] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const espacioSeleccionado = espacios.find(
    (espacio) => espacio.id === formulario.espacioId
  );

  const disponibles = espacioSeleccionado
    ? cuposDisponibles(espacioSeleccionado.tipo, todasLasReservas)
    : 0;

  useEffect(() => {
    if (!user) return;

    const consulta = query(
      collection(db, "reservas"),
      where("usuarioId", "==", user.uid)
    );

    const cancelarEscucha = onSnapshot(consulta, (snapshot) => {
      const datos = snapshot.docs.map((documento) => ({
        id: documento.id,
        ...documento.data(),
      }));

      datos.sort((a, b) =>
        `${b.fecha} ${b.inicio}`.localeCompare(`${a.fecha} ${a.inicio}`)
      );

      setMisReservas(datos);
    });

    return () => cancelarEscucha();
  }, [user]);

  const cambiarCampo = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const guardarReserva = async (e) => {
    e.preventDefault();

    setMensaje("");
    setError("");

    if (formulario.fin <= formulario.inicio) {
      setError("La hora de fin debe ser posterior a la hora de inicio.");
      return;
    }

    if (!espacioSeleccionado || disponibles <= 0) {
      setError("Ya no hay cupos disponibles para este tipo de espacio.");
      return;
    }

    setGuardando(true);

    try {
      await addDoc(collection(db, "reservas"), {
        usuarioId: user.uid,
        usuarioNombre:
          `${perfil?.nombre || ""} ${perfil?.apellido || ""}`.trim() ||
          user.email,
        fecha: formulario.fecha,
        inicio: formulario.inicio,
        fin: formulario.fin,
        espacio: espacioSeleccionado.nombre,
        tipo: espacioSeleccionado.tipo,
        discapacidad: formulario.discapacidad,
        observaciones: formulario.observaciones.trim(),
        estado: "activa",
        creadoEn: serverTimestamp(),
      });

      setMensaje("Reserva registrada correctamente.");

      setFormulario({
        ...formulario,
        observaciones: "",
      });
    } catch (err) {
      console.error(err);
      setError("No se pudo guardar la reserva.");
    } finally {
      setGuardando(false);
    }
  };

  const cancelarReserva = async (id) => {
    setMensaje("");
    setError("");

    try {
      // Elimina el documento: el cupo vuelve a estar disponible.
      await deleteDoc(doc(db, "reservas", id));
      setMensaje("Reserva cancelada. El cupo fue liberado.");
    } catch (err) {
      console.error(err);
      setError("No se pudo cancelar la reserva.");
    }
  };

  return (
    <section className="section reservation-section" data-aos="fade-up">
      <h2 className="section-title">Reservar espacio</h2>

      <form className="reservation-form" onSubmit={guardarReserva}>
        <div className="form-grid">
          <label className="form-item">
            <i className="fa-regular fa-calendar icon-left"></i>
            <span className="label">Fecha</span>
            <input
              className="value"
              type="date"
              name="fecha"
              min={hoy}
              value={formulario.fecha}
              onChange={cambiarCampo}
              required
            />
          </label>

          <label className="form-item">
            <i className="fa-regular fa-clock icon-left"></i>
            <span className="label">Inicio</span>
            <input
              className="value"
              type="time"
              name="inicio"
              value={formulario.inicio}
              onChange={cambiarCampo}
              required
            />
          </label>

          <label className="form-item">
            <i className="fa-regular fa-clock icon-left"></i>
            <span className="label">Fin</span>
            <input
              className="value"
              type="time"
              name="fin"
              value={formulario.fin}
              onChange={cambiarCampo}
              required
            />
          </label>

          <label className="form-item">
            <i className="fa-solid fa-wheelchair icon-left"></i>
            <span className="label">Discapacidad</span>
            <select
              className="value"
              name="discapacidad"
              value={formulario.discapacidad}
              onChange={cambiarCampo}
            >
              <option>Física</option>
              <option>Visual</option>
              <option>Auditiva</option>
              <option>Otra</option>
            </select>
          </label>

          <label className="form-item full-width">
            <i className="fa-solid fa-square-parking icon-left"></i>
            <span className="label">Espacio</span>
            <select
              className="value"
              name="espacioId"
              value={formulario.espacioId}
              onChange={cambiarCampo}
            >
              {espacios.map((espacio) => (
                <option key={espacio.id} value={espacio.id}>
                  {espacio.nombre}
                </option>
              ))}
            </select>
          </label>

          <label className="form-item full-width">
            <i className="fa-solid fa-list icon-left"></i>
            <span className="label">Observaciones</span>
            <input
              className="value"
              type="text"
              name="observaciones"
              value={formulario.observaciones}
              onChange={cambiarCampo}
              placeholder="Ej.: Uso silla de ruedas"
            />
          </label>
        </div>

        <p className="reservation-message">
          Cupos disponibles para este tipo: <b>{disponibles}</b> de 10
        </p>

        {mensaje && <p className="reservation-message success">{mensaje}</p>}
        {error && <p className="reservation-message error">{error}</p>}

        <button
          type="submit"
          className="btn-reservar interactive-btn"
          disabled={guardando || disponibles <= 0}
        >
          <i className="fa-solid fa-address-card"></i>
          {guardando ? "Guardando..." : "Reservar espacio"}
        </button>
      </form>

      <div className="my-reservations">
        <h3>Mis reservas</h3>

        {misReservas.length === 0 ? (
          <p className="empty-reservations">
            Todavía no tienes reservas registradas.
          </p>
        ) : (
          misReservas.map((reserva) => (
            <article className="reservation-record" key={reserva.id}>
              <div>
                <strong>{reserva.espacio}</strong>
                <span>
                  {reserva.fecha} · {reserva.inicio} - {reserva.fin}
                </span>
              </div>

              <button
                type="button"
                onClick={() => cancelarReserva(reserva.id)}
              >
                Cancelar
              </button>
            </article>
          ))
        )}
      </div>
    </section>
  );
};

export default Reservation;