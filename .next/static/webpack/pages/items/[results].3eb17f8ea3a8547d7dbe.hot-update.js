webpackHotUpdate_N_E("pages/items/[results]",{

/***/ "./pages/items/[results].js":
/*!**********************************!*\
  !*** ./pages/items/[results].js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Results; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _components_ResultRows__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ResultRows */ "./components/ResultRows.js");
/* harmony import */ var _components_ResultDescription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ResultDescription */ "./components/ResultDescription.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.js");
var _jsxFileName = "C:\\Users\\circo\\OneDrive\\Documentos\\repos\\examen ml\\TestML\\pages\\items\\[results].js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function Results() {
  _s();

  var _this = this;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  var fetcher = function fetcher(url) {
    return fetch(url).then(function (res) {
      return res.json();
    });
  };

  var _router$query = router.query,
      q = _router$query.q,
      results = _router$query.results;

  var _useSwr = Object(swr__WEBPACK_IMPORTED_MODULE_2__["default"])(q ? "/api/items?q=".concat(q) : "/api/items/".concat(results), fetcher),
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
  if (!data) return __jsx(Container, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }), "Loading...");
  return __jsx(Container, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 10
    }
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }), data.items.breadCrumb, data.items && data.items.map(function (item, idx) {
    return __jsx(_components_ResultRows__WEBPACK_IMPORTED_MODULE_3__["default"], {
      item: item,
      key: item.id,
      idx: idx,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }
    });
  }), data.item && __jsx(_components_ResultDescription__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: data.item,
    key: data.item.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 19
    }
  }));
}

_s(Results, "0ST1BDL2a2x8mdZH1V3Mxu6c/7s=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"], swr__WEBPACK_IMPORTED_MODULE_2__["default"]];
});

_c = Results;
var Container = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "results__Container",
  componentId: "u8l7l8-0"
})(["background-color:#ebebeb;margin:auto"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaXRlbXMvW3Jlc3VsdHNdLmpzIl0sIm5hbWVzIjpbIlJlc3VsdHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInF1ZXJ5IiwicSIsInJlc3VsdHMiLCJ1c2VTd3IiLCJkYXRhIiwiZXJyb3IiLCJpdGVtcyIsImJyZWFkQ3J1bWIiLCJtYXAiLCJpdGVtIiwiaWR4IiwiaWQiLCJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE9BQVQsR0FBbUI7QUFBQTs7QUFBQTs7QUFDaEMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFDQSxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxHQUFEO0FBQUEsV0FBU0MsS0FBSyxDQUFDRCxHQUFELENBQUwsQ0FBV0UsSUFBWCxDQUFnQixVQUFDQyxHQUFEO0FBQUEsYUFBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQVQ7QUFBQSxLQUFoQixDQUFUO0FBQUEsR0FBaEI7O0FBRmdDLHNCQUdUUCxNQUFNLENBQUNRLEtBSEU7QUFBQSxNQUd4QkMsQ0FId0IsaUJBR3hCQSxDQUh3QjtBQUFBLE1BR3JCQyxPQUhxQixpQkFHckJBLE9BSHFCOztBQUFBLGdCQUtSQyxtREFBTSxDQUM1QkYsQ0FBQywwQkFBbUJBLENBQW5CLHlCQUF1Q0MsT0FBdkMsQ0FEMkIsRUFFNUJSLE9BRjRCLENBTEU7QUFBQSxNQUt4QlUsSUFMd0IsV0FLeEJBLElBTHdCO0FBQUEsTUFLbEJDLEtBTGtCLFdBS2xCQSxLQUxrQjs7QUFVaEMsTUFBSUEsS0FBSixFQUFXLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBUDtBQUNYLE1BQUksQ0FBQ0QsSUFBTCxFQUFXLE9BQU8sTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDaEIsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRGdCLGVBQVA7QUFLWCxTQUFPLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0wsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREssRUFFSkEsSUFBSSxDQUFDRSxLQUFMLENBQVdDLFVBRlAsRUFHSkgsSUFBSSxDQUFDRSxLQUFMLElBQWNGLElBQUksQ0FBQ0UsS0FBTCxDQUFXRSxHQUFYLENBQWUsVUFBQ0MsSUFBRCxFQUFPQyxHQUFQO0FBQUEsV0FDNUIsTUFBQyw4REFBRDtBQUFZLFVBQUksRUFBRUQsSUFBbEI7QUFBd0IsU0FBRyxFQUFFQSxJQUFJLENBQUNFLEVBQWxDO0FBQXNDLFNBQUcsRUFBRUQsR0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUQ0QjtBQUFBLEdBQWYsQ0FIVixFQU1KTixJQUFJLENBQUNLLElBQUwsSUFBYSxNQUFDLHFFQUFEO0FBQW1CLFFBQUksRUFBRUwsSUFBSSxDQUFDSyxJQUE5QjtBQUFvQyxPQUFHLEVBQUVMLElBQUksQ0FBQ0ssSUFBTCxDQUFVRSxFQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTlQsQ0FBUDtBQVFEOztHQXhCdUJwQixPO1VBQ1BFLHFELEVBSVNVLDJDOzs7S0FMRlosTztBQTBCeEIsSUFBTXFCLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw0Q0FBZjtNQUFNRixTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2l0ZW1zL1tyZXN1bHRzXS4zZWIxN2Y4ZWEzYTg1NDdkN2RiZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHVzZVN3ciBmcm9tICdzd3InXHJcbmltcG9ydCBSZXN1bHRSb3dzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUmVzdWx0Um93cydcclxuaW1wb3J0IFJlc3VsdERlc2NyaXB0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUmVzdWx0RGVzY3JpcHRpb24nXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZWFkZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXN1bHRzKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gIGNvbnN0IHsgcSwgcmVzdWx0cyB9ID0gcm91dGVyLnF1ZXJ5XHJcblxyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVN3cihcclxuICAgIHEgPyBgL2FwaS9pdGVtcz9xPSR7cX1gIDogYC9hcGkvaXRlbXMvJHtyZXN1bHRzfWAsXHJcbiAgICBmZXRjaGVyXHJcbiAgKVxyXG5cclxuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PkZhaWxlZCB0byBsb2FkIHVzZXI8L2Rpdj5cclxuICBpZiAoIWRhdGEpIHJldHVybiA8Q29udGFpbmVyPlxyXG4gICAgPEhlYWRlciAvPlxyXG4gIExvYWRpbmcuLi5cclxuPC9Db250YWluZXI+XHJcblxyXG4gIHJldHVybiA8Q29udGFpbmVyPlxyXG4gICAgPEhlYWRlciAvPlxyXG4gICAge2RhdGEuaXRlbXMuYnJlYWRDcnVtYn1cclxuICAgIHtkYXRhLml0ZW1zICYmIGRhdGEuaXRlbXMubWFwKChpdGVtLCBpZHgpID0+XHJcbiAgICAgIDxSZXN1bHRSb3dzIGl0ZW09e2l0ZW19IGtleT17aXRlbS5pZH0gaWR4PXtpZHh9IC8+XHJcbiAgICApfVxyXG4gICAge2RhdGEuaXRlbSAmJiA8UmVzdWx0RGVzY3JpcHRpb24gaXRlbT17ZGF0YS5pdGVtfSBrZXk9e2RhdGEuaXRlbS5pZH0gLz59XHJcbiAgPC9Db250YWluZXI+XHJcbn1cclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcclxuICBtYXJnaW46IGF1dG9cclxuYCJdLCJzb3VyY2VSb290IjoiIn0=