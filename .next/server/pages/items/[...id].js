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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/items/[...id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CardWrapper.js":
/*!***********************************!*\
  !*** ./components/CardWrapper.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "@material-ui/core/CardMedia");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-number-format */ "react-number-format");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_number_format__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\circo\\OneDrive\\Documentos\\repos\\examen ml\\TestML\\components\\CardWrapper.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    display: 'flex',
    width: 886,
    minHeight: 150,
    margin: 'auto',
    padding: '20px 50px 20px 0',
    borderBottom: 'thin solid #eee',
    borderRadius: 0
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: 200
  }
}));
function CardWrapper({
  item
}) {
  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.cover,
    image: item.picture,
    title: item.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: classes.details,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    component: "h6",
    variant: "h6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, item.title), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "subtitle1",
    color: "textSecondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_6___default.a, {
    value: item.price.amount,
    displayType: 'text',
    thousandSeparator: true,
    prefix: item.price.currency === 'ARS' ? '$' : 'U$S',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  })))));
}

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Searchbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Searchbox */ "./components/Searchbox.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\circo\\OneDrive\\Documentos\\repos\\examen ml\\TestML\\components\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Header() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  const handleOptionSelected = search => {
    router.push(`/items/items?q=${search}`);
  };

  return __jsx(HeaderContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx(SearchComponent, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "https://http2.mlstatic.com/frontend-assets/ui-navigation/5.14.3/mercadolibre/logo__large_plus.png",
    height: "34",
    width: "134",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }), __jsx(_Searchbox__WEBPACK_IMPORTED_MODULE_1__["default"], {
    optionSelected: handleOptionSelected,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  })));
}
const HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    background-color: #fff159;
    display: flex;
    justify-content: center; 
    align-items: center;
    padding: 5px;
`;
const SearchComponent = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
    width: 1000px;
    margin: auto;
    display: flex;
`;

/***/ }),

/***/ "./components/Searchbox.js":
/*!*********************************!*\
  !*** ./components/Searchbox.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Searchbox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_lab_Autocomplete_Autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab/Autocomplete/Autocomplete */ "@material-ui/lab/Autocomplete/Autocomplete");
/* harmony import */ var _material_ui_lab_Autocomplete_Autocomplete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Autocomplete_Autocomplete__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cookie */ "react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\circo\\OneDrive\\Documentos\\repos\\examen ml\\TestML\\components\\Searchbox.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







function Searchbox({
  optionSelected
}) {
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: options,
    1: setOptions
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const loading = open && options.length === 0;
  const [cookies, setCookie] = Object(react_cookie__WEBPACK_IMPORTED_MODULE_5__["useCookies"])(["LastSearch"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_1___default()(`/api/autosuggest?q=${cookies.LastSearch}`);
      const autosuggest = await data.suggestions;

      if (active) {
        setOptions(autosuggest.map(key => {
          return {
            name: key.q
          };
        }));
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  const handleChange = async e => {
    if (e.target.value && e.target.value !== "") {
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_1___default()(`/api/autosuggest?q=${e.target.value}`);
      const autosuggest = await data.suggestions;
      setOptions(autosuggest.map(key => {
        return {
          name: key.q
        };
      }));
    }
  };

  const goToProduct = e => {
    optionSelected(e);
    setCookie("LastSearch", e);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);
  return __jsx(AutocompleteWrapper, {
    id: "autocomplete",
    open: open,
    onOpen: () => {
      setOpen(true);
    },
    onClose: () => {
      setOpen(false);
    },
    getOptionSelected: (option, value) => {
      goToProduct(option.name);
      return option.name === value.name;
    },
    getOptionLabel: option => option.name,
    onInputChange: handleChange,
    options: options,
    loading: loading,
    loadingText: 'Cargando',
    popupIcon: null,
    renderInput: params => __jsx("div", {
      ref: params.InputProps.ref,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }
    }, __jsx(InputWrapper, _extends({
      type: "text"
    }, params.inputProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 21
      }
    }))),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  });
}
const InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.input`
    padding: 7px 60px 9px 15px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    background-color: #fff;
    border: 0 rgba(0,0,0,.2);
    margin: 0 30px;
    display: flex;
    flex-grow: 1;
`;
const AutocompleteWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_material_ui_lab_Autocomplete_Autocomplete__WEBPACK_IMPORTED_MODULE_3___default.a)`
    display: flex;
    flex-grow: 1;
    div{
        display: flex;
        flex-grow: 1;
    }
`;

/***/ }),

/***/ "./pages/items/[...id].js":
/*!********************************!*\
  !*** ./pages/items/[...id].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Id; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_CardWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/CardWrapper */ "./components/CardWrapper.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.js");
var _jsxFileName = "C:\\Users\\circo\\OneDrive\\Documentos\\repos\\examen ml\\TestML\\pages\\items\\[...id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Id() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  const fetcher = url => fetch(url).then(res => res.json());

  const {
    id
  } = router.query;
  debugger;
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_2___default()(router.query.id ? `/api/items/${id}` : null, fetcher);
  if (error) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 23
    }
  }, "Failed to load user");
  if (!data) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 23
    }
  }, "Loading...");
  return __jsx(Container, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 12
    }
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), JSON.stringify(data));
}
const Container = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div`
  background-color: #ebebeb;
  margin: auto
`;

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/CardMedia":
/*!**********************************************!*\
  !*** external "@material-ui/core/CardMedia" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/lab/Autocomplete/Autocomplete":
/*!*************************************************************!*\
  !*** external "@material-ui/lab/Autocomplete/Autocomplete" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Autocomplete/Autocomplete");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-cookie":
/*!*******************************!*\
  !*** external "react-cookie" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-cookie");

/***/ }),

/***/ "react-number-format":
/*!**************************************!*\
  !*** external "react-number-format" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-number-format");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJkV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaGJveC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pdGVtcy9bLi4uaWRdLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvbGFiL0F1dG9jb21wbGV0ZS9BdXRvY29tcGxldGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1udW1iZXItZm9ybWF0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd3JcIiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsIndpZHRoIiwibWluSGVpZ2h0IiwibWFyZ2luIiwicGFkZGluZyIsImJvcmRlckJvdHRvbSIsImJvcmRlclJhZGl1cyIsImRldGFpbHMiLCJmbGV4RGlyZWN0aW9uIiwiY29udGVudCIsImZsZXgiLCJjb3ZlciIsIkNhcmRXcmFwcGVyIiwiaXRlbSIsImNsYXNzZXMiLCJ1c2VUaGVtZSIsInBpY3R1cmUiLCJ0aXRsZSIsInByaWNlIiwiYW1vdW50IiwiY3VycmVuY3kiLCJIZWFkZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVPcHRpb25TZWxlY3RlZCIsInNlYXJjaCIsInB1c2giLCJIZWFkZXJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJTZWFyY2hDb21wb25lbnQiLCJTZWFyY2hib3giLCJvcHRpb25TZWxlY3RlZCIsIm9wZW4iLCJzZXRPcGVuIiwidXNlU3RhdGUiLCJvcHRpb25zIiwic2V0T3B0aW9ucyIsImxvYWRpbmciLCJsZW5ndGgiLCJjb29raWVzIiwic2V0Q29va2llIiwidXNlQ29va2llcyIsInVzZUVmZmVjdCIsImFjdGl2ZSIsInVuZGVmaW5lZCIsImRhdGEiLCJheGlvcyIsIkxhc3RTZWFyY2giLCJhdXRvc3VnZ2VzdCIsInN1Z2dlc3Rpb25zIiwibWFwIiwia2V5IiwibmFtZSIsInEiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJnb1RvUHJvZHVjdCIsIm9wdGlvbiIsInBhcmFtcyIsIklucHV0UHJvcHMiLCJyZWYiLCJpbnB1dFByb3BzIiwiSW5wdXRXcmFwcGVyIiwiaW5wdXQiLCJBdXRvY29tcGxldGVXcmFwcGVyIiwiQXV0b2NvbXBsZXRlIiwiSWQiLCJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImlkIiwicXVlcnkiLCJlcnJvciIsInVzZVN3ciIsIkpTT04iLCJzdHJpbmdpZnkiLCJDb250YWluZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztR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QURiLEVBRTFCTixPQUYwQixDQUE5QjtBQUtBLE1BQUlRLEtBQUosRUFBVyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQVA7QUFDWCxNQUFJLENBQUNoQyxJQUFMLEVBQVcsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFQO0FBRVgsU0FBTyxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNILE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURHLEVBRUZrQyxJQUFJLENBQUNDLFNBQUwsQ0FBZW5DLElBQWYsQ0FGRSxDQUFQO0FBUUg7QUFFRCxNQUFNb0MsU0FBUyxHQUFHdEQsd0RBQU0sQ0FBQ0MsR0FBSTtBQUM3QjtBQUNBO0FBQ0EsQ0FIQSxDOzs7Ozs7Ozs7OztBQzlCQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1RTs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJwYWdlcy9pdGVtcy9bLi4uaWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pdGVtcy9bLi4uaWRdLmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcclxuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IE51bWJlckZvcm1hdCBmcm9tICdyZWFjdC1udW1iZXItZm9ybWF0JztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIHdpZHRoOiA4ODYsXHJcbiAgICBtaW5IZWlnaHQ6IDE1MCxcclxuICAgIG1hcmdpbjogJ2F1dG8nLFxyXG4gICAgcGFkZGluZzogJzIwcHggNTBweCAyMHB4IDAnLFxyXG4gICAgYm9yZGVyQm90dG9tOiAndGhpbiBzb2xpZCAjZWVlJyxcclxuICAgIGJvcmRlclJhZGl1czogMFxyXG4gIH0sXHJcbiAgZGV0YWlsczoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgfSxcclxuICBjb250ZW50OiB7XHJcbiAgICBmbGV4OiAnMSAwIGF1dG8nLFxyXG4gIH0sXHJcbiAgY292ZXI6IHtcclxuICAgIHdpZHRoOiAyMDAsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZFdyYXBwZXIoeyBpdGVtIH0pIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvdmVyfVxyXG4gICAgICAgIGltYWdlPXtpdGVtLnBpY3R1cmV9XHJcbiAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRldGFpbHN9PlxyXG4gICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoNlwiIHZhcmlhbnQ9XCJoNlwiPlxyXG4gICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgPE51bWJlckZvcm1hdCB2YWx1ZT17aXRlbS5wcmljZS5hbW91bnR9IGRpc3BsYXlUeXBlPXsndGV4dCd9IHRob3VzYW5kU2VwYXJhdG9yPXt0cnVlfSBwcmVmaXg9e2l0ZW0ucHJpY2UuY3VycmVuY3kgPT09ICdBUlMnID8gJyQnIDogJ1UkUyd9IC8+XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFNlYXJjaGJveCBmcm9tICcuL1NlYXJjaGJveCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgaGFuZGxlT3B0aW9uU2VsZWN0ZWQgPSAoc2VhcmNoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goYC9pdGVtcy9pdGVtcz9xPSR7c2VhcmNofWApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8SGVhZGVyQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8U2VhcmNoQ29tcG9uZW50PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9J2h0dHBzOi8vaHR0cDIubWxzdGF0aWMuY29tL2Zyb250ZW5kLWFzc2V0cy91aS1uYXZpZ2F0aW9uLzUuMTQuMy9tZXJjYWRvbGlicmUvbG9nb19fbGFyZ2VfcGx1cy5wbmcnIGhlaWdodD0nMzQnIHdpZHRoPScxMzQnIC8+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoYm94IG9wdGlvblNlbGVjdGVkPXtoYW5kbGVPcHRpb25TZWxlY3RlZH0gLz5cclxuICAgICAgICAgICAgPC9TZWFyY2hDb21wb25lbnQ+XHJcbiAgICAgICAgPC9IZWFkZXJDb250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IEhlYWRlckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMTU5O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbmBcclxuY29uc3QgU2VhcmNoQ29tcG9uZW50ID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiAxMDAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5gIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IEF1dG9jb21wbGV0ZSBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL0F1dG9jb21wbGV0ZS9BdXRvY29tcGxldGUnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSBcInJlYWN0LWNvb2tpZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoYm94KHsgb3B0aW9uU2VsZWN0ZWQgfSkge1xyXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgbG9hZGluZyA9IG9wZW4gJiYgb3B0aW9ucy5sZW5ndGggPT09IDA7XHJcbiAgICBjb25zdCBbY29va2llcywgc2V0Q29va2llXSA9IHVzZUNvb2tpZXMoW1wiTGFzdFNlYXJjaFwiXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKCFsb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zKGAvYXBpL2F1dG9zdWdnZXN0P3E9JHtjb29raWVzLkxhc3RTZWFyY2h9YClcclxuICAgICAgICAgICAgY29uc3QgYXV0b3N1Z2dlc3QgPSBhd2FpdCBkYXRhLnN1Z2dlc3Rpb25zO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgc2V0T3B0aW9ucyhhdXRvc3VnZ2VzdC5tYXAoKGtleSkgPT4geyByZXR1cm4geyBuYW1lOiBrZXkucSB9IH0pKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBhY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW2xvYWRpbmddKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSAmJiBlLnRhcmdldC52YWx1ZSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zKGAvYXBpL2F1dG9zdWdnZXN0P3E9JHtlLnRhcmdldC52YWx1ZX1gKVxyXG4gICAgICAgICAgICBjb25zdCBhdXRvc3VnZ2VzdCA9IGF3YWl0IGRhdGEuc3VnZ2VzdGlvbnM7XHJcbiAgICAgICAgICAgIHNldE9wdGlvbnMoYXV0b3N1Z2dlc3QubWFwKChrZXkpID0+IHsgcmV0dXJuIHsgbmFtZToga2V5LnEgfSB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdvVG9Qcm9kdWN0ID0gKGUpID0+IHtcclxuICAgICAgICBvcHRpb25TZWxlY3RlZChlKVxyXG4gICAgICAgIHNldENvb2tpZShcIkxhc3RTZWFyY2hcIiwgZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIW9wZW4pIHtcclxuICAgICAgICAgICAgc2V0T3B0aW9ucyhbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW29wZW5dKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBdXRvY29tcGxldGVXcmFwcGVyXHJcbiAgICAgICAgICAgIGlkPVwiYXV0b2NvbXBsZXRlXCJcclxuICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgb25PcGVuPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRPcGVuKHRydWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZ2V0T3B0aW9uU2VsZWN0ZWQ9eyhvcHRpb24sIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBnb1RvUHJvZHVjdChvcHRpb24ubmFtZSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24ubmFtZSA9PT0gdmFsdWUubmFtZVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLm5hbWV9XHJcbiAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAgICAgbG9hZGluZ1RleHQ9eydDYXJnYW5kbyd9XHJcbiAgICAgICAgICAgIHBvcHVwSWNvbj17bnVsbH1cclxuICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYgcmVmPXtwYXJhbXMuSW5wdXRQcm9wcy5yZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFdyYXBwZXIgdHlwZT1cInRleHRcIiB7Li4ucGFyYW1zLmlucHV0UHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IElucHV0V3JhcHBlciA9IHN0eWxlZC5pbnB1dGBcclxuICAgIHBhZGRpbmc6IDdweCA2MHB4IDlweCAxNXB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAwIHJnYmEoMCwwLDAsLjIpO1xyXG4gICAgbWFyZ2luOiAwIDMwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG5gXHJcblxyXG5jb25zdCBBdXRvY29tcGxldGVXcmFwcGVyID0gc3R5bGVkKEF1dG9jb21wbGV0ZSlgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgfVxyXG5gIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHVzZVN3ciBmcm9tICdzd3InXHJcbmltcG9ydCBDYXJkV3JhcHBlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NhcmRXcmFwcGVyJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSWQoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgICBkZWJ1Z2dlclxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU3dyKFxyXG4gICAgICAgIHJvdXRlci5xdWVyeS5pZCA/IGAvYXBpL2l0ZW1zLyR7aWR9YCA6IG51bGwsXHJcbiAgICAgICAgZmV0Y2hlclxyXG4gICAgKVxyXG5cclxuICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+RmFpbGVkIHRvIGxvYWQgdXNlcjwvZGl2PlxyXG4gICAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XHJcblxyXG4gICAgcmV0dXJuIDxDb250YWluZXI+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIHtKU09OLnN0cmluZ2lmeShkYXRhKX1cclxuICAgICAgICB7Lyp7ZGF0YS5pdGVtcy5tYXAoaXRlbSA9PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPENhcmRXcmFwcGVyIGl0ZW09e2l0ZW19IGtleT17aXRlbS5pZH0gLz5cclxuICAgICAgICApfSovfVxyXG4gICAgPC9Db250YWluZXI+XHJcbn1cclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcclxuICBtYXJnaW46IGF1dG9cclxuYCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvbGFiL0F1dG9jb21wbGV0ZS9BdXRvY29tcGxldGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW51bWJlci1mb3JtYXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=