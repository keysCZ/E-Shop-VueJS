import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let cart = window.localStorage.getItem('cart');
let product = window.localStorage.getItem('product');

export default new Vuex.Store({
  state: {
    cart: cart ? JSON.parse(cart) : [],
    product: product ? JSON.parse(product) : [],
  }, 
  getters : {
    totalPrice: state => {
      let total = 0;
      state.cart.filter((item) => {
          total += (item.productPrice * item.productQuantity);
      });

      return total;
    }
  },
  mutations : {
     productDetails(state, item){
      window.localStorage.clear(state.product);

      let found = state.product.find(product => product.product_id == item.product_id);
     if(found){
        console.log(item);
     } else {
        console.log(item);
        window.localStorage.clear(state.product);
        console.log(state.product);
        state.product.push(item);
        this.commit('saveData');
     }
    },
    addToCart(state, item){

      let found = state.cart.find(product => product.product_id == item.product_id);

      if(found){
          found.productQuantity++;
      }else {
        state.cart.push(item);

      }
      this.commit('saveData');
    },

    saveData(state) {
      window.localStorage.setItem('cart', JSON.stringify(state.cart));
      window.localStorage.setItem('product', JSON.stringify(state.product));
    },
    
    removeFromCart(state, item){
      let currentpdt = state.cart.indexOf(item);
      state.cart.splice(currentpdt, 1);
      this.commit('saveData');

    }
  }
})