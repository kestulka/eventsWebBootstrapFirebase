document.addEventListener("DOMContentLoaded", function () {
  let registerAnchor = document.getElementById("registerAccountAnchor");
  let registerModal = new bootstrap.Modal(
    document.getElementById("registerModal"),
  );

  let forgotPasswordAnchor = document.getElementById("forgotPasswordAnchor");
  let forgotPasswordModal = new bootstrap.Modal(
    document.getElementById("forgotPasswordModal"),
  );

  registerAnchor.addEventListener("click", function () {
    registerModal.show();
  });

  forgotPasswordAnchor.addEventListener("click", function () {
    forgotPasswordModal.show();
  });
});

// FIREBASE

import { firebaseConfig } from "../firebase.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  push,
  child,
  get,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth(app);

// ---------------------------

// REGISTER EVENT LISTENER

let regSignUpBtn = document.getElementById("registerSignUpBtn");

regSignUpBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const email = registerEmailInput.value.trim();
  const password = registerPasswordInput.value.trim();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);

      const registerTime = new Date();
      set(ref(db, "/users/" + user.uid), {
        email: email,
        role: "pleb",
        timestamp: `${registerTime}`,
      });
      console.log("new user have been created!");

      // TODO :  reikia uzdaryti moduli sekmingai sukurus vartotoja
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});

// LOGIN EVENT LISTENER

let loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const email = loginEmailInput.value.trim();
  const password = loginPasswordInput.value.trim();

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("user have logged in", user);
      window.location.href = "main.html";

      const loginTime = new Date();
      PaymentRequestUpdateEvent(ref(db, "/users/" + user.uid), {
        timestamp: `${loginTime}`,
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});
