<template>
  <div class="home">
    <HeaderHome/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderHome from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    HeaderHome
  }
}
</script>
