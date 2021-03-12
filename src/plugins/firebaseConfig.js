import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyAVoIfXovuEEYA8Vo30x6jqDIU4CLOhZAw",
    authDomain: "amiyaex09.firebaseapp.com",
    projectId: "amiyaex09",
    storageBucket: "amiyaex09.appspot.com",
    messagingSenderId: "593972483599",
    appId: "1:593972483599:web:f636db183e1aed322db57a",
    measurementId: "G-X3YBPW99E0"
  };
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
export const auth = firebase.auth();
