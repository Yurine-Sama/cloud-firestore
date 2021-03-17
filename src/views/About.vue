<template>
  <div class="container">
    <h1>Log in with Google</h1>
    <b-button class="mt-2" variant="success"
      ><b-icon icon="google" @click="google" style="font-size: 100px"
        >Google</b-icon
      ></b-button
    >
  </div>
</template>

<script>
import firebase from "firebase/app";
import { auth } from "@/plugins/firebaseConfig.js";
import { db } from "@/plugins/firebaseConfig.js";
export default {
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
      db.collection("cities")
        .doc("new-city-id")
        .set(this.form);
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    google() {
      var provider = new firebase.auth.GoogleAuthProvider();
      auth
        .signInWithPopup(provider)
        .then(result => {
          /** @type {firebase.auth.OAuthCredential} */
          alert(result);
          this.$router.replace("/Test");
        })
        .catch(error => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
          console.log(errorCode);
          console.log(errorMessage);
          console.log(email);
          console.log(credential);
        });
    }
  }
};
</script>
