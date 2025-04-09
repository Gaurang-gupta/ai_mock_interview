
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvrxicX2lmy9vC7TwjpkF8U7NTKJs7O70",
  authDomain: "prepwise-f858e.firebaseapp.com",
  projectId: "prepwise-f858e",
  storageBucket: "prepwise-f858e.firebasestorage.app",
  messagingSenderId: "1088601786849",
  appId: "1:1088601786849:web:c575abcd653ea38ef52aa0",
  measurementId: "G-JSSH7X4DKN"
};


const app = !getApps.length ?  initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);