<template>
  <div class="CardPdtPost">
    <div class="card product-item my-2" id="card-product-item">
      <div class="card-header card-prd-header">
        <carousel :perPage="1" paginationPosition="bottom-overlay">
          <slide v-for="(image, index) in item.images" :key="index">
            <div>
              <img
                :src="image"
                class="card-img-top"
                style="max-width: 100px"
                :alt="item.name"
              />
            </div>
          </slide>
        </carousel>
      </div>

      <div class="card-body card-prd-body">
        <div class="d-flex justify-content-between">
          <h6 class="card-title">{{ item.name }}</h6>
          <h6 class="card-prices">{{ item.price }} €</h6>
        </div>
      </div>
      <div class="card-footer card-prd-footer mb-0 bg-light p-0">
        <button @click="getPrd()" class="btn info col-6">
          <router-link :to="{ name: 'details', params: { id: item.id } }">
            Details
          </router-link>
        </button>

        <add-to-cart
          :product-id="item.id"
          :name="item.name"
          :price="item.price"
        >
        </add-to-cart>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import { BIcon } from "bootstrap-vue";
import $ from "jquery";
export default {
  name: "CardPdtPost",
  components: {
    Carousel,
    Slide,
    "b-icon": BIcon
  },
  props: {
    item: {
      id: String,
      name: String,
      price: String,
      id: String,
      images: Array,
      tags: Array,
      description: String,
      impact: String
    }
  },
  data() {
    return {
      true: true,
      false: false
    };
  },
  methods: {
    getImage(images) {
      return this.item.images[0];
    },

    getPrd() {
      // for (const item in this.products) {
      //   console.log(`${property}: ${object[property]}`);
      //   items.push(this.products[item]);
      // }
      // console.log(this.item);
      this.$store.commit("getProducts", this.item);
      console.log(this.$store.state.article);
    }
  },
  mounted() {
    // console.log(this.item.name);
    $("carousel");
    // $(".nameUp").toUppercase();
  }
};
</script>
<style>
.glyphicon {
  font-size: 2em;
}
</style>
<style scoped lang="scss">
</style>
