<template>
  <div>
    <carousel-3d>
      <button @click="goToSlide(3)">Go to Slide Index 3</button>
    
   
        <slide v-for="(slide, i) in slides" :key="i">
          <img :src="slide.img" :alt='slide.name' />
        </slide>
        
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
          img: `../../assets/img-jordan/14/demo.PNG`,
          name: "Slide name 1"
        },
        {
          img: "../../assets/img-jordan/14/demo.PNG",
          name: "Slide name 2"
        },
        {
          img: "../../assets/img-jordan/14/demo.PNG",
          name: "Slide name 3"
        },
        {
          img: "../../assets/img-jordan/14/demo.PNG",
          name: "Slide name 4"
        },
        {
          _img: "../../assets/img-jordan/14/demo.PNG",
          get img() {
            return this._img;
          },
          set img(value) {
            this._img=value;
          }
        }
      ]
    };
  },
  components: {
    "carousel-3d": Carousel3d,
    "slide" : Slide
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
  display: block;
  opacity: 1;
  visibility: visible;
}

</style>
