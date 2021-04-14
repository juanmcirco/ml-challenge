webpackHotUpdate_N_E("pages/items/[results]",{

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
  }))), __jsx(InputWrapper, {
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
      lineNumber: 78,
      columnNumber: 9
    }
  }), __jsx(Search, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, __jsx(Lupita, {
    onClick: onSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }))));
}

_s(Searchbox, "kdEuBwGuPpQJZleK30q58EN4JK4=", false, function () {
  return [react_cookie__WEBPACK_IMPORTED_MODULE_7__["useCookies"]];
});

_c = Searchbox;
var InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].input.withConfig({
  displayName: "Searchbox__InputWrapper",
  componentId: "sc-1gbjbu6-0"
})(["padding:7px 60px 9px 15px;-webkit-border-radius:2px;border-radius:2px;background-color:#fff;border:0 rgba(0,0,0,.2);:focus{outline:-webkit-focus-ring-color auto 0px !important;}"]);
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
})(["font:300 13.3333px Arial;color:#999"]);
_c9 = Lupita;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;

$RefreshReg$(_c, "Searchbox");
$RefreshReg$(_c2, "InputWrapper");
$RefreshReg$(_c3, "SearchBoxContainer");
$RefreshReg$(_c4, "Form");
$RefreshReg$(_c5, "SuggestionContainer");
$RefreshReg$(_c6, "SuggestionList");
$RefreshReg$(_c7, "Suggestion");
$RefreshReg$(_c8, "Search");
$RefreshReg$(_c9, "Lupita");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hib3guanMiXSwibmFtZXMiOlsiU2VhcmNoYm94Iiwib3B0aW9uU2VsZWN0ZWQiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJsb2FkaW5nIiwibGVuZ3RoIiwidXNlQ29va2llcyIsImNvb2tpZXMiLCJzZXRDb29raWUiLCJMYXN0U2VhcmNoIiwidmFsdWUiLCJzZXRWYWx1ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlRWZmZWN0IiwiYWN0aXZlIiwidW5kZWZpbmVkIiwiYXhpb3MiLCJkYXRhIiwic3VnZ2VzdGlvbnMiLCJhdXRvc3VnZ2VzdCIsIm1hcCIsImtleSIsIm5hbWUiLCJxIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsImdvVG9Qcm9kdWN0IiwidmFsdWVTZWxlY3RlZCIsImN1cnJlbnRUYXJnZXQiLCJpbm5lckhUTUwiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicGFkZGluZ0xlZnQiLCJJbnB1dFdyYXBwZXIiLCJzdHlsZWQiLCJpbnB1dCIsIlNlYXJjaEJveENvbnRhaW5lciIsImRpdiIsIkZvcm0iLCJmb3JtIiwiU3VnZ2VzdGlvbkNvbnRhaW5lciIsIlN1Z2dlc3Rpb25MaXN0IiwidWwiLCJTdWdnZXN0aW9uIiwibGkiLCJTZWFyY2giLCJMdXBpdGEiLCJTZWFyY2hJY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsU0FBVCxPQUF1QztBQUFBOztBQUFBOztBQUFBLE1BQWxCQyxjQUFrQixRQUFsQkEsY0FBa0I7O0FBQUEsa0JBQzVCQyxzREFBUSxDQUFDLEtBQUQsQ0FEb0I7QUFBQSxNQUM3Q0MsSUFENkM7QUFBQSxNQUN2Q0MsT0FEdUM7O0FBQUEsbUJBRXRCRixzREFBUSxDQUFDLEVB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QUFBQTtBQUFBLDJDQUFaO01BQU1ELE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaXRlbXMvW3Jlc3VsdHNdLmYzZGJlZjk4Y2MyZGM3ODc3ODdmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IEF1dG9jb21wbGV0ZSBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL0F1dG9jb21wbGV0ZS9BdXRvY29tcGxldGUnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSBcInJlYWN0LWNvb2tpZVwiO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaGJveCh7IG9wdGlvblNlbGVjdGVkIH0pIHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IGxvYWRpbmcgPSBvcGVuICYmIG9wdGlvbnMubGVuZ3RoID09PSAwO1xyXG4gIGNvbnN0IFtjb29raWVzLCBzZXRDb29raWVdID0gdXNlQ29va2llcygpO1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoY29va2llcy5MYXN0U2VhcmNoIHx8IG51bGwpXHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBhY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgIGlmICghbG9hZGluZykge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcyhgL2FwaS9hdXRvc3VnZ2VzdD9xPSR7Y29va2llcy5MYXN0U2VhcmNofWApXHJcbiAgICAgIGNvbnN0IGF1dG9zdWdnZXN0ID0gYXdhaXQgZGF0YS5zdWdnZXN0aW9ucztcclxuXHJcbiAgICAgIGlmIChhY3RpdmUpIHtcclxuICAgICAgICBzZXRPcHRpb25zKGF1dG9zdWdnZXN0Lm1hcCgoa2V5KSA9PiB7IHJldHVybiB7IG5hbWU6IGtleS5xIH0gfSkpO1xyXG5cclxuICAgICAgfVxyXG4gICAgfSkoKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBhY3RpdmUgPSBmYWxzZTtcclxuICAgIH07XHJcbiAgfSwgW2xvYWRpbmddKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gYXN5bmMgKGUpID0+IHtcclxuICAgIHNldFZpc2libGUodHJ1ZSlcclxuICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlICYmIGUudGFyZ2V0LnZhbHVlICE9PSBcIlwiKSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MoYC9hcGkvYXV0b3N1Z2dlc3Q/cT0ke2UudGFyZ2V0LnZhbHVlfWApXHJcbiAgICAgIGNvbnN0IGF1dG9zdWdnZXN0ID0gYXdhaXQgZGF0YS5zdWdnZXN0aW9ucztcclxuICAgICAgc2V0T3B0aW9ucyhhdXRvc3VnZ2VzdC5tYXAoKGtleSkgPT4geyByZXR1cm4geyBuYW1lOiBrZXkucSB9IH0pKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGdvVG9Qcm9kdWN0ID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlU2VsZWN0ZWQgPSBlLmN1cnJlbnRUYXJnZXQuaW5uZXJIVE1MXHJcbiAgICBzZXRWYWx1ZSh2YWx1ZVNlbGVjdGVkKVxyXG4gICAgb3B0aW9uU2VsZWN0ZWQodmFsdWVTZWxlY3RlZClcclxuICAgIHNldENvb2tpZShcIkxhc3RTZWFyY2hcIiwgdmFsdWVTZWxlY3RlZCk7XHJcbiAgICBzZXRWaXNpYmxlKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgdmFsdWVTZWxlY3RlZCA9IHZhbHVlXHJcbiAgICBzZXRWYWx1ZSh2YWx1ZVNlbGVjdGVkKVxyXG4gICAgb3B0aW9uU2VsZWN0ZWQodmFsdWVTZWxlY3RlZClcclxuICAgIHNldENvb2tpZShcIkxhc3RTZWFyY2hcIiwgdmFsdWVTZWxlY3RlZCk7XHJcbiAgICBzZXRWaXNpYmxlKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghb3Blbikge1xyXG4gICAgICBzZXRPcHRpb25zKFtdKTtcclxuICAgIH1cclxuICB9LCBbb3Blbl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNlYXJjaEJveENvbnRhaW5lcj5cclxuICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSA+XHJcbiAgICAgICAge29wdGlvbnMubGVuZ3RoID49IDEgJiYgdmlzaWJsZSAmJiA8U3VnZ2VzdGlvbkNvbnRhaW5lciBvbkJsdXI9eygpID0+IHsgZGVidWdnZXIgfX0+XHJcbiAgICAgICAgICA8U3VnZ2VzdGlvbkxpc3Q+XHJcbiAgICAgICAgICAgIHtvcHRpb25zLm1hcCgodmFsdWUpID0+IDxTdWdnZXN0aW9uIG9uQ2xpY2s9e2dvVG9Qcm9kdWN0fT57dmFsdWUubmFtZX08L1N1Z2dlc3Rpb24+KX1cclxuICAgICAgICAgIDwvU3VnZ2VzdGlvbkxpc3Q+XHJcbiAgICAgICAgPC9TdWdnZXN0aW9uQ29udGFpbmVyPlxyXG4gICAgICAgIH1cclxuICAgICAgICA8SW5wdXRXcmFwcGVyIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOdW5jYSBkZWplcyBkZSBidXNjYXJcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBzdHlsZT17eyBwYWRkaW5nTGVmdDogMTAgfX0gZGVmYXVsdFZhbHVlPXt2YWx1ZX0gdmFsdWU9e3ZhbHVlfSBvbkNsaWNrPXsoKSA9PiB7IHNldFZpc2libGUodHJ1ZSkgfX0gLz5cclxuICAgICAgICA8U2VhcmNoPjxMdXBpdGEgb25DbGljaz17b25TdWJtaXR9IC8+PC9TZWFyY2g+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvU2VhcmNoQm94Q29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IElucHV0V3JhcHBlciA9IHN0eWxlZC5pbnB1dGBcclxuICBwYWRkaW5nOiA3cHggNjBweCA5cHggMTVweDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDAgcmdiYSgwLDAsMCwuMik7XHJcbiAgLy9tYXJnaW46IDAgMzBweDtcclxuXHJcbiAgOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IC13ZWJraXQtZm9jdXMtcmluZy1jb2xvciBhdXRvIDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgU2VhcmNoQm94Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWdyb3c6IDE7XHJcbmBcclxuXHJcbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuYFxyXG5cclxuY29uc3QgU3VnZ2VzdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDsgXHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzZweDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuYFxyXG5jb25zdCBTdWdnZXN0aW9uTGlzdCA9IHN0eWxlZC51bGBcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuYFxyXG5cclxuY29uc3QgU3VnZ2VzdGlvbiA9IHN0eWxlZC5saWBcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgZGlzcGxheTogZmxleDsgXHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGJvcmRlcjogcmdiYSgwLDAsMCwuMik7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIDpob3ZlcntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDgzRkE7XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBTZWFyY2ggPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOjM0cHg7XHJcbiAgaGVpZ2h0OiAzNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICA6OmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDozNHB4O1xyXG4gICAgIGhlaWdodDogMzRweDtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2U2ZTZlNjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNi41cHg7XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBMdXBpdGEgPSBzdHlsZWQoU2VhcmNoSWNvbilgXHJcbiAgZm9udDogMzAwIDEzLjMzMzNweCBBcmlhbDtcclxuICBjb2xvcjogIzk5OVxyXG5gIl0sInNvdXJjZVJvb3QiOiIifQ==