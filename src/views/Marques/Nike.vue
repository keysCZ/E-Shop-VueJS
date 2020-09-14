<template>
  <div class="nike">
    <HeaderMarque/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderMarque from '@/components/Headermarque.vue'

export default {
  name: 'Home',
  components: {
    HeaderMarque
  }
}
</script>