<template>
  <div class="parfum">
      <b-jumbotron>
        <template #header>{{ item.productName }}</template>

        <template #lead>
          {{ item.productPrice }}
        </template>

        <hr class="my-4">

        <p>
          {{ item.product_image }}  <br>
          {{ item.productTags }}<br>
          {{ item.productDescription }}
        </p>

        <b-button variant="primary" href="#">Do Something</b-button>
        <b-button variant="success" href="#">Do Something Else</b-button>
      </b-jumbotron>
        
    <footerh></footerh>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderMarque from "@/components/sections/Headermarque.vue";
import Gfooter from "@/components/sections/Footer.vue";

export default {
  name: "parfum",
  props: {
    name: String,
    price: String,
    productId: String,
    image: String,
    description: String,
    tags: []
  },
  components: {
    headerpdt: HeaderMarque,
    footerh: Gfooter,
  },
  data() {
    return {
        item: {
            productName: this.name,
            productPrice: this.price,
            product_id: this.productId,
            product_image: this.image,
            productDescription : this.description,
            productTags : this.tags
        }
    }
  }
};
</script>
