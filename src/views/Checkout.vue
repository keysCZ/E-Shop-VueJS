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
           <div ref="paypal"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "Checkout",
  data() {
    return {
      paypalDescription: "description",
      paypalCurrency:"EUR",
      paypalValue: this.$store.getters.totalPrice
    };
  },
  mounted: function() {
    let data = this.$store.state.cart.map(item => ([item.productName]));
    data = Object.assign({}, ...data);
    console.log(data);
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=Ad2YFHq9HWJR_6hQkdUYzx6dkMSemRblFcEReskTtK8WpyJHj3FkSW2MyBeY93Kp0rb_IQCDrVZVevhH";
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
                    currency_code: "USD",
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
          },
          onError: err => {
            console.log(err);
          }
        })
        .render(this.$refs.paypal);
    }
  }
};
</script>
<style scoped>
</style>