import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { auth } from "./firebase.js";

const googleButton = document.querySelector("#google-icon");

googleButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("Usuario autenticado:", result.user);
} catch (error) {
    if (error.code === 'auth/popup-closed-by-user') {
        console.log("El usuario cerró el popup de autenticación antes de completar el proceso.");
        // Aquí puedes mostrar un mensaje en la interfaz o tomar alguna acción
    } else {
        console.error("Error de autenticación:", error);
    }
   }})