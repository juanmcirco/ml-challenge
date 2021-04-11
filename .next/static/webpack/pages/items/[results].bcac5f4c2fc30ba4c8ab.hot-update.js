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
/* harmony import */ var _components_CardWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/CardWrapper */ "./components/CardWrapper.js");
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

  var q = router.query.q;

  var _useSwr = Object(swr__WEBPACK_IMPORTED_MODULE_3__["default"])(q ? "/api/items?q=".concat(router.query.q) : null, fetcher),
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
  }), data.items.map(function (item) {
    return __jsx(_components_CardWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], {
      item: item,
      key: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaXRlbXMvW3Jlc3VsdHNdLmpzIl0sIm5hbWVzIjpbIlJlc3VsdHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInEiLCJxdWVyeSIsInVzZVN3ciIsImRhdGEiLCJlcnJvciIsIml0ZW1zIiwibWFwIiwiaXRlbSIsImlkIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE9BQVQsR0FBbUI7QUFBQTs7QUFBQTs7QUFDaEMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFDQSxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxHQUFEO0FBQUEsV0FBU0MsS0FBSyxDQUFDRCxHQUFELENBQUwsQ0FBV0UsSUFBWCxDQUFnQixVQUFDQyxHQUFEO0FBQUEsYUFBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQVQ7QUFBQSxLQUFoQixDQUFUO0FBQUEsR0FBaEI7O0FBRmdDLE1BSXpCQyxDQUp5QixHQUlyQlIsTUFBTSxDQUFDUyxLQUpjLENBSXpCRCxDQUp5Qjs7QUFBQSxnQkFNUkUsbURBQU0sQ0FDNUJGLENBQUMsMEJBQW1CUixNQUFNLENBQUNTLEtBQVAsQ0FBYUQsQ0FBaEMsSUFBc0MsSUFEWCxFQUU1Qk4sT0FGNEIsQ0FORTtBQUFBLE1BTXhCUyxJQU53QixXQU14QkEsSUFOd0I7QUFBQSxNQU1sQkMsS0FOa0IsV0FNbEJBLEtBTmtCOztBQVdoQyxNQUFJQSxLQUFKLEVBQVcsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUFQO0FBQ1gsTUFBSSxDQUFDRCxJQUFMLEVBQVcsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFQO0FBRVgsU0FBTyxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNMLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURLLEVBRUpBLElBQUksQ0FBQ0UsS0FBTCxDQUFXQyxHQUFYLENBQWUsVUFBQUMsSUFBSTtBQUFBLFdBQ2xCLE1BQUMsK0RBQUQ7QUFBYSxVQUFJLEVBQUVBLElBQW5CO0FBQXlCLFNBQUcsRUFBRUEsSUFBSSxDQUFDQyxFQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRGtCO0FBQUEsR0FBbkIsQ0FGSSxDQUFQO0FBTUQ7O0dBcEJ1QmpCLE87VUFDUEUscUQsRUFLU1MsMkM7OztLQU5GWCxPO0FBc0J4QixJQUFNa0IsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUFmO01BQU1GLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaXRlbXMvW3Jlc3VsdHNdLmJjYWM1ZjRjMmZjMzBiYTRjOGFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgdXNlU3dyIGZyb20gJ3N3cidcclxuaW1wb3J0IENhcmRXcmFwcGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ2FyZFdyYXBwZXInXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZWFkZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXN1bHRzKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG5cclxuICBjb25zdCB7cX0gPXJvdXRlci5xdWVyeVxyXG5cclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTd3IoXHJcbiAgICBxID8gYC9hcGkvaXRlbXM/cT0ke3JvdXRlci5xdWVyeS5xfWAgOiBudWxsLFxyXG4gICAgZmV0Y2hlclxyXG4gIClcclxuXHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5GYWlsZWQgdG8gbG9hZCB1c2VyPC9kaXY+XHJcbiAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XHJcblxyXG4gIHJldHVybiA8Q29udGFpbmVyPlxyXG4gICAgPEhlYWRlciAvPlxyXG4gICAge2RhdGEuaXRlbXMubWFwKGl0ZW0gPT5cclxuICAgICAgPENhcmRXcmFwcGVyIGl0ZW09e2l0ZW19IGtleT17aXRlbS5pZH0gLz5cclxuICAgICl9XHJcbiAgPC9Db250YWluZXI+XHJcbn1cclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcclxuICBtYXJnaW46IGF1dG9cclxuYCJdLCJzb3VyY2VSb290IjoiIn0=