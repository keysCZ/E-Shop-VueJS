<template>
  <div class="failedpayment">
    <Navbar />
    <div class="section full-height">
      <div class="absolute-center">
        <div class="section">
          <div class="container">
            <div class="row">
              <h1>Votre paiement n'est pas passé, veuillez réessayer</h1>
              <v-icon color="green">mdi-alert-decagram</v-icon>
              <span> Aucun montant ne vous a été débité. </span>
              <p>Si besoin, n'hésitez pas à nous contacter via le  </p>
              <router-link to="/contact"> formulaire de contact </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FailedPayment",
};
</script>

<style>
</style>