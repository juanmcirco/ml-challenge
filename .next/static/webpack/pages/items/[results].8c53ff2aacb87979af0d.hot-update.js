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
cDescriptionP = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "ResultDescription__cDescriptionP",
  componentId: "sc-12hk3d-8"
})(["font-size:28px;line-height:0;margin-top:16px;margin-bottom:32px;"]);
var Info = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "ResultDescription__Info",
  componentId: "sc-12hk3d-9"
})(["font-size:12px;color:#999;margin:16px 0;line-height:0;"]);
_c10 = Info;
var Price = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(react_number_format__WEBPACK_IMPORTED_MODULE_5__["default"]).withConfig({
  displayName: "ResultDescription__Price",
  componentId: "sc-12hk3d-10"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXN1bHREZXNjcmlwdGlvbi5qcyJdLCJuYW1lcyI6WyJSZXN1bHREZXNjcmlwdGlvbiIsIml0ZW0iLCJwaWN0dXJlIiwidGl0bGUiLCJjb25kaXRpb24iLCJzb2xkX3F1YW50aXR5IiwicHJpY2UiLCJhbW91bnQiLCJjdXJyZW5jeSIsImRlc2NyaXB0aW9uIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiQ2FyZENvbnRhaW5lciIsIkNhcmQiLCJEZXRhaWxzIiwiQ292ZXIiLCJDYXJkTWVkaWEiLCJDb250ZW50IiwiQ2FyZENvbnRlbnQiLCJEZXNjcmlwdGlvbiIsIlRpdGxlIiwiRGVzY3JpcHRpb25UaXRsZSIsImNEZXNjcmlwdGlvblAiLCJJbmZvIiwiUHJpY2UiLCJOdW1iZXJGb3JtYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGlCQUFULE9BQXFDO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ2xELFNBQ0UsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFdBQU8sRUFBRSxDQUF6QjtBQUE0QixNQUFFLEVBQUUsRUFBaEM7QUFBb0MsV0FBTyxFQUFDLFFBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLEtBQUQ7QUFDRSxTQUFLLEVBQUVBLElBQUksQ0FBQ0MsT0FEZDtBQUVFLFNBQUssRUFBRUQsSUFBSSxDQUFDRSxLQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUtFLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT0MsNkRBQVMsQ0FBQ0gsSUFBSSxDQUFDRyxTQUFOLENBQWhCLFNBQXFDSCxJQUFJLENBQUNJLGFBQTFDLGVBREYsRUFFRSxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRSixJQUFJLENBQUNFLEtBQWIsQ0FGRixFQUdFLE1BQUMsS0FBRDtBQUNFLFNBQUssRUFBRUYsSUFBSSxDQUFDSyxLQUFMLENBQVdDLE1BRHBCO0FBRUUsZUFBVyxFQUFFLE1BRmY7QUFHRSxxQkFBaUIsRUFBRSxHQUhyQjtBQUlFLG9CQUFnQixFQUFFLEdBSnBCO0FBS0UsdUJBQW1CLEVBQUMsVUFMdEI7QUFNRSxVQUFNLEVBQUVOLElBQUksQ0FBQ0ssS0FBTCxDQUFXRSxRQUFYLEtBQXdCLEtBQXhCLEdBQWdDLElBQWhDLEdBQXVDLE1BTmpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQUxGLENBREYsRUFtQkUsTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBREYsRUFFRSxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFlUCxJQUFJLENBQUNRLFdBQXBCLENBRkYsQ0FuQkYsQ0FERixDQURGLENBREYsQ0FERjtBQWdDRDtLQWpDdUJULGlCO0FBbUN4QixJQUFNVSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsdUNBQWY7TUFBTUYsUztBQUtOLElBQU1HLGFBQWEsR0FBR0YsaUVBQU0sQ0FBQ0csOERBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSx3R0FBbkI7TUFBTUQsYTtBQVNOLElBQU1FLE9BQU8sR0FBR0oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxxQkFBYjtNQUFNRyxPO0FBSU4sSUFBTUMsS0FBSyxHQUFHTCxpRUFBTSxDQUFDTSxtRUFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLGtFQUFYO01BQU1ELEs7QUFPTixJQUFNRSxPQUFPLEdBQUdQLGlFQUFNLENBQUNRLHFFQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsc0JBQWI7TUFBTUQsTztBQUlOLElBQU1FLFdBQVcsR0FBR1QseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxpRkFBakI7TUFBTVEsVztBQU9OLElBQU1DLEtBQUssR0FBR1YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3R0FBWDtNQUFNUyxLO0FBUU4sSUFBTUMsZ0JBQWdCLEdBQUdYLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsd0VBQXRCO01BQU1VLGdCO0FBTU5DLGFBQWEsR0FBRVoseURBQU0sQ0FBQ0MsR0FBVDtBQUFBO0FBQUE7QUFBQSx3RUFBYjtBQU9BLElBQU1ZLElBQUksR0FBR2IseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw4REFBVjtPQUFNWSxJO0FBTU4sSUFBTUMsS0FBSyxHQUFHZCxpRUFBTSxDQUFDZSwyREFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLHVCQUFYO09BQU1ELEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaXRlbXMvW3Jlc3VsdHNdLjhjNTNmZjJhYWNiODc5NzlhZjBkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XHJcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBOdW1iZXJGb3JtYXQgZnJvbSAncmVhY3QtbnVtYmVyLWZvcm1hdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHsgY29uZGl0aW9uIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnRhbnRzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzdWx0RGVzY3JpcHRpb24oeyBpdGVtIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IHhzPXsxMn0ganVzdGlmeT0nY2VudGVyJz5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0+XHJcbiAgICAgICAgICA8Q2FyZENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPERldGFpbHMgPlxyXG4gICAgICAgICAgICAgIDxDb3ZlclxyXG4gICAgICAgICAgICAgICAgaW1hZ2U9e2l0ZW0ucGljdHVyZX1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8SW5mbz57Y29uZGl0aW9uW2l0ZW0uY29uZGl0aW9uXX0gLSB7aXRlbS5zb2xkX3F1YW50aXR5fSB2ZW5kaWRvcyA8L0luZm8+XHJcbiAgICAgICAgICAgICAgICA8VGl0bGU+e2l0ZW0udGl0bGV9PC9UaXRsZT5cclxuICAgICAgICAgICAgICAgIDxQcmljZVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS5wcmljZS5hbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlPXsndGV4dCd9XHJcbiAgICAgICAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yPXsnLid9XHJcbiAgICAgICAgICAgICAgICAgIGRlY2ltYWxTZXBhcmF0b3I9eycsJ31cclxuICAgICAgICAgICAgICAgICAgdGhvdXNhbmRzR3JvdXBTdHlsZT0ndGhvdXNhbmQnXHJcbiAgICAgICAgICAgICAgICAgIHByZWZpeD17aXRlbS5wcmljZS5jdXJyZW5jeSA9PT0gJ0FSUycgPyAnJCAnIDogJ1UkUyAnfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0NvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvRGV0YWlscz5cclxuICAgICAgICAgICAgPERlc2NyaXB0aW9uID5cclxuICAgICAgICAgICAgICA8RGVzY3JpcHRpb25UaXRsZT5EZXNjcmlwY2nDs24gZGVsIHByb2R1Y3RvPC9EZXNjcmlwdGlvblRpdGxlPlxyXG4gICAgICAgICAgICAgIDxEZXNjcmlwdGlvblA+e2l0ZW0uZGVzY3JpcHRpb259PC9EZXNjcmlwdGlvblA+XHJcbiAgICAgICAgICAgIDwvRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICA8L0NhcmRDb250YWluZXI+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0NvbnRhaW5lciA+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmAgXHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG5gXHJcblxyXG5jb25zdCBDYXJkQ29udGFpbmVyID0gc3R5bGVkKENhcmQpYFxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA4ODY7XHJcbiAgbWluLWhlaWdodDogODg2O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICNlZWU7XHJcbiAgYm9yZGVyLXJhZGl1czogMFxyXG5gXHJcblxyXG5jb25zdCBEZXRhaWxzID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5gXHJcblxyXG5jb25zdCBDb3ZlciA9IHN0eWxlZChDYXJkTWVkaWEpYFxyXG4gIHdpZHRoOiA2ODBweDtcclxuICBoZWlnaHQ6IDY4MHB4O1xyXG4gIG1hcmdpbi10b3A6IDMycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XHJcbmBcclxuXHJcbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQoQ2FyZENvbnRlbnQpYFxyXG4gIGZsZXg6IDEgMCBhdXRvO1xyXG5gXHJcblxyXG5jb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIG1hcmdpbjogMzJweDtcclxuICBtYXgtd2lkdGg6NjAlO1xyXG5gXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOnJvdztcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXgtd2lkdGg6IDI0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG5gXHJcbmNvbnN0IERlc2NyaXB0aW9uVGl0bGUgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBsaW5lLWhlaWdodDowO1xyXG4gIG1hcmdpbi10b3A6MTZweDtcclxuICBtYXJnaW4tYm90dG9tOjMycHg7XHJcbmBcclxuY0Rlc2NyaXB0aW9uUD0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgbGluZS1oZWlnaHQ6MDtcclxuICBtYXJnaW4tdG9wOjE2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTozMnB4O1xyXG5gXHJcblxyXG5jb25zdCBJbmZvID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICM5OTk7XHJcbiAgbWFyZ2luOiAxNnB4IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDA7XHJcbmBcclxuY29uc3QgUHJpY2UgPSBzdHlsZWQoTnVtYmVyRm9ybWF0KWBcclxuICBmb250LXNpemU6IDQ2cHg7XHJcbmAiXSwic291cmNlUm9vdCI6IiJ9