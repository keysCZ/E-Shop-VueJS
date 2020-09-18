<template>
  <div class="oils">
    <headerpdt></headerpdt>
    <footerh></footerh>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderMarque from '@/components/sections/Headermarque.vue'
import Gfooter from '@/components/sections/Footer.vue'

export default {
  name: 'Huiles',
  components: {
    "headerpdt" : HeaderMarque,
    "footerh" : Gfooter
  }
}
</script>