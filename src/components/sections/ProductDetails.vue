<template>
  <div class="productdetails">
    <b-jumbotron v-if="product">
      <template #header>{{ product.productName }}</template>

      <template #lead>
        {{ product.productPrice }}
      </template>
        <p>id : {{ product.product_id }}</p>
      <hr class="my-4" />

      <p>
        {{ product.product_image }}
        {{ product.productDescription }}
      </p>

      <b-button variant="primary" href="#">Do Something</b-button>
      <b-button variant="success" href="#">Do Something Else</b-button>
    </b-jumbotron>
    <button @click="product()">Data</button>
    <footerh></footerh>
  </div>
</template>

<script>
import { db } from "../../firebase";

// @ is an alias to /src
import HeaderMarque from "@/components/sections/Headermarque.vue";
import Gfooter from "@/components/sections/Footer.vue";

export default {
  name: "productdetails",
  props: {
    name: String,
    price: String,
    productId: String,
    image: String,
    description: String
  },
  components: {
    headerpdt: HeaderMarque,
    footerh: Gfooter
  },
  data() {
    return {
        itemData: [],
      item: {
        productName: this.name,
        productPrice: this.price,
        product_id: this.productId,
        product_image: this.image,
        productDescription: this.description
      }
    };
  },
  computed: {
    product() {
      db.collection("products")
        .get()
        .then(querySnapshot => {
          this.itemData = querySnapshot.docs.map(doc =>  doc.data());
        });
        //   this.$store.state.product.push(this.itemData);
        //   this.$store.commit("saveData", this.$store.state.product);
          this.$store.getters.product(this.$route.params.id);
      console.log(this.itemData);
    //   return id;
    }
  }
};
</script>
