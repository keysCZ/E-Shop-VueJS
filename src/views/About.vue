<template>
  <div class="about">
    <HeaderHome/>
    <h1>This is about page</h1>
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