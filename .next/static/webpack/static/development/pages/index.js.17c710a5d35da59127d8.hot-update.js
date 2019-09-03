webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/InductionReport.js":
/*!***************************************!*\
  !*** ./components/InductionReport.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var antd_lib_tabs_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/tabs/style/css */ "./node_modules/antd/lib/tabs/style/css.js");
/* harmony import */ var antd_lib_tabs_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/tabs */ "./node_modules/antd/lib/tabs/index.js");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_InductionReportData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/InductionReportData */ "./components/data/InductionReportData.js");
/* harmony import */ var _InductionReportList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./InductionReportList */ "./components/InductionReportList/index.js");




var _jsxFileName = "/home/eswaraiah/Desktop/Books/eParchi/Dashboard/components/InductionReport.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;



var TabPane = antd_lib_tabs__WEBPACK_IMPORTED_MODULE_3___default.a.TabPane;

var callback = function callback(key) {// console.log(key);
};

var InductionReport = function InductionReport() {
  var furnaceNo = [];
  _data_InductionReportData__WEBPACK_IMPORTED_MODULE_5__["default"].forEach(function (it) {
    if (it.parent_heat.furnace_no) furnaceNo.push(it.parent_heat.furnace_no);
  });
  furnaceNo = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0___default.a(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(furnaceNo)));
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_3___default.a, {
    defaultActiveKey: "1",
    onChange: callback,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, furnaceNo.map(function (it, i) {
    return __jsx(TabPane, {
      tab: "FURNACE ".concat(it),
      key: it,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx(_InductionReportList__WEBPACK_IMPORTED_MODULE_6__["default"], {
      furnaceNo: it,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (InductionReport);

/***/ })

})
//# sourceMappingURL=index.js.17c710a5d35da59127d8.hot-update.js.map