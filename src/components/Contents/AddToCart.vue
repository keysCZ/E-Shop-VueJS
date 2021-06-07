<template>
  <div class="text-center">
    <a class="btn btn-outline-dark mt-auto tocart" @click="addToCart"> Au panier <b-icon class="icon" icon="bag-plus" variant="black"></b-icon></a>
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
      $(".tocart").addClass('btn-lg');
      // $(".icon").replaceWith('<b-icon icon="bag-check" variant="success"></b-icon>');
      this.$store.commit("addToCart", this.item);
      Toast.fire({
          icon: 'success',
          title: 'Le produit a été ajouté au panier'
        })
    }
  }
};
</script>
<style>

</style>