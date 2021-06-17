"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuetify = _interopRequireDefault(require("vuetify"));

require("vuetify/dist/vuetify.min.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuetify["default"]);

var opts = {};

var _default = new _vuetify["default"](opts);

exports["default"] = _default;