<template>
  <div class="oils">
    <Navbar />
    <div class="section full-height">
      <div class="absolute-center">
        <div class="section">
          <h1>Prenez soin de vos cheveux</h1>
        </div>
      </div>
    </div>
    <footerh></footerh>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderMarque from "@/components/sections/Headermarque.vue";
import Gfooter from "@/components/sections/Footer.vue";

export default {
  name: "Huiles",
  components: {
    headerpdt: HeaderMarque,
    footerh: Gfooter
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.section {
  position: relative;
  transform: translateY(20%);
  width: 100%;
  display: block;
}
.full-height {
  height: 100vh;
}
.over-hide {
  overflow: hidden;
}
.absolute-center {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  margin-top: 40px;
  transform: translateY(-50%);
  z-index: 20;
}
@media (max-width: 767px) {
  .section {
    transform: translateY(36%);
  }
}
</style>