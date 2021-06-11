<template>
  <div class="admin">
    <!-- <span class="h1 m-5"><b-icon icon="power" variant="danger"></b-icon></span>
    <h2 class="m-5">L'accès à l'espace administrateur est restreint.</h2>
    <h3  class="m-5"> Veuillez vous identifier par l'intermédiaire de votre compte Google</h3>
      -->
    <b-button class="mt-3" @click="show = !show" id="btn-cancel"
      >Annuler</b-button
    >
    <b-overlay :show="show" rounded="lg" variant="primary">
      <b-card
        title="Espace administrateur"
        :aria-hidden="show ? 'true' : null"
        class="p-5"
      >
        <b-card-text
          >L'accès à l'espace administrateur est restreint.</b-card-text
        >
        <b-card-text
          >Veuillez vous identifier par l'intermédiaire de votre compte
          Google</b-card-text
        >
        <b-button
          :disabled="show"
          variant="light"
          id="glogin"
          @click="googleLogin()"
          class="btn btn-outline-dark mt-auto"
        >
          S'identifier avec Google
        </b-button>
      </b-card>
    </b-overlay>
  </div>
</template>

<script>
import { fb, provider } from "../firebase.js";
import { $ } from "jquery";
import { BOverlay } from "bootstrap-vue";
export default {
  name: "Admin",
  component: {
    "b-overlay": BOverlay
  },
  data() {
    return {
      name: null,
      email: null,
      show: false
    };
  },
  methods: {
    googleLogin() {
      this.show = true;
      fb.auth()
        .signInWithPopup(provider)
        .then(result => {
          console.log(result);
          // /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;

          // // This gives you a Google Access Token. You can use it to access the Google API.
          var token = credential.accessToken;
          // // The signed-in user info.
          var user = result.user;
          this.$router.replace("/dashboard");
          // ...
        })
        .catch(error => {
          console.log(error);

          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: errorMessage
          });
          // // The email of the user's account used.
          var email = error.email;
          // // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.admin {
  background: linear-gradient(90deg, #fcf4f4 0%, #dcd6d6 100%);
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
}
.b-overlay-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  z-index: 1;
}
#btn-cancel {
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 95vh;
  z-index: 2;
}
</style>
