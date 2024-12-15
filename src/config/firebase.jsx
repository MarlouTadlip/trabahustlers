// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDucsSdL0O0SQyqTcFiyoIkA16Pb5y0DlE",
  authDomain: "trabahustle.firebaseapp.com",
  projectId: "trabahustle",
  storageBucket: "trabahustle.firebasestorage.app",
  messagingSenderId: "563342899204",
  appId: "1:563342899204:web:6161ead3371545f8e89d51",
  measurementId: "G-9TWVGFBDN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)