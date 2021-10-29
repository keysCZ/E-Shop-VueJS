<template>
  <div class="mainadmin">
    <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
      <a
        href="#"
        class="btn btn-lg btn-dark h3 mb-2"
        id="show-sidebar"
        @click="closeMenu"
      >
        <b-icon icon="menu-down" variant="warning"></b-icon>
      </a>
      <nav id="sidebar" class="sidebar-wrapper">
        <div class="sidebar-content">
          <!-- sidebar-brand  -->
          <div class="sidebar-item sidebar-brand">
            <a href="#">Panneau D'administration</a>
            <div class="close-sidebar" @click="closeMenu">
              <b-icon icon="x-square"></b-icon>
            </div>
          </div>
          <!-- sidebar-header  -->
          <div class="sidebar-item sidebar-header d-flex flex-nowrap">
            <div class="user-pic">
              <img
                class="img-responsive img-rounded"
                :src="avatar"
                alt="User picture"
              />
            </div>
            <div class="user-info">
              <span class="user-name"> {{ name }} </span>
              <span class="user-role">{{ email }}</span>
              <span class="user-status">
                <b-icon icon="circle-fill" variant="success"></b-icon>

                <span> Online</span>
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
                    <b-icon icon="search"></b-icon>
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
                <router-link to="/adminczperfumes/dashboard/overview">
                  <v-icon icon="mdi-xbox-controller-menu"> </v-icon>
                  <span class="mx-2"> Vue d'ensemble</span>
                </router-link>
              </li>
              <li>
                <router-link to="/adminczperfumes/dashboard/articles">
                  <b-icon icon="tags-fill"></b-icon>
                  <span class="mx-2">Articles</span>
                </router-link>
              </li>
              <li>
                <router-link to="/adminczperfumes/dashboard/products">
                  <b-icon icon="tags-fill"></b-icon>
                  <span class="mx-2">Produits</span>
                </router-link>
              </li>
              <li>
                <router-link to="/adminczperfumes/dashboard/orders">
                <v-icon color="green" small  >mdi-cart-check</v-icon>

                  <span class="mx-2">Commandes</span>
                </router-link>
              </li>

              <li>
                <router-link to="/adminczperfumes/dashboard/profile">
                 <v-icon color="green" small >mdi-face-man-shimmer</v-icon>
                  <span class="mx-2"> Profil</span>
                </router-link>
              </li>
              <li>
                <a href="#" @click="logout">
                   <v-icon color="green" small  >mdi-power-plug-off</v-icon>
                  <span class="mx-2">Déconnexion</span>
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
import { BIcon } from "bootstrap-vue";
import { fb } from "../../firebase";
import $ from "jquery";

export default {
  name: "MainAdmin",
  components: {
    "b-icon": BIcon
  },
  data() {
    return {
      name: null,
      email: null,
      avatar: null
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
          this.$router.replace("/adminczperfumes");
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
    this.avatar = user.photoURL;
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
