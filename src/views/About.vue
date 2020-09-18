<template>
  <div class="about">
    <headerh></headerh>
    <h1>This is about page</h1>


    
    <footerh></footerh>
  </div>
</template>

<script>
// @ is an alias to /src

import HeaderHome from '@/components/sections/Header.vue'
import Gfooter from '@/components/sections/Footer.vue'

export default {
  name: 'About',
  components: {
    'headerh' : HeaderHome,
    'footerh' : Gfooter,
  }
}
</script>