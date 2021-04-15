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
    var _search$available_fil, _search$available_fil2, _search$filters, _search$filters$filte;

    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`https://api.mercadolibre.com/items/${id}`);
    const description = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`https://api.mercadolibre.com/items/${id}/description`);
    const {
      data: search
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`https://api.mercadolibre.com/sites/MLA/search?q=${data.title}`);
    const findCategories = (_search$available_fil = search.available_filters) === null || _search$available_fil === void 0 ? void 0 : (_search$available_fil2 = _search$available_fil.filter(cat => cat.id === 'category')[0]) === null || _search$available_fil2 === void 0 ? void 0 : _search$available_fil2.values;
    const categoriesResults = findCategories ? findCategories.map(val => val.results) : [];
    const resultsMax = Math.max(...categoriesResults);
    const categoriesInFilters = (_search$filters = search.filters) === null || _search$filters === void 0 ? void 0 : (_search$filters$filte = _search$filters.filter(cat => cat.id === 'category')[0]) === null || _search$filters$filte === void 0 ? void 0 : _search$filters$filte.values;
    const breadCrumb = (findCategories === null || findCategories === void 0 ? void 0 : findCategories.filter(cat => cat.results === resultsMax)[0]) || categoriesInFilters[0];
    const items = {
      id: data.id,
      title: data.title,
      price: {
        currency: data.currency_id,
        amount: data.price,
        decimals: data.price - Math.floor(data.price) //no entendi bien de donde sacar los decimales, asi que lo calculo respecto al amount

      },
      picture: data.pictures[0].url,
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
          item: items,
          breadCrumb: {
            last: breadCrumb,
            current: {
              id: data.category_id,
              name: data.title
            }
          }
        });
        break;

      default:
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    throw error;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2l0ZW1zL1suLi5pZF0uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiJdLCJuYW1lcyI6WyJpdGVtc0hhbmRsZXIiLCJyZXEiLCJyZXMiLCJxdWVyeSIsImlkIiwibWV0aG9kIiwiZGF0YSIsImF4aW9zIiwiZ2V0IiwiZGVzY3JpcHRpb24iLCJzZWFyY2giLCJ0aXRsZSIsImZpbmRDYXRlZ29yaWVzIiwiYXZhaWxhYmxlX2ZpbHRlcnMiLCJmaWx0ZXIiLCJjYXQiLCJ2YWx1ZXMiLCJjYXRlZ29yaWVzUmVzdWx0cyIsIm1hcCIsInZhbCIsInJlc3VsdHMiLCJyZXN1bHRzTWF4IiwiTWF0aCIsIm1heCIsImNhdGVnb3JpZXNJbkZpbHRlcnMiLCJmaWx0ZXJzIiwiYnJlYWRDcnVtYiIsIml0ZW1zIiwicHJpY2UiLCJjdXJyZW5jeSIsImN1cnJlbmN5X2lkIiwiYW1vdW50IiwiZGVjaW1hbHMiLCJmbG9vciIsInBpY3R1cmUiLCJwaWN0dXJlcyIsInVybCIsImNvbmRpdGlvbiIsImZyZWVfc2hpcHBpbmciLCJzaGlwcGluZyIsInNvbGRfcXVhbnRpdHkiLCJwbGFpbl90ZXh0Iiwic3RhdHVzIiwianNvbiIsImF1dGhvciIsIm5hbWUiLCJsYXN0bmFtZSIsIml0ZW0iLCJsYXN0IiwiY3VycmVudCIsImNhdGVnb3J5X2lkIiwic2V0SGVhZGVyIiwiZW5kIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7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RUFBRWxDLElBQUksQ0FBQ2tDLGFBWFI7QUFZWi9CLGlCQUFXLEVBQUVBLFdBQVcsQ0FBQ0gsSUFBWixDQUFpQm1DO0FBWmxCLEtBQWQ7O0FBZ0JBLFlBQVFwQyxNQUFSO0FBQ0UsV0FBSyxLQUFMO0FBQ0VILFdBQUcsQ0FBQ3dDLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUNuQkMsZ0JBQU0sRUFBRTtBQUNOQyxnQkFBSSxFQUFFLGFBREE7QUFFTkMsb0JBQVEsRUFBRTtBQUZKLFdBRFc7QUFLbkJDLGNBQUksRUFBRXBCLEtBTGE7QUFNbkJELG9CQUFVLEVBQUU7QUFBRXNCLGdCQUFJLEVBQUV0QixVQUFSO0FBQW9CdUIsbUJBQU8sRUFBRTtBQUFFN0MsZ0JBQUUsRUFBRUUsSUFBSSxDQUFDNEMsV0FBWDtBQUF3Qkwsa0JBQUksRUFBRXZDLElBQUksQ0FBQ0s7QUFBbkM7QUFBN0I7QUFOTyxTQUFyQjtBQVFBOztBQUVGO0FBQ0VULFdBQUcsQ0FBQ2lELFNBQUosQ0FBYyxPQUFkLEVBQXVCLENBQUMsS0FBRCxDQUF2QjtBQUNBakQsV0FBRyxDQUFDd0MsTUFBSixDQUFXLEdBQVgsRUFBZ0JVLEdBQWhCLENBQXFCLFVBQVMvQyxNQUFPLGNBQXJDO0FBZEo7QUFnQkQsR0EzQ0QsQ0EyQ0UsT0FBT2dELEtBQVAsRUFBYztBQUNkLFVBQU1BLEtBQU47QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDRDtBQUVGLEM7Ozs7Ozs7Ozs7O0FDeERELGtDIiwiZmlsZSI6InBhZ2VzL2FwaS9pdGVtcy9bLi4uaWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvaXRlbXMvWy4uLmlkXS5qc1wiKTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGl0ZW1zSGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGNvbnN0IHtcclxuICAgIHF1ZXJ5OiB7IGlkIH0sXHJcbiAgICBtZXRob2QsXHJcbiAgfSA9IHJlcVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLm1lcmNhZG9saWJyZS5jb20vaXRlbXMvJHtpZH1gKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5tZXJjYWRvbGlicmUuY29tL2l0ZW1zLyR7aWR9L2Rlc2NyaXB0aW9uYCk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhOiBzZWFyY2ggfSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9hcGkubWVyY2Fkb2xpYnJlLmNvbS9zaXRlcy9NTEEvc2VhcmNoP3E9JHtkYXRhLnRpdGxlfWApO1xyXG4gICAgY29uc3QgZmluZENhdGVnb3JpZXMgPSBzZWFyY2guYXZhaWxhYmxlX2ZpbHRlcnM/LmZpbHRlcihjYXQgPT4gY2F0LmlkID09PSAnY2F0ZWdvcnknKVswXT8udmFsdWVzXHJcbiAgICBjb25zdCBjYXRlZ29yaWVzUmVzdWx0cyA9IGZpbmRDYXRlZ29yaWVzID8gZmluZENhdGVnb3JpZXMubWFwKHZhbCA9PiB2YWwucmVzdWx0cykgOiBbXTtcclxuICAgIGNvbnN0IHJlc3VsdHNNYXggPSBNYXRoLm1heCguLi5jYXRlZ29yaWVzUmVzdWx0cylcclxuICAgIGNvbnN0IGNhdGVnb3JpZXNJbkZpbHRlcnMgPSBzZWFyY2guZmlsdGVycz8uZmlsdGVyKGNhdCA9PiBjYXQuaWQgPT09ICdjYXRlZ29yeScpWzBdPy52YWx1ZXNcclxuICAgIGNvbnN0IGJyZWFkQ3J1bWIgPSBmaW5kQ2F0ZWdvcmllcz8uZmlsdGVyKGNhdCA9PiBjYXQucmVzdWx0cyA9PT0gcmVzdWx0c01heClbMF0gfHwgY2F0ZWdvcmllc0luRmlsdGVyc1swXVxyXG5cclxuICAgIGNvbnN0IGl0ZW1zID0ge1xyXG4gICAgICBpZDogZGF0YS5pZCxcclxuICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXHJcbiAgICAgIHByaWNlOiB7XHJcbiAgICAgICAgY3VycmVuY3k6IGRhdGEuY3VycmVuY3lfaWQsXHJcbiAgICAgICAgYW1vdW50OiBkYXRhLnByaWNlLFxyXG4gICAgICAgIGRlY2ltYWxzOiBkYXRhLnByaWNlIC0gTWF0aC5mbG9vcihkYXRhLnByaWNlKSAvL25vIGVudGVuZGkgYmllbiBkZSBkb25kZSBzYWNhciBsb3MgZGVjaW1hbGVzLCBhc2kgcXVlIGxvIGNhbGN1bG8gcmVzcGVjdG8gYWwgYW1vdW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHBpY3R1cmU6IGRhdGEucGljdHVyZXNbMF0udXJsLFxyXG4gICAgICBjb25kaXRpb246IGRhdGEuY29uZGl0aW9uLFxyXG4gICAgICBmcmVlX3NoaXBwaW5nOiBkYXRhLnNoaXBwaW5nLmZyZWVfc2hpcHBpbmcsXHJcbiAgICAgIHNvbGRfcXVhbnRpdHk6IGRhdGEuc29sZF9xdWFudGl0eSxcclxuICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLmRhdGEucGxhaW5fdGV4dFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzd2l0Y2ggKG1ldGhvZCkge1xyXG4gICAgICBjYXNlICdHRVQnOlxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICAgIGF1dGhvcjoge1xyXG4gICAgICAgICAgICBuYW1lOiAnSnVhbiBNYW51ZWwnLFxyXG4gICAgICAgICAgICBsYXN0bmFtZTogJ0JhcnJldG8gWmFjYXJpYXMnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaXRlbTogaXRlbXMsXHJcbiAgICAgICAgICBicmVhZENydW1iOiB7IGxhc3Q6IGJyZWFkQ3J1bWIsIGN1cnJlbnQ6IHsgaWQ6IGRhdGEuY2F0ZWdvcnlfaWQsIG5hbWU6IGRhdGEudGl0bGUgfSB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBicmVha1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnR0VUJ10pXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7bWV0aG9kfSBOb3QgQWxsb3dlZGApXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHRocm93IGVycm9yXHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICB9XHJcblxyXG59XHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9