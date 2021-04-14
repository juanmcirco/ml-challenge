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
          breadCrumb: data.category_id
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2l0ZW1zL1suLi5pZF0uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiJdLCJuYW1lcyI6WyJpdGVtc0hhbmRsZXIiLCJyZXEiLCJyZXMiLCJxdWVyeSIsImlkIiwibWV0aG9kIiwiZGF0YSIsImF4aW9zIiwiZ2V0IiwiZGVzY3JpcHRpb24iLCJpdGVtcyIsInRpdGxlIiwicHJpY2UiLCJjdXJyZW5jeSIsImN1cnJlbmN5X2lkIiwiYW1vdW50IiwiZGVjaW1hbHMiLCJNYXRoIiwiZmxvb3IiLCJwaWN0dXJlIiwicGljdHVyZXMiLCJ1cmwiLCJjb25kaXRpb24iLCJmcmVlX3NoaXBwaW5nIiwic2hpcHBpbmciLCJzb2xkX3F1YW50aXR5IiwicGxhaW5fdGV4dCIsInN0YXR1cyIsImpzb24iLCJhdXRob3IiLCJuYW1lIiwibGFzdG5hbWUiLCJpdGVtIiwiYnJlYWRDcnVtYiIsImNhdGVnb3J5X2lkIiwic2V0SGVhZGVyIiwiZW5kIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZSxlQUFlQSxZQUFmLENBQTRCQyxHQUE1QixFQUFpQ0MsR0FBakMsRUFBc0M7QUFDbkQsUUFBTTtBQUNKQyxTQUFLLEVBQUU7QUFBRUM7QUFBRixLQURIO0FBRUpDO0FBRkksTUFHRkosR0FISjs7QUFLQSxNQUFJO0FBQ0YsVUFBTTtBQUFFSztBQUFGLFFBQVcsTUFBTUMsNENBQUssQ0FBQ0MsR0FBTixDQUFXLHNDQUFxQ0osRUFBRyxFQUFuRCxDQUF2QjtBQUNBLFVBQU1LLFdBQVcsR0FBRyxNQUFNRiw0Q0FBSyxDQUFDQyxHQUFOLENBQVcsc0NBQXFDSixFQUFHLGNBQW5ELENBQTFCO0FBRUEsVUFBTU0sS0FBSyxHQUFHO0FBQ1pOLFFBQUUsRUFBRUUsSUFBSSxDQUFDRixFQURHO0FBRVpPLFdBQUssRUFBRUwsSUFBSSxDQUFDSyxLQUZBO0FBR1pDLFdBQUssRUFBRTtBQUNMQyxnQkFBUSxFQUFFUCxJQUFJLENBQUNRLFdBRFY7QUFFTEMsY0FBTSxFQUFFVCxJQUFJLENBQUNNLEtBRlI7QUFHTEksZ0JBQVEsRUFBRVYsSUFBSSxDQUFDTSxLQUFMLEdBQWFLLElBQUksQ0FBQ0MsS0FBTCxDQUFXWixJQUFJLENBQUNNLEtBQWhCLENBSGxCLENBR3lDOztBQUh6QyxPQUhLO0FBUVpPLGFBQU8sRUFBRWIsSUFBSSxDQUFDYyxRQUFMLENBQWMsQ0FBZCxFQUFpQkMsR0FSZDtBQVNaQyxlQUFTLEVBQUVoQixJQUFJLENBQUNnQixTQVRKO0FBVVpDLG1CQUFhLEVBQUVqQixJQUFJLENBQUNrQixRQUFMLENBQWNELGFBVmpCO0FBV1pFLG1CQUFhLEVBQUVuQixJQUFJLENBQUNtQixhQVhSO0FBWVpoQixpQkFBVyxFQUFFQSxXQUFXLENBQUNILElBQVosQ0FBaUJvQjtBQVpsQixLQUFkOztBQWdCQSxZQUFRckIsTUFBUjtBQUNFLFdBQUssS0FBTDtBQUNFSCxXQUFHLENBQUN5QixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDbkJDLGdCQUFNLEVBQUU7QUFDTkMsZ0JBQUksRUFBRSxhQURBO0FBRU5DLG9CQUFRLEVBQUU7QUFGSixXQURXO0FBS25CQyxjQUFJLEVBQUV0QixLQUxhO0FBTW5CdUIsb0JBQVUsRUFBRTNCLElBQUksQ0FBQzRCO0FBTkUsU0FBckI7QUFRQTs7QUFFRjtBQUNFaEMsV0FBRyxDQUFDaUMsU0FBSixDQUFjLE9BQWQsRUFBdUIsQ0FBQyxLQUFELENBQXZCO0FBQ0FqQyxXQUFHLENBQUN5QixNQUFKLENBQVcsR0FBWCxFQUFnQlMsR0FBaEIsQ0FBcUIsVUFBUy9CLE1BQU8sY0FBckM7QUFkSjtBQWdCRCxHQXBDRCxDQW9DRSxPQUFPZ0MsS0FBUCxFQUFjO0FBQ2RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0Q7QUFFRixDOzs7Ozs7Ozs7OztBQ2hERCxrQyIsImZpbGUiOiJwYWdlcy9hcGkvaXRlbXMvWy4uLmlkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL2l0ZW1zL1suLi5pZF0uanNcIik7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBpdGVtc0hhbmRsZXIocmVxLCByZXMpIHtcclxuICBjb25zdCB7XHJcbiAgICBxdWVyeTogeyBpZCB9LFxyXG4gICAgbWV0aG9kLFxyXG4gIH0gPSByZXFcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5tZXJjYWRvbGlicmUuY29tL2l0ZW1zLyR7aWR9YCk7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9hcGkubWVyY2Fkb2xpYnJlLmNvbS9pdGVtcy8ke2lkfS9kZXNjcmlwdGlvbmApO1xyXG5cclxuICAgIGNvbnN0IGl0ZW1zID0ge1xyXG4gICAgICBpZDogZGF0YS5pZCxcclxuICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXHJcbiAgICAgIHByaWNlOiB7XHJcbiAgICAgICAgY3VycmVuY3k6IGRhdGEuY3VycmVuY3lfaWQsXHJcbiAgICAgICAgYW1vdW50OiBkYXRhLnByaWNlLFxyXG4gICAgICAgIGRlY2ltYWxzOiBkYXRhLnByaWNlIC0gTWF0aC5mbG9vcihkYXRhLnByaWNlKSAvL25vIGVudGVuZGkgYmllbiBkZSBkb25kZSBzYWNhciBsb3MgZGVjaW1hbGVzLCBhc2kgcXVlIGxvIGNhbGN1bG8gcmVzcGVjdG8gYWwgYW1vdW50XHJcbiAgICAgIH0sXHJcbiAgICAgIHBpY3R1cmU6IGRhdGEucGljdHVyZXNbMF0udXJsLFxyXG4gICAgICBjb25kaXRpb246IGRhdGEuY29uZGl0aW9uLFxyXG4gICAgICBmcmVlX3NoaXBwaW5nOiBkYXRhLnNoaXBwaW5nLmZyZWVfc2hpcHBpbmcsXHJcbiAgICAgIHNvbGRfcXVhbnRpdHk6IGRhdGEuc29sZF9xdWFudGl0eSxcclxuICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLmRhdGEucGxhaW5fdGV4dFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzd2l0Y2ggKG1ldGhvZCkge1xyXG4gICAgICBjYXNlICdHRVQnOlxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICAgIGF1dGhvcjoge1xyXG4gICAgICAgICAgICBuYW1lOiAnSnVhbiBNYW51ZWwnLFxyXG4gICAgICAgICAgICBsYXN0bmFtZTogJ0JhcnJldG8gWmFjYXJpYXMnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaXRlbTogaXRlbXMsXHJcbiAgICAgICAgICBicmVhZENydW1iOiBkYXRhLmNhdGVnb3J5X2lkXHJcbiAgICAgICAgfSlcclxuICAgICAgICBicmVha1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnR0VUJ10pXHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7bWV0aG9kfSBOb3QgQWxsb3dlZGApXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=