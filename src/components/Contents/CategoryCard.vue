<template>
  <div class="category-card">
      <!-- <div class="card card-category">
        <figure class="card__thumb">
          <div class="img">
            <img
              :src="category.cbackground"
              alt="Picture by Kyle Cottrell"
              class="card__image"
            />
          </div>
          <figcaption class="card__caption">
            <h2 class="card__title">{{ category.cname }}</h2>
            <p class="card__snippet">{{ category.cdescription }}</p>
            <div href="" class="card__button">
              <router-link :to="category.clink">Voir +</router-link>
            </div>
          </figcaption>
        </figure>
      </div> -->
            <div class="card"  v-bind:style="{backgroundImage : `url(${category.cbackground})`}" >
              <div class="card-category">{{ category.cname }}</div>
              
             <div class="card-description">
                <h2>{{category.cdescription }} </h2>
              </div>
              <div class="card-link" >
                <router-link :to="category.clink">  </router-link> 
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
    Slide
  },
  props: {
    category: {
      name: String,
      description: String,
      background: String,
      link: String
    }
  },
  mounted() {
    $(".card__snippet").html(this.category.cdescription);
  }
};
</script>

<style scoped lang="scss">
$desktop: 1024px;

@mixin breakpoint($point) {
  @if $point == desktop {
    @media (min-width: $desktop) {
      @content;
    }
  }
}
html {
  box-sizing: border-box;
  font-size: 62.5%;

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #e6e6e6;
}

// .container {
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   width: 100%;
//   margin: 20px 0 80px;
// }
.img {
  width: 400px;
  height: 500px;
}
img {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  transform: translateX(-25%);
}

.card {
  width: 500px;
  height: 500px;
  margin:30px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
  background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)); background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  text-shadow: 0 1px 3px rgba(0,0,0,0.6);
  background-size: cover !important;
  color: white;
  position: relative;
  border-radius: 5px;
  margin-bottom: 20px;

  &:hover {
    .card__caption {
      top: 50%;
      transform: translateY(-50%);
    }

    .card__image {
      transform: translateY(-10px);
    }

    .card__thumb {
      &::after {
        top: 0;
      }
    }

    .card__snippet {
      margin: 20px 0;
    }
  }

  &__thumb {
    position: relative;
    max-height: 400px;
    overflow: hidden;

    @include breakpoint(desktop) {
      max-height: 500px;
    }

    &::after {
      position: absolute;
      top: 0;
      display: block;
      content: "";
      width: 100%;
      height: 100%;
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5) 40%,
        rgba(255, 255, 255, 0) 100%
      );
      transition: 0.3s;

      @include breakpoint(desktop) {
        top: calc(100% - 140px);
      }
    }
  }

  &__image {
    transition: 0.5s ease-in-out;
  }

  &__caption {
    position: absolute;
    top: 50%;
    z-index: 1;
    padding: 0 20px;
    color: white;
    transform: translateY(-50%);
    text-align: center;
    transition: 0.3s;

    @include breakpoint(desktop) {
      top: calc(100% - 110px);
      transform: unset;
    }
  }

  &__title {
    display: -webkit-box;
    max-height: 85px;
    overflow: hidden;
    font-family: "Playfair Display", serif;
    font-size: 23px;
    line-height: 28px;
    text-shadow: 0px 1px 5px black;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  &__snippet {
    display: -webkit-box;
    max-height: 150px;
    margin: 20px 0;
    overflow: hidden;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    line-height: 20px;
    text-overflow: ellipsis;
    transition: 0.5s ease-in-out;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;

    @include breakpoint(desktop) {
      margin: 60px 0;
    }
  }

  &__button {
    display: inline-block;
    padding: 10px 20px;
    color: white;
    border: 1px solid white;
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    text-transform: uppercase;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
      color: black;
      background-color: white;
    }
  }
}

.disclaimer {
  position: fixed;
  bottom: 0;
  left: 50%;
  z-index: 2;
  box-sizing: border-box;
  width: 100%;
  padding: 20px 10px;
  background-color: white;
  transform: translateX(-50%);
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  text-align: center;

  &__link {
    color: #755d87;
    text-decoration: none;
  }
}
.category-card{
  width: 500px;
    height: 500px;
}

.card-category {
  position: relative;
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
  font-size: 12px;
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
