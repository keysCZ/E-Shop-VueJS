<template>
  <div class="Cards">
    <div class="card product-item my-2" id="card-product-item">
            <div class="card-header card-prd-header">
              <carousel :perPage="1" paginationPosition="bottom-overlay">
                <slide v-for="(image, index) in images" :key="index">
                  <div>
                    <img
                      :src="image"
                      class="card-img-top"
                      style="max-width: 100px"
                      :alt="name"
                    />
                  </div>
                </slide>
              </carousel>
            </div>

            <div class="card-body card-prd-body">
              <div class="d-flex justify-content-between">
                <h6 class="card-title">{{ name }}</h6>
                <h6 class="card-prices">{{ price }} €</h6>
              </div>
            </div>
            <div class="card-footer card-prd-footer mb-0 bg-light p-0">
              <button @click="getPrd()" class="btn info col-6">
                <router-link :to="{name: 'details', params:{id:id}}">
                  Details
                </router-link>
              </button>

              <add-to-cart
                :product-id="id"
                :image="getImage(images)"
                :name="name"
                :price="price"
              >
              </add-to-cart>
            </div>
          </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "Cards",
  components: {
    Carousel,
    Slide,
  },
  props: {
    name: String,
    price: String,
    id: String,
    images: [],
    tags: [],
    description: String
  },
  methods: {
    getImage(images) {
      return images[0];
    },
  }
};
</script>

<style></style>
