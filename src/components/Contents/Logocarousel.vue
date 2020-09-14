<template>
  <div>
    <carousel-3d>
      <button @click="goToSlide(3)">Go to Slide Index 3</button>
    
      <div v-for="(slide, i) in slides" :key="i">
        <slide v-for="(val, props) in slide" :key="props">
          <img :src="val" :alt="props" />
        </slide>
        
      </div>
    </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d"
export default {
  name: "Logocarousel",
  data: function() {
    return {
      slides: [
        {
          img: `../src/assets/img-jordan/14/demo.PNG`,
          name: "Slide name 1",
        },
        {
          img: "../src/assets/img-jordan/14/demo.PNG",
          name: "Slide name 2",
        },
        {
          img: "../src/assets/img-jordan/14/demo.PNG",
          name: "Slide name 3",
        },
        {
          img: "../src/assets/img-jordan/14/demo.PNG",
          name: "Slide name 4",
        },
        {
          _img: "../src/assets/img-jordan/14/demo.PNG",
          get img() {
            return this._img;
          },
          set img(value) {
            this._img=value;
          },
        }
      ]
    };
  },
  components: {
    "carousel-3d": Carousel3d,
    "slide" : Slide,
  },
  methods: {
    goToSlide(i) {
      this.$refs.mycarousel.goSlide(i);
    }
  }
}
</script>

<style>
button {
  padding: 15px 10px;
}

.carousel-3d-slide {
  padding: 20px;
}

</style>
