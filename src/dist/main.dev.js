"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _jquery = _interopRequireDefault(require("jquery"));

require("popper.js");

require("bootstrap");

var _bootstrapVue = require("bootstrap-vue");

require("bootstrap/dist/css/bootstrap.min.css");

require("bootstrap-vue/dist/bootstrap-vue.css");

require("./assets/styles/app.scss");

var _fontawesomeSvgCore = require("@fortawesome/fontawesome-svg-core");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _vueFontawesome = require("@fortawesome/vue-fontawesome");

var _vueCarousel3d = _interopRequireDefault(require("vue-carousel-3d"));

var _router = _interopRequireDefault(require("./router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

window.$ = window.jQuery = _jquery["default"];

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

_vue["default"].config.productionTip = false;
new _vue["default"]({
  router: _router["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');