webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Searchbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Searchbox */ "./components/Searchbox.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\circo\\OneDrive\\Documentos\\repos\\examen ml\\TestML\\components\\Header.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Header() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var handleOptionSelected = function handleOptionSelected(search) {
    router.push("/items/items?q=".concat(search));
  };

  return __jsx(Container, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    container: true,
    spacing: 3,
    xs: 12,
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    xs: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(HeaderContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, __jsx(SearchComponent, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx(Logo, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "https://http2.mlstatic.com/frontend-assets/ui-navigation/5.14.3/mercadolibre/logo__large_plus.png",
    height: "34",
    width: "134",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 36
    }
  }))), __jsx(_Searchbox__WEBPACK_IMPORTED_MODULE_1__["default"], {
    optionSelected: handleOptionSelected,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }))))));
}

_s(Header, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Header;
var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Header__Container",
  componentId: "ddz5fr-0"
})(["  max-width:1200px;margin:auto;"]);
_c2 = Container;
var HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Header__HeaderContainer",
  componentId: "ddz5fr-1"
})(["position:fixed;width:100%;left:0;top:0;background-color:", ";display:flex;justify-content:center;align-items:center;padding:5px;"], function (props) {
  return props.theme.meli.brandColor;
});
_c3 = HeaderContainer;
var SearchComponent = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Header__SearchComponent",
  componentId: "ddz5fr-2"
})(["width:950px;margin:auto;display:flex;"]);
_c4 = SearchComponent;
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Header__Logo",
  componentId: "ddz5fr-3"
})(["margin:0 16px;margin-left:-28px;display:flex;cursor:pointer;"]);
_c5 = Logo;

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Header");
$RefreshReg$(_c2, "Container");
$RefreshReg$(_c3, "HeaderContainer");
$RefreshReg$(_c4, "SearchComponent");
$RefreshReg$(_c5, "Logo");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlT3B0aW9uU2VsZWN0ZWQiLCJzZWFyY2giLCJwdXNoIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiSGVhZGVyQ29udGFpbmVyIiwicHJvcHMiLCJ0aGVtZSIsIm1lbGkiLCJicmFuZENvbG9yIiwiU2VhcmNoQ29tcG9uZW50IiwiTG9nbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFDL0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNDLE1BQUQsRUFBWTtBQUN2Q0gsVUFBTSxDQUFDSSxJQUFQLDBCQUE4QkQsTUFBOUI7QUFDRCxHQUZEOztBQUlBLFNBQ0UsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFdBQU8sRUFBRSxDQUF6QjtBQUE0QixNQUFFLEVBQUUsRUFBaEM7QUFBb0MsV0FBTyxFQUFDLFFBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWU7QUFBSyxPQUFHLEVBQUMsbUdBQVQ7QUFBNkcsVUFBTSxFQUFDLElBQXBIO0FBQXlILFNBQUssRUFBQyxLQUEvSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQWYsQ0FBTixDQURGLEVBRUUsTUFBQyxrREFBRDtBQUFXLGtCQUFjLEVBQUVELG9CQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixDQURGLENBREYsQ0FERixDQURGO0FBY0Q7O0dBcEJ1QkgsTTtVQUNQRSxxRDs7O0tBRE9GLE07QUF1QnhCLElBQU1NLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1Q0FBZjtNQUFNRixTO0FBS04sSUFBTUcsZUFBZSxHQUFHRix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHlJQUtDLFVBQUFFLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsSUFBWixDQUFpQkMsVUFBckI7QUFBQSxDQUxOLENBQXJCO01BQU1KLGU7QUFXTixJQUFNSyxlQUFlLEdBQUdQLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNkNBQXJCO01BQU1NLGU7QUFNTixJQUFNQyxJQUFJLEdBQUdSLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsb0VBQVY7TUFBTU8sSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42NTBkNmEyZTE0MzQxZGUxNzI0OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU2VhcmNoYm94IGZyb20gJy4vU2VhcmNoYm94J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IGhhbmRsZU9wdGlvblNlbGVjdGVkID0gKHNlYXJjaCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goYC9pdGVtcy9pdGVtcz9xPSR7c2VhcmNofWApXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IHhzPXsxMn0ganVzdGlmeT0nY2VudGVyJz5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0+XHJcbiAgICAgICAgICA8SGVhZGVyQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8U2VhcmNoQ29tcG9uZW50PlxyXG4gICAgICAgICAgICAgIDxMb2dvPjxMaW5rIGhyZWY9XCIvXCI+PGltZyBzcmM9J2h0dHBzOi8vaHR0cDIubWxzdGF0aWMuY29tL2Zyb250ZW5kLWFzc2V0cy91aS1uYXZpZ2F0aW9uLzUuMTQuMy9tZXJjYWRvbGlicmUvbG9nb19fbGFyZ2VfcGx1cy5wbmcnIGhlaWdodD0nMzQnIHdpZHRoPScxMzQnIC8+PC9MaW5rPjwvTG9nbz5cclxuICAgICAgICAgICAgICA8U2VhcmNoYm94IG9wdGlvblNlbGVjdGVkPXtoYW5kbGVPcHRpb25TZWxlY3RlZH0gLz5cclxuICAgICAgICAgICAgPC9TZWFyY2hDb21wb25lbnQ+XHJcbiAgICAgICAgICA8L0hlYWRlckNvbnRhaW5lcj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgIFxyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuYFxyXG5cclxuY29uc3QgSGVhZGVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tZWxpLmJyYW5kQ29sb3J9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNXB4O1xyXG5gXHJcbmNvbnN0IFNlYXJjaENvbXBvbmVudCA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDk1MHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5gXHJcblxyXG5jb25zdCBMb2dvID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IDAgMTZweDtcclxuICBtYXJnaW4tbGVmdDogLTI4cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmAiXSwic291cmNlUm9vdCI6IiJ9