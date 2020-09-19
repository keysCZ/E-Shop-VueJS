<template>
  <div class="nav">
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand href="/">DoShinely</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item><router-link to="/">Home</router-link> |</b-nav-item>
          <b-nav-item-dropdown text="Produits" right>
            <b-dropdown-item
              ><router-link to="/oils">Huiles</router-link></b-dropdown-item
            >
            <b-dropdown-item href="#">Crèmes</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item href="#">Gommage</b-dropdown-item>
            <b-dropdown-item href="#">Gel Douche</b-dropdown-item>
            <b-dropdown-item href="#">Shampoings</b-dropdown-item>
            <b-dropdown-item href="#">Gammes</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item href="#">Les plus vendus</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">FR</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Favoris</b-dropdown-item>
            <b-dropdown-item href="#">Sign In</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
@import url(
  https://fonts.googleapis.com/css?family=Nunito:200,200italic,300,300italic,regular,italic);
nav {
  font-family: "Nunito", sans-serif;
  width: 100%;
}
</style>
