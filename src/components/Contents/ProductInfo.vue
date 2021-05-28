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
        productDescription: this.description,
        product_image: this.image
      }
    };
  },
  methods: {
    dataProduct() {
        let product = new Array;
        // product.push(this.item.productName);
        console.log(item);
    }
  }
};
</script>
<style>
</style>