import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB2P3Dt5pOxbANCAgCREhNz74CyGs9K3tA",
  authDomain: "boat-e7dab.firebaseapp.com",
  projectId: "boat-e7dab",
  storageBucket: "boat-e7dab.firebasestorage.app",
  messagingSenderId: "243368326319",
  appId: "1:243368326319:web:2469eeee516a1c0a7a505a",
  measurementId: "G-65Q13N7VL2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Initialize providers
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { 
  auth, 
  googleProvider, 
  facebookProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
};