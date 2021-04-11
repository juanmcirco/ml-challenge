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
      display: 'flex',
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
  }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.cover,
    image: item.picture,
    title: item.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: classes.details,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
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

/***/ }),

/***/ "./pages/items/[results].js":
/*!**********************************!*\
  !*** ./pages/items/[results].js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Results; });
/* harmony import */ var C_Users_circo_OneDrive_Documentos_repos_examen_ml_TestML_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _components_ResultRows__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ResultRows */ "./components/ResultRows.js");
/* harmony import */ var _components_ResultDescription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ResultDescription */ "./components/ResultDescription.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.js");


var _jsxFileName = "C:\\Users\\circo\\OneDrive\\Documentos\\repos\\examen ml\\TestML\\pages\\items\\[results].js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(C_Users_circo_OneDrive_Documentos_repos_examen_ml_TestML_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-color: #ebebeb;\n  margin: auto\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








function Results() {
  _s();

  var _this = this;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var fetcher = function fetcher(url) {
    return fetch(url).then(function (res) {
      return res.json();
    });
  };

  var _router$query = router.query,
      q = _router$query.q,
      results = _router$query.results;

  var _useSwr = Object(swr__WEBPACK_IMPORTED_MODULE_3__["default"])(q ? "/api/items?q=".concat(q) : "/api/items/".concat(results), fetcher),
      data = _useSwr.data,
      error = _useSwr.error;

  if (error) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, "Failed to load user");
  if (!data) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, "Loading...");
  return __jsx(Container, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 10
    }
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }), data.items && data.items.map(function (item) {
    return __jsx(_components_ResultRows__WEBPACK_IMPORTED_MODULE_4__["default"], {
      item: item,
      key: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }
    });
  }), data.item && __jsx(_components_ResultDescription__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: data.item,
    key: data.item.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 19
    }
  }));
}

_s(Results, "0ST1BDL2a2x8mdZH1V3Mxu6c/7s=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"], swr__WEBPACK_IMPORTED_MODULE_3__["default"]];
});

_c = Results;
var Container = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject());
_c2 = Container;

var _c, _c2;

$RefreshReg$(_c, "Results");
$RefreshReg$(_c2, "Container");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXN1bHREZXNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaXRlbXMvW3Jlc3VsdHNdLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJkaXNwbGF5Iiwid2lkdGgiLCJtaW5IZWlnaHQiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyQm90dG9tIiwiYm9yZGVyUmFkaXVzIiwiZGV0YWlscyIsImZsZXhEaXJlY3Rpb24iLCJkZXNjcmlwdGlvbiIsImZsZXhHcm93IiwiY29udGVudCIsImZsZXgiLCJjb3ZlciIsIlJlc3VsdERlc2NyaXB0aW9uIiwiaXRlbSIsImNsYXNzZXMiLCJ1c2VUaGVtZSIsInBpY3R1cmUiLCJ0aXRsZSIsInByaWNlIiwiYW1vdW50IiwiY3VycmVuY3kiLCJSZXN1bHRzIiwicm91dGVyIiwidXNlUm91dGVyIiwiZmV0Y2hlciIsInVybCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJxdWVyeSIsInEiLCJyZXN1bHRzIiwidXNlU3dyIiwiZGF0YSIsImVycm9yIiwiaXRlbXMiLCJtYXAiLCJpZCIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxRQUFJLEVBQUU7QUFDSkMsYUFBTyxFQUFFLE1BREw7QUFFSkMsV0FBSyxFQUFFLEdBRkg7QUFHSkMsZUFBUyxFQUFFLEdBSFA7QUFJSkMsWUFBTSxFQUFFLE1BSko7QUFLSkMsYUFBTyxFQUFFLGtCQUxMO0FBTUpDLGtCQUFZLEVBQUUsaUJBTlY7QUFPSkMsa0JBQVksRUFBRTtBQVBWLEtBRGlDO0FBVXZDQyxX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LElBTFQsQ0FBUDtBQU9EOztHQXBCdUJqQixPO1VBQ1BFLHFELEVBSVNVLDJDOzs7S0FMRlosTztBQXNCeEIsSUFBTWtCLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBZjtNQUFNRixTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2l0ZW1zL1tyZXN1bHRzXS5kNzM0ZWNjYjJiZDY1YTQyOGExYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcclxuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IE51bWJlckZvcm1hdCBmcm9tICdyZWFjdC1udW1iZXItZm9ybWF0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgd2lkdGg6IDg4NixcclxuICAgIG1pbkhlaWdodDogODg2LFxyXG4gICAgbWFyZ2luOiAnYXV0bycsXHJcbiAgICBwYWRkaW5nOiAnMjBweCA1MHB4IDIwcHggMCcsXHJcbiAgICBib3JkZXJCb3R0b206ICd0aGluIHNvbGlkICNlZWUnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAwXHJcbiAgfSxcclxuICBkZXRhaWxzOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICB9LFxyXG4gIGRlc2NyaXB0aW9uOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4R3JvdzogJzEnLFxyXG4gIH0sXHJcbiAgY29udGVudDoge1xyXG4gICAgZmxleDogJzEgMCBhdXRvJyxcclxuICB9LFxyXG4gIGNvdmVyOiB7XHJcbiAgICB3aWR0aDogMjAwLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc3VsdERlc2NyaXB0aW9uKHsgaXRlbSB9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPENhcmRNZWRpYVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb3Zlcn1cclxuICAgICAgICBpbWFnZT17aXRlbS5waWN0dXJlfVxyXG4gICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWxzfT5cclxuICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDZcIiB2YXJpYW50PVwiaDZcIj5cclxuICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgIDxOdW1iZXJGb3JtYXQgdmFsdWU9e2l0ZW0ucHJpY2UuYW1vdW50fSBkaXNwbGF5VHlwZT17J3RleHQnfSB0aG91c2FuZFNlcGFyYXRvcj17dHJ1ZX0gcHJlZml4PXtpdGVtLnByaWNlLmN1cnJlbmN5ID09PSAnQVJTJyA/ICckJyA6ICdVJFMnfSAvPlxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwicFwiIHZhcmlhbnQ9XCJwXCI+XHJcbiAgICAgICAgICB7aXRlbS5kZXNjcmlwdGlvbn1cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgdXNlU3dyIGZyb20gJ3N3cidcclxuaW1wb3J0IFJlc3VsdFJvd3MgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9SZXN1bHRSb3dzJ1xyXG5pbXBvcnQgUmVzdWx0RGVzY3JpcHRpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9SZXN1bHREZXNjcmlwdGlvbidcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hlYWRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc3VsdHMoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBmZXRjaGVyID0gKHVybCkgPT4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgY29uc3QgeyBxLCByZXN1bHRzIH0gPSByb3V0ZXIucXVlcnlcclxuXHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU3dyKFxyXG4gICAgcSA/IGAvYXBpL2l0ZW1zP3E9JHtxfWAgOiBgL2FwaS9pdGVtcy8ke3Jlc3VsdHN9YCxcclxuICAgIGZldGNoZXJcclxuICApXHJcblxyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+RmFpbGVkIHRvIGxvYWQgdXNlcjwvZGl2PlxyXG4gIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxyXG5cclxuICByZXR1cm4gPENvbnRhaW5lcj5cclxuICAgIDxIZWFkZXIgLz5cclxuICAgIHtkYXRhLml0ZW1zICYmIGRhdGEuaXRlbXMubWFwKGl0ZW0gPT5cclxuICAgICAgPFJlc3VsdFJvd3MgaXRlbT17aXRlbX0ga2V5PXtpdGVtLmlkfSAvPlxyXG4gICAgKX1cclxuICAgIHtkYXRhLml0ZW0gJiYgPFJlc3VsdERlc2NyaXB0aW9uIGl0ZW09e2RhdGEuaXRlbX0ga2V5PXtkYXRhLml0ZW0uaWR9IC8+fVxyXG4gIDwvQ29udGFpbmVyPlxyXG59XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XHJcbiAgbWFyZ2luOiBhdXRvXHJcbmAiXSwic291cmNlUm9vdCI6IiJ9