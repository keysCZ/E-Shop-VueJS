<template>
  <div class="card-product" id="product" v-if="products">
    <div class="container">
      <div class="row" id="all-card">
        <div
          class="col-lg-3 col-sm-4 col-md-4 d-flex card-group"
          v-for="(product, index) in products"
          :key="index"
        >
          <cards 
          :item="product"
          />
        </div>
      </div>
      <!-- <button @click="getPrd()">Data</button> -->
      <div v-if="products.length"><pagination :nbcard="nbCard"></pagination></div>
    </div>
    
  </div>
</template>

<script>
import { db } from "../../firebase";
// import pagination from "@/components/Contents/Pagination.vue";
import Cards from "@/components/Contents/Cards.vue";
import $ from "jquery";
export default {
  name: "card-product",
  components: {
    pagination : () => import(/*webpackChunkName: "pagination"*/'@/components/Contents/Pagination.vue'),
    Cards
  },
  props : ["gender"],

  data() {
    return {
      products: [],
      // nbcard : 0
    };
  },
  firestore() {
    return {
      products: db.collection("products")
    };
  },
  methods: {
    getImage(images) {
      return images[0];
    },
  
  },

  computed : {
    nbCard(){
      if($("#all-card")){
       return this.products.length;
    }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>