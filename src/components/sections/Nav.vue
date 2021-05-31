<template>
  <div class="nav">
       <!-- Navigation-->
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand"><img src="/img/logo/Cazal Perfumes.png" width="400px" alt="logo"
                    /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" ><router-link to="/">Accueil</router-link> </a></li>
                        <li class="nav-item"><a class="nav-link"><router-link to="/about"
                            >A propos</router-link
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
        </nav>
  </div>
</template>
<signin></signin>
<script>
import Login from "../Contents/Login.vue";
export default {
  name: "Navbar",
  components: {
    signin: Login
  },
  data() {
    return {
      cartnb : this.$store.state.cart.length
    }
  }
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Nunito:200,200italic,300,300italic,regular,italic);
nav {
  font-family: "Nunito", sans-serif;
  font-size: 20px;
  width: 100%;
}
</style>
