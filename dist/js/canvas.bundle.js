/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bc4ef3d08085e49024ee727302f78310.png");

/***/ }),

/***/ "./src/img/hills.png":
/*!***************************!*\
  !*** ./src/img/hills.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "11fe0fafdd468689173a203e5db2fb56.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "512a4367ee4c8acd81a63d85caa5ba44.png");

/***/ }),

/***/ "./src/img/tPlatform.png":
/*!*******************************!*\
  !*** ./src/img/tPlatform.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0c340f3e3f7ecb4dba443e24325a0f17.png");

/***/ }),

/***/ "./src/img/toadLeftStand.png":
/*!***********************************!*\
  !*** ./src/img/toadLeftStand.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6fc6daf6c4feea9af1517a97a370f16f.png");

/***/ }),

/***/ "./src/img/toadRightStand.png":
/*!************************************!*\
  !*** ./src/img/toadRightStand.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7a10ccf77974ffb6f7be7369469dcd50.png");

/***/ }),

/***/ "./src/img/toadRunLeft.png":
/*!*********************************!*\
  !*** ./src/img/toadRunLeft.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "038c06055735f80f7264fe6d34bd775b.png");

/***/ }),

/***/ "./src/img/toadRunRight.png":
/*!**********************************!*\
  !*** ./src/img/toadRunRight.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "872ca4427aab13684615f07ac1ce0a5a.png");

/***/ }),

/***/ "./src/img/zombieSprite.png":
/*!**********************************!*\
  !*** ./src/img/zombieSprite.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e75586ebafcc55c25773159ed2a570a2.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_hills_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/hills.png */ "./src/img/hills.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_tPlatform_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/tPlatform.png */ "./src/img/tPlatform.png");
/* harmony import */ var _img_toadRunRight_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/toadRunRight.png */ "./src/img/toadRunRight.png");
/* harmony import */ var _img_toadRunLeft_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/toadRunLeft.png */ "./src/img/toadRunLeft.png");
/* harmony import */ var _img_toadRightStand_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/toadRightStand.png */ "./src/img/toadRightStand.png");
/* harmony import */ var _img_toadLeftStand_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/toadLeftStand.png */ "./src/img/toadLeftStand.png");
/* harmony import */ var _img_zombieSprite_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/zombieSprite.png */ "./src/img/zombieSprite.png");





function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }










var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576; // gravity strength

var gravity = 0.5;

var Player = /*#__PURE__*/function () {
  function Player() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Player);

    this.speed = 10;
    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 90;
    this.height = 120; //sprite animations imported

    this.frames = 0;
    this.sprites = {
      stand: {
        right: createImage(_img_toadRightStand_png__WEBPACK_IMPORTED_MODULE_10__["default"]),
        left: createImage(_img_toadLeftStand_png__WEBPACK_IMPORTED_MODULE_11__["default"])
      },
      run: {
        right: createImage(_img_toadRunRight_png__WEBPACK_IMPORTED_MODULE_8__["default"]),
        left: createImage(_img_toadRunLeft_png__WEBPACK_IMPORTED_MODULE_9__["default"])
      }
    };
    this.currentSprite = this.sprites.stand.right;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.currentSprite, 300 * this.frames, 0, 300, 400, this.position.x, this.position.y, this.width, this.height);
    } // gravity properties

  }, {
    key: "update",
    value: function update() {
      this.frames++;
      if (this.frames > 28 && (this.currentSprite === this.sprites.stand.right || this.currentSprite === this.sprites.stand.left)) this.frames = 0;else if (this.frames > 59 && (this.currentSprite === this.sprites.run.right || this.currentSprite === this.sprites.run.left)) this.frames = 0;
      this.draw();
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;
      if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity;
    }
  }]);

  return Player;
}();

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();

var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}();

var Zombie = /*#__PURE__*/function () {
  function Zombie(_ref3) {
    var position = _ref3.position,
        velocity = _ref3.velocity;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Zombie);

    this.position = {
      x: position.x,
      y: position.y
    };
    this.velocity = {
      x: velocity.x,
      y: velocity.y
    };
    this.width = 120;
    this.height = 150;
    this.image = createImage(_img_zombieSprite_png__WEBPACK_IMPORTED_MODULE_12__["default"]);
    this.frames = 0;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Zombie, [{
    key: "draw",
    value: function draw() {
      // c.fillStyle = 'red'
      // c.fillRect(this.position.x, this.position.y, this.width, this.height)
      c.drawImage(this.image, 300 * this.frames, 0, 300, 400, this.position.x, this.position.y, this.width, this.height, this.position.x);
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++;
      if (this.frames >= 48) this.frames = 0;
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity;
    }
  }]);

  return Zombie;
}();

var Particle = /*#__PURE__*/function () {
  function Particle(_ref4) {
    var position = _ref4.position,
        velocity = _ref4.velocity,
        radius = _ref4.radius;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Particle);

    this.position = {
      x: position.x,
      y: position.y
    };
    this.velocity = {
      x: velocity.x,
      y: velocity.y
    };
    this.radius = radius;
    this.ttl = 300;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Particle, [{
    key: "draw",
    value: function draw() {
      c.beginPath();
      c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = 'green';
      c.fill();
      c.closePath();
    }
  }, {
    key: "update",
    value: function update() {
      this.ttl--;
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      if (this.position.y + this.radius + this.velocity.y <= canvas.height) this.velocity.y += gravity * 0.5;
    }
  }]);

  return Particle;
}(); //create image function


function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
} //create player after platforms loaded function


function createImageAsync(imageSrc) {
  return new Promise(function (resolve) {
    var image = new Image();

    image.onload = function () {
      resolve(image);
    };

    image.src = imageSrc;
  });
} //defining platforms


var platformImage;
var tPlatformImage;
var player = new Player();
var platforms = [];
var genericObjects = [];
var zombiez = [];
var particles = [];
var lastKey;
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
var scrollOffset = 0;

function isOnTopOfPlatform(_ref5) {
  var object = _ref5.object,
      platform = _ref5.platform;
  return object.position.y + object.height <= platform.position.y + 41 && object.position.y + object.height + object.velocity.y >= platform.position.y + 41 && object.position.x + object.width >= platform.position.x && object.position.x <= platform.position.x + platform.width;
}

function collisionTop(_ref6) {
  var object1 = _ref6.object1,
      object2 = _ref6.object2;
  return object1.position.y + object1.height <= object2.position.y && object1.position.y + object1.height + object1.velocity.y >= object2.position.y && object1.position.x + object1.width >= object2.position.x && object1.position.x <= object2.position.x + object2.width;
}

function isOnTopOfPlatformCircle(_ref7) {
  var object = _ref7.object,
      platform = _ref7.platform;
  return object.position.y + object.radius <= platform.position.y + 41 && object.position.y + object.radius + object.velocity.y >= platform.position.y + 41 && object.position.x + object.radius >= platform.position.x && object.position.x <= platform.position.x + platform.width;
}

function gameReset() {
  return _gameReset.apply(this, arguments);
}

function _gameReset() {
  _gameReset = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return createImageAsync(_img_platform_png__WEBPACK_IMPORTED_MODULE_4__["default"]);

          case 2:
            platformImage = _context.sent;
            _context.next = 5;
            return createImageAsync(_img_tPlatform_png__WEBPACK_IMPORTED_MODULE_7__["default"]);

          case 5:
            tPlatformImage = _context.sent;
            //platform creation
            player = new Player();
            zombiez = [new Zombie({
              position: {
                x: 800,
                y: 100
              },
              velocity: {
                x: -0.5,
                y: 0
              }
            })];
            particles = [];
            platforms = [new Platform({
              x: platformImage.width * 4 + 300 - 2 + platformImage.width - tPlatformImage.width,
              y: 325,
              image: createImage(_img_tPlatform_png__WEBPACK_IMPORTED_MODULE_7__["default"])
            }), new Platform({
              x: -1,
              y: 470,
              image: platformImage
            }), new Platform({
              x: platformImage.width - 3,
              y: 470,
              image: platformImage
            }), new Platform({
              x: platformImage.width * 2 + 100,
              y: 470,
              image: platformImage
            }), new Platform({
              x: platformImage.width * 3 + 300,
              y: 470,
              image: platformImage
            }), new Platform({
              x: platformImage.width * 4 + 300 - 2,
              y: 470,
              image: platformImage
            }), new Platform({
              x: platformImage.width * 5 + 800 - 2,
              y: 470,
              image: platformImage
            })];
            genericObjects = [new GenericObject({
              x: -1,
              y: -1,
              image: createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_6__["default"])
            }), new GenericObject({
              x: -1,
              y: -1,
              image: createImage(_img_hills_png__WEBPACK_IMPORTED_MODULE_5__["default"])
            })];
            scrollOffset = 0;

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _gameReset.apply(this, arguments);
}

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach(function (genericObject) {
    genericObject.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  zombiez.forEach(function (zombie, index) {
    zombie.update(); //zombie squish 

    if (collisionTop({
      object1: player,
      object2: zombie
    })) {
      //squished zombie particles
      for (var i = 0; i < 50; i++) {
        particles.push(new Particle({
          position: {
            x: zombie.position.x + zombie.width / 2,
            y: zombie.position.y + zombie.height / 2
          },
          velocity: {
            x: (Math.random() - 0.5) * 5,
            y: (Math.random() - 0.5) * 10
          },
          radius: Math.random() * 2.5
        }));
      }

      player.velocity.y -= 30;
      setTimeout(function () {
        zombiez.splice(index, 1);
      }, 0);
    } else if (player.position.x + player.width >= zombie.position.x && player.position.y + player.height >= zombie.position.y && player.position.x <= zombie.position.x + zombie.width) gameReset();
  });
  particles.forEach(function (particle) {
    particle.update();
  });
  player.update(); //left and right movement 

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed;
  } else if (keys.left.pressed && player.position.x > 100 || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0; //scrolling code

    if (keys.right.pressed) {
      scrollOffset += player.speed;
      platforms.forEach(function (platform) {
        platform.position.x -= player.speed;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x -= player.speed * 0.66;
      });
      zombiez.forEach(function (zombie) {
        zombie.position.x -= player.speed;
      });
      particles.forEach(function (particle) {
        particle.position.x -= player.speed;
      });
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= player.speed;
      platforms.forEach(function (platform) {
        platform.position.x += player.speed;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x += player.speed * 0.66;
      });
      zombiez.forEach(function (zombie) {
        zombie.position.x += player.speed;
      });
      particles.forEach(function (particle) {
        particle.position.x += player.speed;
      });
    }
  } // platform collision detection


  platforms.forEach(function (platform) {
    if (isOnTopOfPlatform({
      object: player,
      platform: platform
    })) {
      player.velocity.y = 0;
    } //particle bounce


    particles.forEach(function (particle, index) {
      if (isOnTopOfPlatformCircle({
        object: particle,
        platform: platform
      })) {
        particle.velocity.y = -particle.velocity.y * 0.9;
        if (particle.radius - 0.4 < 0) particles.splice(index, 1);else particle.radius -= 0.4;
      }

      if (particle.ttl < 0) particles.splice(index, 1);
    });
    zombiez.forEach(function (zombie) {
      if (isOnTopOfPlatform({
        object: zombie,
        platform: platform
      })) zombie.velocity.y = 0;
    });
  }); //Sprite Switching

  if (keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.run.right) {
    player.frames = 1;
    player.currentSprite = player.sprites.run.right;
    player.currentSprite = player.sprites.run.right;
  } else if (keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.run.left) {
    player.currentSprite = player.sprites.run.left;
  } else if (!keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.stand.left) {
    player.currentSprite = player.sprites.stand.left;
  } else if (!keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.stand.right) {
    player.currentSprite = player.sprites.stand.right;
  } //win con


  if (platformImage && scrollOffset > platformImage.width * 5 + 400 - 2) {
    console.log('you WIN!');
  } //lose con


  if (player.position.y > canvas.height) {
    gameReset();
  }
}

gameReset();
animate(); // down key listener (asdw)

addEventListener('keydown', function (_ref8) {
  var keyCode = _ref8.keyCode;

  switch (keyCode) {
    case 65:
      console.log('left');
      keys.left.pressed = true;
      lastKey = 'left';
      break;

    case 83:
      console.log('down');
      break;

    case 68:
      console.log('right');
      keys.right.pressed = true;
      lastKey = 'right';
      break;

    case 87:
      console.log('up');
      player.velocity.y -= 15;
      break;
  }
}); // up key listener (asdw)

addEventListener('keyup', function (_ref9) {
  var keyCode = _ref9.keyCode;

  switch (keyCode) {
    case 65:
      console.log('left');
      keys.left.pressed = false;
      player.currentSprite = player.sprites.stand.left;
      break;

    case 83:
      console.log('down');
      break;

    case 68:
      console.log('right');
      keys.right.pressed = false;
      break;

    case 87:
      console.log('up');
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map