// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js"
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSvDDuo4UpN15aA5X7eBPpQ282bJhYvuc",
  authDomain: "login-firebase-a85ec.firebaseapp.com",
  projectId: "login-firebase-a85ec",
  storageBucket: "login-firebase-a85ec.appspot.com",
  messagingSenderId: "339351940831",
  appId: "1:339351940831:web:2646219f5bf8fb390e436a"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)
