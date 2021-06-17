<template>
  <div class="women-perfumes">
    <Navbar />
    <div class="section full-height">
      <div class="absolute-center">
        <div class="section">
          <h1>Parfums pour Femmes</h1>
          <div class="container" id="container_product" v-if="products">
            <div class="row" id="all-card">
              <div
                class="col-lg-3 col-sm-4 col-md-4 d-flex card-group"
                v-for="(product, index) in filteredWomenPerfumes"
                :key="index"
              >
                <cards :item="product" />
              </div>
            </div>
            <!-- <button @click="WomenPerfumes()">Data</button> -->
            <div v-if="products.length">
              <pagination :nbcard="nbCard"></pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 

<script>
import { db } from "../../../firebase";
// import pagination from "@/components/Contents/Pagination.vue";
import Cards from "@/components/Contents/Cards.vue";
import $ from "jquery";
export default {
  name: "card-product",
  components: {
    pagination: () =>
      import(
        /*webpackChunkName: "pagination"*/ "@/components/Contents/Pagination.vue"
      ),
    Cards
  },
  // props: ["gender"],

  data() {
    return {
      products: []
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
    }
  },

  computed: {
    filteredWomenPerfumes() {
      // console.log(this.product.tags);
      return this.products.filter(pdt => pdt.tags.includes("femme,"));
    },
    nbCard() {
      if ($("#all-card")) {
        console.log(this.products.length);
        return this.products.length;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.section {
  position: relative;
  transform: translateY(20%);
  width: 100%;
  display: block;
}
.full-height {
  height: 100vh;
}
.over-hide {
  overflow: hidden;
}
.absolute-center {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  margin-top: 40px;
  transform: translateY(-50%);
  z-index: 20;
}
@media (max-width: 767px) {
  .section {
    transform: translateY(36%);
  }
}
</style>