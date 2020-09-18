<template>
  <div class="oils">
    <headerpdt></headerpdt>
    
    <section class="bg-light py-5">
      <h2>Nos huiles essentielles</h2>
      <b-container>
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
          <b-col>
            <bscard :imagePath="imgPathCard[3]" :imageAlt="altCard[3]">
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

    <pagination></pagination>
    <footerh></footerh>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderMarque from '@/components/sections/Headermarque.vue'
import Gfooter from '@/components/sections/Footer.vue'
import CardS from "@/components/Contents/Cards.vue";
import Pagination from "@/components/Contents/Pagination.vue";

export default {
  name: 'Huiles',
  components: {
    "headerpdt" : HeaderMarque,
    "footerh" : Gfooter,
    "bscard" : CardS,
    "pagination" : Pagination
},
  data(){
    return {
      imgPathCard : [
      'https://picsum.photos/600/300/?image=25', 
      'src/assets/images/christin-hume-0MoF-Fe0w0A-unsplash.jpg', 
      'https://picsum.photos/600/300/?image=25',
      'https://picsum.photos/600/300/?image=25', 
      'https://picsum.photos/600/300/?image=25',
      'https://picsum.photos/600/300/?image=25', 
      'https://picsum.photos/600/300/?image=25'
      ],
      altCard : [
        "1",
        "2",
        "3"
      ]
    }
  }
}
</script>