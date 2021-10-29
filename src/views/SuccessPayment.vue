<template>
  <div class="successpayment">
    <Navbar />
    <div class="section full-height">
      <div class="absolute-center">
        <div class="section">
          <div class="container">
            <div class="row">
              <h1>Commande confirmée</h1>
              <v-icon color="greevn">mdi-check-decagram</v-icon><br> 
              <span>Merci pour votre achat ! </span><br>
              <p>Vous pouvez suivre l'état de votre commande sur votre espace client :</p>
              <router-link to="/user/purchases"> rubrique mes achats </router-link>
              <p><br>
                Si besoin, n'hésitez pas à nous contacter via le formulaire de
              </p>
              <router-link to="/contact"> contact </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuccessPayment",
};
</script>

<style>
</style>