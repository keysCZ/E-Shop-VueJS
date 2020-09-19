<template>
  <div class="header">
    <Navbar/>
    <covermodel>
      
    </covermodel>
  </div>
</template>

<script>
import Navbar from '../sections/Nav.vue'
import CoverModel from '../Contents/Covermodel.vue'

export default {
  name: 'Headermarque',
  components : {
    Navbar,
    'covermodel' : CoverModel
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
