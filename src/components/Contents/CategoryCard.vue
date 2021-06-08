<template>
  <div class="category-card">
    <div class=" "
    >
            <div class="card" style="background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2))" v-bind:style="{backgroundImage : 'url(' + category.cbackground +')'}" >
              <div class="card-category">{{ category.cname }}</div>
              
             <div class="card-description">
                <h2> {{ category.cdescription }} </h2>
              </div>
              <div class="card-link" >
                <router-link :to="category.clink">  </router-link> 
              </div>
            </div>
          </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "CategoryCard",
  components: {
    Carousel,
    Slide,
  },
  props: {
    category : {
      name : String,
      description : String,
      background : String,
      link : String
    }
  },
};
</script>

<style scoped>
.card {
  height: 250px;
  text-shadow: 0 1px 3px rgba(0,0,0,0.6);
  background-size: cover !important;
  color: white;
  position: relative;
  border-radius: 5px;
  margin-bottom: 20px;
}
.card-category {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 20px;
}
.card-description {
  position: absolute;
  bottom: 10px;
  left: 10px;
}
.card-description h2 {
  font-size: 22px;
}
.card-description p {
  font-size: 15px;
}
.card-link {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index:2;
  background: black;
  opacity: 0;
}
.card-link:hover{
    border-radius: 5px;

  opacity: 0.4;
}
</style>
