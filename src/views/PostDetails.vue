<template>
  <div class="oils">
    <Navbar />
    <div class="section full-height">
      <div class="absolute-center">
        <div class="section">
          <carousel
            :perPage="1"
            paginationPosition="bottom-overlay"
            :paginationEnabled="false"
            :navigationEnabled="true"
            :loop="true"
            autoplayHoverPause
          >
            <slide v-for="(slide, index) in post.slides" :key="index">
              <div>
                <img
                  :src="slide"
                  class="card-img-top"
                  style="max-width: "
                  :alt="post.name"
                />
              </div>
            </slide>
          </carousel>
          <h1>{{ post.title }}</h1>
          <div class="container my-5">
            <div
              class="
                row
                p-4
                pb-0
                pe-lg-0
                pt-lg-5
                align-items-center
                rounded-3
                border
                shadow-lg
              "
            >
              <div class="col-lg-3 p-0 overflow-hidden shadow-lg">
                <img
                  class="rounded-lg-3"
                  :src="post.image"
                  :alt="post.title"
                  width="720"
                />
              </div>
              <div class="col-lg-6 p-3 p-lg-5 pt-lg-3">
                <h1 class="display-4 fw-bold lh-1">
                  {{ post.title }}
                </h1>
                <p class="lead">
                  {{ post.impact }}
                </p>
                <p>
                  {{ post.decription }}
                </p>
                <!-- <div
                  class="
                    d-grid
                    gap-2
                    d-md-flex
                    justify-content-md-start
                    mb-4 mb-lg-3
                  "
                >
                  <button
                    type="button"
                    class="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                  >
                    Primary
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-secondary btn-lg px-4"
                  >
                    Default
                  </button>
                </div> -->
              </div>
              <div
                class="col-lg-3 p-0 overflow-hidden shadow-lg"
                v-for="(product, index) in filteredProductConcerned"
                :key="index"
              >
                <CardPdtPost :item="product" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <footerh></footerh> -->
  </div>
</template>

<script>
// @ is an alias to /src
import { db } from "../../../firebase";

import HeaderMarque from "@/components/sections/Headermarque.vue";
import Gfooter from "@/components/sections/Footer.vue";
import CardPdtPost from "@/components/Contents/CardPdtPost.vue";

export default {
  name: "Huiles",
  components: {
    headerpdt: HeaderMarque,
    footerh: Gfooter,
    CardPdtPost
  },
  data() {
    return {
      productConcerned: "coco",
      products: []
    };
  },
  firestore() {
    return {
      products: db.collection("products")
    };
  },
  methods: {
    getImage(images) {
      return images[0];
    }
  },

  computed: {
    filteredProductConcerned() {
      // console.log(this.product.tags);
      return this.products.filter(pdt =>
        pdt.tags.includes(this.productConcerned)
      );
    }
  }
};
</script>
<style scoped>
.carousel {
  width: 900px;
  margin: auto;
}
.section {
  position: relative;
  transform: translateY(20%);
  width: 100%;
  display: block;
}
.full-height {
  height: 100vh;
}
.over-hide {
  overflow: hidden;
}
.absolute-center {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  margin-top: 40px;
  transform: translateY(-50%);
  z-index: 20;
}
@media (max-width: 767px) {
  .section {
    transform: translateY(36%);
  }
}
</style>