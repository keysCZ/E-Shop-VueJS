<template>
  <div class="ProductInfo">
    <div class="text-center">
      <a class="btn btn-outline-dark mt-auto" @click="dataProduct()"
        ><router-link to="/product/perfume">Voir le produit </router-link></a
      >
    </div>
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
    description: String,
    // tags: []
  },
  data() {
    return {
      item: {
        productName: this.name,
        productPrice: this.price,
        product_id: this.productId,
        product_image: this.image,
        productDescription: this.description,
        // productTags : this.tags
        
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