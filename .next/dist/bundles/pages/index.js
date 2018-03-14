module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-infinite-calendar/styles.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_Components_Booking__ = __webpack_require__("./src/Components/Booking.js");
var _jsxFileName = "/Users/m8admin/Documents/Sites/MY_STUFFS/booking/pages/index.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var index = function (_Component) {
  _inherits(index, _Component);

  function index() {
    _classCallCheck(this, index);

    return _possibleConstructorReturn(this, (index.__proto__ || Object.getPrototypeOf(index)).apply(this, arguments));
  }

  _createClass(index, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__src_Components_Booking__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        })
      );
    }
  }]);

  return index;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./src/Components/Booking.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_infinite_calendar__ = __webpack_require__("react-infinite-calendar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_infinite_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_infinite_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns__ = __webpack_require__("date-fns");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_window_or_global__ = __webpack_require__("window-or-global");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_window_or_global___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_window_or_global__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_infinite_calendar_styles_css__ = __webpack_require__("./node_modules/react-infinite-calendar/styles.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_infinite_calendar_styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_infinite_calendar_styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_style_css__ = __webpack_require__("./src/static/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__static_style_css__);
var _jsxFileName = "/Users/m8admin/Documents/Sites/MY_STUFFS/booking/src/Components/Booking.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







// format(date, 'ddd, MMM Do YYYY'))

var Booking = function (_Component) {
  _inherits(Booking, _Component);

  function Booking() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Booking);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Booking.__proto__ || Object.getPrototypeOf(Booking)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      calendar: false,
      firstDate: ""
    }, _this.toggle = function () {
      var calendar = _this.state.calendar;

      console.log("hols");
      _this.setState({
        calendar: !_this.state.calendar
      });
    }, _this.calendarHandler = function (date) {
      if (date.eventType === 3) {
        console.log(date);
        _this.setState({
          startDate: Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["format"])(date.start, " MMM Do YYYY"),
          lastDate: Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["format"])(date.end, "MMM Do YYYY")
        }, _this.toggle());
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Booking, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var today = new Date();
      var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
      var CalendarWithRange = Object(__WEBPACK_IMPORTED_MODULE_1_react_infinite_calendar__["withRange"])(__WEBPACK_IMPORTED_MODULE_1_react_infinite_calendar__["Calendar"]);
      var _state = this.state,
          calendar = _state.calendar,
          startDate = _state.startDate,
          lastDate = _state.lastDate;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "p",
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            }
          },
          "Hola mundo"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "button",
          { onClick: function onClick() {
              return _this2.toggle();
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            }
          },
          startDate ? "From:" + startDate + " to:" + lastDate : "Pick a date"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_infinite_calendar___default.a, {
          onSelect: function onSelect(date) {
            return _this2.calendarHandler(date);
          },
          Component: CalendarWithRange,
          className: calendar ? "show" : "hide",
          height: 500,
          width: 300,
          minDate: today,
          selected: null,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        })
      );
    }
  }]);

  return Booking;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Booking);

/***/ }),

/***/ "./src/static/style.css":
/***/ (function(module, exports) {



/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "date-fns":
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-infinite-calendar":
/***/ (function(module, exports) {

module.exports = require("react-infinite-calendar");

/***/ }),

/***/ "window-or-global":
/***/ (function(module, exports) {

module.exports = require("window-or-global");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map