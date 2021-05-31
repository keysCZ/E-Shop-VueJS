<template>
  <div class="ProductInfo">
    <p @click="dataProduct()">Voir le produit</p>

  </div>
</template>

<script>
export default {
  name: "ProductInfo",
  props: {
    name: String,
    price: String,
    productId: String,
    image: String,
    description: String
  },
  data() {
    return {
      item: {
        productName: this.name,
        productPrice: this.price,
        product_id: this.productId,
        product_image: this.image,
        productDescription: this.description,
      }
    };
  },
  methods: {
    dataProduct() {
      this.$store.commit("productDetails", this.item);
    }
  }
};
</script>
<style>
</style>