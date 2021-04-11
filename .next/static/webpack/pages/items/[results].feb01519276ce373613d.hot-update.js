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
/* harmony import */ var C_Users_circo_OneDrive_Documentos_repos_examen_ml_TestML_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _components_ResultRows__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ResultRows */ "./components/ResultRows.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.js");


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





ResultDescription;


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
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
  }), data.item && __jsx(_components_ResultRows__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
var Container = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaXRlbXMvW3Jlc3VsdHNdLmpzIl0sIm5hbWVzIjpbIlJlc3VsdERlc2NyaXB0aW9uIiwiUmVzdWx0cyIsInJvdXRlciIsInVzZVJvdXRlciIsImZldGNoZXIiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwicXVlcnkiLCJxIiwicmVzdWx0cyIsInVzZVN3ciIsImRhdGEiLCJlcnJvciIsIml0ZW1zIiwibWFwIiwiaXRlbSIsImlkIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLGlCQUFpQjtBQUNqQjtBQUNBO0FBRWUsU0FBU0MsT0FBVCxHQUFtQjtBQUFBOztBQUFBOztBQUNoQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUNBLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEdBQUQ7QUFBQSxXQUFTQyxLQUFLLENBQUNELEdBQUQsQ0FBTCxDQUFXRSxJQUFYLENBQWdCLFVBQUNDLEdBQUQ7QUFBQSxhQUFTQSxHQUFHLENBQUNDLElBQUosRUFBVDtBQUFBLEtBQWhCLENBQVQ7QUFBQSxHQUFoQjs7QUFGZ0Msc0JBR1RQLE1BQU0sQ0FBQ1EsS0FIRTtBQUFBLE1BR3hCQyxDQUh3QixpQkFHeEJBLENBSHdCO0FBQUEsTUFHckJDLE9BSHFCLGlCQUdyQkEsT0FIcUI7O0FBQUEsZ0JBS1JDLG1EQUFNLENBQzVCRixDQUFDLDBCQUFtQkEsQ0FBbkIseUJBQXVDQyxPQUF2QyxDQUQyQixFQUU1QlIsT0FGNEIsQ0FMRTtBQUFBLE1BS3hCVSxJQUx3QixXQUt4QkEsSUFMd0I7QUFBQSxNQUtsQkMsS0FMa0IsV0FLbEJBLEtBTGtCOztBQVVoQyxNQUFJQSxLQUFKLEVBQVcsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUFQO0FBQ1gsTUFBSSxDQUFDRCxJQUFMLEVBQVcsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFQO0FBRVgsU0FBTyxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNMLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURLLEVBRUpBLElBQUksQ0FBQ0UsS0FBTCxJQUFjRixJQUFJLENBQUNFLEtBQUwsQ0FBV0MsR0FBWCxDQUFlLFVBQUFDLElBQUk7QUFBQSxXQUNoQyxNQUFDLDhEQUFEO0FBQVksVUFBSSxFQUFFQSxJQUFsQjtBQUF3QixTQUFHLEVBQUVBLElBQUksQ0FBQ0MsRUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURnQztBQUFBLEdBQW5CLENBRlYsRUFLSkwsSUFBSSxDQUFDSSxJQUFMLElBQWEsTUFBQyw4REFBRDtBQUFZLFFBQUksRUFBRUosSUFBSSxDQUFDSSxJQUF2QjtBQUE2QixPQUFHLEVBQUVKLElBQUksQ0FBQ0ksSUFBTCxDQUFVQyxFQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTFQsQ0FBUDtBQU9EOztHQXBCdUJsQixPO1VBQ1BFLHFELEVBSVNVLDJDOzs7S0FMRlosTztBQXNCeEIsSUFBTW1CLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBZjtNQUFNRixTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2l0ZW1zL1tyZXN1bHRzXS5mZWIwMTUxOTI3NmNlMzczNjEzZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHVzZVN3ciBmcm9tICdzd3InXHJcbmltcG9ydCBSZXN1bHRSb3dzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUmVzdWx0Um93cydcclxuUmVzdWx0RGVzY3JpcHRpb25cclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hlYWRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc3VsdHMoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBmZXRjaGVyID0gKHVybCkgPT4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgY29uc3QgeyBxLCByZXN1bHRzIH0gPSByb3V0ZXIucXVlcnlcclxuXHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU3dyKFxyXG4gICAgcSA/IGAvYXBpL2l0ZW1zP3E9JHtxfWAgOiBgL2FwaS9pdGVtcy8ke3Jlc3VsdHN9YCxcclxuICAgIGZldGNoZXJcclxuICApXHJcblxyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+RmFpbGVkIHRvIGxvYWQgdXNlcjwvZGl2PlxyXG4gIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxyXG5cclxuICByZXR1cm4gPENvbnRhaW5lcj5cclxuICAgIDxIZWFkZXIgLz5cclxuICAgIHtkYXRhLml0ZW1zICYmIGRhdGEuaXRlbXMubWFwKGl0ZW0gPT5cclxuICAgICAgPFJlc3VsdFJvd3MgaXRlbT17aXRlbX0ga2V5PXtpdGVtLmlkfSAvPlxyXG4gICAgKX1cclxuICAgIHtkYXRhLml0ZW0gJiYgPFJlc3VsdFJvd3MgaXRlbT17ZGF0YS5pdGVtfSBrZXk9e2RhdGEuaXRlbS5pZH0gLz59XHJcbiAgPC9Db250YWluZXI+XHJcbn1cclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcclxuICBtYXJnaW46IGF1dG9cclxuYCJdLCJzb3VyY2VSb290IjoiIn0=