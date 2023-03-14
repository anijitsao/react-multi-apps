"use strict";
(self["webpackChunkreact_app_simple_calculator"] = self["webpackChunkreact_app_simple_calculator"] || []).push([["src_components_calculator_Calculator_js"],{

/***/ "./src/components/calculator/Calculator.js":
/*!*************************************************!*\
  !*** ./src/components/calculator/Calculator.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DisplayScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DisplayScreen */ "./src/components/calculator/DisplayScreen.js");
/* harmony import */ var _ShowButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShowButtons */ "./src/components/calculator/ShowButtons.js");
/* harmony import */ var _ErrorComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ErrorComponent */ "./src/components/calculator/ErrorComponent.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

// import { evaluate } from "mathjs";

// components





const Calculator = () => {
  // initial state
  const calcExpression = {
    displayExpression: "",
    displayValue: 0,
    showError: false
  };

  // set the initial state along with its modifier function
  const [calcExp, setCalcExp] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(calcExpression);

  // the actual computation using Math.js
  const computeValue = () => {
    // use lazy loading webpack to improve bundle size
    Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_mathjs_lib_esm_index_js"), __webpack_require__.e("_d4c0")]).then(__webpack_require__.bind(__webpack_require__, /*! mathjs */ "./node_modules/mathjs/lib/esm/index.js")).then(math => {
      setCalcExp({
        ...calcExp,
        displayValue: math.evaluate(calcExp.displayExpression),
        displayExpression: ""
      });
    });
  };
  const computeDisplayExpression = e => {
    if (e.target.id == "CL") {
      setCalcExp({
        ...calcExp,
        displayExpression: "",
        displayValue: 0
      });
    } else if (calcExp.displayExpression == "" && e.target.id.match(/[0-9]/g) == null) {
      // if a symbol comes without any number show the error notification
      setCalcExp({
        ...calcExp,
        displayExpression: "",
        showError: true
      });

      // after 3ms hide the notification
      setTimeout(() => {
        setCalcExp({
          ...calcExp,
          showError: false
        });
      }, 3000);
    } else {
      setCalcExp({
        ...calcExp,
        displayExpression: calcExp.displayExpression + e.target.id
      });
    }
  };
  const {
    displayValue,
    displayExpression,
    showError
  } = calcExp;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    children: [showError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ErrorComponent__WEBPACK_IMPORTED_MODULE_3__["default"], {
      msg: "Please enter a number first"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_DisplayScreen__WEBPACK_IMPORTED_MODULE_1__["default"], {
      displayExpression: displayExpression,
      displayValue: displayValue
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ShowButtons__WEBPACK_IMPORTED_MODULE_2__["default"], {
      computeValue: computeValue,
      computeDisplayExpression: computeDisplayExpression
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Calculator);

/***/ }),

/***/ "./src/components/calculator/DisplayScreen.js":
/*!****************************************************!*\
  !*** ./src/components/calculator/DisplayScreen.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


// DisplayScreen component
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({
  displayExpression,
  displayValue
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "display-div",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "display-expression",
      children: displayExpression
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "display-value",
      children: displayValue
    })]
  });
});

/***/ }),

/***/ "./src/components/calculator/ErrorComponent.js":
/*!*****************************************************!*\
  !*** ./src/components/calculator/ErrorComponent.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const ErrorComponent = ({
  msg
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "error-div",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "error-msg",
      children: msg
    })
  });
};
ErrorComponent.propTypes = {
  msg: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorComponent);

/***/ }),

/***/ "./src/components/calculator/ShowButtons.js":
/*!**************************************************!*\
  !*** ./src/components/calculator/ShowButtons.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

// ShowButtons component
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({
  computeValue,
  computeDisplayExpression
}) => {
  const CALCULATOR_BUTTONS = ["(", ")", "^", "CL", "7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", ".", "0", "=", "+"];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "show-buttons",
    children: CALCULATOR_BUTTONS.map((ele, index) => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
        href: "#",
        id: ele,
        className: "btn",
        onClick: ele != "=" ? computeDisplayExpression : computeValue,
        children: ele
      }, "calc-" + ele);
    })
  });
});

/***/ })

}]);
//# sourceMappingURL=src_components_calculator_Calculator_js.js.map