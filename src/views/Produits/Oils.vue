<template>
  <div class="oils">
    <Navbar />
    <div class="section full-height">
      <div class="absolute-center">
        <div class="section">
          <h1>PNos huiles essentielles et végétales</h1>
          <div class="container" id="container_product" v-if="products">
            <div class="row" id="all-card">
              <div
                class="col-lg-3 col-sm-4 col-md-4 d-flex card-group"
                v-for="(product, index) in filteredOils"
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
import { db } from "../../firebase";
// import pagination from "@/components/Contents/Pagination.vue";
import Cards from "@/components/Contents/Cards.vue";
import $ from "jquery";
export default {
  name: "oils",
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
    filteredOils() {
      // console.log(this.product.tags);
      return this.products.filter(pdt => pdt.tags.includes("huile,"));
    },
    nbCard() {
      if ($("#all-card")) {
        console.log(this.filteredOils.length);
        return this.filteredOils.length;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>