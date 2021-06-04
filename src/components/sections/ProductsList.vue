<template>
  <div class="productslist" id="products">
     <h2>Tous nos parfums</h2> 
     <card-product></card-product>
               
    
  </div>
</template>

<script>

export default {
  name: "ProductsList",
  components : {
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    // .products{
    //     padding-bottom: 3rem;
    // }
</style>