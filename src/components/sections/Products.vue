<template>
  <div class="products" id="products">
      <div class="container">
          <h1 class="text-center p-5">Nos Produits</h1>
          <div class="row">
              <productslist></productslist>
          </div>
      </div>
    
  </div>
</template>

<script>

export default {
  name: "Products",
  components : {
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .products{
        padding-bottom: 3rem;
    }
</style>