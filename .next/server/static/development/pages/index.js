module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CcmSummary.js":
/*!**********************************!*\
  !*** ./components/CcmSummary.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/eswaraiah/Desktop/Books/eParchi/Dashboard/components/CcmSummary.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const CcmSummary = () => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "CcmSummary");
};

/* harmony default export */ __webpack_exports__["default"] = (CcmSummary);

/***/ }),

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
/* harmony import */ var antd_lib_tabs_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/tabs/style/css */ "./node_modules/antd/lib/tabs/style/css.js");
/* harmony import */ var antd_lib_tabs_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/tabs */ "antd/lib/tabs");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_InductionReportData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/InductionReportData */ "./components/data/InductionReportData.js");
/* harmony import */ var _InductionReportList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InductionReportList */ "./components/InductionReportList/index.js");



var _jsxFileName = "/home/eswaraiah/Desktop/Books/eParchi/Dashboard/components/InductionReport.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



const {
  TabPane
} = antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2___default.a;

const callback = key => {// console.log(key);
};

const InductionReport = () => {
  let furnaceNo = [];
  _data_InductionReportData__WEBPACK_IMPORTED_MODULE_4__["default"].forEach(it => {
    if (it.parent_heat.furnace_no) furnaceNo.push(it.parent_heat.furnace_no);
  });
  furnaceNo = [...new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0___default.a([...furnaceNo])];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2___default.a, {
    defaultActiveKey: "1",
    onChange: callback,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, furnaceNo.map((it, i) => {
    return __jsx(TabPane, {
      tab: `FURNACE ${it}`,
      key: it,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: undefined
    }, __jsx(_InductionReportList__WEBPACK_IMPORTED_MODULE_5__["default"], {
      furnaceNo: it,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: undefined
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (InductionReport);

/***/ }),

/***/ "./components/InductionReportList/ReportSummary.js":
/*!*********************************************************!*\
  !*** ./components/InductionReportList/ReportSummary.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_InductionReportData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/InductionReportData */ "./components/data/InductionReportData.js");
var _jsxFileName = "/home/eswaraiah/Desktop/Books/eParchi/Dashboard/components/InductionReportList/ReportSummary.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ReportSummary = props => {
  let currentData = _data_InductionReportData__WEBPACK_IMPORTED_MODULE_1__["default"].find(it => it.parent_heat.heat_no === props.rSummary);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      fontSize: '2rem',
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
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
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("span", {
    style: {
      fontWeight: 'bold'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "Heat No: ", currentData.parent_heat.heat_no)), __jsx("div", {
    style: {
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("span", {
    style: {
      fontWeight: 'bold',
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "On Time: ", new Date(currentData.on_time).getHours(), " : ", new Date(currentData.on_time).getMinutes()), __jsx("span", {
    style: {
      fontWeight: 'bold',
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "Off Time: ", (new Date(currentData.off_time) - new Date(currentData.on_time)) / 1000 / 60, " mins")), __jsx("div", {
    style: {
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("span", {
    style: {
      fontWeight: 'bold',
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "Total Time: ", currentData.total_time), __jsx("span", {
    style: {
      fontWeight: 'bold',
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "PF Factor: ", currentData.pl)), __jsx("div", {
    style: {
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("span", {
    style: {
      fontWeight: 'bold',
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "Aluminium: ", currentData.aluminium), __jsx("span", {
    style: {
      fontWeight: 'bold',
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "Scrap: ", currentData.scrap)), __jsx("div", {
    style: {
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("span", {
    style: {
      fontWeight: 'bold',
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "Silicon: ", currentData.silicon), __jsx("span", {
    style: {
      fontWeight: 'bold',
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "Manganese: ", currentData.mn)), __jsx("div", {
    style: {
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("span", {
    style: {
      fontWeight: 'bold',
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "Extra time reason: ", currentData.reason), __jsx("span", {
    style: {
      fontWeight: 'bold',
      padding: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "Extra Time: ", currentData.total_time))));
};

/* harmony default export */ __webpack_exports__["default"] = (ReportSummary);

/***/ }),

/***/ "./components/InductionReportList/index.js":
/*!*************************************************!*\
  !*** ./components/InductionReportList/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row/style/css */ "./node_modules/antd/lib/row/style/css.js");
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col/style/css */ "./node_modules/antd/lib/col/style/css.js");
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/card/style/css */ "./node_modules/antd/lib/card/style/css.js");
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _data_InductionReportData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/InductionReportData */ "./components/data/InductionReportData.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Modal */ "./components/Modal.js");
/* harmony import */ var _ReportSummary__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ReportSummary */ "./components/InductionReportList/ReportSummary.js");








var _jsxFileName = "/home/eswaraiah/Desktop/Books/eParchi/Dashboard/components/InductionReportList/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;





const InductionReportList = props => {
  const {
    0: showModal,
    1: setShowModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false);
  const {
    0: rSummary,
    1: setRSummary
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])('');
  let list = [];
  _data_InductionReportData__WEBPACK_IMPORTED_MODULE_9__["default"].forEach(it => {
    if (it.parent_heat.heat_no && it.parent_heat.furnace_no === props.furnaceNo) list.push(it.parent_heat.heat_no);
  });
  list = [...new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_7___default.a([...list])];

  const toggleModal = it => {
    setShowModal(true);
    setRSummary(it);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, list.map((it, ind) => {
    return __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
      span: 8,
      key: ind,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: undefined
    }, __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_6___default.a, {
      hoverable: true,
      title: `${ind + 1} ) Report Heat No - ${it}`,
      bordered: true,
      style: {
        margin: '1rem'
      },
      onClick: e => toggleModal(it),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: undefined
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: undefined
    }, "Click To View More")));
  })), __jsx(_Modal__WEBPACK_IMPORTED_MODULE_10__["Modal"], {
    isOpen: showModal,
    onClose: () => setShowModal(false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx(_ReportSummary__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    rSummary
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (InductionReportList);

/***/ }),

/***/ "./components/InductionSummary.js":
/*!****************************************!*\
  !*** ./components/InductionSummary.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/eswaraiah/Desktop/Books/eParchi/Dashboard/components/InductionSummary.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const InductionSummary = () => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "InductionSummary");
};

/* harmony default export */ __webpack_exports__["default"] = (InductionSummary);

/***/ }),

/***/ "./components/Modal.js":
/*!*****************************!*\
  !*** ./components/Modal.js ***!
  \*****************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/eswaraiah/Desktop/Books/eParchi/Dashboard/components/Modal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class Modal extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  render() {
    const {
      children,
      onClose,
      isOpen
    } = this.props;
    const modalStyle = {
      display: 'block',
      zIndex: 1003,
      top: isOpen ? '10%' : '-9999px',
      opacity: isOpen ? 1 : 0,
      transition: 'opacity 0.5s'
    };
    const overlayStyle = {
      display: 'block',
      top: isOpen ? 0 : '-9999px',
      opacity: isOpen ? 0.5 : 0,
      transition: 'opacity 1s'
    };
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("div", {
      className: "modal-overlay",
      style: overlayStyle,
      onClick: onClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }), __jsx("div", {
      className: `modal ${isOpen ? 'open fade fade-in' : 'fade-out'}`,
      style: modalStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, isOpen && __jsx("div", {
      className: "modal-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, children)));
  }

}

/***/ }),

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
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/tabs */ "antd/lib/tabs");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_QualityReportData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/QualityReportData */ "./components/data/QualityReportData.js");
/* harmony import */ var _QualityReportTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./QualityReportTable */ "./components/QualityReportTable/index.js");


var _jsxFileName = "/home/eswaraiah/Desktop/Books/eParchi/Dashboard/components/QualityReport.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



const {
  TabPane
} = antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1___default.a;

const callback = key => {// console.log(key);
};

const QualityReport = () => {
  let furnaceNo = [];
  _data_QualityReportData__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(it => {
    if (it.parent_heat.furnace_no) furnaceNo.push(it.parent_heat.furnace_no);
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1___default.a, {
    defaultActiveKey: "1",
    onChange: callback,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, furnaceNo.map((it, i) => {
    return __jsx(TabPane, {
      tab: `FURNACE ${it}`,
      key: it,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: undefined
    }, __jsx(_QualityReportTable__WEBPACK_IMPORTED_MODULE_4__["default"], {
      furnaceNo: it,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: undefined
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (QualityReport);

/***/ }),

/***/ "./components/QualityReportTable/Column.js":
/*!*************************************************!*\
  !*** ./components/QualityReportTable/Column.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/eswaraiah/Desktop/Books/eParchi/Dashboard/components/QualityReportTable/Column.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const column = [{
  Header: () => __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, "Heat"),
  accessor: 'heat_no',

  Cell({
    original: o
  }) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, o.parent_heat.heat_no);
  }

}, {
  Header: '% P',
  id: "lastName",
  accessor: "per_c"
}, {
  Header: '% C',
  accessor: "per_c"
}, {
  Header: 'Bath %C',
  accessor: "batch_per_c"
}, {
  Header: '% SI',
  accessor: "per_si"
}, {
  Header: '% MN',
  accessor: "per_mn"
}, {
  Header: '% S',
  accessor: "per_s"
}];
/* harmony default export */ __webpack_exports__["default"] = (column);

/***/ }),

/***/ "./components/QualityReportTable/index.js":
/*!************************************************!*\
  !*** ./components/QualityReportTable/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_QualityReportData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/QualityReportData */ "./components/data/QualityReportData.js");
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Column */ "./components/QualityReportTable/Column.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-table */ "react-table");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_table_react_table_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-table/react-table.css */ "./node_modules/react-table/react-table.css");
/* harmony import */ var react_table_react_table_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_table_react_table_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/eswaraiah/Desktop/Books/eParchi/Dashboard/components/QualityReportTable/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // Import React Table




const Table = props => {
  let data = _data_QualityReportData__WEBPACK_IMPORTED_MODULE_1__["default"].filter(it => it.parent_heat.furnace_no === props.furnaceNo);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {}, [data]);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx(react_table__WEBPACK_IMPORTED_MODULE_3___default.a, {
    columns: _Column__WEBPACK_IMPORTED_MODULE_2__["default"],
    data: data,
    defaultPageSize: data.length >= 10 ? 10 : data.length,
    showPaginationBottom: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ }),

/***/ "./components/Sidenav.js":
/*!*******************************!*\
  !*** ./components/Sidenav.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/menu/style/css */ "./node_modules/antd/lib/menu/style/css.js");
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/layout/style/css */ "./node_modules/antd/lib/layout/style/css.js");
/* harmony import */ var antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/layout */ "antd/lib/layout");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _InductionSummary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InductionSummary */ "./components/InductionSummary.js");
/* harmony import */ var _InductionReport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./InductionReport */ "./components/InductionReport.js");
/* harmony import */ var _CcmSummary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CcmSummary */ "./components/CcmSummary.js");
/* harmony import */ var _QualityReport__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./QualityReport */ "./components/QualityReport.js");




var _jsxFileName = "/home/eswaraiah/Desktop/Books/eParchi/Dashboard/components/Sidenav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;





const {
  Sider,
  Content
} = antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a;
const tabList = [{
  key: 'indRep',
  tab: 'Induction Reports'
}, {
  key: 'indSum',
  tab: 'Induction Summary'
}, {
  key: 'cSum',
  tab: 'CCM Summary'
}, {
  key: 'qRep',
  tab: 'Quality Report'
}];
const contentList = {
  indRep: __jsx(_InductionReport__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }),
  indSum: __jsx(_InductionSummary__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }),
  cSum: __jsx(_CcmSummary__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }),
  qRep: __jsx(_QualityReport__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  })
};

const SideNav = () => {
  const {
    0: collapsed,
    1: setCollapsed
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  const {
    0: content,
    1: setContent
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('indRep');

  const onCollapse = collapsed => {
    setCollapsed(collapsed);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {}, [content]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      minHeight: '100vh'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx(Sider, {
    collapsible: true,
    collapsed: collapsed,
    onCollapse: onCollapse,
    style: {
      background: '#fff'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a, {
    theme: "light",
    defaultSelectedKeys: ['0'],
    mode: "inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, tabList.map((it, ind) => {
    return __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      key: ind,
      onClick: () => setContent(it.key),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: undefined
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: undefined
    }, it.tab));
  }))), __jsx(Content, {
    style: {
      background: '#fff',
      padding: 24,
      margin: 0,
      minHeight: 280
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      fontSize: '2rem',
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "Welcome To Dashboard"), contentList[content])));
};

/* harmony default export */ __webpack_exports__["default"] = (SideNav);

/***/ }),

/***/ "./components/data/InductionReportData.js":
/*!************************************************!*\
  !*** ./components/data/InductionReportData.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  "parent_heat": {
    "furnace_no": 1,
    "heat_no": 321,
    "date": "2019-08-27",
    "created_at": "2019-08-27T16:09:50.711616+05:30"
  },
  "user": "avikki",
  "real_time": {
    "start": "2019-08-27T09:25:00+05:30",
    "end": "2019-08-27T09:30:00+05:30"
  },
  "name": "Kisi ka naam",
  "shift": 0,
  "on_time": "2019-08-27T08:35:00+05:30",
  "pl": 5,
  "off_time": "2019-08-27T09:30:00+05:30",
  "total_time": "00:01:05",
  "reason": "no reason",
  "remark": "no remark",
  "mn": 10.0,
  "remix_powder": 0.0,
  "scrap": 15.0,
  "pig": 25.0,
  "cpc": 11.0,
  "aluminium": 25.0,
  "silicon": 24.0,
  "tap_temperature": 1600.0
}, {
  "parent_heat": {
    "furnace_no": 3,
    "heat_no": 128,
    "date": "2019-08-27",
    "created_at": "2019-08-27T16:10:40.769260+05:30"
  },
  "user": "avikki",
  "real_time": {
    "start": "2019-08-27T09:25:00+05:30",
    "end": "2019-08-27T09:30:00+05:30"
  },
  "name": "Gilbeesh",
  "shift": 0,
  "on_time": "2019-08-27T08:35:00+05:30",
  "pl": 1,
  "off_time": "2019-08-27T09:50:00+05:30",
  "total_time": "00:01:25",
  "reason": "no reason",
  "remark": "no remark",
  "mn": 10.0,
  "remix_powder": 0.0,
  "scrap": 15.0,
  "pig": 25.0,
  "cpc": 11.0,
  "aluminium": 25.0,
  "silicon": 24.0,
  "tap_temperature": 1600.0
}, {
  "parent_heat": {
    "furnace_no": 1,
    "heat_no": 128,
    "date": "2019-08-27",
    "created_at": "2019-08-28T20:25:25.708090+05:30"
  },
  "user": "avikki",
  "real_time": {
    "start": "2019-08-27T09:25:00+05:30",
    "end": "2019-08-27T09:30:00+05:30"
  },
  "name": "Gilbeesh",
  "shift": 0,
  "on_time": "2019-08-27T08:35:00+05:30",
  "pl": 1,
  "off_time": "2019-08-27T09:50:00+05:30",
  "total_time": "00:01:25",
  "reason": "no reason",
  "remark": "no remark",
  "mn": 10.0,
  "remix_powder": 0.0,
  "scrap": 15.0,
  "pig": 25.0,
  "cpc": 11.0,
  "aluminium": 25.0,
  "silicon": 24.0,
  "tap_temperature": 1600.0
}, {
  "parent_heat": {
    "furnace_no": 1,
    "heat_no": 126,
    "date": "2019-08-27",
    "created_at": "2019-08-28T20:33:14.034657+05:30"
  },
  "user": "avikki",
  "real_time": {
    "start": "2019-08-27T09:25:00+05:30",
    "end": "2019-08-27T09:30:00+05:30"
  },
  "name": "Gilbeesh",
  "shift": 0,
  "on_time": "2019-08-27T08:35:00+05:30",
  "pl": 1,
  "off_time": "2019-08-27T09:50:00+05:30",
  "total_time": "00:01:25",
  "reason": "no reason",
  "remark": "no remark",
  "mn": 10.0,
  "remix_powder": 0.0,
  "scrap": 15.0,
  "pig": 25.0,
  "cpc": 11.0,
  "aluminium": 25.0,
  "silicon": 24.0,
  "tap_temperature": 1600.0
}, {
  "parent_heat": {
    "furnace_no": 1,
    "heat_no": 129,
    "date": "2019-08-27",
    "created_at": "2019-08-31T21:27:36.249181+05:30"
  },
  "user": "emp1",
  "real_time": {
    "start": "2019-08-27T09:25:00+05:30",
    "end": "2019-08-27T09:30:00+05:30"
  },
  "name": "Gilbeesh",
  "shift": 0,
  "on_time": "2019-08-27T08:35:00+05:30",
  "pl": 1,
  "off_time": "2019-08-27T09:50:00+05:30",
  "total_time": "00:01:25",
  "reason": "no reason",
  "remark": "no remark",
  "mn": 10.0,
  "remix_powder": 0.0,
  "scrap": 15.0,
  "pig": 25.0,
  "cpc": 11.0,
  "aluminium": 25.0,
  "silicon": 24.0,
  "tap_temperature": 1600.0
}, {
  "parent_heat": {
    "furnace_no": 1,
    "heat_no": 130,
    "date": "2019-08-27",
    "created_at": "2019-08-31T21:28:05.440938+05:30"
  },
  "user": "emp1",
  "real_time": {
    "start": "2019-08-27T09:25:00+05:30",
    "end": "2019-08-27T09:30:00+05:30"
  },
  "name": "Gilbeesh",
  "shift": 0,
  "on_time": "2019-08-27T08:35:00+05:30",
  "pl": 1,
  "off_time": "2019-08-27T09:50:00+05:30",
  "total_time": "00:01:25",
  "reason": "no reason",
  "remark": "no remark",
  "mn": 10.0,
  "remix_powder": 0.0,
  "scrap": 15.0,
  "pig": 25.0,
  "cpc": 11.0,
  "aluminium": 25.0,
  "silicon": 24.0,
  "tap_temperature": 1600.0
}, {
  "parent_heat": {
    "furnace_no": 1,
    "heat_no": 131,
    "date": "2019-08-27",
    "created_at": "2019-09-01T10:12:51.744299+05:30"
  },
  "user": "emp1",
  "real_time": {
    "start": "2019-08-27T09:25:00+05:30",
    "end": "2019-08-27T09:30:00+05:30"
  },
  "name": "Gilbeesh",
  "shift": 0,
  "on_time": "2019-08-27T08:35:00+05:30",
  "pl": 1,
  "off_time": "2019-08-27T09:50:00+05:30",
  "total_time": "00:01:25",
  "reason": "no reason",
  "remark": "no remark",
  "mn": 10.0,
  "remix_powder": 0.0,
  "scrap": 15.0,
  "pig": 25.0,
  "cpc": 11.0,
  "aluminium": 25.0,
  "silicon": 24.0,
  "tap_temperature": 1600.0
}]);

/***/ }),

/***/ "./components/data/QualityReportData.js":
/*!**********************************************!*\
  !*** ./components/data/QualityReportData.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  "parent_heat": {
    "furnace_no": 1,
    "heat_no": 321,
    "date": "2019-08-27",
    "created_at": "2019-08-27T16:09:50.711616+05:30"
  },
  "user": "avikki",
  "real_time": {
    "start": "2019-08-27T09:10:00+05:30",
    "end": "2019-08-27T09:50:00+05:30"
  },
  "name": "James Bond",
  "shift": 0,
  "batch_per_c": 0.14,
  "per_c": 0.05,
  "per_si": 0.05,
  "per_mn": 0.04,
  "per_s": 0.09,
  "per_p": 0.42
}, {
  "parent_heat": {
    "furnace_no": 3,
    "heat_no": 128,
    "date": "2019-08-27",
    "created_at": "2019-08-27T16:10:40.769260+05:30"
  },
  "user": "avikki",
  "real_time": {
    "start": "2019-08-27T09:10:00+05:30",
    "end": "2019-08-27T09:50:00+05:30"
  },
  "name": "Ionic Bond",
  "shift": 0,
  "batch_per_c": 0.25,
  "per_c": 0.26,
  "per_si": 0.15,
  "per_mn": 0.045,
  "per_s": 0.06,
  "per_p": 0.35
}, {
  "parent_heat": {
    "furnace_no": 4,
    "heat_no": 128,
    "date": "2019-08-27",
    "created_at": "2019-08-27T21:19:54.021151+05:30"
  },
  "user": "avikki",
  "real_time": {
    "start": "2019-08-27T09:10:00+05:30",
    "end": "2019-08-27T09:50:00+05:30"
  },
  "name": "Ionic Bond",
  "shift": 0,
  "batch_per_c": 0.25,
  "per_c": 0.26,
  "per_si": 0.15,
  "per_mn": 0.045,
  "per_s": 0.06,
  "per_p": 0.35
}]);

/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidenav */ "./components/Sidenav.js");
var _jsxFileName = "/home/eswaraiah/Desktop/Books/eParchi/Dashboard/components/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx(_Sidenav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }));
});

/***/ }),

/***/ "./main.css":
/*!******************!*\
  !*** ./main.css ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/set.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/set.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/set */ "core-js/library/fn/set");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/antd/lib/card/style/css.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/card/style/css.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/col/style/css.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/col/style/css.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/layout/style/css.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/layout/style/css.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/menu/style/css.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/menu/style/css.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/row/style/css.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/row/style/css.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/tabs/style/css.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/tabs/style/css.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-table/react-table.css":
/*!**************************************************!*\
  !*** ./node_modules/react-table/react-table.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main.css */ "./main.css");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/eswaraiah/Desktop/Books/eParchi/Dashboard/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("div", {
  className: "App",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
})));

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/eswaraiah/Desktop/Books/eParchi/Dashboard/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "antd/lib/card":
/*!********************************!*\
  !*** external "antd/lib/card" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/card");

/***/ }),

/***/ "antd/lib/col":
/*!*******************************!*\
  !*** external "antd/lib/col" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "antd/lib/layout":
/*!**********************************!*\
  !*** external "antd/lib/layout" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),

/***/ "antd/lib/menu":
/*!********************************!*\
  !*** external "antd/lib/menu" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "antd/lib/row":
/*!*******************************!*\
  !*** external "antd/lib/row" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "antd/lib/tabs":
/*!********************************!*\
  !*** external "antd/lib/tabs" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tabs");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/set":
/*!*****************************************!*\
  !*** external "core-js/library/fn/set" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/set");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-table":
/*!******************************!*\
  !*** external "react-table" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-table");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map