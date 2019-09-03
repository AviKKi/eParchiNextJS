webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/QualityReport.js":
/*!*************************************!*\
  !*** ./components/QualityReport.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_tabs_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/tabs/style/css */ "./node_modules/antd/lib/tabs/style/css.js");
/* harmony import */ var antd_lib_tabs_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/tabs */ "./node_modules/antd/lib/tabs/index.js");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_QualityReportData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/QualityReportData */ "./components/data/QualityReportData.js");
/* harmony import */ var _QualityReportTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./QualityReportTable */ "./components/QualityReportTable/index.js");


var _jsxFileName = "/home/eswaraiah/Desktop/Books/eParchi/Dashboard/components/QualityReport.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var TabPane = antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1___default.a.TabPane;

var callback = function callback(key) {// console.log(key);
};

var QualityReport = function QualityReport() {
  var furnaceNo = [];
  _data_QualityReportData__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(function (it) {
    if (it.parent_heat.furnace_no) furnaceNo.push(it.parent_heat.furnace_no);
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1___default.a, {
    defaultActiveKey: "1",
    onChange: callback,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, furnaceNo.map(function (it, i) {
    return __jsx(TabPane, {
      tab: "FURNACE ".concat(it),
      key: it,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx(_QualityReportTable__WEBPACK_IMPORTED_MODULE_4__["default"], {
      furnaceNo: it,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (QualityReport);

/***/ })

})
//# sourceMappingURL=index.js.a4ce453ebcce3ee70c58.hot-update.js.map