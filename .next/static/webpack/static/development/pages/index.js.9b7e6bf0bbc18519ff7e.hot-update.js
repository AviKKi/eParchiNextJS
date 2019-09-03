webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/InductionReportList/ReportSummary.js":
/*!*********************************************************!*\
  !*** ./components/InductionReportList/ReportSummary.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_InductionReportData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/InductionReportData */ "./components/data/InductionReportData.js");
var _jsxFileName = "/home/eswaraiah/Desktop/Books/eParchi/Dashboard/components/InductionReportList/ReportSummary.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ReportSummary = function ReportSummary(props) {
  var currentData = _data_InductionReportData__WEBPACK_IMPORTED_MODULE_1__["default"].find(function (it) {
    return it.parent_heat.heat_no === props.rSummary;
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    style: {
      fontSize: '2rem',
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Report Summary"), __jsx("div", {
    style: {
      margin: '1rem',
      border: '3px solid red',
      width: '96%',
      height: '50%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("span", {
    style: {
      fontWeight: 'bold'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Heat No: ", currentData.parent_heat.heat_no)), __jsx("div", {
    style: {
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("span", {
    style: {
      fontWeight: 'bold',
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "On Time: ", new Date(currentData.on_time).getHours(), " : ", new Date(currentData.on_time).getMinutes()), __jsx("span", {
    style: {
      fontWeight: 'bold',
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Off Time: ", (new Date(currentData.off_time) - new Date(currentData.on_time)) / 1000 / 60, " mins")), __jsx("div", {
    style: {
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("span", {
    style: {
      fontWeight: 'bold',
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Total Time: ", currentData.total_time), __jsx("span", {
    style: {
      fontWeight: 'bold',
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "PF Factor: ", currentData.pl)), __jsx("div", {
    style: {
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("span", {
    style: {
      fontWeight: 'bold',
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Aluminium: ", currentData.aluminium), __jsx("span", {
    style: {
      fontWeight: 'bold',
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Scrap: ", currentData.scrap)), __jsx("div", {
    style: {
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("span", {
    style: {
      fontWeight: 'bold',
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Silicon: ", currentData.silicon), __jsx("span", {
    style: {
      fontWeight: 'bold',
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Manganese: ", currentData.mn)), __jsx("div", {
    style: {
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("span", {
    style: {
      fontWeight: 'bold',
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Extra time reason: ", currentData.reason), __jsx("span", {
    style: {
      fontWeight: 'bold',
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Extra Time: ", currentData.total_time))));
};

/* harmony default export */ __webpack_exports__["default"] = (ReportSummary);

/***/ })

})
//# sourceMappingURL=index.js.9b7e6bf0bbc18519ff7e.hot-update.js.map