import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js"
import { auth } from './firebase.js'

const signupForm = document.querySelector('#signupForm')

signupForm.addEventListener('submit', async(e) => {
    e.preventDefault()

    const Email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    console.log(Email, password)

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, Email, password)
        console.log(userCredentials)
        

    } catch (error) {   
        if(error.code === 'auth/email-already-in-use'){
            alert('Email already in use')
        }else if(error.code === 'auth/invalid-email') {
            alert('Invalid email')
        }else if(error.code === 'auth/weak-password') {
            alert('Password is too weak')
        }else if(error.code) {
            alert('Something went wrong')
        }
    }

})