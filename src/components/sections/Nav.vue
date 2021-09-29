<template>
  <div class="nav">
    <!-- Navigation-->

    <div class="navigation-wrap bg-light start-header start-style">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <nav class="navbar navbar-expand-md navbar-light">
              <a class="navbar-brand" href="#" target="_blank"
                ><img src="/img/logo/LOGO (10).png" alt="logo" /><img
                  src="/img/logo/Cazal Perfumes noir.png"
                  alt="logo"
              /></a>

              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto py-4 py-md-0">
                  <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <a class="nav-link" href="#"
                      ><router-link to="/">Nos produits</router-link></a
                    >
                  </li>
                  <!-- <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
                    <a
                      class="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                      >Nos produits</a
                    >
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                      <a class="dropdown-item" href="#">Another action</a>
                    </div>
                  </li> -->

                  <!-- <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <a class="nav-link" href="#">Nos conseils</a>
                  </li> -->
                  <!-- <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <a
                      class="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                      >Services</a
                    >
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                      <a class="dropdown-item" href="#">Another action</a>
                    </div>
                  </li> -->
                  <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <a class="nav-link" href="#">
                      <router-link to="/checkout"
                        >Mon Panier <i class="bi-cart-fill me-1"></i>
                        <span
                          class="badge bg-dark text-white ms-1 rounded-pill"
                          >{{ this.cartnb }}</span
                        ></router-link
                      ></a
                    >
                  </li>
                  <!-- <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <a class="nav-link" href="#">Contact</a>
                  </li> -->
                </ul>
              </div>
              <div class="cuser" v-if="uid !== null ">
                <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                  <a
                    class="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    >Bonjour {{ profile.name }}
                    <v-icon>mdi-menu-down</v-icon>
                  </a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">
                      <router-link to="/user/profile">Mon profil</router-link>
                    </a>
                    <a class="dropdown-item" href="#"
                      ><router-link to="/user/orders"
                        >Mes achats</router-link
                      ></a
                    >
                  </div>
                </li>
              </div>
              <div class="login" v-else>
                <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                  <a class="nav-link" data-toggle="modal" data-target="#login"
                    >S'identifier</a
                  >
                </li>
              </div>
              <div id="switch" class="p-5">
                <v-icon>mdi-weather-sunny-off</v-icon>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <signin></signin>
    <!-- <nav class="navbar navbar-expand-md navbar-light ">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand"><img src="/img/logo/Cazal Perfumes.png" width="300px" alt="logo"
                    /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" ><router-link to="/">Accueil</router-link> </a></li>
                        <li class="nav-item"><a class="nav-link"><router-link to="/about"
                            >A propos</router-link
                          ></a></li>
                          <li class="nav-item"><a class="nav-link"><router-link to="/women-perfumes"
                            >Nos parfums</router-link
                          ></a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#!">All Products</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" ><router-link to="/oils"
                                    >Huiles Essentielles</router-link
                                  ></a></li>
                                <li><a class="dropdown-item" ><router-link to="/perfumes"
                                    >Parfums</router-link
                                  ></a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <button class="btn btn-outline-dark" type="submit">
                            <router-link to="/checkout"
              >Mon Panier <i class="bi-cart-fill me-1"></i>
                                                        <span class="badge bg-dark text-white ms-1 rounded-pill">{{this.cartnb}}</span></router-link>
                        </button>
                    </form>
                </div>
            </div>
            <a data-toggle="modal" data-target="#login">
            <b-button
              class="my-2 my-sm-1 btn btn-outline-warning bg-light"
              >S'identifier</b-button
            ></a
          >
        </nav><signin></signin> -->
  </div>
</template>

<script>
import $ from "jquery";
import { fb, db } from "../../firebase";
import Login from "../Contents/Login.vue";
export default {
  name: "Navbar",
  components: {
    signin: Login
  },
  data() {
    return {
      cartnb: this.$store.state.cart.length,
      user: fb.auth().currentUser,

      profile: {
        name: null
      },
      email: null,
      photoURL: null,
      emailVerified: null,
      uid: null
    };
  },
  firestore() {
    var user = fb.auth().currentUser;

    return {
      profile: db.collection("profiles").doc(user.uid)
    };
  },
  mounted() {
    var header = $(".start-style");
    $(window).scroll(() => {
      var scroll = $(window).scrollTop();

      if (scroll >= 10) {
        header.removeClass("start-style").addClass("scroll-on");
      } else {
        header.removeClass("scroll-on").addClass("start-style");
      }
    });

    //Menu On Hover

    $("body").on("mouseenter mouseleave", ".nav-item", e => {
      if ($(window).width() > 750) {
        var _d = $(e.target).closest(".nav-item");
        _d.addClass("show");
        setTimeout(function() {
          _d[_d.is(":hover") ? "addClass" : "removeClass"]("show");
        }, 1);
      }
    });

    //Switch light/dark

    $("#switch").on("click", function() {
      if ($("body").hasClass("dark")) {
        $("body").removeClass("dark");
        $("#switch").removeClass("switched");
      } else {
        $("body").addClass("dark");
        $("#switch").addClass("switched");
      }
    });
  },
  computed: {}
  // watch: {
  //   user: function(val) {
  //     this.user = val;
  //     console.log(this.user);
  //     $(".cuser").show();
  //     $(".login").hide();
  //     this.displayName = user.displayName;
  //     this.email = user.email;
  //     this.photoURL = user.photoURL;
  //     this.emailVerified = user.emailVerified;

  //     // The user's ID, unique to the Firebase project. Do NOT use
  //     // this value to authenticate with your backend server, if
  //     // you have one. Use User.getToken() instead.
  //     this.uid = user.uid;
  //   }
  // }
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Nunito:200,200italic,300,300italic,regular,italic);

@import url("https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&subset=devanagari,latin-ext");

/* #Primary
================================================== */

body {
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #212112;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat-back.svg");
  background-position: center;
  background-repeat: repeat;
  background-size: 7%;
  background-color: #fff;
  overflow-x: hidden;
  transition: all 200ms linear;
}
::selection {
  color: #fff;
  background-color: #8167a9;
}
::-moz-selection {
  color: #fff;
  background-color: #8167a9;
}

/* #Navigation
================================================== */

.start-header {
  opacity: 1;
  transform: translateY(0);
  padding: 15px 0;
  box-shadow: 0 10px 30px 0 rgba(138, 155, 165, 0.15);
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}
.start-header.scroll-on {
  box-shadow: 0 5px 10px 0 rgba(138, 155, 165, 0.15);
  padding: 8px 0;
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}
.start-header.scroll-on .navbar-brand img {
  height: 50px;
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}
.navigation-wrap {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}
.navbar {
  padding: 0;
}
.navbar-brand {
  display: inline-flex;
}
.navbar-brand img {
  height: 80px;
  display: block;
  /* filter: brightness(10%); */
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}
.navbar-toggler {
  float: right;
  border: none;
  padding-right: 0;
}
.navbar-toggler:active,
.navbar-toggler:focus {
  outline: none;
}
.navbar-light .navbar-toggler-icon {
  width: 24px;
  height: 17px;
  background-image: none;
  position: relative;
  border-bottom: 1px solid #000;
  transition: all 300ms linear;
}
.navbar-light .navbar-toggler-icon:after,
.navbar-light .navbar-toggler-icon:before {
  width: 24px;
  position: absolute;
  height: 1px;
  background-color: #000;
  top: 0;
  left: 0;
  content: "";
  z-index: 2;
  transition: all 300ms linear;
}
.navbar-light .navbar-toggler-icon:after {
  top: 8px;
}
.navbar-toggler[aria-expanded="true"] .navbar-toggler-icon:after {
  transform: rotate(45deg);
}
.navbar-toggler[aria-expanded="true"] .navbar-toggler-icon:before {
  transform: translateY(8px) rotate(-45deg);
}
.navbar-toggler[aria-expanded="true"] .navbar-toggler-icon {
  border-color: transparent;
}
.nav-link {
  color: #212121 !important;
  font-weight: 500;
  transition: all 200ms linear;
}
.nav-item:hover .nav-link {
  color: #8167a9 !important;
}
.nav-item.active .nav-link {
  color: #777 !important;
}
.nav-link {
  position: relative;
  padding: 5px 0 !important;
  display: inline-block;
}
.nav-item:after {
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  content: "";
  background-color: #8167a9;
  opacity: 0;
  transition: all 200ms linear;
}
.nav-item:hover:after {
  bottom: 0;
  opacity: 1;
}
.nav-item.active:hover:after {
  opacity: 0;
}
.nav-item {
  position: relative;
  font-size: medium;
  transition: all 200ms linear;
}

/* #Primary style
================================================== */

.bg-light {
  background-color: #fff !important;
  transition: all 200ms linear;
}
#switch,
#circle {
  cursor: pointer;
}

.nav-item .dropdown-menu {
  transform: translate3d(0, 10px, 0);
  visibility: hidden;
  opacity: 0;
  max-height: 0;
  display: block;
  padding: 0;
  margin: 0;
  transition: all 200ms linear;
}
.nav-item.show .dropdown-menu {
  opacity: 1;
  visibility: visible;
  max-height: 999px;
  transform: translate3d(0, 0px, 0);
}
.dropdown-menu {
  padding: 10px !important;
  margin: 0;
  font-size: 13px;
  letter-spacing: 1px;
  color: #212121;
  background-color: #fcfaff;
  border: none;
  border-radius: 3px;
  box-shadow: 0 5px 10px 0 rgba(138, 155, 165, 0.15);
  transition: all 200ms linear;
}
.dropdown-toggle::after {
  display: none;
}

.dropdown-item {
  padding: 3px 15px;
  color: #212121;
  border-radius: 2px;
  transition: all 200ms linear;
}
.dropdown-item:hover,
.dropdown-item:focus {
  color: #fff;
  background-color: rgba(129, 103, 169, 0.6);
}

body.dark {
  color: #fff;
  background-color: #1f2029;
}
body.dark .navbar-brand img {
  filter: brightness(100%);
}
body.dark h1 {
  color: #fff;
}
body.dark h1 span {
  transition-delay: 0ms !important;
}
body.dark p {
  color: #fff;
  transition-delay: 0ms !important;
}
body.dark .bg-light {
  background-color: #14151a !important;
}
body.dark .start-header {
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.15);
}
body.dark .start-header.scroll-on {
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.15);
}
body.dark .nav-link {
  color: #fff !important;
}
body.dark .nav-item.active .nav-link {
  color: #999 !important;
}
body.dark .dropdown-menu {
  color: #fff;
  background-color: #1f2029;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);
}
body.dark .dropdown-item {
  color: #fff;
}
body.dark .navbar-light .navbar-toggler-icon {
  border-bottom: 1px solid #fff;
}
body.dark .navbar-light .navbar-toggler-icon:after,
body.dark .navbar-light .navbar-toggler-icon:before {
  background-color: #fff;
}
body.dark .navbar-toggler[aria-expanded="true"] .navbar-toggler-icon {
  border-color: transparent;
}

/* #Media
================================================== */
@media (max-width: 400px) {
  .navbar-brand img {
    height: 50px;
  }
}
@media (max-width: 767px) {
  h1 {
    font-size: 38px;
  }
  .navbar-nav {
    text-align: initial;
  }
  .nav-item:after {
    display: none;
  }
  .nav-item::before {
    position: absolute;
    display: block;
    top: 15px;
    left: 0;
    width: 11px;
    height: 1px;
    content: "";
    border: none;
    background-color: #000;
    vertical-align: 0;
  }
  .dropdown-toggle::after {
    position: absolute;
    display: block;
    top: 10px;
    left: -23px;
    width: 1px;
    height: 11px;
    content: "";
    border: none;
    background-color: #000;
    vertical-align: 0;
    transition: all 200ms linear;
  }
  .dropdown-toggle[aria-expanded="true"]::after {
    transform: rotate(90deg);
    opacity: 0;
  }
  .dropdown-menu {
    padding: 0 !important;
    background-color: transparent;
    box-shadow: none;
    transition: all 200ms linear;
  }
  .dropdown-toggle[aria-expanded="true"] + .dropdown-menu {
    margin-top: 10px !important;
    margin-bottom: 20px !important;
  }
  body.dark .nav-item::before {
    background-color: #fff;
  }
  body.dark .dropdown-toggle::after {
    background-color: #fff;
  }
  body.dark .dropdown-menu {
    background-color: transparent;
    box-shadow: none;
  }
}

/* #Link to page
================================================== */

.logo {
  position: absolute;
  bottom: 30px;
  right: 30px;
  display: block;
  z-index: 100;
  transition: all 250ms linear;
}
.logo img {
  height: 26px;
  width: auto;
  display: block;
  filter: brightness(10%);
  transition: all 250ms linear;
}
body.dark .logo img {
  filter: brightness(100%);
}

/* nav {
  font-family: "Nunito", sans-serif;
  font-size: 18px;
  text-transform: capitalize;
  width: 100%;
  position: static;
} */
</style>
