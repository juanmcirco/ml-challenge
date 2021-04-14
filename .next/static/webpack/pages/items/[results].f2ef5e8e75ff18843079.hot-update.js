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
  }, "Descripci\xF3n del producto"), __jsx(DescriptionTitle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, item.description))))));
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
})(["display:flex;flex-direction:column;flex-grow:1;margin:32px;max-width:60%;"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXN1bHREZXNjcmlwdGlvbi5qcyJdLCJuYW1lcyI6WyJSZXN1bHREZXNjcmlwdGlvbiIsIml0ZW0iLCJwaWN0dXJlIiwidGl0bGUiLCJjb25kaXRpb24iLCJzb2xkX3F1YW50aXR5IiwicHJpY2UiLCJhbW91bnQiLCJjdXJyZW5jeSIsImRlc2NyaXB0aW9uIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiQ2FyZENvbnRhaW5lciIsIkNhcmQiLCJEZXRhaWxzIiwiQ292ZXIiLCJDYXJkTWVkaWEiLCJDb250ZW50IiwiQ2FyZENvbnRlbnQiLCJEZXNjcmlwdGlvbiIsIlRpdGxlIiwiRGVzY3JpcHRpb25UaXRsZSIsIkluZm8iLCJQcmljZSIsIk51bWJlckZvcm1hdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsaUJBQVQsT0FBcUM7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDbEQsU0FDRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsV0FBTyxFQUFFLENBQXpCO0FBQTRCLE1BQUUsRUFBRSxFQUFoQztBQUFvQyxXQUFPLEVBQUMsUUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsS0FBRDtBQUNFLFNBQUssRUFBRUEsSUFBSSxDQUFDQyxPQURkO0FBRUUsU0FBSyxFQUFFRCxJQUFJLENBQUNFLEtBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBS0UsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPQyw2REFBUyxDQUFDSCxJQUFJLENBQUNHLFNBQU4sQ0FBaEIsU0FBcUNILElBQUksQ0FBQ0ksYUFBMUMsZUFERixFQUVFLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFKLElBQUksQ0FBQ0UsS0FBYixDQUZGLEVBR0UsTUFBQyxLQUFEO0FBQ0UsU0FBSyxFQUFFRixJQUFJLENBQUNLLEtBQUwsQ0FBV0MsTUFEcEI7QUFFRSxlQUFXLEVBQUUsTUFGZjtBQUdFLHFCQUFpQixFQUFFLEdBSHJCO0FBSUUsb0JBQWdCLEVBQUUsR0FKcEI7QUFLRSx1QkFBbUIsRUFBQyxVQUx0QjtBQU1FLFVBQU0sRUFBRU4sSUFBSSxDQUFDSyxLQUFMLENBQVdFLFFBQVgsS0FBd0IsS0FBeEIsR0FBZ0MsSUFBaEMsR0FBdUMsTUFOakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBTEYsQ0FERixFQW1CRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FERixFQUVFLE1BQUMsZ0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtQlAsSUFBSSxDQUFDUSxXQUF4QixDQUZGLENBbkJGLENBREYsQ0FERixDQURGLENBREY7QUFnQ0Q7S0FqQ3VCVCxpQjtBQW1DeEIsSUFBTVUsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHVDQUFmO01BQU1GLFM7QUFLTixJQUFNRyxhQUFhLEdBQUdGLGlFQUFNLENBQUNHLDhEQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsd0dBQW5CO01BQU1ELGE7QUFTTixJQUFNRSxPQUFPLEdBQUdKLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEscUJBQWI7TUFBTUcsTztBQUlOLElBQU1DLEtBQUssR0FBR0wsaUVBQU0sQ0FBQ00sbUVBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxrRUFBWDtNQUFNRCxLO0FBT04sSUFBTUUsT0FBTyxHQUFHUCxpRUFBTSxDQUFDUSxxRUFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLHNCQUFiO01BQU1ELE87QUFJTixJQUFNRSxXQUFXLEdBQUdULHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsaUZBQWpCO01BQU1RLFc7QUFPTixJQUFNQyxLQUFLLEdBQUdWLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsd0dBQVg7TUFBTVMsSztBQVFOLElBQU1DLGdCQUFnQixHQUFHWCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdFQUF0QjtNQUFNVSxnQjtBQU9OLElBQU1DLElBQUksR0FBR1oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw4REFBVjtPQUFNVyxJO0FBTU4sSUFBTUMsS0FBSyxHQUFHYixpRUFBTSxDQUFDYywyREFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLHVCQUFYO09BQU1ELEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaXRlbXMvW3Jlc3VsdHNdLmYyZWY1ZThlNzVmZjE4ODQzMDc5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XHJcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBOdW1iZXJGb3JtYXQgZnJvbSAncmVhY3QtbnVtYmVyLWZvcm1hdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHsgY29uZGl0aW9uIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnRhbnRzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzdWx0RGVzY3JpcHRpb24oeyBpdGVtIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IHhzPXsxMn0ganVzdGlmeT0nY2VudGVyJz5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0+XHJcbiAgICAgICAgICA8Q2FyZENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPERldGFpbHMgPlxyXG4gICAgICAgICAgICAgIDxDb3ZlclxyXG4gICAgICAgICAgICAgICAgaW1hZ2U9e2l0ZW0ucGljdHVyZX1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8SW5mbz57Y29uZGl0aW9uW2l0ZW0uY29uZGl0aW9uXX0gLSB7aXRlbS5zb2xkX3F1YW50aXR5fSB2ZW5kaWRvcyA8L0luZm8+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGU+e2l0ZW0udGl0bGV9PC9UaXRsZT5cclxuICAgICAgICAgICAgICAgIDxQcmljZVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS5wcmljZS5hbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlPXsndGV4dCd9XHJcbiAgICAgICAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yPXsnLid9XHJcbiAgICAgICAgICAgICAgICAgIGRlY2ltYWxTZXBhcmF0b3I9eycsJ31cclxuICAgICAgICAgICAgICAgICAgdGhvdXNhbmRzR3JvdXBTdHlsZT0ndGhvdXNhbmQnXHJcbiAgICAgICAgICAgICAgICAgIHByZWZpeD17aXRlbS5wcmljZS5jdXJyZW5jeSA9PT0gJ0FSUycgPyAnJCAnIDogJ1UkUyAnfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0NvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvRGV0YWlscz5cclxuICAgICAgICAgICAgPERlc2NyaXB0aW9uID5cclxuICAgICAgICAgICAgICA8RGVzY3JpcHRpb25UaXRsZT5EZXNjcmlwY2nDs24gZGVsIHByb2R1Y3RvPC9EZXNjcmlwdGlvblRpdGxlPlxyXG4gICAgICAgICAgICAgIDxEZXNjcmlwdGlvblRpdGxlPntpdGVtLmRlc2NyaXB0aW9ufTwvRGVzY3JpcHRpb25UaXRsZT5cclxuICAgICAgICAgICAgPC9EZXNjcmlwdGlvbj5cclxuICAgICAgICAgIDwvQ2FyZENvbnRhaW5lcj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvQ29udGFpbmVyID5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YCBcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbmBcclxuXHJcbmNvbnN0IENhcmRDb250YWluZXIgPSBzdHlsZWQoQ2FyZClgXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDg4NjtcclxuICBtaW4taGVpZ2h0OiA4ODY7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgI2VlZTtcclxuICBib3JkZXItcmFkaXVzOiAwXHJcbmBcclxuXHJcbmNvbnN0IERldGFpbHMgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbmBcclxuXHJcbmNvbnN0IENvdmVyID0gc3R5bGVkKENhcmRNZWRpYSlgXHJcbiAgd2lkdGg6IDY4MHB4O1xyXG4gIGhlaWdodDogNjgwcHg7XHJcbiAgbWFyZ2luLXRvcDogMzJweDtcclxuICBtYXJnaW4tbGVmdDogMzJweDtcclxuYFxyXG5cclxuY29uc3QgQ29udGVudCA9IHN0eWxlZChDYXJkQ29udGVudClgXHJcbiAgZmxleDogMSAwIGF1dG87XHJcbmBcclxuXHJcbmNvbnN0IERlc2NyaXB0aW9uID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgbWFyZ2luOiAzMnB4O1xyXG4gIG1heC13aWR0aDo2MCU7XHJcbmBcclxuY29uc3QgVGl0bGUgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246cm93O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1heC13aWR0aDogMjQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbmBcclxuY29uc3QgRGVzY3JpcHRpb25UaXRsZSA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OjA7XHJcbiAgbWFyZ2luLXRvcDoxNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206MzJweDtcclxuYFxyXG5cclxuY29uc3QgSW5mbyA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjOTk5O1xyXG4gIG1hcmdpbjogMTZweCAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAwO1xyXG5gXHJcbmNvbnN0IFByaWNlID0gc3R5bGVkKE51bWJlckZvcm1hdClgXHJcbiAgZm9udC1zaXplOiA0NnB4O1xyXG5gIl0sInNvdXJjZVJvb3QiOiIifQ==