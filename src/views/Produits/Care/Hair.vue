<template>
  <div class="oils">
    <Navbar />
    <div class="section full-height">
      <div class="absolute-center">
        <div class="section">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100"
                  src="/img/tijana-drndarski-Bb8_yBkb_6E-unsplash.jpg"
                  alt="First slide"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5>My Caption Title (1st Image)</h5>
                  <p>
                    The whole caption will only show up if the screen is at
                    least medium size.
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src="/img/shutterstock_192366527-min-e1530295560732.jpg"
                  alt="Second slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src="/img/overview.svg"
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          <h1>Prenez soin de vos cheveux</h1>
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
                  src="/img/tijana-drndarski-Bb8_yBkb_6E-unsplash.jpg"
                  alt=""
                  width="720"
                />
              </div>
              <div class="col-lg-6 p-3 p-lg-5 pt-lg-3">
                <h1 class="display-4 fw-bold lh-1">
                  Les Avantages De L’huile De Coco Sur Les Cheveux
                </h1>
                <p class="lead">
                  Vous avez des problèmes de cheveux? Vos cheveux sont secs ou
                  abîmés? Vous avez essayé différents shampooings mais cela ne
                  change pas grand chose? Parmi les différents compléments ou
                  soins naturels utilisés pour prendre soin de ses cheveux,
                  sachez qu’il en existe un, de plus en plus utilisé en
                  cosmétique et capable de faire des miracles : l’huile de coco.
                </p>
                <p>
                  Comment l’huile de coco est bénéfique pour les cheveux
                  Hydrater et nourrir ses cheveux Dans un tout premier temps,
                  l’huile de coco, également appelée huile de Coprah, pourra
                  être un allié de choc pour vous si vous avez le besoin
                  d’hydrater vos cheveux. La sécheresse peut abîmer
                  considérablement nos cheveux et c’est pourquoi une bonne
                  hydratation est primordiale afin de les protéger des
                  agressions extérieures. Pour ce faire, il peut être plus
                  qu’intéressant de mettre à profit l’huile de coco, grâce à sa
                  richesse en acide laurique, qui va venir nourrir vos cheveux
                  en profondeur.
                </p>
                <div
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
                </div>
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
      productConcerned: "coco,",
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