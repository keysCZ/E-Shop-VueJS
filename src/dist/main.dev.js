"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _jquery = _interopRequireDefault(require("jquery"));

require("popper.js");

require("bootstrap");

var _bootstrapVue = require("bootstrap-vue");

require("bootstrap/dist/css/bootstrap.min.css");

require("bootstrap-vue/dist/bootstrap-vue.css");

var _vueFirestore = _interopRequireDefault(require("vue-firestore"));

var _firebase = require("./firebase");

var _sweetalert = _interopRequireDefault(require("sweetalert2"));

require("./assets/styles/app.scss");

var _fontawesomeSvgCore = require("@fortawesome/fontawesome-svg-core");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _vueFontawesome = require("@fortawesome/vue-fontawesome");

var _vueCarousel3d = _interopRequireDefault(require("vue-carousel-3d"));

var _vueCarousel = _interopRequireDefault(require("vue-carousel"));

var _vue2Filters = _interopRequireDefault(require("vue2-filters"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueFirestore["default"], {
  key: 'id',
  // the name of the property. Default is '.key'.
  enumerable: true //  whether it is enumerable or not. Default is true.

});

window.Swal = _sweetalert["default"];

var Toast = _sweetalert["default"].mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: function didOpen(toast) {
    toast.addEventListener('mouseenter', _sweetalert["default"].stopTimer);
    toast.addEventListener('mouseleave', _sweetalert["default"].resumeTimer);
  }
});

window.Toast = Toast;

_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faUserSecret);

_vue["default"].component('font-awesome-icon', _vueFontawesome.FontAwesomeIcon);

_vue["default"].use(_bootstrapVue.PaginationPlugin);

_vue["default"].use(_vue2Filters["default"]);

_vue["default"].use(_vueCarousel["default"]);

_vue["default"].use(_vueFirestore["default"]);

_vue["default"].use(_vueCarousel3d["default"]); // Install BootstrapVue


_vue["default"].use(_bootstrapVue.BootstrapVue); // Optionally install the BootstrapVue icon components plugin


_vue["default"].use(_bootstrapVue.IconsPlugin); // This imports all the layout components such as <b-container>, <b-row>, <b-col>:


_vue["default"].use(_bootstrapVue.LayoutPlugin); // This imports <b-modal> as well as the v-b-modal directive as a plugin:


_vue["default"].use(_bootstrapVue.ModalPlugin); // This imports <b-card> along with all the <b-card-*> sub-components as a plugin:


_vue["default"].use(_bootstrapVue.CardPlugin); // This imports directive v-b-scrollspy as a plugin:


_vue["default"].use(_bootstrapVue.VBScrollspyPlugin); // This imports the dropdown and table plugins


_vue["default"].use(_bootstrapVue.DropdownPlugin);

_vue["default"].use(_bootstrapVue.TablePlugin);

_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faUserSecret);

_vue["default"].component('font-awesome-icon', _vueFontawesome.FontAwesomeIcon);

_vue["default"].component('Navbar', require("./components/sections/Nav.vue")["default"]);

_vue["default"].component('card-product', require("./components/sections/ProductCard.vue")["default"]);

_vue["default"].component('add-to-cart', require("./components/Contents/AddToCart.vue")["default"]);

_vue["default"].component('ProductInfo', require("./components/Contents/ProductInfo.vue")["default"]);

_vue["default"].component('shopcart', require("./components/sections/ShopCart.vue")["default"]);

_vue["default"].config.productionTip = false;
var app = '';

_firebase.fb.auth().onAuthStateChanged(function (user) {
  if (!app) {
    new _vue["default"]({
      router: _router["default"],
      store: _store["default"],
      render: function render(h) {
        return h(_App["default"]);
      }
    }).$mount('#app');
  }
});