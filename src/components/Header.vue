<template>
  <div class="header">
    <Navbar/>
    <coverhome>
      
    </coverhome>
  </div>
</template>

<script>
import Navbar from './Contents/Nav.vue'
import CoverHome from './Contents/Covers.vue'

export default {
  name: 'HeaderHome',
  components : {
    Navbar,
    'coverhome' : CoverHome
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
