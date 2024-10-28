import { GithubAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { auth } from "./firebase.js";

const githubButton= document.querySelector("#github-icon");

githubButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const provider = new GithubAuthProvider();
  try {
    const credentials = await signInWithPopup(auth, provider)
    console.log(credentials);
    console.log("google sign in");

  } catch (error) {
    console.log(error);
  }
});