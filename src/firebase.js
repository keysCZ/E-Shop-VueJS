import firebase from '@firebase/app'
import 'firebase/firebase-auth'

const firebaseConfig = {
  apiKey: "AIzaSyCo9m951pd4lCYNpVhQsg_t8HUD2OpU3BE",
  authDomain: "shop-vue-c6c23.firebaseapp.com",
  databaseURL: "https://shop-vue-c6c23.firebaseio.com",
  projectId: "shop-vue-c6c23",
  storageBucket: "shop-vue-c6c23.appspot.com",
  messagingSenderId: "786061405001",
  appId: "1:786061405001:web:be17f4997fe0b9f3338898",
  measurementId: "G-WDSH26FBLE"
};
// Initialize Firebase
export const fb = firebase.initializeApp(firebaseConfig);
