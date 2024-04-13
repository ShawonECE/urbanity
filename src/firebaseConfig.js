import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2b_I0Pbcf_gQR0XyFlkzPqAy5z3Z35I8",
  authDomain: "urbanity-937ae.firebaseapp.com",
  projectId: "urbanity-937ae",
  storageBucket: "urbanity-937ae.appspot.com",
  messagingSenderId: "649222862563",
  appId: "1:649222862563:web:9a3376d97b1736b1deb7d6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;