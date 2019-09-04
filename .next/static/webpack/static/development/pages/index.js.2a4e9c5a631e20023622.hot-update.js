webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/QualityReportTable/index.js":
/*!************************************************!*\
  !*** ./components/QualityReportTable/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style/css */ "./node_modules/antd/lib/button/style/css.js");
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_QualityReportData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/QualityReportData */ "./components/data/QualityReportData.js");
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Column */ "./components/QualityReportTable/Column.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/es/index.js");
/* harmony import */ var react_table_react_table_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-table/react-table.css */ "./node_modules/react-table/react-table.css");
/* harmony import */ var react_table_react_table_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_table_react_table_css__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "/home/eswaraiah/Desktop/Books/eParchi/Dashboard/components/QualityReportTable/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



// Import React Table



var Table = function Table(props) {
  var data = _data_QualityReportData__WEBPACK_IMPORTED_MODULE_3__["default"].filter(function (it) {
    return it.parent_heat.furnace_no === props.furnaceNo;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {}, [data]);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(react_table__WEBPACK_IMPORTED_MODULE_5__["default"], {
    columns: _Column__WEBPACK_IMPORTED_MODULE_4__["default"],
    data: data,
    defaultPageSize: data.length >= 10 ? 10 : data.length,
    showPaginationBottom: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx("div", {
    style: {
      textAlign: 'right',
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "primary",
    icon: "download",
    size: "large",
    shape: "circle",
    onClick: function onClick() {
      return alert('Work is GoingOn :~)');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ })

})
//# sourceMappingURL=index.js.2a4e9c5a631e20023622.hot-update.js.map