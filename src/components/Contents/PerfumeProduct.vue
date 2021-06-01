<template>
  <div class="parfum">
    <b-jumbotron>
      <template #header>{{ item.productName }}</template>

      <template #lead>
        {{ item.productPrice }}
      </template>

      <hr class="my-4" />

      <p>
        {{ item.product_image }}
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
    description: String
  },
  components: {
    headerpdt: HeaderMarque,
    footerh: Gfooter
  },
  data() {
    return {
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
          var itemData = querySnapshot.docs.map(doc => doc.data());

          console.log("state.product : ");
          this.$store.state.product = itemData;
          this.$store.commit("saveData", this.$store.state.product);
          console.log(this.$store.state.product);
        });
      let id = this.$store.getters.product(this.$route.params.id);
      console.log(this.$store.state.product);
      // return id;
    }
  }
};
</script>
