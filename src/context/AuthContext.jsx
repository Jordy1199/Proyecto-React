import { createContext, useContext, useEffect, useState } from "react";
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

const AuthContext = createContext(null);

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
        }
      } else {
        setPerfil(null);
      }
      setCargando(false);
    });

    return () => unsubscribe();
  }, []);

  // Revisa si un correo ya está registrado antes de intentar el login
  const correoExiste = async (correo) => {
    const metodos = await fetchSignInMethodsForEmail(auth, correo);
    return metodos.length > 0;
  };

  const login = async (correo, password) => {
    return signInWithEmailAndPassword(auth, correo, password);
  };

  const registrar = async ({ nombre, apellido, correo, edad, password }) => {
    const credenciales = await createUserWithEmailAndPassword(auth, correo, password);
    const { user: nuevoUsuario } = credenciales;

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
    setPerfil(datosPerfil);

    return credenciales;
  };

  const logout = () => signOut(auth);

  const value = {
    user,
    perfil,
    cargando,
    login,
    registrar,
    logout,
    correoExiste,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
};
