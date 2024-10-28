import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { auth } from './firebase.js';

const signInForm = document.querySelector('#signInForm');

if (signInForm) {
    signInForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.querySelector('#login-email').value;
        const password = document.querySelector('#login-password').value;

        try {
            const credentials = await signInWithEmailAndPassword(auth, email, password);
            console.log(credentials);
        } catch (error) {
            if (error.code === 'auth/wrong-password') {
                alert("Wrong password", "error")
              } else if (error.code === 'auth/user-not-found') {
                alert("User not found", "error")
              } else {
                alert("Something went wrong", "error")
        }
   }   });
}