export const tiposEspacio = [
  {
    id: "parqueadero",
    nombre: "Parqueaderos accesibles",
    icono: "fa-car",
    capacidad: 10,
  },
  {
    id: "asiento",
    nombre: "Asientos preferenciales",
    icono: "fa-chair",
    capacidad: 10,
  },
  {
    id: "ascensor",
    nombre: "Ascensores accesibles",
    icono: "fa-elevator",
    capacidad: 10,
  },
  {
    id: "ruta",
    nombre: "Rutas y rampas",
    icono: "fa-wheelchair-move",
    capacidad: 10,
  },
];

export const espacios = [
  { id: "p1", nombre: "Parqueadero accesible P1", tipo: "parqueadero" },
  { id: "p2", nombre: "Parqueadero accesible P2", tipo: "parqueadero" },
  { id: "a1", nombre: "Asiento preferencial A1", tipo: "asiento" },
  { id: "a2", nombre: "Asiento preferencial A2", tipo: "asiento" },
  { id: "e1", nombre: "Ascensor accesible E1", tipo: "ascensor" },
  { id: "r1", nombre: "Ruta accesible R1", tipo: "ruta" },
];

export const tipoDeReserva = (reserva) => {
  if (reserva.tipo) return reserva.tipo;

  const espacio = espacios.find(
    (item) => item.nombre === reserva.espacio
  );

  return espacio?.tipo || null;
};

export const fechaLocalActual = () => {
  const fecha = new Date();
  const year = fecha.getFullYear();
  const month = String(fecha.getMonth() + 1).padStart(2, "0");
  const day = String(fecha.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const reservaVencida = (reserva) => reserva.fecha < fechaLocalActual();

export const reservasActivas = (reservas) =>
  reservas.filter(
    (reserva) => reserva.estado === "activa" && !reservaVencida(reserva)
  );

export const cuposDisponibles = (tipoId, reservas, periodo = null) => {
  const tipo = tiposEspacio.find((item) => item.id === tipoId);

  if (!tipo) return 0;

  const ocupados = reservasActivas(reservas).filter((reserva) => {
    if (tipoDeReserva(reserva) !== tipoId) return false;

    if (!periodo) return true;

    return (
      reserva.fecha === periodo.fecha &&
      reserva.inicio < periodo.fin &&
      reserva.fin > periodo.inicio
    );
  }).length;

  return Math.max(tipo.capacidad - ocupados, 0);
};
