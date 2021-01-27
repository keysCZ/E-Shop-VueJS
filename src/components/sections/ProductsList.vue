<template>
  <div class="products" id="products">
      <div class="container">
         
          <div class="row">
              
              <div class="col-md-4 py-3" v-for="(product, index) in products" :key="index" width="80px">
                  <div class="card product-item">
                              
                           <carousel :perPage="1">
                             <slide v-for="(image, index) in product.images" :key="index">
                               <div>
                                  <img :src="image" class="card-img-top w-80" :alt="product.name" >
                               </div>
                              </slide>
                            </carousel>
                        
                        <div class="card-body">
                          <div class="d-flex justify-content-between">
                            <h5 class="card-title">{{ product.name }}</h5>
                            <h5 class="card-prices">{{ product.price }} €</h5>
                          </div>
                          
                           <div class="card-footer">
                            <button class="btn btn-success  col-6" >
                                En savoir +
                            </button>
                            <button class="btn btn-primary col-6" >
                                Add to cart
                            </button>
                           </div>
                            
                            
                        </div>
                    </div>
              </div>

          </div>
      </div>
    
  </div>
</template>

<script>
import {db} from '../../firebase';
import { Carousel, Slide } from 'vue-carousel';
export default {
  name: "Productslist",
  props: {
    msg: String
  },
  components : {
    Carousel,
    Slide
  },
data(){
    return {
        products: [],
    }
  },  
  firestore() {
    return {
      products: db.collection("products")
    }
  },
  methods:{
    getImage(images){
      return images[0];
    }
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .products{
        margin-top: 7rem;
        background: #f2f2f2;
        padding-bottom: 3rem;
    }
</style>