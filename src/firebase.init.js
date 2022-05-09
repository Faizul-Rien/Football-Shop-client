// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyAOrvKFZqIFWgdRO9sjF82xeAY7j4DjwUE",
  authDomain: "football-server-e013e.firebaseapp.com",
  projectId: "football-server-e013e",
  storageBucket: "football-server-e013e.appspot.com",
  messagingSenderId: "1001610055817",
  appId: "1:1001610055817:web:128c4bedbcd894672bf658"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)


const auth = getAuth(app);

export default auth;