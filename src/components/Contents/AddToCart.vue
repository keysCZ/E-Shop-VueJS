<template>
  <button class="btn add-to-cart col-6" @click="addToCart">
    <i class="fab fa-opencart" style="color: white"></i>
  </button>
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
.add-to-cart {
  background-color: black;
  border: 1px solid white;
}
</style>