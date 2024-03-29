"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = exports.fb = void 0;

var _app = _interopRequireDefault(require("@firebase/app"));

require("firebase/firebase-auth");

require("firebase/storage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
}; // Initialize Firebase

var fb = _app["default"].initializeApp(firebaseConfig);

exports.fb = fb;

var db = _app["default"].firestore();

exports.db = db;