<template>
  <div class="checkout">
    <Navbar />
    <div class="section full-height">
      <div class="absolute-center">
        <div class="section">
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
                      <p class="mt-0">{{ item.productPrice }}€</p>
                      <p class="mt-0">Quantity : {{ item.productQuantity }}</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="col-md-4">
                <h4 class="my-5">
                  Total Price : {{ this.$store.getters.totalPrice }}€
                </h4>
                <div class="pay" v-if="'profile.name' !== null">
                  <p>
                    Souhaitez-vous finaliser votre achat, {{ profile.name }} ?
                  </p>
                  <div ref="paypal"></div>
                </div>
                <div v-else>
                  <p>Veuillez vous connecter pour passer cette commande :</p>
                  <button
                    class="btn btn-outline-dark"
                    data-toggle="modal"
                    data-target="#login"
                  >
                    Je m'identifie
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Login from "../components/Contents/Login.vue";
import { fb, db } from "../firebase";
export default {
  name: "Checkout",
  components: {
    signin: Login
  },
  data() {
    return {
      profile: {
        name: null
      },
      productsName: [],
      paypalDescription: "",
      paypalCurrency: "EUR",
      paypalValue: this.$store.getters.totalPrice
    };
  },
  firestore() {
    var user = fb.auth().currentUser;

    return {
      profile: db.collection("profiles").doc(user.uid)
    };
  },
  mounted: function() {
    this.$store.state.cart.forEach(item => {
      this.productsName.push(item.productName);
    });
    this.paypalDescription = this.productsName.toString();
    console.log(this.paypalDescription);
    let data = this.$store.state.cart.map(item => [item.productName]);
    data = Object.assign({}, ...data);
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=Ad2YFHq9HWJR_6hQkdUYzx6dkMSemRblFcEReskTtK8WpyJHj3FkSW2MyBeY93Kp0rb_IQCDrVZVevhH&currency=EUR";
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
  },
  methods: {
    setLoaded: function() {
      this.loaded = true;
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.paypalDescription,
                  amount: {
                    value: this.paypalValue
                  }
                }
              ]
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            this.paidFor = true;
            console.log(order);
            let cart = (this.$store.state.cart = []);
            this.$store.commit("saveData", cart);
            this.$router.replace("/successpayment");
          },
          onError: err => {
            console.log(err);
            this.$router.replace("/failedpayment");
          }
        })
        .render(this.$refs.paypal);
    }
  }
};
</script>
<style >
.section {
  position: relative;
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
</style>