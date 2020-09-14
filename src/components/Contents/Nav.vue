<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="#">LBM</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item><router-link to="/">Home</router-link> |</b-nav-item>
          <b-nav-item-dropdown text="Marques" right>
            <b-dropdown-item href=""
              ><router-link to="/nike">Nike</router-link></b-dropdown-item
            >
            <b-dropdown-item href="#">Air Jordan</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item href="#">Adidas</b-dropdown-item>
            <b-dropdown-item href="#">Fila</b-dropdown-item>
            <b-dropdown-item href="#">Puma</b-dropdown-item>
            <b-dropdown-item href="#">Vans</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item href="#">Hommes</b-nav-item>
          <b-nav-item href="#">Femmes</b-nav-item>
          <b-nav-item-dropdown text="Enfants" right>
            <b-dropdown-item href="#">Nike</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item href="#">Adidas</b-dropdown-item>
            <b-dropdown-item href="#">Puma</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item href="#">En vogue</b-nav-item>
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
  https://fonts.googleapis.com/css?family=Nunito:200,
  200italic,
  300,
  300italic,
  regular,
  italic,
  600,
  600italic,
  700,
  700italic,
  800,
  800italic,
  900,
  900italic
);
nav {
  font-family: "Nunito", sans-serif;
}
</style>
