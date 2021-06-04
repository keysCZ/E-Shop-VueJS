<template>
  <div>
    <div class="card product-item my-2" id="card-product-item">
            <div class="card-header card-prd-header">
              <carousel :perPage="1" paginationPosition="bottom-overlay">
                <slide v-for="(image, index) in product.images" :key="index">
                  <div>
                    <img
                      :src="image"
                      class="card-img-top"
                      style="max-width: 100px"
                      :alt="product.name"
                    />
                  </div>
                </slide>
              </carousel>
            </div>

            <div class="card-body card-prd-body">
              <div class="d-flex justify-content-between">
                <h6 class="card-title">{{ product.name }}</h6>
                <h6 class="card-prices">{{ product.price }} €</h6>
              </div>
            </div>
            <div class="card-footer card-prd-footer mb-0 bg-light p-0">
              <button @click="getPrd()" class="btn info col-6">
                <router-link :to="{name: 'details', params:{id:product.id}}">
                  Details
                </router-link>
              </button>

              <add-to-cart
                :product-id="product.id"
                :image="getImage(product.images)"
                :name="product.name"
                :price="product.price"
              >
              </add-to-cart>
            </div>
          </div>
  </div>
</template>

<script>
export default {
  name: "CardS",
  props: ["imagePath", "imageAlt"],
};
</script>

<style></style>
