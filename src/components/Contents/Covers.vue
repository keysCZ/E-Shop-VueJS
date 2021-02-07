<template>
  <div class="cover">
    <b-jumbotron class="cover-focus">
      <template v-slot:header
        >CAZAL Perfumes <br />
        <!-- Eliane -->
      </template>

      <template v-slot:lead> Révélez votre beauté naturelle ! </template>

      <!-- <hr class="my-4" /> -->

      <p>Optez pour des cosmétiques 100% bio, faits brillament pour tous !</p>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: "CoverHome"
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Nunito:200,200italic,300,300italic,regularitalic,600,600italic,700,700italic,800,800italic,900,900italic);
.cover {
  font-family: "Nunito", sans-serif;
  background-image: url("../../assets/images/thaismara-figueredo-MTMn2VDnLGM-unsplash.jpg");
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  padding: 20px;
}
.cover-focus {
  width: 60%;
  height: 60%;
  margin: auto;
  background-color: rgba(239, 239, 187, 0.607) !important;
  color: currentColor;
}
</style>
