// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDMU74DBnexIR30PBlmxcE0Ha5arXlRcDM",
    authDomain: "atheramons.firebaseapp.com",
    projectId: "atheramons",
    storageBucket: "atheramons.firebasestorage.app",
    messagingSenderId: "1095714109776",
    appId: "1:1095714109776:web:cd3c407cffc99bcb955455",
    measurementId: "G-4W0F70CZH6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);