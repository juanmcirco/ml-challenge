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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\circo\\OneDrive\\Documentos\\repos\\examen ml\\TestML\\components\\ResultDescription.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'block',
      width: 886,
      minHeight: 886,
      margin: 'auto',
      padding: '20px 50px 20px 0',
      borderBottom: 'thin solid #eee',
      borderRadius: 0
    },
    details: {
      display: 'flex'
    },
    description: {
      display: 'flex',
      flexGrow: '1'
    },
    content: {
      flex: '1 0 auto'
    },
    cover: {
      width: 200
    }
  };
});
function ResultDescription(_ref) {
  _s();

  var item = _ref.item;
  var classes = useStyles();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.details,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.cover,
    image: item.picture,
    title: item.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    component: "h6",
    variant: "h6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, item.title), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "subtitle1",
    color: "textSecondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: item.price.amount,
    displayType: 'text',
    thousandSeparator: true,
    prefix: item.price.currency === 'ARS' ? '$' : 'U$S',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  })))), __jsx("div", {
    className: classes.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    component: "p",
    variant: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, item.description)));
}

_s(ResultDescription, "VtevrTi9kvKTG+vqc/SYVHiEGOM=", false, function () {
  return [useStyles, _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["useTheme"]];
});

_c = ResultDescription;

var _c;

$RefreshReg$(_c, "ResultDescription");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXN1bHREZXNjcmlwdGlvbi5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsIndpZHRoIiwibWluSGVpZ2h0IiwibWFyZ2luIiwicGFkZGluZyIsImJvcmRlckJvdHRvbSIsImJvcmRlclJhZGl1cyIsImRldGFpbHMiLCJkZXNjcmlwdGlvbiIsImZsZXhHcm93IiwiY29udGVudCIsImZsZXgiLCJjb3ZlciIsIlJlc3VsdERlc2NyaXB0aW9uIiwiaXRlbSIsImNsYXNzZXMiLCJ1c2VUaGVtZSIsInBpY3R1cmUiLCJ0aXRsZSIsInByaWNlIiwiYW1vdW50IiwiY3VycmVuY3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsUUFBSSxFQUFFO0FBQ0pDLGFBQU8sRUFBRSxPQURMO0FBRUpDLFdBQUssRUFBRSxHQUZIO0FBR0pDLGVBQVMsRUFBRSxHQUhQO0FBSUpDLFlBQU0sRUFBRSxNQUpKO0FBS0pDLGFBQU8sRUFBRSxrQkFMTDtBQU1KQyxrQkFBWSxFQUFFLGlCQU5WO0FBT0pDLGtCQUFZLEVBQUU7QUFQVixLQURpQztBQVV2Q0MsV0FBTyxFQUFFO0FBQ1BQLGFBQU8sRUFBRTtBQURGLEtBVjhCO0FBYXZDUSxlQUFXLEVBQUU7QUFDWFIsYUFBTyxFQUFFLE1BREU7QUFFWFMsY0FBUSxFQUFFO0FBRkMsS0FiMEI7QUFpQnZDQyxXQUFPLEVBQUU7QUFDUEMsVUFBSSxFQUFFO0FBREMsS0FqQjhCO0FBb0J2Q0MsU0FBSyxFQUFFO0FBQ0xYLFdBQUssRUFBRTtBQURGO0FBcEJnQyxHQUFaO0FBQUEsQ0FBRCxDQUE1QjtBQXlCZSxTQUFTWSxpQkFBVCxPQUFxQztBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUNsRCxNQUFNQyxPQUFPLEdBQUduQixTQUFTLEVBQXpCO0FBQ0EsTUFBTUUsS0FBSyxHQUFHa0IseUVBQVEsRUFBdEI7QUFFQSxTQUNFLE1BQUMsOERBQUQ7QUFBTSxhQUFTLEVBQUVELE9BQU8sQ0FBQ2hCLElBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRWdCLE9BQU8sQ0FBQ1IsT0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbUVBQUQ7QUFDRSxhQUFTLEVBQUVRLE9BQU8sQ0FBQ0gsS0FEckI7QUFFRSxTQUFLLEVBQUVFLElBQUksQ0FBQ0csT0FGZDtBQUdFLFNBQUssRUFBRUgsSUFBSSxDQUFDSSxLQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU1FLE1BQUMscUVBQUQ7QUFBYSxhQUFTLEVBQUVILE9BQU8sQ0FBQ0wsT0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0VBQUQ7QUFBWSxhQUFTLEVBQUMsSUFBdEI7QUFBMkIsV0FBTyxFQUFDLElBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0ksSUFBSSxDQUFDSSxLQURSLENBREYsRUFJRSxNQUFDLG9FQUFEO0FBQVksV0FBTyxFQUFDLFdBQXBCO0FBQWdDLFNBQUssRUFBQyxlQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUFjLFNBQUssRUFBRUosSUFBSSxDQUFDSyxLQUFMLENBQVdDLE1BQWhDO0FBQXdDLGVBQVcsRUFBRSxNQUFyRDtBQUE2RCxxQkFBaUIsRUFBRSxJQUFoRjtBQUFzRixVQUFNLEVBQUVOLElBQUksQ0FBQ0ssS0FBTCxDQUFXRSxRQUFYLEtBQXdCLEtBQXhCLEdBQWdDLEdBQWhDLEdBQXNDLEtBQXBJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUpGLENBTkYsQ0FERixFQWdCRTtBQUFLLGFBQVMsRUFBRU4sT0FBTyxDQUFDUCxXQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUFZLGFBQVMsRUFBQyxHQUF0QjtBQUEwQixXQUFPLEVBQUMsR0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTSxJQUFJLENBQUNOLFdBRFIsQ0FERixDQWhCRixDQURGO0FBd0JEOztHQTVCdUJLLGlCO1VBQ05qQixTLEVBQ0ZvQixpRTs7O0tBRlFILGlCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2l0ZW1zL1tyZXN1bHRzXS5hODgxYjY4MmZlNTJjY2ViNmVjOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcclxuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IE51bWJlckZvcm1hdCBmcm9tICdyZWFjdC1udW1iZXItZm9ybWF0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIHdpZHRoOiA4ODYsXHJcbiAgICBtaW5IZWlnaHQ6IDg4NixcclxuICAgIG1hcmdpbjogJ2F1dG8nLFxyXG4gICAgcGFkZGluZzogJzIwcHggNTBweCAyMHB4IDAnLFxyXG4gICAgYm9yZGVyQm90dG9tOiAndGhpbiBzb2xpZCAjZWVlJyxcclxuICAgIGJvcmRlclJhZGl1czogMFxyXG4gIH0sXHJcbiAgZGV0YWlsczoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gIH0sXHJcbiAgZGVzY3JpcHRpb246IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhHcm93OiAnMScsXHJcbiAgfSxcclxuICBjb250ZW50OiB7XHJcbiAgICBmbGV4OiAnMSAwIGF1dG8nLFxyXG4gIH0sXHJcbiAgY292ZXI6IHtcclxuICAgIHdpZHRoOiAyMDAsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzdWx0RGVzY3JpcHRpb24oeyBpdGVtIH0pIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWxzfT5cclxuICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY292ZXJ9XHJcbiAgICAgICAgICBpbWFnZT17aXRlbS5waWN0dXJlfVxyXG4gICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDZcIiB2YXJpYW50PVwiaDZcIj5cclxuICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgIDxOdW1iZXJGb3JtYXQgdmFsdWU9e2l0ZW0ucHJpY2UuYW1vdW50fSBkaXNwbGF5VHlwZT17J3RleHQnfSB0aG91c2FuZFNlcGFyYXRvcj17dHJ1ZX0gcHJlZml4PXtpdGVtLnByaWNlLmN1cnJlbmN5ID09PSAnQVJTJyA/ICckJyA6ICdVJFMnfSAvPlxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwicFwiIHZhcmlhbnQ9XCJwXCI+XHJcbiAgICAgICAgICB7aXRlbS5kZXNjcmlwdGlvbn1cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9