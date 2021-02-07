<template>
  <div
    class="modal fade shopcart"
    id="shopcart"
    tabindex="-1"
    aria-labelledby="cartLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="cartLabel">Panier</h5>
        </div>
        <div class="modal-body">
          <ul class="">
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
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Continuer le shopping
          </button>
          <button type="button" class="btn btn-primary" @click="checkout">
            Voir le panier
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "shopcart",
  methods: {
    checkout() {
      $(".shopcart").modal("hide");
      this.$router.push("/checkout");
    }
  }
};
</script>
<style></style>