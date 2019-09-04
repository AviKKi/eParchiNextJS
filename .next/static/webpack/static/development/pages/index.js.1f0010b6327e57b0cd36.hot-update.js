webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/QualityReport.js":
/*!*************************************!*\
  !*** ./components/QualityReport.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_calendar_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/calendar/style/css */ "./node_modules/antd/lib/calendar/style/css.js");
/* harmony import */ var antd_lib_calendar_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_calendar_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/calendar */ "./node_modules/antd/lib/calendar/index.js");
/* harmony import */ var antd_lib_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_tabs_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/tabs/style/css */ "./node_modules/antd/lib/tabs/style/css.js");
/* harmony import */ var antd_lib_tabs_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/tabs */ "./node_modules/antd/lib/tabs/index.js");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_QualityReportData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/QualityReportData */ "./components/data/QualityReportData.js");
/* harmony import */ var _QualityReportTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./QualityReportTable */ "./components/QualityReportTable/index.js");




var _jsxFileName = "/home/eswaraiah/Desktop/Books/eParchi/Dashboard/components/QualityReport.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;



var TabPane = antd_lib_tabs__WEBPACK_IMPORTED_MODULE_3___default.a.TabPane;

var callback = function callback(key) {// console.log(key);
};

function onPanelChange(value, mode) {
  console.log(value, mode);
}

var QualityReport = function QualityReport() {
  var furnaceNo = [];
  _data_QualityReportData__WEBPACK_IMPORTED_MODULE_5__["default"].forEach(function (it) {
    if (it.parent_heat.furnace_no) furnaceNo.push(it.parent_heat.furnace_no);
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_3___default.a, {
    defaultActiveKey: "1",
    onChange: callback,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, furnaceNo.map(function (it, i) {
    return __jsx(TabPane, {
      tab: "FURNACE ".concat(it),
      key: it,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx(_QualityReportTable__WEBPACK_IMPORTED_MODULE_6__["default"], {
      furnaceNo: it,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }));
  })), __jsx("div", {
    style: {
      width: 300,
      border: '1px solid #d9d9d9',
      borderRadius: 4
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(antd_lib_calendar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    fullscreen: false,
    onPanelChange: onPanelChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), ",");
};

/* harmony default export */ __webpack_exports__["default"] = (QualityReport);

/***/ })

})
//# sourceMappingURL=index.js.1f0010b6327e57b0cd36.hot-update.js.map