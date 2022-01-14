// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-j-fzYM-B4lKyeJrYcKGMme3gmSj4DVw",
  authDomain: "modify-widget-register.firebaseapp.com",
  projectId: "modify-widget-register",
  storageBucket: "modify-widget-register.appspot.com",
  messagingSenderId: "977448953054",
  appId: "1:977448953054:web:3909a6d6e9b3653ea7ce4f",
  measurementId: "G-XT75L48V77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);