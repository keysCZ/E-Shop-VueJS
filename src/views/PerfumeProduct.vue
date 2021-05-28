<template>

  <div class="parfum">
      <Navbar/>
      <br class="m-5">
      <div class="section">
        <div class="container">
        
        <div class="row bloc1">
          <div class="col-md-6" style="height: 500px;">
            <img src="../assets/images/dstudio-bcn-4mGc3id9-Jc-unsplash.jpg" alt="">
          </div>
          <div class="col-md-6">
            <b-jumbotron>
        <template #header> Nom du produit</template>

        <template #lead>
          Tags : 
        </template>

        <hr class="my-4">

        <p>
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, incidunt veniam magni vitae tempora sint similique facere laboriosam eius ad quia voluptatibus excepturi explicabo quam accusantium voluptate eos! Cum, accusamus.
          
          <!-- {{ description }} -->
        </p>

        <b-button variant="primary" href="#">Acheter maintenant</b-button>
         <!-- <add-to-cart
                :product-id="product.id"
                :image="getImage(product.images)"
                :name="product.name"
                :price="product.price"
              >Ajouter au panier
              </add-to-cart> -->
      </b-jumbotron>
          </div>
        </div>
        <hr class="m-5">
        <div class="row  bloc2">
          <div class="col-md-8">
          <h4>Description du produit</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi laboriosam, voluptate recusandae vitae ex temporibus debitis dolor consequatur corrupti voluptatem ullam assumenda maiores commodi perferendis harum rem architecto impedit nihil!
            Eveniet ratione odio recusandae ab reprehenderit consequatur, ut dolor atque reiciendis sit fuga quasi eligendi nihil rerum! Magni autem vero, eligendi quidem assumenda quaerat ad molestias corporis incidunt? Ad, dolor?
            Sequi quia assumenda praesentium, aperiam excepturi architecto doloribus ex magnam libero ducimus vero officiis suscipit odit corrupti impedit mollitia velit repudiandae quibusdam rem, debitis, odio numquam unde dolorum dolore. Vitae?</p>
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