
/*!
  * LumiJS JavaScript Library
  * https://lumi.js.org
  *
  * Copyright (c) 2020 Sunay Komarla
  * Released under The MIT License (MIT)
  * https://opensource.org/licenses/MIT
  */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("lumi", [], factory);
	else if(typeof exports === 'object')
		exports["lumi"] = factory();
	else
		root["lumi"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Lumi = void 0;
var Scene = /** @class */ (function () {
    function Scene(canvas, options) {
        if (options === void 0) { options = { gravity: 1 }; }
        this.canvas = canvas;
        this.options = options;
    }
    return Scene;
}());
var Body = /** @class */ (function () {
    function Body() {
    }
    return Body;
}());
var Camera = /** @class */ (function () {
    function Camera(x, y, options) {
        this.x = x;
        this.y = y;
        this.options = options;
    }
    return Camera;
}());
exports.Lumi = {
    Scene: Scene,
    Camera: Camera
};

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=lumi.js.map