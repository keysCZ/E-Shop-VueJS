<template>
  <div class="user">
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
            <a href="#">Espace client</a>
            <div class="close-sidebar" @click="closeMenu">
              <b-icon icon="x-square"></b-icon>

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
              <b-icon icon="circle-fill" variant="success"></b-icon>

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
                <router-link to="/user/orders">
                  <b-icon icon="shop-window"></b-icon>

                  <span class="mx-2">Orders</span>
                </router-link>
              </li>

              <li>
                <router-link to="/user/profile">
                  <b-icon icon="person-bounding-box"> </b-icon>
                  <span class="mx-2"> Profile</span>
                </router-link>
              </li>
              <li>
                <a href="#" @click="logout">
                  <b-icon icon="power"></b-icon>
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
