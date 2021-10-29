<template>
  <div class="user">
    <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
      
      <nav id="sidebar" class="sidebar-wrapper">
        <div class="sidebar-content">
          <!-- sidebar-brand  -->
          <div class="sidebar-item sidebar-brand">
            <a href="#">Espace client</a>
            <div class="close-sidebar" @click="closeMenu" >
              <v-icon small style="color:white">mdi-window-close</v-icon>

            </div>
          </div>
          <!-- sidebar-header  -->
          <div class="sidebar-item sidebar-header d-flex flex-nowrap">
            <div class="user-pic">
              <img
                class="img-responsive img-rounded"
                src="/img/user.svg"
                alt="User picture"
              />
            </div>
            <div class="user-info">
              <span class="user-name"
                > {{ name }}
              </span>
              <span class="user-role">{{ email }}</span>
              <span class="user-status">
              <v-icon color="green" >mdi-circle</v-icon>

                <span>  Online</span>
              </span>
            </div>
          </div>
          <!-- sidebar-search  -->
          <div class="sidebar-item sidebar-search">
            <div>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control search-menu"
                  placeholder="Search..."
                />
                <div class="input-group-append">
                  <span class="input-group-text">
                  <v-icon color="green" small >mdi-magnify</v-icon>

                  </span>
                </div>
              </div>
            </div>
          </div>
          <!-- sidebar-menu  -->
          <!-- sidebar-menu  -->
          <div class="sidebar-item sidebar-menu">
            <ul>
              <li class="header-menu">
                <span>Menu</span>
              </li>
              <li>
                <router-link to="/user/profile">
                  <v-icon color="green" small >mdi-face-man-shimmer</v-icon>
                  <span class="mx-2"> Profile</span>
                </router-link>
              </li>

              <li>
                <router-link to="/user/purchases">
                  <v-icon color="green" small  >mdi-cart-check</v-icon>
                  <span class="mx-2"> My Purchases</span>
                </router-link>
              </li>
              <li>
                <router-link to="/">
                  <v-icon color="green" small  >mdi-cart</v-icon>
                  <span class="mx-2"> Go to shop</span>
                </router-link>
              </li>
              <li>
                <a href="#" @click="logout">
                  <v-icon color="green" small  >mdi-power-plug-off</v-icon>
                  <span class="mx-2">Logout</span>
                </a>
              </li>
            </ul>
          </div>
          <!-- sidebar-menu  -->
        </div>
      </nav>
      <!-- sidebar-content  -->
      <main class="page-content">
        <router-view />
      </main>

      <!-- page-content" -->
    </div>
  </div>
</template>

<script>
import { fb } from "../firebase";
import $ from "jquery";

export default {
  name: "User",
  data() {
    return {
      name: null,
      email: null,
      // avatar: null,
    };
  },
  methods: {
    closeMenu() {
      $(".sidebar-wrapper").toggle();
    },
    logout() {
      fb.auth()
        .signOut()
        .then(user => {
          this.$router.replace("/");
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    var user = fb.auth().currentUser;
    this.name = user.displayName;
    this.email = user.email;
    // this.avatar = user.photoURL;
  }
};
</script>
<style lang="scss" scoped>
#app {
  text-align: unset;
}

img {
  max-width: 300px;
}
.intro {
  margin-top: 3rem;
}
</style>
