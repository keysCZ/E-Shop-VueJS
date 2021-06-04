<template>
  <div class="womenperfumes">
    <headerpdt></headerpdt>
<h2>Parfums pour Femmes</h2> 
     <card-product :gender="women"></card-product>
    <pagination></pagination>
    <footerh></footerh>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderMarque from "@/components/sections/Headermarque.vue";
import Gfooter from "@/components/sections/Footer.vue";
import CardS from "@/components/Contents/Cards.vue";
import Pagination from "@/components/Contents/Pagination.vue";

export default {
  name: "Parfums",
  components: {
    headerpdt: HeaderMarque,
    footerh: Gfooter,
    bscard: CardS,
    pagination: Pagination
  },
  data() {
    return {
      imgPathCard: [
        "https://picsum.photos/600/300/?image=25",
        "src/assets/images/christin-hume-0MoF-Fe0w0A-unsplash.jpg",
        "https://picsum.photos/600/300/?image=25",
        "https://picsum.photos/600/300/?image=25",
        "https://picsum.photos/600/300/?image=25",
        "https://picsum.photos/600/300/?image=25",
        "https://picsum.photos/600/300/?image=25",
      ],
      altCard: ["1", "2", "3"],
    };
  },
};
</script>
