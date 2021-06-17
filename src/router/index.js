import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MainAdmin from '../views/Admin/MainAdmin.vue'
import Admin from '../views/Admin.vue'

import {fb} from '../firebase'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/adminczperfumes',
      name: 'Admin',
      component: Admin
    },
  {
    path: '/adminczperfumes/dashboard',
    name: 'MainAdmin',
    component: MainAdmin,
    meta: { requiresAuth: true },
    children : [
     { 
      path: 'overview',
      name: 'overview',
      component: () => import(/* webpackChunkName: "overview" */'@/views/Admin/Overview'),
      },
     { 
      path: 'products',
      name: 'products',
      component: () => import(/* webpackChunkName: "crud_products" */'@/views/Admin/Products'),
      },
     { 
      path: 'orders',
      name: 'orders',
      component: () => import(/* webpackChunkName: "orderslist" */'@/views/Admin/Orders'),
      },
     { 
      path: 'profile',
      name: 'profile',
      component: () => import(/* webpackChunkName: "admin_profile" */'@/views/Admin/Profile'),
      }
    ]
  },
  {
    path: '/checkout',
    name: 'Checkout',
    // route level code-splitting
    // this generates a separate chunk (Checkout.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "checkout" */ '../views/Checkout.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/oils',
    name: 'oils',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "oils" */ '../views/Produits/Oils.vue')
  },
  {
    path: '/women-perfumes',
    name: 'womenperfumes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "perfumes" */ '../views/Produits/Perfumes/WomenPerfumes.vue')
  },
  {
    path: '/men-perfumes',
    name: 'menperfumes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "perfumes" */ '../views/Produits/Perfumes/MenPerfumes.vue')
  },
  {
    path: '/product/details/:id',
    name: 'details',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "details" */ '../components/sections/ProductDetails.vue')
  },
  {
    path: '/user',
    name: 'user',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "user" */ '@/views/User.vue'),
    meta: { requiresAuth: true },
    children : [
     { 
      path: 'orders',
      name: 'UserOrders',
      component: () => import(/* webpackChunkName: "user_order" */'@/views/User/Orders'),
      },
     { 
      path: 'profile',
      name: 'UserProfile',
      component: () => import(/* webpackChunkName: "user_profile" */'@/views/User/Profile'),
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode : 'history'
})

router.beforeEach((to, from, next) => {

  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = fb.auth().currentUser

  if (requiresAuth && !currentUser) {
      next('/')
  } else if (requiresAuth && currentUser) {
      next()
  } else {
      next()
  }
})

export default router
