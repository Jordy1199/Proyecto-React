import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5bVTM5Nw_pocRJbz9SkvD24sE_e4CfzM",
  authDomain: "epn-accesible-6631f.firebaseapp.com",
  projectId: "epn-accesible-6631f",
  storageBucket: "epn-accesible-6631f.firebasestorage.app",
  messagingSenderId: "195761255935",
  appId: "1:195761255935:web:d000f4cd6462c55d90e3ca"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;