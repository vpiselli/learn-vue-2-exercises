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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Errors = /*#__PURE__*/function () {\n  function Errors() {\n    _classCallCheck(this, Errors);\n\n    this.errors = {};\n  }\n\n  _createClass(Errors, [{\n    key: \"has\",\n    value: function has(field) {\n      return this.errors.hasOwnProperty(field);\n    }\n  }, {\n    key: \"any\",\n    value: function any() {\n      return Object.keys(this.errors).length > 0;\n    }\n  }, {\n    key: \"get\",\n    value: function get(field) {\n      if (this.errors[field]) {\n        return this.errors[field][0];\n      }\n    }\n  }, {\n    key: \"record\",\n    value: function record(errors) {\n      this.errors = errors;\n    }\n  }, {\n    key: \"clear\",\n    value: function clear(field) {\n      if (this.errors[field]) {\n        delete this.errors[field];\n      }\n    }\n  }]);\n\n  return Errors;\n}();\n\nnew Vue({\n  el: '#app',\n  data: {\n    name: '',\n    description: '',\n    errors: new Errors()\n  },\n  methods: {\n    onSubmit: function onSubmit() {\n      var _this = this;\n\n      axios.post('/projects', this.$data).then(this.onSuccess)[\"catch\"](function (error) {\n        return _this.errors.record(error.response.data.errors);\n      });\n    },\n    onSuccess: function onSuccess(response) {\n      alert(response.data.message);\n      this.name = '';\n      this.description = '';\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYXBwLmpzPzZkNDAiXSwibmFtZXMiOlsiRXJyb3JzIiwiZXJyb3JzIiwiZmllbGQiLCJoYXNPd25Qcm9wZXJ0eSIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJWdWUiLCJlbCIsImRhdGEiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJtZXRob2RzIiwib25TdWJtaXQiLCJheGlvcyIsInBvc3QiLCIkZGF0YSIsInRoZW4iLCJvblN1Y2Nlc3MiLCJlcnJvciIsInJlY29yZCIsInJlc3BvbnNlIiwiYWxlcnQiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBTUEsTTtBQUNGLG9CQUFjO0FBQUE7O0FBQ1YsU0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDSDs7Ozt3QkFFR0MsSyxFQUFPO0FBQ1AsYUFBTyxLQUFLRCxNQUFMLENBQVlFLGNBQVosQ0FBMkJELEtBQTNCLENBQVA7QUFDSDs7OzBCQUVLO0FBQ0YsYUFBT0UsTUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS0osTUFBakIsRUFBeUJLLE1BQXpCLEdBQWtDLENBQXpDO0FBQ0g7Ozt3QkFFR0osSyxFQUFPO0FBQ1AsVUFBSSxLQUFLRCxNQUFMLENBQVlDLEtBQVosQ0FBSixFQUF3QjtBQUNwQixlQUFPLEtBQUtELE1BQUwsQ0FBWUMsS0FBWixFQUFtQixDQUFuQixDQUFQO0FBQ0g7QUFDSjs7OzJCQUVNRCxNLEVBQVE7QUFDWCxXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDSDs7OzBCQUVLQyxLLEVBQU87QUFDVCxVQUFJLEtBQUtELE1BQUwsQ0FBWUMsS0FBWixDQUFKLEVBQXdCO0FBQ3BCLGVBQU8sS0FBS0QsTUFBTCxDQUFZQyxLQUFaLENBQVA7QUFDSDtBQUNKOzs7Ozs7QUFHTCxJQUFJSyxHQUFKLENBQVE7QUFDSkMsSUFBRSxFQUFFLE1BREE7QUFHSkMsTUFBSSxFQUFFO0FBQ0ZDLFFBQUksRUFBRSxFQURKO0FBRUZDLGVBQVcsRUFBRSxFQUZYO0FBR0ZWLFVBQU0sRUFBRSxJQUFJRCxNQUFKO0FBSE4sR0FIRjtBQVNKWSxTQUFPLEVBQUU7QUFDTEMsWUFESyxzQkFDTTtBQUFBOztBQUNQQyxXQUFLLENBQUNDLElBQU4sQ0FBVyxXQUFYLEVBQXdCLEtBQUtDLEtBQTdCLEVBQ0tDLElBREwsQ0FDVSxLQUFLQyxTQURmLFdBRVcsVUFBQUMsS0FBSztBQUFBLGVBQUksS0FBSSxDQUFDbEIsTUFBTCxDQUFZbUIsTUFBWixDQUFtQkQsS0FBSyxDQUFDRSxRQUFOLENBQWVaLElBQWYsQ0FBb0JSLE1BQXZDLENBQUo7QUFBQSxPQUZoQjtBQUdILEtBTEk7QUFPTGlCLGFBUEsscUJBT0tHLFFBUEwsRUFPZTtBQUNoQkMsV0FBSyxDQUFDRCxRQUFRLENBQUNaLElBQVQsQ0FBY2MsT0FBZixDQUFMO0FBQ0EsV0FBS2IsSUFBTCxHQUFZLEVBQVo7QUFDQSxXQUFLQyxXQUFMLEdBQW1CLEVBQW5CO0FBQ0g7QUFYSTtBQVRMLENBQVIiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRXJyb3JzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSB7fTtcbiAgICB9XG5cbiAgICBoYXMoZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzLmhhc093blByb3BlcnR5KGZpZWxkKTtcbiAgICB9XG5cbiAgICBhbnkoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmVycm9ycykubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICBnZXQoZmllbGQpIHtcbiAgICAgICAgaWYgKHRoaXMuZXJyb3JzW2ZpZWxkXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzW2ZpZWxkXVswXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlY29yZChlcnJvcnMpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG4gICAgfVxuXG4gICAgY2xlYXIoZmllbGQpIHtcbiAgICAgICAgaWYgKHRoaXMuZXJyb3JzW2ZpZWxkXSkge1xuICAgICAgICAgICAgZGVsZXRlKHRoaXMuZXJyb3JzW2ZpZWxkXSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm5ldyBWdWUoe1xuICAgIGVsOiAnI2FwcCcsXG5cbiAgICBkYXRhOiB7XG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGVycm9yczogbmV3IEVycm9ycygpXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25TdWJtaXQoKSB7XG4gICAgICAgICAgICBheGlvcy5wb3N0KCcvcHJvamVjdHMnLCB0aGlzLiRkYXRhKVxuICAgICAgICAgICAgICAgIC50aGVuKHRoaXMub25TdWNjZXNzKVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB0aGlzLmVycm9ycy5yZWNvcmQoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMpKTtcbiAgICAgICAgfSxcblxuICAgICAgICBvblN1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGFsZXJ0KHJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSAnJztcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSAnJztcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/app.js\n");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2Fzcy9hcHAuc2Nzcz8wZTE1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL3Nhc3MvYXBwLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/sass/app.scss\n");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /var/www/html/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /var/www/html/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });