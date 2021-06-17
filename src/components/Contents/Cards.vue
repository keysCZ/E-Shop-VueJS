<template>
  <div class="Cards">
    <div class="wrapper">
      <div class="container">
        <div class="top">
          <div class="imagec">
            <carousel
              :perPage="1"
              :navigationEnabled="true"
              :paginationEnabled="false"
              autoplayHoverPause
            >
              <slide v-for="(image, index) in item.images" :key="index">
                <div>
                  <img :src="image" class="card-img-top" :alt="item.name" />
                </div>
              </slide>
            </carousel>
          </div>
        </div>
        <div class="bottom">
          <div class="left">
            <div class="details">
              <div class="mt-4">
                <h4 class="nameUp">{{ item.name }}</h4>
                <p>{{ item.price }} €</p>
              </div>
            </div>
            <div class="buy" @click.self="buy()">
              <div class="mt-5">
                <add-to-cart
                  :product-id="item.id"
                  :name="item.name"
                  :price="item.price"
                  :image="getImage(item.images)"
                  ><span class="glyphicon glyphicon-shopping-cart"></span>
                  <i class="fa fa-cart-plus" aria-hidden="true"></i>
                </add-to-cart>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="done">
              <span class="glyphicon glyphicon-remove-sign mt-5"></span>
            </div>
            <div class="details">
              <h4>{{ item.name }}</h4>
              <p>Added to your cart</p>
            </div>
            <div class="remove" @click="rmv()">
              <span class="glyphicon glyphicon-ok-sign mt-5"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="inside">
        <div class="icon">
          <span class="glyphicon glyphicon-info-sign"></span>
        </div>
        <div class="contents">
          <p>
            {{ item.impact }}
          </p>
          <button
            v-on:click="getPrd()"
            class="
              info
              col-6
              btn btn-outline-light btn-lg btn-secondary
              mt-auto
            "
          >
            <router-link :to="{ name: 'details', params: { id: item.id } }">
              Details
            </router-link>
          </button>
        </div>
      </div>
    </div>

    <!-- 
<div class="wrapper">
      <div class="container">
        <div
          class="top"
          v-bind:style="{ backgroundImage: 'url(' + item.images[0] + ')' }"
        ></div>
        <div class="bottom">
          <div class="left">
            <div class="details">
              <div class="mt-4">
                <h4>{{ item.name }}</h4>
                <p>{{ item.price }}</p>
              </div>
            </div>
            <div class="buy" @click="buy()">
              <div class="mt-5">
                <add-to-cart
                  :product-id="item.id"
                  :name="item.name"
                  :price="item.price"
                  ><span class="glyphicon glyphicon-shopping-cart"></span>
                </add-to-cart>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="done">
              <span class="glyphicon glyphicon-remove-sign"></span>
            </div>
            <div class="details">
              <h4>{{ item.name }}</h4>
              <p>Added to your cart</p>
            </div>
            <div class="remove" @click="rmv()">
              <span class="glyphicon glyphicon-ok-sign"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="inside">
        <div class="icon">
          <span class="glyphicon glyphicon-info-sign"></span>
        </div>
        <div class="contents">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            sint, cupiditate quibusdam facilis recusandae, amet saepe impedit
            porro facere, neque sunt? Laudantium distinctio necessitatibus ex
            debitis illum, in cupiditate excepturi.
          </p>
          <button @click="getPrd()" class="btn info col-6">
            <router-link :to="{ name: 'details', params: { id: item.id } }">
              Details
            </router-link>
          </button>
        </div>
      </div>
    </div> -->

    <!-- <div class="card product-item my-2" id="card-product-item">
            <div class="card-header card-prd-header">
              <carousel :perPage="1" paginationPosition="bottom-overlay">
                <slide v-for="(image, index) in item.images" :key="index">
                  <div>
                    <img
                      :src="image"
                      class="card-img-top"
                      style="max-width: 100px"
                      :alt="item.name"
                    />
                  </div>
                </slide>
              </carousel>
            </div>

            <div class="card-body card-prd-body">
              <div class="d-flex justify-content-between">
                <h6 class="card-title">{{ item.name }}</h6>
                <h6 class="card-prices">{{ item.price }} €</h6>
              </div>
            </div>
            <div class="card-footer card-prd-footer mb-0 bg-light p-0">
              <button @click="getPrd()" class="btn info col-6">
                <router-link :to="{name: 'details', params:{id:item.id}}">
                  Details
                </router-link>
              </button>

              <add-to-cart
                :product-id="item.id"
                :name="item.name"
                :price="item.price"
              >
              </add-to-cart>
            </div>
          </div> -->
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import { BIcon } from "bootstrap-vue";
import $ from "jquery";
export default {
  name: "Cards",
  components: {
    Carousel,
    Slide,
    "b-icon": BIcon
  },
  props: {
    item: {
      id: String,
      name: String,
      price: String,
      id: String,
      images: Array,
      tags: Array,
      description: String,
      impact: String
    }
  },
  data() {
    return {
      true: true,
      false: false
    };
  },
  methods: {
    getImage(images) {
      return this.item.images[0];
    },

    getPrd() {
      // for (const item in this.products) {
      //   console.log(`${property}: ${object[property]}`);
      //   items.push(this.products[item]);
      // }
      // console.log(this.item);
      this.$store.commit("getProducts", this.item);
      console.log(this.$store.state.article);
    },
    buy() {
      $(".bottom").addClass("clicked");
      $(".right").css("top", "0%");
      $(".right").css("transform", "translateX(100%)");
      $(".right").css("position", "absolute");
    },

    rmv() {
      $(".bottom").removeClass("clicked");
      $(".right").css("display", "none");
    }
  },
  mounted() {
    // console.log(this.item.name);
    $("carousel");
    // $(".nameUp").toUppercase();
  }
};
</script>
<style>
.glyphicon {
  font-size: 2em;
}
</style>
<style scoped lang="scss">
html,
body {
  background: #e3e3d8;
  font-family: sans-serif;
  padding: 25px;
}
.card-img-top {
  width: 80%;
}

.wrapper {
  width: 250px;
  height: 450px;
  background: white;
  margin: auto;
  position: relative;
  overflow: hidden;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0;
  transform: scale(0.8);
  transition: box-shadow 0.5s, transform 0.5s;
  &:hover {
    transform: scale(1);
    box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);
  }

  .container {
    width: 100%;
    height: 100%;
    padding: 0%;
    .top {
      height: 80%;
      width: 100%;
      // background: no-repeat center center;
      // -webkit-background-size: 70%;
      // -moz-background-size: 100%;
      // -o-background-size: 100%;
      // background-size: 100%;
    }
    .bottom {
      width: 200%;
      height: 20%;
      transition: transform 0.5s;
      &.clicked {
        transform: translateX(-50%);
      }
      h1 {
        margin: 0;
        padding: 0;
      }
      p {
        margin: 0;
        padding: 0;
        font-size: 1.5em;
      }
      .left {
        height: 100%;
        width: 51%;
        background: #f4f4f4;
        position: relative;
        float: left;
        .details {
          padding: 5px 20px;
          float: left;
          width: calc(70% - 10px);
        }
        .buy {
          float: right;
          width: 80px;
          height: 100%;
          background: #f1f1f1;
          transition: background 0.5s;
          border-left: solid thin rgba(0, 0, 0, 0.1);
          i {
            font-size: 30px;
            padding: 30px;
            color: #254053;
            transition: transform 0.5s;
          }
          &:hover {
            background: #a6cdde;
          }
          &:hover i {
            transform: translateY(5px);
            color: #00394b;
          }
        }
      }
      .right {
        width: 50%;
        background: #a6deb2;
        color: white;
        float: right;
        height: 200%;
        overflow: hidden;
        .details {
          padding: 20px;
          float: right;
          width: calc(70% - 20px);
        }
        .done {
          width: calc(30% - 2px);
          float: left;
          transition: transform 0.5s;
          border-right: solid thin rgba(255, 255, 255, 0.3);
          height: 50%;
          i {
            font-size: 30px;
            padding: 30px;
            color: white;
          }
        }
        .remove {
          width: calc(30% - 1px);
          clear: both;
          border-right: solid thin rgba(255, 255, 255, 0.3);
          height: 50%;
          background: #bc3b59;
          transition: transform 0.5s, background 0.5s;
          &:hover {
            background: #9b2847;
          }
          &:hover i {
            transform: translateY(5px);
          }
          i {
            transition: transform 0.5s;
            font-size: 30px;
            padding: 30px;
            color: white;
          }
        }
        &:hover {
          .remove,
          .done {
            transform: translateY(-100%);
          }
        }
      }
    }
  }

  .inside {
    z-index: 9;
    background: #92879b;
    width: 140px;
    height: 140px;
    position: absolute;
    top: -70px;
    right: -70px;
    border-radius: 0px 0px 200px 200px;
    transition: all 0.5s, border-radius 2s, top 1s;
    overflow: hidden;
    .icon {
      position: absolute;
      right: 85px;
      top: 85px;
      color: white;
      opacity: 1;
    }
    &:hover {
      width: 100%;
      right: 0;
      top: 0;
      border-radius: 0;
      height: 80%;
      .icon {
        opacity: 0;
        right: 15px;
        top: 15px;
      }
      .contents {
        opacity: 1;
        transform: scale(1);
        transform: translateY(0);
      }
    }
    .contents {
      padding: 5%;
      opacity: 0;
      transform: scale(0.5);
      transform: translateY(-200%);
      transition: opacity 0.2s, transform 0.8s;
      table {
        text-align: left;
        width: 100%;
      }
      h1,
      p,
      table {
        color: white;
      }
      p {
        font-size: 13px;
      }
    }
  }
}
</style>
