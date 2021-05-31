<template>

  <div class="parfum">
      <Navbar/>
      <br class="m-5">
      <div class="section">
        <div class="container" v-for="(item, i) in this.$store.state.product"
              :key="i">
        
        <div class="row bloc1">
          <div class="col-md-6" style="height: 500px;">
           <img :src="item.product_image" alt="">
           <!-- <img src="../assets/images/dstudio-bcn-4mGc3id9-Jc-unsplash.jpg" alt=""> -->
          </div>
          <div class="col-md-6">
            <b-jumbotron>
        <template #header> {{ item.productName }}</template>

        <template #lead>
          Prix :  {{ item.productPrice }}
        </template>

        <hr class="my-4">

        <p>          
          <!-- {{ item.description }} -->
        </p>

        <b-button variant="primary" href="#">Acheter maintenant</b-button>
      
               <add-to-cart
                :product-id="item.product_id"
                :image="item.product_image"
                :name="item.productName"
                :price="item.productPrice"
              >
              </add-to-cart><br>
              <!-- <button class="btn btn-secondary" @click="viewid()">  Ajouter au panier</button> -->
      </b-jumbotron>
          </div>
        </div>
        <hr class="m-5">
        <div class="row  bloc2">
          <div class="col-md-8">
          <h4>Description du produit</h4>
            <p>{{ item.productDescription }}</p>
          </div>

          <div class="col-md-4">
            <h5>Note de tête</h5>
            <h5>Note de coeur</h5>
            <h5>Note de fond</h5>
          </div>

        </div>
        </div>
      </div>
      

    <footerh></footerh>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/sections/Nav.vue'
import Gfooter from "@/components/sections/Footer.vue";
import ProductInfo from "@/components/Contents/ProductInfo.vue";

export default {
  name: "parfum",

  components: {
    Navbar,
    footerh: Gfooter,
    pinfo: ProductInfo
  },
  data() {
    return {
        
    }
  },
  methods : {
    getImage(images) {
          return images[0];
        }
  }
};
</script>
<style scoped>
b-jumbotron {
  
  background-image: url("../assets/images/christin-hume-0MoF-Fe0w0A-unsplash.jpg");
  height: max-content;
}

  .bloc2{
    background-color: #f9f9f9;
  }

  img{
    max-width:100%;
    max-height:100%;
    display: block;
  }

</style>