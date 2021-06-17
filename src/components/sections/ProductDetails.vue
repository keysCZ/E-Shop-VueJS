<template>
  <div class="ProductDetails">
    <Navbar />
    <div class="section">
      <div class="container">
        <div class="row p-3">
          <div class="col-md-4">
            <carousel
              :perPage="1"
              paginationPosition="bottom-overlay"
              :paginationEnabled="false"
              :navigationEnabled="true"
              :loop="true"
              autoplayHoverPause
            >
              <slide v-for="(image, index) in product.images" :key="index">
                <div>
                  <img
                    :src="image"
                    class="card-img-top"
                    style="max-width: "
                    :alt="product.name"
                  />
                </div>
              </slide>
            </carousel>
          </div>
          <div class="col-md-8">
            <b-jumbotron v-if="product" class="section-details">
              <template v-slot:header>
                <h6>PARFUM</h6>
                <h5 class="pdtname">{{ product.name }}</h5>
              </template>

              <template v-slot:lead> {{ product.price }} €</template>
              <h4 class="m-2">
                <strong>
                  <em>{{ product.impact }}</em>
                </strong>
              </h4>
              <div>#{{ product.tags }}</div>
              <add-to-cart
                :product-id="product.id"
                :image="getImage(product.images)"
                :name="product.name"
                :price="product.price"
              >
              </add-to-cart>
              <hr class="my-4" />

              <div class="details">
                <h6>Plus de détails</h6>
                <p id="details">
                  <!-- {{ product.description }} -->
                </p>
              </div>

              <!-- <b-button variant="primary" href="#">Do Something</b-button> -->
            </b-jumbotron>
          </div>
        </div>
      </div>
    </div>
    <footerh></footerh>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderMarque from "@/components/sections/Headermarque.vue";
import Gfooter from "@/components/sections/Footer.vue";
import { Carousel, Slide } from "vue-carousel";
import $ from "jquery";
export default {
  name: "ProductDetails",
  data() {
    return {
      true: true,
      false: false
    };
  },
  components: {
    headerpdt: HeaderMarque,
    footerh: Gfooter,
    Carousel,
    Slide
  },
  data() {
    return {
      // description: this.product.description,
    };
  },
  methods: {
    getImage(images) {
      return images[0];
    },
    desc() {
      let description = this.product.description;
      $("#details").html(description);
      console.log(this.product.tags);
      console.log(this.product.images);
    }
  },
  computed: {
    product() {
      return this.$store.getters.product(this.$route.params.id);
    }
  },
  mounted() {
    this.desc();
  }
};
</script>
<style scoped>
.container {
  font-family: "Nunito", sans-serif;
  background-color: #f2f1ef;
  /* background-position: center;
  background-attachment: fixed;
  background-size: cover; */
  /* padding: 20px; */
}
.section-details {
  /* width: 60%;
  height: 60%; */
  margin: auto;
}
.jumbotron {
  background-color: none !important;
  text-align: left;
}
#details {
  padding: 10px;
  border-left: solid 1px rgb(12, 11, 11);
  max-height: 230px;
  overflow: auto;
}
#details::-webkit-scrollbar {
  width: 10px; /* width of the entire scrollbar */
}

#details::-webkit-scrollbar-track {
  border: 1px solid lightskyblue;
  border-radius: 20px; /* roundness of the scroll thumb */
  /* color of the tracking area */
}

#details::-webkit-scrollbar-thumb {
  background-color: black; /* color of the scroll thumb */
  border-radius: 20px; /* roundness of the scroll thumb */
  border: 3px solid #e8ecef; /* creates padding around scroll thumb */
}
.pdtname {
  font-size: 22px;
}
h6 {
  color: grey;
  text-transform: uppercase;
}
</style>
