<template>
  <div class="card-product" id="product">
     <div class="container">
      <div class="row">
           <div
          class="col-lg-3 col-sm-4 col-md-4 d-flex"
          v-for="(product, index) in products"
          :key="index" id="card-product-item" :current-page="currentPage" :per-page="perPage"
        >
          <div class="card product-item my-2" >
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
                <h6 class="card-title">{{ product.name }}</h6>
                <h6 class="card-prices">{{ product.price }} €</h6>
              </div>
            </div>
            <div class="card-footer card-prd-footer mb-0 bg-light p-0">
              <button class="btn info col-6">
                <router-link to="/product/perfume">
                  <ProductInfo
                    :product-id="product.id"
                    :image="getImage(product.images)"
                    :name="product.name"
                    :price="product.price"
                    :description="product.description"
                  ></ProductInfo>
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
  <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="card-product-item"
    ></b-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../../firebase";
import { Carousel, Slide } from "vue-carousel";
import PerfumeProduct from "@/views/PerfumeProduct";
import ProductInfo from "@/components/Contents/ProductInfo.vue";
export default {
  name: "card-product",
  components: {
    Carousel,
    Slide,
    PerfumeProduct,
    ProductInfo
  },
  data() {
    return {
      products: [],
      productName: this.name,
      productPrice: this.price,
      productId: this.id,
      productImage: this.image,
      productDescription: this.description,
      productTags : this.tags,
      currentPage: 1,
      perPage: 10,
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
  },
  computed: {
      rows() {
        return this.products.length
      }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// .card-header {
//   width: 200px;
//   height: 300px;
// }
// .card-img-top {
//   width: 100%;
// }
// .products {
//   margin-top: 2rem;
//   padding-bottom: 3rem;
// }
// .info {
//   background-color: lightgrey;
//   border: 1px solid white;
// }
// .product-item {
//   border: 1.5px solid black;
// }
</style>
