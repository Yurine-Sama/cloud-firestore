<template>
  <v-row>
    <v-col class="text-center">
      <img :src="photoUrl" alt="Vuetify.js" class="mb-5" />
      <blockquote class="blockquote">
        &#8220;Welcome To My Account.&#8221;
        <footer>
          <small>
            <em
              >&mdash;
              {{ name }}
              {{ email }}
            </em>
          </small>
        </footer>
        <b-button variant="outline-info" class="mb-2" @click="logout">
          <b-icon icon="power" aria-hidden="true"></b-icon> Logout
        </b-button>
        <br />
      </blockquote>
    </v-col>
  </v-row>
</template>

<script>
import firebase from "firebase/app";
import { auth } from "@/plugins/firebaseConfig.js";
export default {
  data() {
    return {
      name: "",
      email: "",
      photoUrl: ""
    };
  },
  beforeCreate() {
    firebase.auth().onAuthStateChanged(user => {
      if (user != null) {
        this.name = user.displayName;
        this.email = user.email;
        this.photoUrl = user.photoURL;
      } else {
        this.$router.replace("/About");
      }
    });
  },
  methods: {
    logout() {
      auth
        .signOut()
        .then(() => {
          console.log("sign-out complete");
          this.$router.replace("/");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
