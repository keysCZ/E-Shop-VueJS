import Vue from 'vue'
import App from './App.vue'
import 'jquery'
window.$ = window.jquery = jquery;
import "popper.js"
import 'bootstrap'
import 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'
import VueFirestore from "vue-firestore"
import {fb} from './firebase'


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
});
import './assets/styles/app.scss'
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faUserSecret
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
import Carousel3d from 'vue-carousel-3d'

Vue.use(VueFirestore)

Vue.use(Carousel3d)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

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
Vue.use(DropdownPlugin)
Vue.use(TablePlugin)
library.add(faUserSecret)


Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

let app = '';

fb.auth().onAuthStateChanged(function(user){
if(!app){
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
}
});
