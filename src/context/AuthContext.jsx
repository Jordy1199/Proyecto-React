import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

import { auth, db } from "../firebase/firebaseConfig";
import { AuthContext } from "./authContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [perfil, setPerfil] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);

      if (firebaseUser) {
        try {
          const snap = await getDoc(doc(db, "usuarios", firebaseUser.uid));
          setPerfil(snap.exists() ? snap.data() : null);
        } catch (error) {
          console.error("Error al cargar el perfil:", error);
          setPerfil(null);
        }
      } else {
        setPerfil(null);
      }

      setCargando(false);
    });

    return () => unsubscribe();
  }, []);

  const correoExiste = async (correo) => {
    const metodos = await fetchSignInMethodsForEmail(auth, correo);
    return metodos.length > 0;
  };

  const login = (correo, password) =>
    signInWithEmailAndPassword(auth, correo, password);

  const registrar = async ({ nombre, apellido, correo, edad, password }) => {
    const credenciales = await createUserWithEmailAndPassword(
      auth,
      correo,
      password
    );

    const nuevoUsuario = credenciales.user;

    await updateProfile(nuevoUsuario, {
      displayName: `${nombre} ${apellido}`,
    });

    const datosPerfil = {
      nombre,
      apellido,
      correo,
      edad: edad ? Number(edad) : null,
      creadoEn: new Date().toISOString(),
    };

    await setDoc(doc(db, "usuarios", nuevoUsuario.uid), datosPerfil);

    // Evita que Firebase deje abierta la sesión después de registrar.
    setPerfil(null);
    await signOut(auth);

    return credenciales;
  };

  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider
      value={{
        user,
        perfil,
        cargando,
        login,
        registrar,
        logout,
        correoExiste,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};