// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwDk3whXj9fiIXCAbGmCzekPscje27YEc",
  authDomain: "football-universe-9cbe7.firebaseapp.com",
  projectId: "football-universe-9cbe7",
  storageBucket: "football-universe-9cbe7.appspot.com",
  messagingSenderId: "22228915726",
  appId: "1:22228915726:web:9faf975a712716cddd8e5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;