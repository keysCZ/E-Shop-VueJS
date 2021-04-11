"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var cart = window.localStorage.getItem('cart');

var _default = new _vuex["default"].Store({
  state: {
    cart: cart ? JSON.parse(cart) : []
  },
  getters: {
    totalPrice: function totalPrice(state) {
      var total = 0;
      state.cart.filter(function (item) {
        total += item.productPrice * item.productQuantity;
      });
      return total;
    }
  },
  mutations: {
    addToCart: function addToCart(state, item) {
      var found = state.cart.find(function (product) {
        return product.product_id == item.product_id;
      });

      if (found) {
        found.productQuantity++;
      } else {
        state.cart.push(item);
      }

      this.commit('saveData');
    },
    saveData: function saveData(state) {
      window.localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    removeFromCart: function removeFromCart(state, item) {
      var currentpdt = state.cart.indexOf(item);
      state.cart.splice(currentpdt, 1);
      this.commit('saveData');
    }
  }
});

exports["default"] = _default;