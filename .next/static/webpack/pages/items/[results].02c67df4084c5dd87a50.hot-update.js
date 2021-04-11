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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaXRlbXMvW3Jlc3VsdHNdLmpzIl0sIm5hbWVzIjpbIlJlc3VsdHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInF1ZXJ5IiwicSIsInJlc3VsdHMiLCJ1c2VTd3IiLCJkYXRhIiwiZXJyb3IiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJpZCIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE9BQVQsR0FBbUI7QUFBQTs7QUFBQTs7QUFDaEMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFDQSxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxHQUFEO0FBQUEsV0FBU0MsS0FBSyxDQUFDRCxHQUFELENBQUwsQ0FBV0UsSUFBWCxDQUFnQixVQUFDQyxHQUFEO0FBQUEsYUFBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQVQ7QUFBQSxLQUFoQixDQUFUO0FBQUEsR0FBaEI7O0FBRmdDLHNCQUdUUCxNQUFNLENBQUNRLEtBSEU7QUFBQSxNQUd4QkMsQ0FId0IsaUJBR3hCQSxDQUh3QjtBQUFBLE1BR3JCQyxPQUhxQixpQkFHckJBLE9BSHFCOztBQUFBLGdCQUtSQyxtREFBTSxDQUM1QkYsQ0FBQywwQkFBbUJBLENBQW5CLHlCQUF1Q0MsT0FBdkMsQ0FEMkIsRUFFNUJSLE9BRjRCLENBTEU7QUFBQSxNQUt4QlUsSUFMd0IsV0FLeEJBLElBTHdCO0FBQUEsTUFLbEJDLEtBTGtCLFdBS2xCQSxLQUxrQjs7QUFVaEMsTUFBSUEsS0FBSixFQUFXLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBUDtBQUNYLE1BQUksQ0FBQ0QsSUFBTCxFQUFXLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBUDtBQUVYLFNBQU8sTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTCxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESyxFQUVKQSxJQUFJLENBQUNFLEtBQUwsSUFBY0YsSUFBSSxDQUFDRSxLQUFMLENBQVdDLEdBQVgsQ0FBZSxVQUFBQyxJQUFJO0FBQUEsV0FDaEMsTUFBQyw4REFBRDtBQUFZLFVBQUksRUFBRUEsSUFBbEI7QUFBd0IsU0FBRyxFQUFFQSxJQUFJLENBQUNDLEVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEZ0M7QUFBQSxHQUFuQixDQUZWLEVBS0pMLElBQUksQ0FBQ0ksSUFBTCxJQUFhLE1BQUMsOERBQUQ7QUFBbUIsUUFBSSxFQUFFSixJQUFJLENBQUNJLElBQTlCO0FBQW9DLE9BQUcsRUFBRUosSUFBSSxDQUFDSSxJQUFMLENBQVVDLEVBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMVCxDQUFQO0FBT0Q7O0dBcEJ1QmxCLE87VUFDUEUscUQsRUFJU1UsMkM7OztLQUxGWixPO0FBc0J4QixJQUFNbUIsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUFmO01BQU1GLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaXRlbXMvW3Jlc3VsdHNdLjAyYzY3ZGY0MDg0YzVkZDg3YTUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgdXNlU3dyIGZyb20gJ3N3cidcclxuaW1wb3J0IFJlc3VsdFJvd3MgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9SZXN1bHRSb3dzJ1xyXG5pbXBvcnQgUmVzdWx0RGVzY3JpcHRpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9SZXN1bHRSb3dzJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzdWx0cygpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBmZXRjaCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICBjb25zdCB7IHEsIHJlc3VsdHMgfSA9IHJvdXRlci5xdWVyeVxyXG5cclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTd3IoXHJcbiAgICBxID8gYC9hcGkvaXRlbXM/cT0ke3F9YCA6IGAvYXBpL2l0ZW1zLyR7cmVzdWx0c31gLFxyXG4gICAgZmV0Y2hlclxyXG4gIClcclxuXHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5GYWlsZWQgdG8gbG9hZCB1c2VyPC9kaXY+XHJcbiAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XHJcblxyXG4gIHJldHVybiA8Q29udGFpbmVyPlxyXG4gICAgPEhlYWRlciAvPlxyXG4gICAge2RhdGEuaXRlbXMgJiYgZGF0YS5pdGVtcy5tYXAoaXRlbSA9PlxyXG4gICAgICA8UmVzdWx0Um93cyBpdGVtPXtpdGVtfSBrZXk9e2l0ZW0uaWR9IC8+XHJcbiAgICApfVxyXG4gICAge2RhdGEuaXRlbSAmJiA8UmVzdWx0RGVzY3JpcHRpb24gaXRlbT17ZGF0YS5pdGVtfSBrZXk9e2RhdGEuaXRlbS5pZH0gLz59XHJcbiAgPC9Db250YWluZXI+XHJcbn1cclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcclxuICBtYXJnaW46IGF1dG9cclxuYCJdLCJzb3VyY2VSb290IjoiIn0=