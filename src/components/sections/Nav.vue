<template>
  <div class="nav">
    <b-navbar toggleable="lg" type="light" variant="white">
      <b-navbar-brand href="/"
        ><img src="/img/CAZAL Perfumes.png" width="150px" alt="logo CE"
      /></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item><router-link to="/">Accueil</router-link> |</b-nav-item>
          <b-nav-item-dropdown text="Produits" right>
            <b-dropdown-item
              ><router-link to="/oils"
                >Huiles Essentielles</router-link
              ></b-dropdown-item
            >
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item
              ><router-link to="/perfumes"
                >Parfums</router-link
              ></b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item
            ><router-link to="/checkout"
              ><i
                class="fas fa-shopping-bag"
                style="color: blue; font-size: 18px"
              ></i
            ></router-link>
            |</b-nav-item
          >
          <a data-toggle="modal" data-target="#login">
            <b-button
              size="sm"
              class="my-2 my-sm-1 btn btn-outline-warning bg-light"
              >Se connecter</b-button
            ></a
          >
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">FR</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
      <signin></signin>
    </b-navbar>
  </div>
</template>

<script>
import Login from "../Contents/Login.vue";
export default {
  name: "Navbar",
  components: {
    signin: Login
  }
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Nunito:200,200italic,300,300italic,regular,italic);
nav {
  font-family: "Nunito", sans-serif;
  width: 100%;
}
</style>
