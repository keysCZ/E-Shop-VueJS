<template>
  <div class="products" id="products">
     <h2>Tous nos parfums</h2> 
     <card-product></card-product>
               
    
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Products",
  components : {
  },
  props: {
    msg: String
  },
  computed: {
    ...mapGetters("product"),
  },
  methods: {
     ...mapActions("product"),
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    // .products{
    //     padding-bottom: 3rem;
    // }
</style>