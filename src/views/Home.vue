<template>
  <div class="home">
    <headerh></headerh>
    <section class="bg-light py-5">
      <h2>Nos meilleures ventes</h2>
      <b-container>
        <b-row>
          <b-col>
            <bscard :imgsrc="imgsrc[1]">
              <template v-slot:text>
                <p>One's product</p>
              </template>
              <template v-slot:button-txt>
                <span>Got it !</span>
              </template>
            </bscard>
          </b-col>
          <b-col>
            <bscard :imgsrc="imgsrc[1]">
              <template v-slot:text>
                <p>One's product</p>
              </template>
              <template v-slot:button-txt>
                <span>Got it !</span>
              </template>
            </bscard>
          </b-col>
          <b-col>
            <bscard v-bind:imgsrc="imgsrc[2]">
              <template v-slot:text>
                <p>One's product</p>
              </template>
              <template v-slot:button-txt>
                <span>Got it !</span>
              </template>
            </bscard>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <footerh></footerh>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderHome from "@/components/sections/Header.vue";
import Gfooter from "@/components/sections/Footer.vue";
// import Logocarousel from '@/components/Contents/Logocarousel.vue'
import CardS from "@/components/Contents/Cards.vue";

export default {
  name: "Home",
  components: {
    headerh: HeaderHome,
    footerh: Gfooter,
    bscard: CardS
    // 'carouselh' : Logocarousel
  },
  data(){
    return {
      imgsrc : [
      'https://picsum.photos/600/300/?image=25', 
      'https://picsum.photos/600/300/?image=25', 
      'https://picsum.photos/600/300/?image=25']
    }
  }
}
</script>
<style></style>
