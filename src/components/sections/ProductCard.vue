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
          :name="product.name"
          :description="product.description"
          :price="product.price"
          :id="product.id"
          :images="product.images"
          />
        </div>
      </div>
      <!-- <button @click="getPrd()">Data</button> -->
      <div v-if="products.length"><pagination :nbcard="nbcard"></pagination></div>
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
      charged: false,
      products: [],
      currentPage: 1,
      perPage: 10,
      nbcard : 0
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
    
    getPrd() {
      let items = [];
      for (const item in this.products) {
        //console.log(`${property}: ${object[property]}`);
        items.push(this.products[item]);
      }
      // console.log(items);
      this.$store.commit("getProducts", items);

    }
  },

   created () {
    if($("#all-card")){
       this.charged = true;
       this.nbcard = $(".card-group").length;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>