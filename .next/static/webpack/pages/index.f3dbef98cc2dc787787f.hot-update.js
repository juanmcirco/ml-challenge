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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hib3guanMiXSwibmFtZXMiOlsiU2VhcmNoYm94Iiwib3B0aW9uU2VsZWN0ZWQiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJsb2FkaW5nIiwibGVuZ3RoIiwidXNlQ29va2llcyIsImNvb2tpZXMiLCJzZXRDb29raWUiLCJMYXN0U2VhcmNoIiwidmFsdWUiLCJzZXRWYWx1ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlRWZmZWN0IiwiYWN0aXZlIiwidW5kZWZpbmVkIiwiYXhpb3MiLCJkYXRhIiwic3VnZ2VzdGlvbnMiLCJhdXRvc3VnZ2VzdCIsIm1hcCIsImtleSIsIm5hbWUiLCJxIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsImdvVG9Qcm9kdWN0IiwidmFsdWVTZWxlY3RlZCIsImN1cnJlbnRUYXJnZXQiLCJpbm5lckhUTUwiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicGFkZGluZ0xlZnQiLCJJbnB1dFdyYXBwZXIiLCJzdHlsZWQiLCJpbnB1dCIsIlNlYXJjaEJveENvbnRhaW5lciIsImRpdiIsIkZvcm0iLCJmb3JtIiwiU3VnZ2VzdGlvbkNvbnRhaW5lciIsIlN1Z2dlc3Rpb25MaXN0IiwidWwiLCJTdWdnZXN0aW9uIiwibGkiLCJTZWFyY2giLCJMdXBpdGEiLCJTZWFyY2hJY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsU0FBVCxPQUF1QztBQUFBOztBQUFBOztBQUFBLE1BQWxCQyxjQUFrQixRQUFsQkEsY0FBa0I7O0FBQUEsa0JBQzVCQyxzREFBUSxDQUFDLEtBQUQsQ0FEb0I7QUFBQSxNQUM3Q0MsSUFENkM7QUFBQSxNQUN2Q0MsT0FEdUM7O0FBQUEsbUJBRXRCRixzREFBUSxDQUFDLEVB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QUFBQTtBQUFBLDJDQUFaO01BQU1ELE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjNkYmVmOThjYzJkYzc4Nzc4N2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgQXV0b2NvbXBsZXRlIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvQXV0b2NvbXBsZXRlL0F1dG9jb21wbGV0ZSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tIFwicmVhY3QtY29va2llXCI7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZWFyY2gnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoYm94KHsgb3B0aW9uU2VsZWN0ZWQgfSkge1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgbG9hZGluZyA9IG9wZW4gJiYgb3B0aW9ucy5sZW5ndGggPT09IDA7XHJcbiAgY29uc3QgW2Nvb2tpZXMsIHNldENvb2tpZV0gPSB1c2VDb29raWVzKCk7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShjb29raWVzLkxhc3RTZWFyY2ggfHwgbnVsbClcclxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgaWYgKCFsb2FkaW5nKSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zKGAvYXBpL2F1dG9zdWdnZXN0P3E9JHtjb29raWVzLkxhc3RTZWFyY2h9YClcclxuICAgICAgY29uc3QgYXV0b3N1Z2dlc3QgPSBhd2FpdCBkYXRhLnN1Z2dlc3Rpb25zO1xyXG5cclxuICAgICAgaWYgKGFjdGl2ZSkge1xyXG4gICAgICAgIHNldE9wdGlvbnMoYXV0b3N1Z2dlc3QubWFwKChrZXkpID0+IHsgcmV0dXJuIHsgbmFtZToga2V5LnEgfSB9KSk7XHJcblxyXG4gICAgICB9XHJcbiAgICB9KSgpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfTtcclxuICB9LCBbbG9hZGluZ10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgc2V0VmlzaWJsZSh0cnVlKVxyXG4gICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUgJiYgZS50YXJnZXQudmFsdWUgIT09IFwiXCIpIHtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcyhgL2FwaS9hdXRvc3VnZ2VzdD9xPSR7ZS50YXJnZXQudmFsdWV9YClcclxuICAgICAgY29uc3QgYXV0b3N1Z2dlc3QgPSBhd2FpdCBkYXRhLnN1Z2dlc3Rpb25zO1xyXG4gICAgICBzZXRPcHRpb25zKGF1dG9zdWdnZXN0Lm1hcCgoa2V5KSA9PiB7IHJldHVybiB7IG5hbWU6IGtleS5xIH0gfSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ29Ub1Byb2R1Y3QgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWVTZWxlY3RlZCA9IGUuY3VycmVudFRhcmdldC5pbm5lckhUTUxcclxuICAgIHNldFZhbHVlKHZhbHVlU2VsZWN0ZWQpXHJcbiAgICBvcHRpb25TZWxlY3RlZCh2YWx1ZVNlbGVjdGVkKVxyXG4gICAgc2V0Q29va2llKFwiTGFzdFNlYXJjaFwiLCB2YWx1ZVNlbGVjdGVkKTtcclxuICAgIHNldFZpc2libGUoZmFsc2UpXHJcbiAgfVxyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB2YWx1ZVNlbGVjdGVkID0gdmFsdWVcclxuICAgIHNldFZhbHVlKHZhbHVlU2VsZWN0ZWQpXHJcbiAgICBvcHRpb25TZWxlY3RlZCh2YWx1ZVNlbGVjdGVkKVxyXG4gICAgc2V0Q29va2llKFwiTGFzdFNlYXJjaFwiLCB2YWx1ZVNlbGVjdGVkKTtcclxuICAgIHNldFZpc2libGUoZmFsc2UpXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFvcGVuKSB7XHJcbiAgICAgIHNldE9wdGlvbnMoW10pO1xyXG4gICAgfVxyXG4gIH0sIFtvcGVuXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U2VhcmNoQm94Q29udGFpbmVyPlxyXG4gICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXR9ID5cclxuICAgICAgICB7b3B0aW9ucy5sZW5ndGggPj0gMSAmJiB2aXNpYmxlICYmIDxTdWdnZXN0aW9uQ29udGFpbmVyIG9uQmx1cj17KCkgPT4geyBkZWJ1Z2dlciB9fT5cclxuICAgICAgICAgIDxTdWdnZXN0aW9uTGlzdD5cclxuICAgICAgICAgICAge29wdGlvbnMubWFwKCh2YWx1ZSkgPT4gPFN1Z2dlc3Rpb24gb25DbGljaz17Z29Ub1Byb2R1Y3R9Pnt2YWx1ZS5uYW1lfTwvU3VnZ2VzdGlvbj4pfVxyXG4gICAgICAgICAgPC9TdWdnZXN0aW9uTGlzdD5cclxuICAgICAgICA8L1N1Z2dlc3Rpb25Db250YWluZXI+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxJbnB1dFdyYXBwZXIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk51bmNhIGRlamVzIGRlIGJ1c2NhclwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAxMCB9fSBkZWZhdWx0VmFsdWU9e3ZhbHVlfSB2YWx1ZT17dmFsdWV9IG9uQ2xpY2s9eygpID0+IHsgc2V0VmlzaWJsZSh0cnVlKSB9fSAvPlxyXG4gICAgICAgIDxTZWFyY2g+PEx1cGl0YSBvbkNsaWNrPXtvblN1Ym1pdH0gLz48L1NlYXJjaD5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9TZWFyY2hCb3hDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgSW5wdXRXcmFwcGVyID0gc3R5bGVkLmlucHV0YFxyXG4gIHBhZGRpbmc6IDdweCA2MHB4IDlweCAxNXB4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogMCByZ2JhKDAsMCwwLC4yKTtcclxuICAvL21hcmdpbjogMCAzMHB4O1xyXG5cclxuICA6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yIGF1dG8gMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBTZWFyY2hCb3hDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuYFxyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1ncm93OiAxO1xyXG5gXHJcblxyXG5jb25zdCBTdWdnZXN0aW9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4OyBcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzNnB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG5gXHJcbmNvbnN0IFN1Z2dlc3Rpb25MaXN0ID0gc3R5bGVkLnVsYFxyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG5gXHJcblxyXG5jb25zdCBTdWdnZXN0aW9uID0gc3R5bGVkLmxpYFxyXG4gIHBhZGRpbmc6IDhweDtcclxuICBkaXNwbGF5OiBmbGV4OyBcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgYm9yZGVyOiByZ2JhKDAsMCwwLC4yKTtcclxuICBjb2xvcjogIzMzMztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgOmhvdmVye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0ODNGQTtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IFNlYXJjaCA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6MzRweDtcclxuICBoZWlnaHQ6IDM0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIDo6YmVmb3Jle1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOjM0cHg7XHJcbiAgICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTZlNmU2O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA2LjVweDtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IEx1cGl0YSA9IHN0eWxlZChTZWFyY2hJY29uKWBcclxuICBmb250OiAzMDAgMTMuMzMzM3B4IEFyaWFsO1xyXG4gIGNvbG9yOiAjOTk5XHJcbmAiXSwic291cmNlUm9vdCI6IiJ9