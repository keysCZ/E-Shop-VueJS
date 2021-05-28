<template>
  <div class="products" id="products">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-3 col-sm-4 col-md-4 d-flex"
          v-for="(product, index) in products"
          :key="index"
          width="80px"
        >
          <div class="card product-item my-2">
            <div class="card-header card-prd-header">
              <carousel :perPage="1" paginationPosition="bottom-overlay">
                <slide v-for="(image, index) in product.images" :key="index">
                  <div>
                    <img
                      :src="image"
                      class="card-img-top"
                      style="max-width: 100px"
                      :alt="product.name"
                    />
                  </div>
                </slide>
              </carousel>
            </div>

            <div class="card-body card-prd-body">
              <div class="d-flex justify-content-between">
                <h5 class="card-title">{{ product.name }}</h5>
                <h5 class="card-prices">{{ product.price | currency }}</h5>
              </div>
            </div>
            <div class="card-footer card-prd-footer mb-0 bg-light p-0">
              <button class="btn info col-6">
               <router-link to="/product/perfume"> 
                Details
                <!-- <ProductInfo 
                  :product-id="product.id"
                ></ProductInfo>                 -->
                
              </router-link>
              </button>
              <add-to-cart
                :product-id="product.id"
                :image="getImage(product.images)"
                :name="product.name"
                :price="product.price"
              >
              </add-to-cart>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../../firebase";
import { Carousel, Slide } from "vue-carousel";
import PerfumeProduct from "@/views/PerfumeProduct"
export default {
  name: "Productslist",
  props: {
    msg: String
  },
  components: {
    Carousel,
    Slide,
    PerfumeProduct
  },
  data() {
    return {
      products: [],
      productName: this.name,
      productPrice: this.price,
      productId: this.id,
      productImage : this.image,
      productDescription : this.description
    };
  },
  firestore() {
    return {
      products: db.collection("products")
    };
  },
  methods: {
    getImage(images) {
      return images[0];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.products {
  margin-top: 2rem;
  padding-bottom: 3rem;
}
.info {
  background-color: lightgrey;
  border: 1px solid white;
}
.product-item{
  border: 1.5px solid black;
}
</style>