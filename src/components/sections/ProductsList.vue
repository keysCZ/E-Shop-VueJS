<template>
  <div class="productslist" id="productslist">
    <div class="container">
      <div class="row">
          <div class="col-12">
            <h2 class="m-5">Tous nos produits</h2>
          </div>  
          <!-- <card-product></card-product> -->
          <div class="categories">
            <div  class="col-lg-6 col-sm-12 col-md-6 " v-for="(category, index) in categories"
                  :key="index">
            <category :category="category"> </category>
          </div> 
          </div>
          
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../../firebase";
import CategoryCard from "@/components/Contents/CategoryCard.vue";

export default {
    name: "ProductsList",
    components : {
      category : CategoryCard
    },
    data() {
      return {
        categories: [],
        // nbcard : 0
      };
    },
    firestore() {
      return {
        categories: db.collection("categories")
      };
    },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .categories{
      display: flex;
      flex-wrap: wrap;
    }
</style>