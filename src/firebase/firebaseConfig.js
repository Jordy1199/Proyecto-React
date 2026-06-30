import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 1. Ve a https://console.firebase.google.com/
// 2. Crea un proyecto (o usa uno existente).
// 3. En "Configuración del proyecto" > "General" crea una app Web (</>) 
//    y copia el objeto de configuración que te entrega aquí abajo.
// 4. En "Authentication" > "Sign-in method" activa el proveedor "Correo electrónico/contraseña".
// 5. En "Firestore Database" crea una base de datos (modo prueba está bien para empezar).

const firebaseConfig = {
  apiKey: "AIzaSyCb6BEAAgsSlZIX9Ij0M0S-7IPch5z4Zrc",
  authDomain: "epn-accesible.firebaseapp.com",
  projectId: "epn-accesible",
  storageBucket: "epn-accesible.firebasestorage.app",
  messagingSenderId: "442755532499",
  appId: "1:442755532499:web:614364f832bc4fd8657626",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;