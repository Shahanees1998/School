// Import the functions you need from the SDKs you need
import { initializeApp, firebase } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbcYpIBg1NbKggon1ckOksv_gZ8KGdsrQ",
    authDomain: "school-management-system-79f54.firebaseapp.com",
    projectId: "school-management-system-79f54",
    databaseURL: "https://school-management-system-79f54-default-rtdb.firebaseio.com/",
    storageBucket: "school-management-system-79f54.appspot.com",
    messagingSenderId: "822665751452",
    appId: "1:822665751452:web:b59b61daeb8b1a458bb659"
};



// Initialize Firebase
const app =initializeApp(firebaseConfig);

export const auth = getAuth(app)
export  default app;