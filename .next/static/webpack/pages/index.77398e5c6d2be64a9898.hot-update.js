webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Searchbox.js":
/*!*********************************!*\
  !*** ./components/Searchbox.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Searchbox; });
/* harmony import */ var C_Users_circo_OneDrive_Documentos_repos_examen_ml_TestML_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_circo_OneDrive_Documentos_repos_examen_ml_TestML_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_circo_OneDrive_Documentos_repos_examen_ml_TestML_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_circo_OneDrive_Documentos_repos_examen_ml_TestML_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_circo_OneDrive_Documentos_repos_examen_ml_TestML_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_lab_Autocomplete_Autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/lab/Autocomplete/Autocomplete */ "./node_modules/@material-ui/lab/Autocomplete/Autocomplete.js");
/* harmony import */ var _material_ui_lab_Autocomplete_Autocomplete__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Autocomplete_Autocomplete__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/index.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_8__);




var _jsxFileName = "C:\\Users\\circo\\OneDrive\\Documentos\\repos\\examen ml\\TestML\\components\\Searchbox.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






function Searchbox(_ref) {
  _s();

  var _this = this;

  var optionSelected = _ref.optionSelected;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      open = _useState[0],
      setOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      options = _useState2[0],
      setOptions = _useState2[1];

  var loading = open && options.length === 0;

  var _useCookies = Object(react_cookie__WEBPACK_IMPORTED_MODULE_7__["useCookies"])(),
      _useCookies2 = Object(C_Users_circo_OneDrive_Documentos_repos_examen_ml_TestML_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useCookies, 2),
      cookies = _useCookies2[0],
      setCookie = _useCookies2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(cookies.LastSearch || null),
      value = _useState3[0],
      setValue = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      visible = _useState4[0],
      setVisible = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var active = true;

    if (!loading) {
      return undefined;
    }

    Object(C_Users_circo_OneDrive_Documentos_repos_examen_ml_TestML_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_circo_OneDrive_Documentos_repos_examen_ml_TestML_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _yield$axios, data, autosuggest;

      return C_Users_circo_OneDrive_Documentos_repos_examen_ml_TestML_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_4___default()("/api/autosuggest?q=".concat(cookies.LastSearch));

            case 2:
              _yield$axios = _context.sent;
              data = _yield$axios.data;
              _context.next = 6;
              return data.suggestions;

            case 6:
              autosuggest = _context.sent;

              if (active) {
                setOptions(autosuggest.map(function (key) {
                  return {
                    name: key.q
                  };
                }));
              }

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();

    return function () {
      active = false;
    };
  }, [loading]);

  var handleChange = /*#__PURE__*/function () {
    var _ref3 = Object(C_Users_circo_OneDrive_Documentos_repos_examen_ml_TestML_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_circo_OneDrive_Documentos_repos_examen_ml_TestML_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
      var _yield$axios2, data, autosuggest;

      return C_Users_circo_OneDrive_Documentos_repos_examen_ml_TestML_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setVisible(true);
              setValue(e.target.value);

              if (!(e.target.value && e.target.value !== "")) {
                _context2.next = 11;
                break;
              }

              _context2.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_4___default()("/api/autosuggest?q=".concat(e.target.value));

            case 5:
              _yield$axios2 = _context2.sent;
              data = _yield$axios2.data;
              _context2.next = 9;
              return data.suggestions;

            case 9:
              autosuggest = _context2.sent;
              setOptions(autosuggest.map(function (key) {
                return {
                  name: key.q
                };
              }));

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleChange(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var goToProduct = function goToProduct(e) {
    var valueSelected = e.currentTarget.innerHTML;
    setValue(valueSelected);
    optionSelected(valueSelected);
    setCookie("LastSearch", valueSelected);
    setVisible(false);
  };

  var onSubmit = function onSubmit(e) {
    e.preventDefault();
    var valueSelected = value;
    setValue(valueSelected);
    optionSelected(valueSelected);
    setCookie("LastSearch", valueSelected);
    setVisible(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (!open) {
      setOptions([]);
    }
  }, [open]);
  return __jsx(SearchBoxContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }, __jsx(Form, {
    onSubmit: onSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, options.length >= 1 && visible && __jsx(SuggestionContainer, {
    onBlur: function onBlur() {
      debugger;
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 44
    }
  }, __jsx(SuggestionList, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, options.map(function (value) {
    return __jsx(Suggestion, {
      onClick: goToProduct,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 37
      }
    }, value.name);
  }))), __jsx(InputContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx(InputWrapper, {
    type: "text",
    placeholder: "Nunca dejes de buscar",
    onChange: handleChange,
    style: {
      paddingLeft: 10
    },
    defaultValue: value,
    value: value,
    onClick: function onClick() {
      setVisible(true);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }), __jsx(Search, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, __jsx(Lupita, {
    onClick: onSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 19
    }
  })))));
}

_s(Searchbox, "kdEuBwGuPpQJZleK30q58EN4JK4=", false, function () {
  return [react_cookie__WEBPACK_IMPORTED_MODULE_7__["useCookies"]];
});

_c = Searchbox;
var InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].input.withConfig({
  displayName: "Searchbox__InputWrapper",
  componentId: "sc-1gbjbu6-0"
})(["padding:7px 60px 9px 15px;-webkit-border-radius:2px;border-radius:2px;background-color:#fff;border:0 rgba(0,0,0,.2);flex:1;:focus{outline:-webkit-focus-ring-color auto 0px !important;}"]);
_c2 = InputWrapper;
var SearchBoxContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Searchbox__SearchBoxContainer",
  componentId: "sc-1gbjbu6-1"
})(["position:relative;display:flex;flex-grow:1;"]);
_c3 = SearchBoxContainer;
var Form = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].form.withConfig({
  displayName: "Searchbox__Form",
  componentId: "sc-1gbjbu6-2"
})(["display:flex;flex-grow:1;"]);
_c4 = Form;
var SuggestionContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Searchbox__SuggestionContainer",
  componentId: "sc-1gbjbu6-3"
})(["display:flex;flex-grow:1;width:100%;flex-direction:column;position:absolute;top:36px;left:0;background:white;color:#333;font-size:16px;"]);
_c5 = SuggestionContainer;
var SuggestionList = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].ul.withConfig({
  displayName: "Searchbox__SuggestionList",
  componentId: "sc-1gbjbu6-4"
})(["margin:0;padding:0;"]);
_c6 = SuggestionList;
var Suggestion = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].li.withConfig({
  displayName: "Searchbox__Suggestion",
  componentId: "sc-1gbjbu6-5"
})(["padding:8px;display:flex;flex-grow:1;border:rgba(0,0,0,.2);color:#333;font-size:16px;:hover{color:white;background-color:#3483FA;}"]);
_c7 = Suggestion;
var Search = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Searchbox__Search",
  componentId: "sc-1gbjbu6-6"
})(["width:34px;height:34px;display:flex;justify-content:center;align-items:center;background-color:white;box-sizing:border-box;cursor:pointer;::before{content:'';display:block;width:34px;height:34px;border-left:1px solid #e6e6e6;position:absolute;top:6.5px;}"]);
_c8 = Search;
var Lupita = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_8___default.a).withConfig({
  displayName: "Searchbox__Lupita",
  componentId: "sc-1gbjbu6-7"
})(["font:300 13.3333px Arial;color:#999;"]);
_c9 = Lupita;
var InputContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Searchbox__InputContainer",
  componentId: "sc-1gbjbu6-8"
})(["display:flex;flex-grow:1;mar"]);
_c10 = InputContainer;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;

$RefreshReg$(_c, "Searchbox");
$RefreshReg$(_c2, "InputWrapper");
$RefreshReg$(_c3, "SearchBoxContainer");
$RefreshReg$(_c4, "Form");
$RefreshReg$(_c5, "SuggestionContainer");
$RefreshReg$(_c6, "SuggestionList");
$RefreshReg$(_c7, "Suggestion");
$RefreshReg$(_c8, "Search");
$RefreshReg$(_c9, "Lupita");
$RefreshReg$(_c10, "InputContainer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hib3guanMiXSwibmFtZXMiOlsiU2VhcmNoYm94Iiwib3B0aW9uU2VsZWN0ZWQiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJsb2FkaW5nIiwibGVuZ3RoIiwidXNlQ29va2llcyIsImNvb2tpZXMiLCJzZXRDb29raWUiLCJMYXN0U2VhcmNoIiwidmFsdWUiLCJzZXRWYWx1ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlRWZmZWN0IiwiYWN0aXZlIiwidW5kZWZpbmVkIiwiYXhpb3MiLCJkYXRhIiwic3VnZ2VzdGlvbnMiLCJhdXRvc3VnZ2VzdCIsIm1hcCIsImtleSIsIm5hbWUiLCJxIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsImdvVG9Qcm9kdWN0IiwidmFsdWVTZWxlY3RlZCIsImN1cnJlbnRUYXJnZXQiLCJpbm5lckhUTUwiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicGFkZGluZ0xlZnQiLCJJbnB1dFdyYXBwZXIiLCJzdHlsZWQiLCJpbnB1dCIsIlNlYXJjaEJveENvbnRhaW5lciIsImRpdiIsIkZvcm0iLCJmb3JtIiwiU3VnZ2VzdGlvbkNvbnRhaW5lciIsIlN1Z2dlc3Rpb25MaXN0IiwidWwiLCJTdWdnZXN0aW9uIiwibGkiLCJTZWFyY2giLCJMdXBpdGEiLCJTZWFyY2hJY29uIiwiSW5wdXRDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULE9BQXVDO0FBQUE7O0FBQUE7O0FBQUEsTUFBbEJDLGNBQWtCLFFBQWxCQSxjQUFrQjs7QUFBQSxrQkFDNUJDLHNEQUFRLENBQUMsS0FBRCxDQURvQjtBQUFBLE1BQzdDQyxJQUQ2QztBQUFBLE1BQ3ZDQyxPQUR1Qzs7QUFBQSxtQkFF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QUE7QUFBQSxzUUFBWjtNQUFNUSxNO0FBb0JOLElBQU1DLE1BQU0sR0FBR1osaUVBQU0sQ0FBQ2EsZ0VBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSw0Q0FBWjtNQUFNRCxNO0FBSU4sSUFBTUUsY0FBYyxHQUFHZCx5REFBTSxDQUFDRyxHQUFWO0FBQUE7QUFBQTtBQUFBLG9DQUFwQjtPQUFNVyxjIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc3Mzk4ZTVjNmQyYmU2NGE5ODk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IEF1dG9jb21wbGV0ZSBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL0F1dG9jb21wbGV0ZS9BdXRvY29tcGxldGUnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSBcInJlYWN0LWNvb2tpZVwiO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaGJveCh7IG9wdGlvblNlbGVjdGVkIH0pIHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IGxvYWRpbmcgPSBvcGVuICYmIG9wdGlvbnMubGVuZ3RoID09PSAwO1xyXG4gIGNvbnN0IFtjb29raWVzLCBzZXRDb29raWVdID0gdXNlQ29va2llcygpO1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoY29va2llcy5MYXN0U2VhcmNoIHx8IG51bGwpXHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBhY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgIGlmICghbG9hZGluZykge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcyhgL2FwaS9hdXRvc3VnZ2VzdD9xPSR7Y29va2llcy5MYXN0U2VhcmNofWApXHJcbiAgICAgIGNvbnN0IGF1dG9zdWdnZXN0ID0gYXdhaXQgZGF0YS5zdWdnZXN0aW9ucztcclxuXHJcbiAgICAgIGlmIChhY3RpdmUpIHtcclxuICAgICAgICBzZXRPcHRpb25zKGF1dG9zdWdnZXN0Lm1hcCgoa2V5KSA9PiB7IHJldHVybiB7IG5hbWU6IGtleS5xIH0gfSkpO1xyXG5cclxuICAgICAgfVxyXG4gICAgfSkoKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBhY3RpdmUgPSBmYWxzZTtcclxuICAgIH07XHJcbiAgfSwgW2xvYWRpbmddKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gYXN5bmMgKGUpID0+IHtcclxuICAgIHNldFZpc2libGUodHJ1ZSlcclxuICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlICYmIGUudGFyZ2V0LnZhbHVlICE9PSBcIlwiKSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MoYC9hcGkvYXV0b3N1Z2dlc3Q/cT0ke2UudGFyZ2V0LnZhbHVlfWApXHJcbiAgICAgIGNvbnN0IGF1dG9zdWdnZXN0ID0gYXdhaXQgZGF0YS5zdWdnZXN0aW9ucztcclxuICAgICAgc2V0T3B0aW9ucyhhdXRvc3VnZ2VzdC5tYXAoKGtleSkgPT4geyByZXR1cm4geyBuYW1lOiBrZXkucSB9IH0pKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGdvVG9Qcm9kdWN0ID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlU2VsZWN0ZWQgPSBlLmN1cnJlbnRUYXJnZXQuaW5uZXJIVE1MXHJcbiAgICBzZXRWYWx1ZSh2YWx1ZVNlbGVjdGVkKVxyXG4gICAgb3B0aW9uU2VsZWN0ZWQodmFsdWVTZWxlY3RlZClcclxuICAgIHNldENvb2tpZShcIkxhc3RTZWFyY2hcIiwgdmFsdWVTZWxlY3RlZCk7XHJcbiAgICBzZXRWaXNpYmxlKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgdmFsdWVTZWxlY3RlZCA9IHZhbHVlXHJcbiAgICBzZXRWYWx1ZSh2YWx1ZVNlbGVjdGVkKVxyXG4gICAgb3B0aW9uU2VsZWN0ZWQodmFsdWVTZWxlY3RlZClcclxuICAgIHNldENvb2tpZShcIkxhc3RTZWFyY2hcIiwgdmFsdWVTZWxlY3RlZCk7XHJcbiAgICBzZXRWaXNpYmxlKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghb3Blbikge1xyXG4gICAgICBzZXRPcHRpb25zKFtdKTtcclxuICAgIH1cclxuICB9LCBbb3Blbl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNlYXJjaEJveENvbnRhaW5lcj5cclxuICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSA+XHJcbiAgICAgICAge29wdGlvbnMubGVuZ3RoID49IDEgJiYgdmlzaWJsZSAmJiA8U3VnZ2VzdGlvbkNvbnRhaW5lciBvbkJsdXI9eygpID0+IHsgZGVidWdnZXIgfX0+XHJcbiAgICAgICAgICA8U3VnZ2VzdGlvbkxpc3Q+XHJcbiAgICAgICAgICAgIHtvcHRpb25zLm1hcCgodmFsdWUpID0+IDxTdWdnZXN0aW9uIG9uQ2xpY2s9e2dvVG9Qcm9kdWN0fT57dmFsdWUubmFtZX08L1N1Z2dlc3Rpb24+KX1cclxuICAgICAgICAgIDwvU3VnZ2VzdGlvbkxpc3Q+XHJcbiAgICAgICAgPC9TdWdnZXN0aW9uQ29udGFpbmVyPlxyXG4gICAgICAgIH1cclxuICAgICAgICA8SW5wdXRDb250YWluZXI+XHJcbiAgICAgICAgICA8SW5wdXRXcmFwcGVyIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOdW5jYSBkZWplcyBkZSBidXNjYXJcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBzdHlsZT17eyBwYWRkaW5nTGVmdDogMTAgfX0gZGVmYXVsdFZhbHVlPXt2YWx1ZX0gdmFsdWU9e3ZhbHVlfSBvbkNsaWNrPXsoKSA9PiB7IHNldFZpc2libGUodHJ1ZSkgfX0gLz5cclxuICAgICAgICAgIDxTZWFyY2g+PEx1cGl0YSBvbkNsaWNrPXtvblN1Ym1pdH0gLz48L1NlYXJjaD5cclxuICAgICAgICA8L0lucHV0Q29udGFpbmVyPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L1NlYXJjaEJveENvbnRhaW5lcj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBJbnB1dFdyYXBwZXIgPSBzdHlsZWQuaW5wdXRgXHJcbiAgcGFkZGluZzogN3B4IDYwcHggOXB4IDE1cHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAwIHJnYmEoMCwwLDAsLjIpO1xyXG4gIGZsZXg6IDE7XHJcbiAgLy9tYXJnaW46IDAgMzBweDtcclxuICA6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yIGF1dG8gMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBTZWFyY2hCb3hDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuYFxyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1ncm93OiAxO1xyXG5gXHJcblxyXG5jb25zdCBTdWdnZXN0aW9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4OyBcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzNnB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG5gXHJcbmNvbnN0IFN1Z2dlc3Rpb25MaXN0ID0gc3R5bGVkLnVsYFxyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG5gXHJcblxyXG5jb25zdCBTdWdnZXN0aW9uID0gc3R5bGVkLmxpYFxyXG4gIHBhZGRpbmc6IDhweDtcclxuICBkaXNwbGF5OiBmbGV4OyBcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgYm9yZGVyOiByZ2JhKDAsMCwwLC4yKTtcclxuICBjb2xvcjogIzMzMztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgOmhvdmVye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0ODNGQTtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IFNlYXJjaCA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6MzRweDtcclxuICBoZWlnaHQ6IDM0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIDo6YmVmb3Jle1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOjM0cHg7XHJcbiAgICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTZlNmU2O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA2LjVweDtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IEx1cGl0YSA9IHN0eWxlZChTZWFyY2hJY29uKWBcclxuICBmb250OiAzMDAgMTMuMzMzM3B4IEFyaWFsO1xyXG4gIGNvbG9yOiAjOTk5O1xyXG5gXHJcbmNvbnN0IElucHV0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBtYXJcclxuYCJdLCJzb3VyY2VSb290IjoiIn0=