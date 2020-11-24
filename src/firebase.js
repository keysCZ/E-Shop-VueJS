import firebase from '@firebase/app'
import 'firebase/firebase-auth'
import 'firebase/storage'
require('firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyCo9m951pd4lCYNpVhQsg_t8HUD2OpU3BE",
  authDomain: "shop-vue-c6c23.firebaseapp.com",
  databaseURL: "https://shop-vue-c6c23.firebaseio.com",
  projectId: "shop-vue-c6c23",
  storageBucket: "shop-vue-c6c23.appspot.com",
  messagingSenderId: "786061405001",
  appId: "1:786061405001:web:be17f4997fe0b9f3338898",
  measurementId: "G-WDSH26FBLE"
}
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {fb,db}