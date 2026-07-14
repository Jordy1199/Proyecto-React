import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";

export const useReservations = () => {
  const [reservas, setReservas] = useState([]);
  const [cargandoReservas, setCargandoReservas] = useState(true);

  useEffect(() => {
    const cancelarEscucha = onSnapshot(
      collection(db, "reservas"),
      (snapshot) => {
        const datos = snapshot.docs.map((documento) => ({
          id: documento.id,
          ...documento.data(),
        }));

        setReservas(datos);
        setCargandoReservas(false);
      },
      (error) => {
        console.error("Error al cargar reservas:", error);
        setCargandoReservas(false);
      }
    );

    return () => cancelarEscucha();
  }, []);

  return { reservas, cargandoReservas };
};