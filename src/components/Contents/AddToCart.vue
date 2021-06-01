<template>
  <div class="text-center">
    <a class="btn btn-outline-dark mt-auto" @click="addToCart"> Au panier</a>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "add-to-cart",
  props: {
    name: String,
    price: String,
    productId: String,
    image: String
  },
  data() {
    return {
      item: {
        productName: this.name,
        productPrice: this.price,
        product_id: this.productId,
        product_image: this.image,
        productQuantity: 1
      }
    };
  },
  methods: {
    addToCart() {
      $("#shopcart").modal("show");
      this.$store.commit("addToCart", this.item);
    }
  }
};
</script>
<style>

</style>