import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQc0aqTyreI9PISCO-pSVjP0xz24mZ1gc",
  authDomain: "clone-5744c.firebaseapp.com",
  projectId: "clone-5744c",
  storageBucket: "clone-5744c.firebasestorage.app",
  messagingSenderId: "663255884386",
  appId: "1:663255884386:web:8c53285cf9d4fa0155673b",
  measurementId: "G-8E5HLX7NSP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, provider, auth, serverTimestamp, signInWithRedirect };