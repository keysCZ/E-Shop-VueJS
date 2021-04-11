<template>
  <div class="checkout">
    <Navbar />
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h4 class="my-5">Mon panier</h4>
          <ul>
            <li
              v-for="(item, i) in this.$store.state.cart"
              :key="i"
              class="media my-3"
            >
              <img
                :src="item.product_image"
                width="80px"
                class="align-self-center mr-3"
                alt=""
              />
              <div class="media-body">
                <h5 class="mt-0">
                  {{ item.productName }}

                  <span
                    class="float-right"
                    @click="$store.commit('removeFromCart', item)"
                    >X</span
                  >
                </h5>
                <p class="mt-0">{{ item.productPrice | currency }}</p>
                <p class="mt-0">Quantity : {{ item.productQuantity }}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <h4 class="my-5">
            Total Price : {{ this.$store.getters.totalPrice | currency }}
          </h4>

          <button class="btn btn-primary m-3" @click="pay">Checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
var stripe = Stripe(
  "pk_test_51INdvGD9cbEc0vgt2LTeZ81ZFuqapXTBYP6tQuFSrm61zvmjzUxc61NEf3vsNOXJpmJa8qeFQ1OOZeetNknJVLq600xUZ4koaP"
);
export default {
  name: "Checkout",
  data() {
    return {
      sessionId: ""
    };
  },
  methods: {
    pay() {
      
      // let data = this.$store.state.cart.map(item => ({[item.product_id] : item.productQuantity}));

      // data = Object.assign({}, ...data);

      // console.log(data);
      axios
        .post(
          "http://localhost:5000/shop-vue-c6c23/us-central1/CheckoutSession",
          // {
          //   params: {
          //     products : data
          //   }
          // }
        )
        .then(response => {
          this.sessionId = response.data;
          console.log(this.sessionId.id);
          stripe
            .redirectToCheckout({
              sessionId: this.sessionId.id
            })
            .then(function(result) {});
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style scoped>
</style>