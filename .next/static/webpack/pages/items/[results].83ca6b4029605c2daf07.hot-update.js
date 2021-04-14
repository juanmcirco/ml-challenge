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
  }, "Descripci\xF3n del producto"), __jsx(DescriptionP, {
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
var DescriptionP = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "ResultDescription__DescriptionP",
  componentId: "sc-12hk3d-8"
})(["font-size:16px;line-height:0;"]);
_c10 = DescriptionP;
var Info = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "ResultDescription__Info",
  componentId: "sc-12hk3d-9"
})(["font-size:12px;color:#999;margin:16px 0;line-height:0;"]);
_c11 = Info;
var Price = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(react_number_format__WEBPACK_IMPORTED_MODULE_5__["default"]).withConfig({
  displayName: "ResultDescription__Price",
  componentId: "sc-12hk3d-10"
})(["font-size:46px;"]);
_c12 = Price;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;

$RefreshReg$(_c, "ResultDescription");
$RefreshReg$(_c2, "Container");
$RefreshReg$(_c3, "CardContainer");
$RefreshReg$(_c4, "Details");
$RefreshReg$(_c5, "Cover");
$RefreshReg$(_c6, "Content");
$RefreshReg$(_c7, "Description");
$RefreshReg$(_c8, "Title");
$RefreshReg$(_c9, "DescriptionTitle");
$RefreshReg$(_c10, "DescriptionP");
$RefreshReg$(_c11, "Info");
$RefreshReg$(_c12, "Price");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXN1bHREZXNjcmlwdGlvbi5qcyJdLCJuYW1lcyI6WyJSZXN1bHREZXNjcmlwdGlvbiIsIml0ZW0iLCJwaWN0dXJlIiwidGl0bGUiLCJjb25kaXRpb24iLCJzb2xkX3F1YW50aXR5IiwicHJpY2UiLCJhbW91bnQiLCJjdXJyZW5jeSIsImRlc2NyaXB0aW9uIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiQ2FyZENvbnRhaW5lciIsIkNhcmQiLCJEZXRhaWxzIiwiQ292ZXIiLCJDYXJkTWVkaWEiLCJDb250ZW50IiwiQ2FyZENvbnRlbnQiLCJEZXNjcmlwdGlvbiIsIlRpdGxlIiwiRGVzY3JpcHRpb25UaXRsZSIsIkRlc2NyaXB0aW9uUCIsIkluZm8iLCJQcmljZSIsIk51bWJlckZvcm1hdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsaUJBQVQsT0FBcUM7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDbEQsU0FDRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsV0FBTyxFQUFFLENBQXpCO0FBQTRCLE1BQUUsRUFBRSxFQUFoQztBQUFvQyxXQUFPLEVBQUMsUUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsS0FBRDtBQUNFLFNBQUssRUFBRUEsSUFBSSxDQUFDQyxPQURkO0FBRUUsU0FBSyxFQUFFRCxJQUFJLENBQUNFLEtBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBS0UsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPQyw2REFBUyxDQUFDSCxJQUFJLENBQUNHLFNBQU4sQ0FBaEIsU0FBcUNILElBQUksQ0FBQ0ksYUFBMUMsZUFERixFQUVFLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFKLElBQUksQ0FBQ0UsS0FBYixDQUZGLEVBR0UsTUFBQyxLQUFEO0FBQ0UsU0FBSyxFQUFFRixJQUFJLENBQUNLLEtBQUwsQ0FBV0MsTUFEcEI7QUFFRSxlQUFXLEVBQUUsTUFGZjtBQUdFLHFCQUFpQixFQUFFLEdBSHJCO0FBSUUsb0JBQWdCLEVBQUUsR0FKcEI7QUFLRSx1QkFBbUIsRUFBQyxVQUx0QjtBQU1FLFVBQU0sRUFBRU4sSUFBSSxDQUFDSyxLQUFMLENBQVdFLFFBQVgsS0FBd0IsS0FBeEIsR0FBZ0MsSUFBaEMsR0FBdUMsTUFOakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBTEYsQ0FERixFQW1CRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FERixFQUVFLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWVQLElBQUksQ0FBQ1EsV0FBcEIsQ0FGRixDQW5CRixDQURGLENBREYsQ0FERixDQURGO0FBZ0NEO0tBakN1QlQsaUI7QUFtQ3hCLElBQU1VLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1Q0FBZjtNQUFNRixTO0FBS04sSUFBTUcsYUFBYSxHQUFHRixpRUFBTSxDQUFDRyw4REFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLHdHQUFuQjtNQUFNRCxhO0FBU04sSUFBTUUsT0FBTyxHQUFHSix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHFCQUFiO01BQU1HLE87QUFJTixJQUFNQyxLQUFLLEdBQUdMLGlFQUFNLENBQUNNLG1FQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsa0VBQVg7TUFBTUQsSztBQU9OLElBQU1FLE9BQU8sR0FBR1AsaUVBQU0sQ0FBQ1EscUVBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxzQkFBYjtNQUFNRCxPO0FBSU4sSUFBTUUsV0FBVyxHQUFHVCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGlGQUFqQjtNQUFNUSxXO0FBT04sSUFBTUMsS0FBSyxHQUFHVix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdHQUFYO01BQU1TLEs7QUFRTixJQUFNQyxnQkFBZ0IsR0FBR1gseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3RUFBdEI7TUFBTVUsZ0I7QUFNTixJQUFNQyxZQUFZLEdBQUdaLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEscUNBQWxCO09BQU1XLFk7QUFNTixJQUFNQyxJQUFJLEdBQUdiLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsOERBQVY7T0FBTVksSTtBQU1OLElBQU1DLEtBQUssR0FBR2QsaUVBQU0sQ0FBQ2UsMkRBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSx1QkFBWDtPQUFNRCxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2l0ZW1zL1tyZXN1bHRzXS44M2NhNmI0MDI5NjA1YzJkYWYwNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYSc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgTnVtYmVyRm9ybWF0IGZyb20gJ3JlYWN0LW51bWJlci1mb3JtYXQnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCB7IGNvbmRpdGlvbiB9IGZyb20gJy4uL2NvbnN0YW50cy9jb250YW50cydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc3VsdERlc2NyaXB0aW9uKHsgaXRlbSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSB4cz17MTJ9IGp1c3RpZnk9J2NlbnRlcic+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTB9PlxyXG4gICAgICAgICAgPENhcmRDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxEZXRhaWxzID5cclxuICAgICAgICAgICAgICA8Q292ZXJcclxuICAgICAgICAgICAgICAgIGltYWdlPXtpdGVtLnBpY3R1cmV9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPEluZm8+e2NvbmRpdGlvbltpdGVtLmNvbmRpdGlvbl19IC0ge2l0ZW0uc29sZF9xdWFudGl0eX0gdmVuZGlkb3MgPC9JbmZvPlxyXG4gICAgICAgICAgICAgICAgPFRpdGxlPntpdGVtLnRpdGxlfTwvVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8UHJpY2VcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW0ucHJpY2UuYW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5VHlwZT17J3RleHQnfVxyXG4gICAgICAgICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj17Jy4nfVxyXG4gICAgICAgICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yPXsnLCd9XHJcbiAgICAgICAgICAgICAgICAgIHRob3VzYW5kc0dyb3VwU3R5bGU9J3Rob3VzYW5kJ1xyXG4gICAgICAgICAgICAgICAgICBwcmVmaXg9e2l0ZW0ucHJpY2UuY3VycmVuY3kgPT09ICdBUlMnID8gJyQgJyA6ICdVJFMgJ31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Db250ZW50PlxyXG4gICAgICAgICAgICA8L0RldGFpbHM+XHJcbiAgICAgICAgICAgIDxEZXNjcmlwdGlvbiA+XHJcbiAgICAgICAgICAgICAgPERlc2NyaXB0aW9uVGl0bGU+RGVzY3JpcGNpw7NuIGRlbCBwcm9kdWN0bzwvRGVzY3JpcHRpb25UaXRsZT5cclxuICAgICAgICAgICAgICA8RGVzY3JpcHRpb25QPntpdGVtLmRlc2NyaXB0aW9ufTwvRGVzY3JpcHRpb25QPlxyXG4gICAgICAgICAgICA8L0Rlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgPC9DYXJkQ29udGFpbmVyPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9Db250YWluZXIgPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgIFxyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuYFxyXG5cclxuY29uc3QgQ2FyZENvbnRhaW5lciA9IHN0eWxlZChDYXJkKWBcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogODg2O1xyXG4gIG1pbi1oZWlnaHQ6IDg4NjtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCAjZWVlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDBcclxuYFxyXG5cclxuY29uc3QgRGV0YWlscyA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuYFxyXG5cclxuY29uc3QgQ292ZXIgPSBzdHlsZWQoQ2FyZE1lZGlhKWBcclxuICB3aWR0aDogNjgwcHg7XHJcbiAgaGVpZ2h0OiA2ODBweDtcclxuICBtYXJnaW4tdG9wOiAzMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xyXG5gXHJcblxyXG5jb25zdCBDb250ZW50ID0gc3R5bGVkKENhcmRDb250ZW50KWBcclxuICBmbGV4OiAxIDAgYXV0bztcclxuYFxyXG5cclxuY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBtYXJnaW46IDMycHg7XHJcbiAgbWF4LXdpZHRoOjYwJTtcclxuYFxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjpyb3c7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWF4LXdpZHRoOiAyNDBweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuYFxyXG5jb25zdCBEZXNjcmlwdGlvblRpdGxlID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgbGluZS1oZWlnaHQ6MDtcclxuICBtYXJnaW4tdG9wOjE2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTozMnB4O1xyXG5gXHJcbmNvbnN0IERlc2NyaXB0aW9uUCA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OjA7XHJcblxyXG5gXHJcblxyXG5jb25zdCBJbmZvID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICM5OTk7XHJcbiAgbWFyZ2luOiAxNnB4IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDA7XHJcbmBcclxuY29uc3QgUHJpY2UgPSBzdHlsZWQoTnVtYmVyRm9ybWF0KWBcclxuICBmb250LXNpemU6IDQ2cHg7XHJcbmAiXSwic291cmNlUm9vdCI6IiJ9