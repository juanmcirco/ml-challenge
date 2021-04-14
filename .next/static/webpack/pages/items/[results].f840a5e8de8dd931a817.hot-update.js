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
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _constants_contants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants/contants */ "./constants/contants.js");
var _jsxFileName = "C:\\Users\\circo\\OneDrive\\Documentos\\repos\\examen ml\\TestML\\components\\ResultDescription.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function ResultDescription(_ref) {
  var item = _ref.item;
  return __jsx(Container, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    container: true,
    spacing: 3,
    xs: 12,
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(CardContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, __jsx(Details, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx(Cover, {
    image: item.picture,
    title: item.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }
  }), __jsx(Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    }
  }, __jsx(Info, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, _constants_contants__WEBPACK_IMPORTED_MODULE_8__["condition"][item.condition], " - ", item.sold_quantity, " vendidos "), __jsx(Title, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, item.title), __jsx(Price, {
    value: item.price.amount,
    displayType: 'text',
    thousandSeparator: '.',
    decimalSeparator: ',',
    thousandsGroupStyle: "thousand",
    prefix: item.price.currency === 'ARS' ? '$ ' : 'U$S ',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }))), __jsx(Description, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx(DescriptionTitle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, "Descripci\xF3n del producto"), item.description)))));
}
_c = ResultDescription;
var Container = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "ResultDescription__Container",
  componentId: "sc-12hk3d-0"
})(["  max-width:1200px;margin:auto;"]);
_c2 = Container;
var CardContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__["default"]).withConfig({
  displayName: "ResultDescription__CardContainer",
  componentId: "sc-12hk3d-1"
})(["display:block;width:886;min-height:886;margin:auto;border-bottom:thin solid #eee;border-radius:0"]);
_c3 = CardContainer;
var Details = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "ResultDescription__Details",
  componentId: "sc-12hk3d-2"
})(["display:flex;"]);
_c4 = Details;
var Cover = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "ResultDescription__Cover",
  componentId: "sc-12hk3d-3"
})(["width:680px;height:680px;margin-top:32px;margin-left:32px;"]);
_c5 = Cover;
var Content = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_2__["default"]).withConfig({
  displayName: "ResultDescription__Content",
  componentId: "sc-12hk3d-4"
})(["flex:1 0 auto;"]);
_c6 = Content;
var Description = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "ResultDescription__Description",
  componentId: "sc-12hk3d-5"
})(["display:flex;flex-grow:1;margin:32px;max-width:60%;"]);
_c7 = Description;
var Title = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "ResultDescription__Title",
  componentId: "sc-12hk3d-6"
})(["display:flex;flex-direction:row;font-size:24px;font-weight:600;max-width:240px;line-height:30px;"]);
_c8 = Title;
var DescriptionTitle = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "ResultDescription__DescriptionTitle",
  componentId: "sc-12hk3d-7"
})(["font-size:28px;line-height:0;margin-top:16px;margin-bottom:32px;"]);
_c9 = DescriptionTitle;
var Info = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "ResultDescription__Info",
  componentId: "sc-12hk3d-8"
})(["font-size:12px;color:#999;margin:16px 0;line-height:0;"]);
_c10 = Info;
var Price = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(react_number_format__WEBPACK_IMPORTED_MODULE_5__["default"]).withConfig({
  displayName: "ResultDescription__Price",
  componentId: "sc-12hk3d-9"
})(["font-size:46px;"]);
_c11 = Price;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "ResultDescription");
$RefreshReg$(_c2, "Container");
$RefreshReg$(_c3, "CardContainer");
$RefreshReg$(_c4, "Details");
$RefreshReg$(_c5, "Cover");
$RefreshReg$(_c6, "Content");
$RefreshReg$(_c7, "Description");
$RefreshReg$(_c8, "Title");
$RefreshReg$(_c9, "DescriptionTitle");
$RefreshReg$(_c10, "Info");
$RefreshReg$(_c11, "Price");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXN1bHREZXNjcmlwdGlvbi5qcyJdLCJuYW1lcyI6WyJSZXN1bHREZXNjcmlwdGlvbiIsIml0ZW0iLCJwaWN0dXJlIiwidGl0bGUiLCJjb25kaXRpb24iLCJzb2xkX3F1YW50aXR5IiwicHJpY2UiLCJhbW91bnQiLCJjdXJyZW5jeSIsImRlc2NyaXB0aW9uIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiQ2FyZENvbnRhaW5lciIsIkNhcmQiLCJEZXRhaWxzIiwiQ292ZXIiLCJDYXJkTWVkaWEiLCJDb250ZW50IiwiQ2FyZENvbnRlbnQiLCJEZXNjcmlwdGlvbiIsIlRpdGxlIiwiRGVzY3JpcHRpb25UaXRsZSIsIkluZm8iLCJQcmljZSIsIk51bWJlckZvcm1hdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsaUJBQVQsT0FBcUM7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDbEQsU0FDRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsV0FBTyxFQUFFLENBQXpCO0FBQTRCLE1BQUUsRUFBRSxFQUFoQztBQUFvQyxXQUFPLEVBQUMsUUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsS0FBRDtBQUNFLFNBQUssRUFBRUEsSUFBSSxDQUFDQyxPQURkO0FBRUUsU0FBSyxFQUFFRCxJQUFJLENBQUNFLEtBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBS0UsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPQyw2REFBUyxDQUFDSCxJQUFJLENBQUNHLFNBQU4sQ0FBaEIsU0FBcUNILElBQUksQ0FBQ0ksYUFBMUMsZUFERixFQUVFLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFKLElBQUksQ0FBQ0UsS0FBYixDQUZGLEVBR0UsTUFBQyxLQUFEO0FBQ0UsU0FBSyxFQUFFRixJQUFJLENBQUNLLEtBQUwsQ0FBV0MsTUFEcEI7QUFFRSxlQUFXLEVBQUUsTUFGZjtBQUdFLHFCQUFpQixFQUFFLEdBSHJCO0FBSUUsb0JBQWdCLEVBQUUsR0FKcEI7QUFLRSx1QkFBbUIsRUFBQyxVQUx0QjtBQU1FLFVBQU0sRUFBRU4sSUFBSSxDQUFDSyxLQUFMLENBQVdFLFFBQVgsS0FBd0IsS0FBeEIsR0FBZ0MsSUFBaEMsR0FBdUMsTUFOakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBTEYsQ0FERixFQW1CRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FERixFQUVHUCxJQUFJLENBQUNRLFdBRlIsQ0FuQkYsQ0FERixDQURGLENBREYsQ0FERjtBQWdDRDtLQWpDdUJULGlCO0FBbUN4QixJQUFNVSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsdUNBQWY7TUFBTUYsUztBQUtOLElBQU1HLGFBQWEsR0FBR0YsaUVBQU0sQ0FBQ0csOERBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSx3R0FBbkI7TUFBTUQsYTtBQVNOLElBQU1FLE9BQU8sR0FBR0oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxxQkFBYjtNQUFNRyxPO0FBSU4sSUFBTUMsS0FBSyxHQUFHTCxpRUFBTSxDQUFDTSxtRUFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLGtFQUFYO01BQU1ELEs7QUFPTixJQUFNRSxPQUFPLEdBQUdQLGlFQUFNLENBQUNRLHFFQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsc0JBQWI7TUFBTUQsTztBQUlOLElBQU1FLFdBQVcsR0FBR1QseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwyREFBakI7TUFBTVEsVztBQU1OLElBQU1DLEtBQUssR0FBR1YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3R0FBWDtNQUFNUyxLO0FBUU4sSUFBTUMsZ0JBQWdCLEdBQUdYLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsd0VBQXRCO01BQU1VLGdCO0FBT04sSUFBTUMsSUFBSSxHQUFHWix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDhEQUFWO09BQU1XLEk7QUFNTixJQUFNQyxLQUFLLEdBQUdiLGlFQUFNLENBQUNjLDJEQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsdUJBQVg7T0FBTUQsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pdGVtcy9bcmVzdWx0c10uZjg0MGE1ZThkZThkZDkzMWE4MTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcclxuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IE51bWJlckZvcm1hdCBmcm9tICdyZWFjdC1udW1iZXItZm9ybWF0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgeyBjb25kaXRpb24gfSBmcm9tICcuLi9jb25zdGFudHMvY29udGFudHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXN1bHREZXNjcmlwdGlvbih7IGl0ZW0gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30geHM9ezEyfSBqdXN0aWZ5PSdjZW50ZXInPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfT5cclxuICAgICAgICAgIDxDYXJkQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8RGV0YWlscyA+XHJcbiAgICAgICAgICAgICAgPENvdmVyXHJcbiAgICAgICAgICAgICAgICBpbWFnZT17aXRlbS5waWN0dXJlfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Q29udGVudD5cclxuICAgICAgICAgICAgICAgIDxJbmZvPntjb25kaXRpb25baXRlbS5jb25kaXRpb25dfSAtIHtpdGVtLnNvbGRfcXVhbnRpdHl9IHZlbmRpZG9zIDwvSW5mbz5cclxuICAgICAgICAgICAgICAgIDxUaXRsZT57aXRlbS50aXRsZX08L1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPFByaWNlXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLnByaWNlLmFtb3VudH1cclxuICAgICAgICAgICAgICAgICAgZGlzcGxheVR5cGU9eyd0ZXh0J31cclxuICAgICAgICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9eycuJ31cclxuICAgICAgICAgICAgICAgICAgZGVjaW1hbFNlcGFyYXRvcj17JywnfVxyXG4gICAgICAgICAgICAgICAgICB0aG91c2FuZHNHcm91cFN0eWxlPSd0aG91c2FuZCdcclxuICAgICAgICAgICAgICAgICAgcHJlZml4PXtpdGVtLnByaWNlLmN1cnJlbmN5ID09PSAnQVJTJyA/ICckICcgOiAnVSRTICd9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvQ29udGVudD5cclxuICAgICAgICAgICAgPC9EZXRhaWxzPlxyXG4gICAgICAgICAgICA8RGVzY3JpcHRpb24gPlxyXG4gICAgICAgICAgICAgIDxEZXNjcmlwdGlvblRpdGxlPkRlc2NyaXBjacOzbiBkZWwgcHJvZHVjdG88L0Rlc2NyaXB0aW9uVGl0bGU+XHJcbiAgICAgICAgICAgICAge2l0ZW0uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIDwvRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICA8L0NhcmRDb250YWluZXI+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0NvbnRhaW5lciA+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmAgXHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG5gXHJcblxyXG5jb25zdCBDYXJkQ29udGFpbmVyID0gc3R5bGVkKENhcmQpYFxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA4ODY7XHJcbiAgbWluLWhlaWdodDogODg2O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICNlZWU7XHJcbiAgYm9yZGVyLXJhZGl1czogMFxyXG5gXHJcblxyXG5jb25zdCBEZXRhaWxzID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5gXHJcblxyXG5jb25zdCBDb3ZlciA9IHN0eWxlZChDYXJkTWVkaWEpYFxyXG4gIHdpZHRoOiA2ODBweDtcclxuICBoZWlnaHQ6IDY4MHB4O1xyXG4gIG1hcmdpbi10b3A6IDMycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XHJcbmBcclxuXHJcbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQoQ2FyZENvbnRlbnQpYFxyXG4gIGZsZXg6IDEgMCBhdXRvO1xyXG5gXHJcblxyXG5jb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgbWFyZ2luOiAzMnB4O1xyXG4gIG1heC13aWR0aDo2MCU7XHJcbmBcclxuY29uc3QgVGl0bGUgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246cm93O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1heC13aWR0aDogMjQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbmBcclxuY29uc3QgRGVzY3JpcHRpb25UaXRsZSA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OjA7XHJcbiAgbWFyZ2luLXRvcDoxNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206MzJweDtcclxuYFxyXG5cclxuY29uc3QgSW5mbyA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjOTk5O1xyXG4gIG1hcmdpbjogMTZweCAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAwO1xyXG5gXHJcbmNvbnN0IFByaWNlID0gc3R5bGVkKE51bWJlckZvcm1hdClgXHJcbiAgZm9udC1zaXplOiA0NnB4O1xyXG5gIl0sInNvdXJjZVJvb3QiOiIifQ==