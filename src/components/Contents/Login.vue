<template>
  <div class="login">
    <!-- Modal -->
    <div
      class="modal fade"
      id="login"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              Authtification
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="pills-home-tab"
                  data-toggle="pill"
                  href="#pills-home"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                  >S'inscrire</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="pills-profile-tab"
                  data-toggle="pill"
                  href="#pills-profile"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                  >Se connecter</a
                >
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div>
                  <b-form inline>
                    <label class="sr-only" for="inline-form-input-username"
                      >Username</label
                    >
                    <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
                      <b-input
                        id="inline-form-input-username"
                        placeholder="Username"
                      ></b-input>
                    </b-input-group>
                    <label class="sr-only" for="inline-form-input-name"
                      >Password</label
                    >
                    <b-input
                      id="inline-form-input-name"
                      class="mb-2 mr-sm-2 mb-sm-0"
                      placeholder="Password"
                    ></b-input>

                    <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0"
                      >Remember me</b-form-checkbox
                    >
                    <hr />
                    <div class="modal-footer">
                      <b-button variant="primary">Let's go -></b-button>
                    </div>
                  </b-form>
                </div>
              </div>
              <template>
                <div
                  class="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div>
                    <b-form @reset="onReset" v-if="show">
                      <b-form-group
                        id="input-group-1"
                        label="Email address:"
                        label-for="input-1"
                        description="We'll never share your email with anyone else."
                      >
                        <b-form-input
                          id="input-1"
                          v-model="form.email"
                          type="email"
                          required
                          placeholder="Enter email"
                        ></b-form-input>
                      </b-form-group>

                      <b-form-group
                        id="input-group-2"
                        label="Your Name:"
                        label-for="input-2"
                      >
                        <b-form-input
                          id="input-2"
                          v-model="form.name"
                          required
                          placeholder="Enter name"
                        ></b-form-input>
                      </b-form-group>
                      <b-form-group
                        id="input-group-3"
                        label="Your Password:"
                        label-for="input-3"
                      >
                        <b-form-input
                          id="input-3"
                          v-model="form.password"
                          required
                          placeholder="Enter your password"
                        ></b-form-input>
                      </b-form-group>

                      <!-- <b-form-group
                        id="input-group-4"
                        label="preferences:"
                        label-for="input-4"
                      >
                        <b-form-select
                          id="input-4"
                          v-model="form.preferences"
                          :options="preferences"
                          required
                        ></b-form-select>
                      </b-form-group>

                      <b-form-group id="input-group-5">
                        <b-form-checkbox-group
                          v-model="form.checked"
                          id="checkboxes-5"
                        >
                          <b-form-checkbox value="me"
                            >Informez-moi des nouveautés ou des réductions
                            (newsletter hebdomadaire)</b-form-checkbox
                          >
                          <b-form-checkbox value="that" required
                            >J'ai lu et j'accepte les conditions générales de
                            ventes (CGV)</b-form-checkbox
                          >
                        </b-form-checkbox-group>
                      </b-form-group> -->

                      <div class="modal-footer">
                        <button
                          class="btn btn-success"
                          @click="registrer"
                        >
                          OK !
                        </button>
                        <button type="reset" class="btn btn-danger ">
                          Reset
                        </button>
                      </div>
                    </b-form>
                    <!-- <b-card class="mt-3" header="Form Data Result">
                      <pre class="m-0">{{ form }}</pre>
                    </b-card> -->
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {fb} from "../../firebase";
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: null,
        name: null,
        password: null,
        // preferences: null,
        // checked: []
      },
      // preferences: [
      //   { text: "Select One", value: null },
      //   "Parfums pour femmes",
      //   "Parfums pour hommes",
      //   "Huiles essentielles"
      // ],
      show: true
    };
  },
  methods: {
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.password = "";
      this.form.preferences = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    registrer() {
      fb.auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == "auth/weak-password") {
            alert("The password is too weak.");
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    },
  },
};
</script>
