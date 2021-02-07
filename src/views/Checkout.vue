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
                    ><i class="far fa-minus-square" style="color: red"></i
                  ></span>
                </h5>
                <p class="mt-0">{{ item.productPrice | currency }}</p>
                <p class="mt-0">Quantity : {{ item.productQuantity }}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-md-6">
          <h4 class="my-5">Total</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Checkout"
};
</script>
<style scoped>
</style>