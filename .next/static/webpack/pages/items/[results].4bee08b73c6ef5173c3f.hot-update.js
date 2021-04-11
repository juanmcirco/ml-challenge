webpackHotUpdate_N_E("pages/items/[results]",{

/***/ "./components/ResultDescription.js":
/*!*****************************************!*\
  !*** ./components/ResultDescription.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResultDescription; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\circo\\OneDrive\\Documentos\\repos\\examen ml\\TestML\\components\\ResultDescription.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'block',
      width: 886,
      minHeight: 886,
      margin: 'auto',
      padding: '20px 50px 20px 0',
      borderBottom: 'thin solid #eee',
      borderRadius: 0
    },
    details: {
      display: 'flex',
      flexDirection: 'column'
    },
    description: {
      display: 'flex',
      flexGrow: '1'
    },
    content: {
      flex: '1 0 auto'
    },
    cover: {
      width: 200
    }
  };
});
function ResultDescription(_ref) {
  _s();

  var item = _ref.item;
  var classes = useStyles();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.details,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.cover,
    image: item.picture,
    title: item.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    component: "h6",
    variant: "h6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, item.title), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "subtitle1",
    color: "textSecondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: item.price.amount,
    displayType: 'text',
    thousandSeparator: true,
    prefix: item.price.currency === 'ARS' ? '$' : 'U$S',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  })))), __jsx("div", {
    className: classes.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    component: "p",
    variant: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, item.description)));
}

_s(ResultDescription, "VtevrTi9kvKTG+vqc/SYVHiEGOM=", false, function () {
  return [useStyles, _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["useTheme"]];
});

_c = ResultDescription;

var _c;

$RefreshReg$(_c, "ResultDescription");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXN1bHREZXNjcmlwdGlvbi5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsIndpZHRoIiwibWluSGVpZ2h0IiwibWFyZ2luIiwicGFkZGluZyIsImJvcmRlckJvdHRvbSIsImJvcmRlclJhZGl1cyIsImRldGFpbHMiLCJmbGV4RGlyZWN0aW9uIiwiZGVzY3JpcHRpb24iLCJmbGV4R3JvdyIsImNvbnRlbnQiLCJmbGV4IiwiY292ZXIiLCJSZXN1bHREZXNjcmlwdGlvbiIsIml0ZW0iLCJjbGFzc2VzIiwidXNlVGhlbWUiLCJwaWN0dXJlIiwidGl0bGUiLCJwcmljZSIsImFtb3VudCIsImN1cnJlbmN5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFFBQUksRUFBRTtBQUNKQyxhQUFPLEVBQUUsT0FETDtBQUVKQyxXQUFLLEVBQUUsR0FGSDtBQUdKQyxlQUFTLEVBQUUsR0FIUDtBQUlKQyxZQUFNLEVBQUUsTUFKSjtBQUtKQyxhQUFPLEVBQUUsa0JBTEw7QUFNSkMsa0JBQVksRUFBRSxpQkFOVjtBQU9KQyxrQkFBWSxFQUFFO0FBUFYsS0FEaUM7QUFVdkNDLFdBQU8sRUFBRTtBQUNQUCxhQUFPLEVBQUUsTUFERjtBQUVQUSxtQkFBYSxFQUFFO0FBRlIsS0FWOEI7QUFjdkNDLGVBQVcsRUFBRTtBQUNYVCxhQUFPLEVBQUUsTUFERTtBQUVYVSxjQUFRLEVBQUU7QUFGQyxLQWQwQjtBQWtCdkNDLFdBQU8sRUFBRTtBQUNQQyxVQUFJLEVBQUU7QUFEQyxLQWxCOEI7QUFxQnZDQyxTQUFLLEVBQUU7QUFDTFosV0FBSyxFQUFFO0FBREY7QUFyQmdDLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBMEJlLFNBQVNhLGlCQUFULE9BQXFDO0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ2xELE1BQU1DLE9BQU8sR0FBR3BCLFNBQVMsRUFBekI7QUFDQSxNQUFNRSxLQUFLLEdBQUdtQix5RUFBUSxFQUF0QjtBQUVBLFNBQ0UsTUFBQyw4REFBRDtBQUFNLGFBQVMsRUFBRUQsT0FBTyxDQUFDakIsSUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFaUIsT0FBTyxDQUFDVCxPQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtRUFBRDtBQUNFLGFBQVMsRUFBRVMsT0FBTyxDQUFDSCxLQURyQjtBQUVFLFNBQUssRUFBRUUsSUFBSSxDQUFDRyxPQUZkO0FBR0UsU0FBSyxFQUFFSCxJQUFJLENBQUNJLEtBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBTUUsTUFBQyxxRUFBRDtBQUFhLGFBQVMsRUFBRUgsT0FBTyxDQUFDTCxPQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUFZLGFBQVMsRUFBQyxJQUF0QjtBQUEyQixXQUFPLEVBQUMsSUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSSxJQUFJLENBQUNJLEtBRFIsQ0FERixFQUlFLE1BQUMsb0VBQUQ7QUFBWSxXQUFPLEVBQUMsV0FBcEI7QUFBZ0MsU0FBSyxFQUFDLGVBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQWMsU0FBSyxFQUFFSixJQUFJLENBQUNLLEtBQUwsQ0FBV0MsTUFBaEM7QUFBd0MsZUFBVyxFQUFFLE1BQXJEO0FBQTZELHFCQUFpQixFQUFFLElBQWhGO0FBQXNGLFVBQU0sRUFBRU4sSUFBSSxDQUFDSyxLQUFMLENBQVdFLFFBQVgsS0FBd0IsS0FBeEIsR0FBZ0MsR0FBaEMsR0FBc0MsS0FBcEk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSkYsQ0FORixDQURGLEVBZ0JFO0FBQUssYUFBUyxFQUFFTixPQUFPLENBQUNQLFdBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQVksYUFBUyxFQUFDLEdBQXRCO0FBQTBCLFdBQU8sRUFBQyxHQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dNLElBQUksQ0FBQ04sV0FEUixDQURGLENBaEJGLENBREY7QUF3QkQ7O0dBNUJ1QkssaUI7VUFDTmxCLFMsRUFDRnFCLGlFOzs7S0FGUUgsaUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaXRlbXMvW3Jlc3VsdHNdLjRiZWUwOGI3M2M2ZWY1MTczYzNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYSc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgTnVtYmVyRm9ybWF0IGZyb20gJ3JlYWN0LW51bWJlci1mb3JtYXQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgd2lkdGg6IDg4NixcclxuICAgIG1pbkhlaWdodDogODg2LFxyXG4gICAgbWFyZ2luOiAnYXV0bycsXHJcbiAgICBwYWRkaW5nOiAnMjBweCA1MHB4IDIwcHggMCcsXHJcbiAgICBib3JkZXJCb3R0b206ICd0aGluIHNvbGlkICNlZWUnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAwXHJcbiAgfSxcclxuICBkZXRhaWxzOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICB9LFxyXG4gIGRlc2NyaXB0aW9uOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4R3JvdzogJzEnLFxyXG4gIH0sXHJcbiAgY29udGVudDoge1xyXG4gICAgZmxleDogJzEgMCBhdXRvJyxcclxuICB9LFxyXG4gIGNvdmVyOiB7XHJcbiAgICB3aWR0aDogMjAwLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc3VsdERlc2NyaXB0aW9uKHsgaXRlbSB9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsc30+XHJcbiAgICAgICAgPENhcmRNZWRpYVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvdmVyfVxyXG4gICAgICAgICAgaW1hZ2U9e2l0ZW0ucGljdHVyZX1cclxuICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImg2XCIgdmFyaWFudD1cImg2XCI+XHJcbiAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICA8TnVtYmVyRm9ybWF0IHZhbHVlPXtpdGVtLnByaWNlLmFtb3VudH0gZGlzcGxheVR5cGU9eyd0ZXh0J30gdGhvdXNhbmRTZXBhcmF0b3I9e3RydWV9IHByZWZpeD17aXRlbS5wcmljZS5jdXJyZW5jeSA9PT0gJ0FSUycgPyAnJCcgOiAnVSRTJ30gLz5cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cInBcIiB2YXJpYW50PVwicFwiPlxyXG4gICAgICAgICAge2l0ZW0uZGVzY3JpcHRpb259XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==