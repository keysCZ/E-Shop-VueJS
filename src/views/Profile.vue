<template>
  <div class="profile">
    <div class="container h-100">
      <div class="intro h-100 mb-5">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <h3>Profil</h3>
            <p>
              Changez vos informations de profil ici.
            </p>
          </div>
          <div class="col-md-6">
            <img src="/img/profile.svg" alt="profilesvg" class="img-fluid" />
          </div>
        </div>
      </div>
      <div class="section">
        <div class="container">
          <b-tabs content-class="my-5 mx-3">
            <b-tab title="Profile" active>
              <div class="container">
                <div class="row">
                  <div class="form-group col-md-6">
                    <label for="form-fullname">Nom complet</label>
                    <input
                      type="text"
                      class="form-control"
                      name="form-fullname"
                      v-model="profile.name"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="form-phone">Téléphone</label>
                    <input
                      type="number"
                      class="form-control"
                      id="form-phone"
                      v-model="profile.phone"
                      placeholder="0787654765"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="form-address">Adresse</label>
                    <input
                      type="address"
                      class="form-control"
                      name="form-address"
                      v-model="profile.address"
                      aria-describedby="addressHelp"
                      placeholder="Enter address"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="form-postcode">Code postal</label>
                    <input
                      type="number"
                      class="form-control"
                      name="form-postcode"
                      v-model="profile.postcode"
                      aria-describedby="postcodeHelp"
                      placeholder="Enter postcode"
                    />
                  </div>
                  <button type="submit" @click="updateProfile" class="btn btn-primary">
                    Appliquer
                  </button>
                </div>
              </div>
            </b-tab>

            <b-tab title="Account settings">
              <div class="container">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="form-username">Nom d'utilisateur</label>
                      <input
                        type="text"
                        class="form-control"
                        name="form-username"
                        v-model="account.name"
                        placeholder="Jane"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="form-email">Email address</label>
                      <input
                        type="email"
                        class="form-control"
                        name="form-email"
                        v-model="account.email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                      />
                    </div>
                  </div>

                  <div class="form-group col-md-6">
                    <label for="form-phone">Mot de passe</label>
                    <input
                      type="password"
                      class="form-control"
                      id="form-password"
                      v-model="account.password"
                      placeholder="mot-de-passe"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="form-phone">Confirmer le mot de passe</label>
                    <input
                      type="password"
                      class="form-control"
                      id="form-confirmpassword"
                      v-model="account.confirmPassword"
                      placeholder="Confirmer le mot-de-passe"
                    />
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="file"
                        @change="uploadImage"
                        class="form-control"
                        name="form-photo"
                        placeholder="Ajouter votre photo"
                      />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <button
                    type="submit"
                    @click="updateProfile"
                    class="btn btn-primary  w-100"
                  >
                    Appliquer
                  </button>
                  </div>
                   <div class="col-md-3">
                    <button
                    type="submit"
                    @click="resetPassword"
                    class="btn btn-success w-100"
                  >
                    Mot de passe oublié
                  </button>
                  </div>
                </div>
              </div>
            </b-tab>
          </b-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb, db } from "../firebase";
import $ from "jquery";
export default {
  name: "Profile",
  data() {
    return {
      profile: {
        name: null,
        phone: null,
        address: null,
        postcode: null
      },
      account: {
        name: null,
        email: null,
        photoUrl: null,
        emailVerified: null,
        password: null,
        confirmPassword: null,
        uid: null
      }
    };
  },
  firestore() {
    var user = fb.auth().currentUser;

    return {
      profile: db.collection("profiles").doc(user.uid)
    };
  },
  methods: {
    uploadImage() {},
    updateProfile() {
      this.$firestore.profile.update(this.profile);
    },
    resetPassword (){
      var auth = fb.auth();
        console.log(auth.currentUser);

      auth.sendPasswordResetEmail(auth.currentUser.email).then(function() {
        Toast.fire({
          icon: 'success',
          title: 'Email sent'
        })
      }).catch(function(error) {
        console.log(error);
      });
    }
  }
};
</script>

<style>
label {
  margin-right: 30px;
}
</style>