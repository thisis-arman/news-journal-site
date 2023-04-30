// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuUUuPbVQTCWQrCoWUeG_Lv-w3Fru47eo",
  authDomain: "the-dragon-news-ac708.firebaseapp.com",
  projectId: "the-dragon-news-ac708",
  storageBucket: "the-dragon-news-ac708.appspot.com",
  messagingSenderId: "22304863619",
  appId: "1:22304863619:web:e0493f966bf6e3dc6872b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;