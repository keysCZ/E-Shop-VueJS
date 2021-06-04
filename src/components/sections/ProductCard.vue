<template>
  <div class="card-product" id="product" v-if="products">
    <div class="container">
      <div class="row" id="all-card">
        <div
          class="col-lg-3 col-sm-4 col-md-4 d-flex card-group"
          v-for="(product, index) in products"
          :key="index"
        >
          <div class="card product-item my-2" id="card-product-item">
            <div class="card-header card-prd-header">
              <carousel :perPage="1" paginationPosition="bottom-overlay">
                <slide v-for="(image, index) in product.images" :key="index">
                  <div>
                    <img
                      :src="image"
                      class="card-img-top"
                      style="max-width: 100px"
                      :alt="product.name"
                    />
                  </div>
                </slide>
              </carousel>
            </div>

            <div class="card-body card-prd-body">
              <div class="d-flex justify-content-between">
                <h6 class="card-title">{{ product.name }}</h6>
                <h6 class="card-prices">{{ product.price }} €</h6>
              </div>
            </div>
            <div class="card-footer card-prd-footer mb-0 bg-light p-0">
              <button @click="getPrd()" class="btn info col-6">
                <router-link :to="{name: 'details', params:{id:product.id}}">
                  Details
                </router-link>
              </button>

              <add-to-cart
                :product-id="product.id"
                :image="getImage(product.images)"
                :name="product.name"
                :price="product.price"
              >
              </add-to-cart>
            </div>
          </div>
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
import { Carousel, Slide } from "vue-carousel";
import $ from "jquery";
export default {
  name: "card-product",
  components: {
    pagination : () => import(/*webpackChunkName: "pagination"*/'@/components/Contents/Pagination.vue'),
    Carousel,
    Slide
  },
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