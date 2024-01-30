// SIGN OUT EVENT LISTENER

// FIREBASE

import { firebaseConfig } from "../firebase.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ---------------------------

let signOutBtn = document.getElementById("mainPageSignOutBtn");

signOutBtn.addEventListener("click", (event) => {
  event.preventDefault();
  auth
    .signOut()
    .then(() => {
      console.log("user has signed out");
      window.location.href = "login.html";
    })
    .catch((error) => {
      console.log(error);
    });
});
