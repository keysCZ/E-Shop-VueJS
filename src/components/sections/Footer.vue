<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-5 px-5 py-3">
          <h4 class="text-primary">Contact</h4>
          <div style="display: grid; grid-auto-rows: auto">
            <div>
              <a href="tel:+330644913209" class="text-dark">
                +33 07 83 07 08 80
              </a>
            </div>
            <div>
              <a
                href="mailto:structures@lasbmingenieurs-bat.com"
                class="text-dark"
              >
                <i class="fa fa-envelope-o d-inline mr-3 text-primary"></i
                >contact@Eliane.com</a
              >
            </div>
          </div>
        </div>
        <div class="col-md-5 offset-md-2 px-5 py-3">
          <h4 class="text-primary">Mapsite</h4>
          <div style="display: grid">
            <a href="#">Accueil </a>
            <a href="#">Marques </a>
            <a href="#">Contactez-nous</a>
          </div>
        </div>
        <span class="text-muted text-center col-md-12">Copyrights Eliane</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Gfooter",
};
</script>

<style scoped>
/* @import url(https://fonts.googleapis.com/css?family=Nunito:200,200italic,300,300italic,regular,italic,600,600italic,700,700italic,800,800italic,900,900italic); */

.footer {
  position: relative;
  display: block;
  margin-top: 60px;
  margin-bottom: 0;
  padding: 1em;
  width: 100%;
  font-family: "Nunito", sans-serif;
  background-color: lightgoldenrodyellow;
}
</style>
