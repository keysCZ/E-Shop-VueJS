<template>
  <div class="products" id="products">
      <div class="container">
          <!-- <h1 class="text-center p-5">Our Products</h1> -->
          <div class="row">
              <productslist></productslist>
          </div>
      </div>
    
  </div>
</template>

<script>
import Productslist from "@/components/sections/ProductsList.vue";

export default {
  name: "Products",
  components : {
      productslist : Productslist
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .products{
        margin-top: 7rem;
        background: #f2f2f2;
        padding-bottom: 3rem;
    }
</style>