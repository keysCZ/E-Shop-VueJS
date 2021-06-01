"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _firebase = require("firebase");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var cart = window.localStorage.getItem('cart');
var product = window.localStorage.getItem('product');

var _default = new _vuex["default"].Store({
  state: {
    cart: cart ? JSON.parse(cart) : [],
    product: product ? JSON.parse(product) : []
  },
  getters: {
    totalPrice: function totalPrice(state) {
      var total = 0;
      state.cart.filter(function (item) {
        total += item.productPrice * item.productQuantity;
      });
      return total;
    },
    product: function product(state) {
      return function (id) {
        return state.product.find(function (product) {
          return product.id === id;
        });
      };
    }
  },
  mutations: {
    firestore: function firestore(state, item) {
      item = _firebase.db.collection("products").get().then(function (querySnapshot) {
        item = querySnapshot.docs.map(function (doc) {
          return doc.data();
        });
      });
      state.product.push(item);
      this.commit('saveData');
    },
    productDetails: function productDetails(state, item) {
      window.localStorage.clear(state.product);
      var found = state.product.find(function (product) {
        return product.product_id == item.product_id;
      });

      if (found) {
        console.log(item);
      } else {
        console.log(item);
        window.localStorage.clear(state.product);
        console.log(state.product);
        state.product.unshift(item);
        this.commit('saveData');
      }
    },
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
      window.localStorage.setItem('product', JSON.stringify(state.product));
    },
    removeFromCart: function removeFromCart(state, item) {
      var currentpdt = state.cart.indexOf(item);
      state.cart.splice(currentpdt, 1);
      this.commit('saveData');
    }
  }
});

exports["default"] = _default;