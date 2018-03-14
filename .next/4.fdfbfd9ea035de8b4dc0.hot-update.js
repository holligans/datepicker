webpackHotUpdate(4,{

/***/ "./src/Components/Booking.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_infinite_calendar__ = __webpack_require__("./node_modules/react-infinite-calendar/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns__ = __webpack_require__("./node_modules/date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_window_or_global__ = __webpack_require__("./node_modules/window-or-global/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_window_or_global___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_window_or_global__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_infinite_calendar_styles_css__ = __webpack_require__("./node_modules/react-infinite-calendar/styles.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_infinite_calendar_styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_infinite_calendar_styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_style_css__ = __webpack_require__("./src/static/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__static_style_css__);
var _jsxFileName = "/Users/m8admin/Documents/Sites/MY_STUFFS/booking/src/Components/Booking.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

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
      var CalendarWithRange = Object(__WEBPACK_IMPORTED_MODULE_1_react_infinite_calendar__["c" /* withRange */])(__WEBPACK_IMPORTED_MODULE_1_react_infinite_calendar__["a" /* Calendar */]);
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
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_infinite_calendar__["b" /* default */], {
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
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Booking;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = Booking;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Booking, "Booking", "/Users/m8admin/Documents/Sites/MY_STUFFS/booking/src/Components/Booking.js");
  reactHotLoader.register(_default, "default", "/Users/m8admin/Documents/Sites/MY_STUFFS/booking/src/Components/Booking.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.fdfbfd9ea035de8b4dc0.hot-update.js.map