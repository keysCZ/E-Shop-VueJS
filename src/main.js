import Vue from 'vue'
import App from './App.vue'
import 'jquery'
import $ from 'jquery'
import "popper.js"
import 'bootstrap'
import 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {
  BootstrapVue,
  IconsPlugin,
} from 'bootstrap-vue'
import VueFirestore from "vue-firestore"
import {fb} from './firebase'

Vue.use(VueFirestore, {
  key: 'id',         // the name of the property. Default is '.key'.
  enumerable: true  //  whether it is enumerable or not. Default is true.
})

import Swal from 'sweetalert2'
window.Swal = Swal;
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
window.Toast = Toast;

import './assets/styles/app.scss'

import Carousel3d from 'vue-carousel-3d'
import VueCarousel from 'vue-carousel'
import Vue2Filters from 'vue2-filters'


Vue.use(Vue2Filters)
Vue.use(VueCarousel)
Vue.use(VueFirestore)

Vue.use(Carousel3d)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin

// This imports all the layout components such as <b-container>, <b-row>, <b-col>:
import {
  LayoutPlugin
} from 'bootstrap-vue'
Vue.use(LayoutPlugin)

// This imports <b-modal> as well as the v-b-modal directive as a plugin:
import {
  ModalPlugin
} from 'bootstrap-vue'
Vue.use(ModalPlugin)

// This imports <b-card> along with all the <b-card-*> sub-components as a plugin:
import {
  CardPlugin
} from 'bootstrap-vue'
Vue.use(CardPlugin)

// This imports directive v-b-scrollspy as a plugin:
import {
  VBScrollspyPlugin
} from 'bootstrap-vue'
Vue.use(VBScrollspyPlugin)

// This imports the dropdown and table plugins
import {
  DropdownPlugin,
  TablePlugin
} from 'bootstrap-vue'

import router from './router'
import store from './store.js'

Vue.use(DropdownPlugin)
Vue.use(TablePlugin)


Vue.component('Navbar', require("./components/sections/Nav.vue").default)
Vue.component('card-product', require("./components/sections/ProductCard.vue").default)
Vue.component('add-to-cart', require("./components/Contents/AddToCart.vue").default)
Vue.component('ProductInfo', require("./components/Contents/ProductInfo.vue").default)
Vue.component('shopcart', require("./components/sections/ShopCart.vue").default)

Vue.config.productionTip = false

let app = '';

fb.auth().onAuthStateChanged(function(user){
if(!app){
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}
});
