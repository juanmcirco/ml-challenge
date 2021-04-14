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
      lineNumber: 20,
      columnNumber: 32
    }
  }), "Loading...");
  return __jsx(Container, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 10
    }
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }), JSON.stringify(data.breadCrumb), data.items && data.items.map(function (item, idx) {
    return __jsx(_components_ResultRows__WEBPACK_IMPORTED_MODULE_3__["default"], {
      item: item,
      key: item.id,
      idx: idx,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 7
      }
    });
  }), data.item && __jsx(_components_ResultDescription__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: data.item,
    key: data.item.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaXRlbXMvW3Jlc3VsdHNdLmpzIl0sIm5hbWVzIjpbIlJlc3VsdHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInF1ZXJ5IiwicSIsInJlc3VsdHMiLCJ1c2VTd3IiLCJkYXRhIiwiZXJyb3IiLCJKU09OIiwic3RyaW5naWZ5IiwiYnJlYWRDcnVtYiIsIml0ZW1zIiwibWFwIiwiaXRlbSIsImlkeCIsImlkIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxPQUFULEdBQW1CO0FBQUE7O0FBQUE7O0FBQ2hDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRDtBQUFBLFdBQVNDLEtBQUssQ0FBQ0QsR0FBRCxDQUFMLENBQVdFLElBQVgsQ0FBZ0IsVUFBQ0MsR0FBRDtBQUFBLGFBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQUFUO0FBQUEsS0FBaEIsQ0FBVDtBQUFBLEdBQWhCOztBQUZnQyxzQkFHVFAsTUFBTSxDQUFDUSxLQUhFO0FBQUEsTUFHeEJDLENBSHdCLGlCQUd4QkEsQ0FId0I7QUFBQSxNQUdyQkMsT0FIcUIsaUJBR3JCQSxPQUhxQjs7QUFBQSxnQkFLUkMsbURBQU0sQ0FDNUJGLENBQUMsMEJBQW1CQSxDQUFuQix5QkFBdUNDLE9BQXZDLENBRDJCLEVBRTVCUixPQUY0QixDQUxFO0FBQUEsTUFLeEJVLElBTHdCLFdBS3hCQSxJQUx3QjtBQUFBLE1BS2xCQyxLQUxrQixXQUtsQkEsS0FMa0I7O0FBVWhDLE1BQUlBLEtBQUosRUFBVyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQVA7QUFDWCxNQUFJLENBQUNELElBQUwsRUFBVyxPQUFPLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVcsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQVgsZUFBUDtBQUVYLFNBQU8sTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTCxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESyxFQUVKRSxJQUFJLENBQUNDLFNBQUwsQ0FBZUgsSUFBSSxDQUFDSSxVQUFwQixDQUZJLEVBR0pKLElBQUksQ0FBQ0ssS0FBTCxJQUFjTCxJQUFJLENBQUNLLEtBQUwsQ0FBV0MsR0FBWCxDQUFlLFVBQUNDLElBQUQsRUFBT0MsR0FBUDtBQUFBLFdBQzVCLE1BQUMsOERBQUQ7QUFBWSxVQUFJLEVBQUVELElBQWxCO0FBQXdCLFNBQUcsRUFBRUEsSUFBSSxDQUFDRSxFQUFsQztBQUFzQyxTQUFHLEVBQUVELEdBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFENEI7QUFBQSxHQUFmLENBSFYsRUFNSlIsSUFBSSxDQUFDTyxJQUFMLElBQWEsTUFBQyxxRUFBRDtBQUFtQixRQUFJLEVBQUVQLElBQUksQ0FBQ08sSUFBOUI7QUFBb0MsT0FBRyxFQUFFUCxJQUFJLENBQUNPLElBQUwsQ0FBVUUsRUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5ULENBQVA7QUFRRDs7R0FyQnVCdEIsTztVQUNQRSxxRCxFQUlTVSwyQzs7O0tBTEZaLE87QUF1QnhCLElBQU11QixTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNENBQWY7TUFBTUYsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pdGVtcy9bcmVzdWx0c10uMzk1MzEwNTBjZGJhZTJhOTliNDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB1c2VTd3IgZnJvbSAnc3dyJ1xyXG5pbXBvcnQgUmVzdWx0Um93cyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Jlc3VsdFJvd3MnXHJcbmltcG9ydCBSZXN1bHREZXNjcmlwdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Jlc3VsdERlc2NyaXB0aW9uJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzdWx0cygpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBmZXRjaCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICBjb25zdCB7IHEsIHJlc3VsdHMgfSA9IHJvdXRlci5xdWVyeVxyXG5cclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTd3IoXHJcbiAgICBxID8gYC9hcGkvaXRlbXM/cT0ke3F9YCA6IGAvYXBpL2l0ZW1zLyR7cmVzdWx0c31gLFxyXG4gICAgZmV0Y2hlclxyXG4gIClcclxuXHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5GYWlsZWQgdG8gbG9hZCB1c2VyPC9kaXY+XHJcbiAgaWYgKCFkYXRhKSByZXR1cm4gPENvbnRhaW5lcj48SGVhZGVyIC8+TG9hZGluZy4uLjwvQ29udGFpbmVyPlxyXG5cclxuICByZXR1cm4gPENvbnRhaW5lcj5cclxuICAgIDxIZWFkZXIgLz5cclxuICAgIHtKU09OLnN0cmluZ2lmeShkYXRhLmJyZWFkQ3J1bWIpfVxyXG4gICAge2RhdGEuaXRlbXMgJiYgZGF0YS5pdGVtcy5tYXAoKGl0ZW0sIGlkeCkgPT5cclxuICAgICAgPFJlc3VsdFJvd3MgaXRlbT17aXRlbX0ga2V5PXtpdGVtLmlkfSBpZHg9e2lkeH0gLz5cclxuICAgICl9XHJcbiAgICB7ZGF0YS5pdGVtICYmIDxSZXN1bHREZXNjcmlwdGlvbiBpdGVtPXtkYXRhLml0ZW19IGtleT17ZGF0YS5pdGVtLmlkfSAvPn1cclxuICA8L0NvbnRhaW5lcj5cclxufVxyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xyXG4gIG1hcmdpbjogYXV0b1xyXG5gIl0sInNvdXJjZVJvb3QiOiIifQ==