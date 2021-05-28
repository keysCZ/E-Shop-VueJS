"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Home = _interopRequireDefault(require("../views/Home.vue"));

var _Checkout = _interopRequireDefault(require("../views/Checkout.vue"));

var _Admin = _interopRequireDefault(require("../views/Admin.vue"));

var _Overview = _interopRequireDefault(require("../views/Overview.vue"));

var _Products = _interopRequireDefault(require("../views/Products.vue"));

var _PerfumeProduct = _interopRequireDefault(require("../views/PerfumeProduct.vue"));

var _Orders = _interopRequireDefault(require("../views/Orders.vue"));

var _Profile = _interopRequireDefault(require("../views/Profile.vue"));

var _firebase = require("../firebase");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  name: 'Home',
  component: _Home["default"]
}, {
  path: '/admin',
  name: 'admin',
  component: _Admin["default"],
  meta: {
    requiresAuth: true
  },
  children: [{
    path: 'overview',
    name: 'overview',
    component: _Overview["default"]
  }, {
    path: 'products',
    name: 'products',
    component: _Products["default"]
  }, {
    path: 'orders',
    name: 'orders',
    component: _Orders["default"]
  }, {
    path: 'profile',
    name: 'profile',
    component: _Profile["default"]
  }]
}, {
  path: '/checkout',
  name: 'Checkout',
  // route level code-splitting
  // this generates a separate chunk (Checkout.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/Checkout.vue'));
    });
  }
}, {
  path: '/about',
  name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/About.vue'));
    });
  }
}, {
  path: '/oils',
  name: 'Huiles',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/Produits/Oils.vue'));
    });
  }
}, {
  path: '/perfumes',
  name: 'Parfums',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/Produits/Perfumes.vue'));
    });
  }
}, {
  path: '/product/perfume',
  name: 'parfum',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/PerfumeProduct.vue'));
    });
  }
}];
var router = new _vueRouter["default"]({
  routes: routes,
  mode: 'history'
});
router.beforeEach(function (to, from, next) {
  var requiresAuth = to.matched.some(function (x) {
    return x.meta.requiresAuth;
  });

  var currentUser = _firebase.fb.auth().currentUser;

  if (requiresAuth && !currentUser) {
    next('/');
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
});
var _default = router;
exports["default"] = _default;