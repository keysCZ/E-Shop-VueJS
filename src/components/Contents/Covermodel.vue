<template>
  <div class="covermodel">
    <b-jumbotron class="cover-focus">
            <template v-slot:header>LBM</template>

            <template v-slot:lead>
            Latest Best Model
            </template>

            <hr class="my-4" />

            <p>
            Offrez-vous une paire de NIKE | ADIDAS | FILA | PUMA | VANS
            </p>

    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: "CoverModel"

};
</script>

<style>
@import url(  https://fonts.googleapis.com/css?family=Nunito:200,200italic,300,300italic,regular,italic,600,600italic,700,700italic,800,800italic,900,900italic);
.covermodel {
  font-family: "Nunito", sans-serif;
  background-image: url("../../assets/images/countryside-1846093_1920.jpg");
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  padding:20px;
}
.cover-focus{
    width: 60%;
    height:60%;
  margin: auto;
    background-color: rgba(239, 239, 187, 0.607)!important;
    color: currentColor;
}
</style>
