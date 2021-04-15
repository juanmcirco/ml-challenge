module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/items.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/items.js":
/*!****************************!*\
  !*** ./pages/api/items.js ***!
  \****************************/
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
      q
    },
    method
  } = req;

  try {
    var _data$available_filte, _data$available_filte2, _data$filters, _data$filters$filter$;

    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`https://api.mercadolibre.com/sites/MLA/search?q=${q}`);
    const findCategories = (_data$available_filte = data.available_filters) === null || _data$available_filte === void 0 ? void 0 : (_data$available_filte2 = _data$available_filte.filter(cat => cat.id === 'category')[0]) === null || _data$available_filte2 === void 0 ? void 0 : _data$available_filte2.values;
    const categories = findCategories ? findCategories.map(val => val.name) : [];
    const categoriesResults = findCategories ? findCategories.map(val => val.results) : [];
    const resultsMax = Math.max(...categoriesResults);
    const categoriesInFilters = (_data$filters = data.filters) === null || _data$filters === void 0 ? void 0 : (_data$filters$filter$ = _data$filters.filter(cat => cat.id === 'category')[0]) === null || _data$filters$filter$ === void 0 ? void 0 : _data$filters$filter$.values;
    const breadCrumb = (findCategories === null || findCategories === void 0 ? void 0 : findCategories.filter(cat => cat.results === resultsMax)[0]) || categoriesInFilters[0];
    const items = data.results.map(item => {
      return {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: item.price,
          decimals: item.price - Math.floor(item.price) //no entendi bien de donde sacar los decimales, asi que lo calculo respecto al amount

        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        state: item.seller_address.state.name
      };
    });

    switch (method) {
      case 'GET':
        res.status(200).json({
          author: {
            name: 'Juan Manuel',
            lastname: 'Barreto Zacarias'
          },
          categories: categories,
          breadCrumb: breadCrumb,
          items: items
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2l0ZW1zLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiXSwibmFtZXMiOlsiaXRlbXNIYW5kbGVyIiwicmVxIiwicmVzIiwicXVlcnkiLCJxIiwibWV0aG9kIiwiZGF0YSIsImF4aW9zIiwiZ2V0IiwiZmluZENhdGVnb3JpZXMiLCJhdmFpbGFibGVfZmlsdGVycyIsImZpbHRlciIsImNhdCIsImlkIiwidmFsdWVzIiwiY2F0ZWdvcmllcyIsIm1hcCIsInZhbCIsIm5hbWUiLCJjYXRlZ29yaWVzUmVzdWx0cyIsInJlc3VsdHMiLCJyZXN1bHRzTWF4IiwiTWF0aCIsIm1heCIsImNhdGVnb3JpZXNJbkZpbHRlcnMiLCJmaWx0ZXJzIiwiYnJlYWRDcnVtYiIsIml0ZW1zIiwiaXRlbSIsInRpdGxlIiwicHJpY2UiLCJjdXJyZW5jeSIsImN1cnJlbmN5X2lkIiwiYW1vdW50IiwiZGVjaW1hbHMiLCJmbG9vciIsInBpY3R1cmUiLCJ0aHVtYm5haWwiLCJjb25kaXRpb24iLCJmcmVlX3NoaXBwaW5nIiwic2hpcHBpbmciLCJzdGF0ZSIsInNlbGxlcl9hZGRyZXNzIiwic3RhdHVzIiwianNvbiIsImF1dGhvciIsImxhc3RuYW1lIiwic2V0SGVhZGVyIiwiZW5kIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RB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V0FBRyxDQUFDeUMsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ25CQyxnQkFBTSxFQUFFO0FBQ04zQixnQkFBSSxFQUFFLGFBREE7QUFFTjRCLG9CQUFRLEVBQUU7QUFGSixXQURXO0FBS25CL0Isb0JBQVUsRUFBRUEsVUFMTztBQU1uQlcsb0JBQVUsRUFBRUEsVUFOTztBQU9uQkMsZUFBSyxFQUFFQTtBQVBZLFNBQXJCO0FBU0E7O0FBRUY7QUFDRXpCLFdBQUcsQ0FBQzZDLFNBQUosQ0FBYyxPQUFkLEVBQXVCLENBQUMsS0FBRCxDQUF2QjtBQUNBN0MsV0FBRyxDQUFDeUMsTUFBSixDQUFXLEdBQVgsRUFBZ0JLLEdBQWhCLENBQXFCLFVBQVMzQyxNQUFPLGNBQXJDO0FBZko7QUFpQkQsR0F6Q0QsQ0F5Q0UsT0FBTzRDLEtBQVAsRUFBYztBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNEO0FBRUYsQzs7Ozs7Ozs7Ozs7QUNwREQsa0MiLCJmaWxlIjoicGFnZXMvYXBpL2l0ZW1zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvaXRlbXMuanNcIik7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGl0ZW1zSGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCB7XG4gICAgcXVlcnk6IHsgcSB9LFxuICAgIG1ldGhvZCxcbiAgfSA9IHJlcVxuICB0cnkge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5tZXJjYWRvbGlicmUuY29tL3NpdGVzL01MQS9zZWFyY2g/cT0ke3F9YCk7XG4gICAgY29uc3QgZmluZENhdGVnb3JpZXMgPSBkYXRhLmF2YWlsYWJsZV9maWx0ZXJzPy5maWx0ZXIoY2F0ID0+IGNhdC5pZCA9PT0gJ2NhdGVnb3J5JylbMF0/LnZhbHVlc1xuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBmaW5kQ2F0ZWdvcmllcyA/IGZpbmRDYXRlZ29yaWVzLm1hcCh2YWwgPT4gdmFsLm5hbWUpIDogW11cbiAgICBjb25zdCBjYXRlZ29yaWVzUmVzdWx0cyA9IGZpbmRDYXRlZ29yaWVzID8gZmluZENhdGVnb3JpZXMubWFwKHZhbCA9PiB2YWwucmVzdWx0cykgOiBbXTtcbiAgICBjb25zdCByZXN1bHRzTWF4ID0gTWF0aC5tYXgoLi4uY2F0ZWdvcmllc1Jlc3VsdHMpXG4gICAgY29uc3QgY2F0ZWdvcmllc0luRmlsdGVycyA9IGRhdGEuZmlsdGVycz8uZmlsdGVyKGNhdCA9PiBjYXQuaWQgPT09ICdjYXRlZ29yeScpWzBdPy52YWx1ZXNcbiAgICBjb25zdCBicmVhZENydW1iID0gZmluZENhdGVnb3JpZXM/LmZpbHRlcihjYXQgPT4gY2F0LnJlc3VsdHMgPT09IHJlc3VsdHNNYXgpWzBdIHx8IGNhdGVnb3JpZXNJbkZpbHRlcnNbMF1cbiAgICBjb25zdCBpdGVtcyA9IGRhdGEucmVzdWx0cy5tYXAoaXRlbSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXG4gICAgICAgIHByaWNlOiB7XG4gICAgICAgICAgY3VycmVuY3k6IGl0ZW0uY3VycmVuY3lfaWQsXG4gICAgICAgICAgYW1vdW50OiBpdGVtLnByaWNlLFxuICAgICAgICAgIGRlY2ltYWxzOiBpdGVtLnByaWNlIC0gTWF0aC5mbG9vcihpdGVtLnByaWNlKSAvL25vIGVudGVuZGkgYmllbiBkZSBkb25kZSBzYWNhciBsb3MgZGVjaW1hbGVzLCBhc2kgcXVlIGxvIGNhbGN1bG8gcmVzcGVjdG8gYWwgYW1vdW50XG4gICAgICAgIH0sXG4gICAgICAgIHBpY3R1cmU6IGl0ZW0udGh1bWJuYWlsLFxuICAgICAgICBjb25kaXRpb246IGl0ZW0uY29uZGl0aW9uLFxuICAgICAgICBmcmVlX3NoaXBwaW5nOiBpdGVtLnNoaXBwaW5nLmZyZWVfc2hpcHBpbmcsXG4gICAgICAgIHN0YXRlOiBpdGVtLnNlbGxlcl9hZGRyZXNzLnN0YXRlLm5hbWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgc3dpdGNoIChtZXRob2QpIHtcbiAgICAgIGNhc2UgJ0dFVCc6XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICBhdXRob3I6IHtcbiAgICAgICAgICAgIG5hbWU6ICdKdWFuIE1hbnVlbCcsXG4gICAgICAgICAgICBsYXN0bmFtZTogJ0JhcnJldG8gWmFjYXJpYXMnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjYXRlZ29yaWVzOiBjYXRlZ29yaWVzLFxuICAgICAgICAgIGJyZWFkQ3J1bWI6IGJyZWFkQ3J1bWIsXG4gICAgICAgICAgaXRlbXM6IGl0ZW1zXG4gICAgICAgIH0pXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgWydHRVQnXSlcbiAgICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7bWV0aG9kfSBOb3QgQWxsb3dlZGApXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICB9XG5cbn1cblxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==