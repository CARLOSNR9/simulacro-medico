import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-_oGVtAcmlJuuPJ7YRj2Pu4icFdGnsPA",
    authDomain: "nexus-4dcac.firebaseapp.com",
    projectId: "nexus-4dcac",
    storageBucket: "nexus-4dcac.firebasestorage.app",
    messagingSenderId: "519175724340",
    appId: "1:519175724340:web:dc56a7592ae9d5054f9961",
    measurementId: "G-MZNETT5BWD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Auth for use in the app
export const auth = getAuth(app);
