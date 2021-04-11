module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/items/[...id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/items/[...id].js":
/*!************************************!*\
  !*** ./pages/api/items/[...id].js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return itemsHandler; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

async function itemsHandler(req, res) {
  const {
    query: {
      id
    },
    method
  } = req;

  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`https://api.mercadolibre.com/items/${id}`);
    const description = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`https://api.mercadolibre.com/items/${id}/description`);
    console.log(data);
    const items = {
      id: data.id,
      title: data.title,
      price: {
        currency: data.currency_id,
        amount: data.price,
        decimals: data.price - Math.floor(data.price) //no entendi bien de donde sacar los decimales, asi que lo calculo respecto al amount

      },
      picture: data.thumbnail,
      condition: data.condition,
      free_shipping: data.shipping.free_shipping,
      sold_quantity: data.sold_quantity,
      description: description.data.plain_text
    };

    switch (method) {
      case 'GET':
        res.status(200).json({
          author: {
            name: 'Juan Manuel',
            lastname: 'Barreto Zacarias'
          },
          item: items
        });
        break;

      default:
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.log(error);
  }
}

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2l0ZW1zL1suLi5pZF0uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiJdLCJuYW1lcyI6WyJpdGVtc0hhbmRsZXIiLCJyZXEiLCJyZXMiLCJxdWVyeSIsImlkIiwibWV0aG9kIiwiZGF0YSIsImF4aW9zIiwiZ2V0IiwiZGVzY3JpcHRpb24iLCJjb25zb2xlIiwibG9nIiwiaXRlbXMiLCJ0aXRsZSIsInByaWNlIiwiY3VycmVuY3kiLCJjdXJyZW5jeV9pZCIsImFtb3VudCIsImRlY2ltYWxzIiwiTWF0aCIsImZsb29yIiwicGljdHVyZSIsInRodW1ibmFpbCIsImNvbmRpdGlvbiIsImZyZWVfc2hpcHBpbmciLCJzaGlwcGluZyIsInNvbGRfcXVhbnRpdHkiLCJwbGFpbl90ZXh0Iiwic3RhdHVzIiwianNvbiIsImF1dGhvciIsIm5hbWUiLCJsYXN0bmFtZSIsIml0ZW0iLCJzZXRIZWFkZXIiLCJlbmQiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWUsZUFBZUEsWUFBZixDQUE0QkMsR0FBNUIsRUFBaUNDLEdBQWpDLEVBQXNDO0FBQ2pELFFBQU07QUFDRkMsU0FBSyxFQUFFO0FBQUVDO0FBQUYsS0FETDtBQUVGQztBQUZFLE1BR0ZKLEdBSEo7O0FBS0EsTUFBSTtBQUNBLFVBQU07QUFBRUs7QUFBRixRQUFXLE1BQU1DLDRDQUFLLENBQUNDLEdBQU4sQ0FBVyxzQ0FBcUNKLEVBQUcsRUFBbkQsQ0FBdkI7QUFDQSxVQUFNSyxXQUFXLEdBQUcsTUFBTUYsNENBQUssQ0FBQ0MsR0FBTixDQUFXLHNDQUFxQ0osRUFBRyxjQUFuRCxDQUExQjtBQUVBTSxXQUFPLENBQUNDLEdBQVIsQ0FBWUwsSUFBWjtBQUNBLFVBQU1NLEtBQUssR0FBRztBQUNWUixRQUFFLEVBQUVFLElBQUksQ0FBQ0YsRUFEQztBQUVWUyxXQUFLLEVBQUVQLElBQUksQ0FBQ08sS0FGRjtBQUdWQyxXQUFLLEVBQUU7QUFDSEMsZ0JBQVEsRUFBRVQsSUFBSSxDQUFDVSxXQURaO0FBRUhDLGNBQU0sRUFBRVgsSUFBSSxDQUFDUSxLQUZWO0FBR0hJLGdCQUFRLEVBQUVaLElBQUksQ0FBQ1EsS0FBTCxHQUFhSyxJQUFJLENBQUNDLEtBQUwsQ0FBV2QsSUFBSSxDQUFDUSxLQUFoQixDQUhwQixDQUcyQzs7QUFIM0MsT0FIRztBQVFWTyxhQUFPLEVBQUVmLElBQUksQ0FBQ2dCLFNBUko7QUFTVkMsZUFBUyxFQUFFakIsSUFBSSxDQUFDaUIsU0FUTjtBQVVWQyxtQkFBYSxFQUFFbEIsSUFBSSxDQUFDbUIsUUFBTCxDQUFjRCxhQVZuQjtBQVdWRSxtQkFBYSxFQUFFcEIsSUFBSSxDQUFDb0IsYUFYVjtBQVlWakIsaUJBQVcsRUFBRUEsV0FBVyxDQUFDSCxJQUFaLENBQWlCcUI7QUFacEIsS0FBZDs7QUFnQkEsWUFBUXRCLE1BQVI7QUFDSSxXQUFLLEtBQUw7QUFDSUgsV0FBRyxDQUFDMEIsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ2pCQyxnQkFBTSxFQUFFO0FBQ0pDLGdCQUFJLEVBQUUsYUFERjtBQUVKQyxvQkFBUSxFQUFFO0FBRk4sV0FEUztBQUtqQkMsY0FBSSxFQUFFckI7QUFMVyxTQUFyQjtBQU9BOztBQUVKO0FBQ0lWLFdBQUcsQ0FBQ2dDLFNBQUosQ0FBYyxPQUFkLEVBQXVCLENBQUMsS0FBRCxDQUF2QjtBQUNBaEMsV0FBRyxDQUFDMEIsTUFBSixDQUFXLEdBQVgsRUFBZ0JPLEdBQWhCLENBQXFCLFVBQVM5QixNQUFPLGNBQXJDO0FBYlI7QUFlSCxHQXBDRCxDQW9DRSxPQUFPK0IsS0FBUCxFQUFjO0FBQ1oxQixXQUFPLENBQUNDLEdBQVIsQ0FBWXlCLEtBQVo7QUFDSDtBQUVKLEM7Ozs7Ozs7Ozs7O0FDaERELGtDIiwiZmlsZSI6InBhZ2VzL2FwaS9pdGVtcy9bLi4uaWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvaXRlbXMvWy4uLmlkXS5qc1wiKTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGl0ZW1zSGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIHF1ZXJ5OiB7IGlkIH0sXHJcbiAgICAgICAgbWV0aG9kLFxyXG4gICAgfSA9IHJlcVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLm1lcmNhZG9saWJyZS5jb20vaXRlbXMvJHtpZH1gKTtcclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9hcGkubWVyY2Fkb2xpYnJlLmNvbS9pdGVtcy8ke2lkfS9kZXNjcmlwdGlvbmApO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0ge1xyXG4gICAgICAgICAgICBpZDogZGF0YS5pZCxcclxuICAgICAgICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXHJcbiAgICAgICAgICAgIHByaWNlOiB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW5jeTogZGF0YS5jdXJyZW5jeV9pZCxcclxuICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5wcmljZSxcclxuICAgICAgICAgICAgICAgIGRlY2ltYWxzOiBkYXRhLnByaWNlIC0gTWF0aC5mbG9vcihkYXRhLnByaWNlKSAvL25vIGVudGVuZGkgYmllbiBkZSBkb25kZSBzYWNhciBsb3MgZGVjaW1hbGVzLCBhc2kgcXVlIGxvIGNhbGN1bG8gcmVzcGVjdG8gYWwgYW1vdW50XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBpY3R1cmU6IGRhdGEudGh1bWJuYWlsLFxyXG4gICAgICAgICAgICBjb25kaXRpb246IGRhdGEuY29uZGl0aW9uLFxyXG4gICAgICAgICAgICBmcmVlX3NoaXBwaW5nOiBkYXRhLnNoaXBwaW5nLmZyZWVfc2hpcHBpbmcsXHJcbiAgICAgICAgICAgIHNvbGRfcXVhbnRpdHk6IGRhdGEuc29sZF9xdWFudGl0eSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLmRhdGEucGxhaW5fdGV4dCxcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBzd2l0Y2ggKG1ldGhvZCkge1xyXG4gICAgICAgICAgICBjYXNlICdHRVQnOlxyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnSnVhbiBNYW51ZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0bmFtZTogJ0JhcnJldG8gWmFjYXJpYXMnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBpdGVtOiBpdGVtc1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ0dFVCddKVxyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7bWV0aG9kfSBOb3QgQWxsb3dlZGApXHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=