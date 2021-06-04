<template>
  <div class="home">
    <headerh></headerh>
    <section class="">
      <!-- <b-container>
        <b-row>
          <b-col>
            <bscard :imagePath="imgPathCard[0]" :imageAlt="altCard[0]">
              <template v-slot:text>
                <p>One's product</p>
              </template>
              <template v-slot:button-txt>
                <span>Got it !</span>
              </template>
            </bscard>
          </b-col>
          <b-col>
            <bscard :imagePath="imgPathCard[1]" :imageAlt="altCard[1]">
              <template v-slot:text>
                <p>One's product</p>
              </template>
              <template v-slot:button-txt>
                <span>Got it !</span>
              </template>
            </bscard>
          </b-col>
          <b-col>
            <bscard :imagePath="imgPathCard[2]" :imageAlt="altCard[2]">
              <template v-slot:text>
                <p>One's product</p>
              </template>
              <template v-slot:button-txt>
                <span>Got it !</span>
              </template>
            </bscard>
          </b-col>
        </b-row>
      </b-container> -->
      <products></products>
    </section>
   
    <!-- Modal -->
   <shopcart></shopcart>
    <footerh></footerh>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderHome from "@/components/sections/Header.vue";
import ProductsList from "@/components/sections/ProductsList.vue";
import Gfooter from "@/components/sections/Footer.vue";
// import Logocarousel from '@/components/Contents/Logocarousel.vue'

export default {
  name: "Home",
  components: {
    headerh: HeaderHome,
    footerh: Gfooter,
    products: ProductsList,
    
    // 'carouselh' : Logocarousel
  },
  data() {
    return {
      imgPathCard: [
        "/img/thaismara-figueredo-MTMn2VDnLGM-unsplash.jpg",
        "https://picsum.photos/600/300/?image=25",
        "/img/christin-hume-0MoF-Fe0w0A-unsplash.jpg"
      ],
      altCard: ["1", "2", "3"],
      
    };
  }
};
</script>
<style></style>
