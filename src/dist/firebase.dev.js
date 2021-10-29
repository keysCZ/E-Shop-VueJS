"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "firebase", {
  enumerable: true,
  get: function get() {
    return _app["default"];
  }
});
exports.provider = exports.db = exports.fb = exports.ad = void 0;

var _app = _interopRequireDefault(require("@firebase/app"));

require("firebase/firebase-auth");

require("firebase/storage");

var admin = _interopRequireWildcard(require("firebase-admin"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var ad = admin.initializeApp();
exports.ad = ad;

var fb = _app["default"].initializeApp(firebaseConfig);

exports.fb = fb;

var db = _app["default"].firestore();

exports.db = db;
var provider = new _app["default"].auth.GoogleAuthProvider();
exports.provider = provider;