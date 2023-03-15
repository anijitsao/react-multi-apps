"use strict";
(self["webpackChunkreact_app_simple_calculator"] = self["webpackChunkreact_app_simple_calculator"] || []).push([["src_components_tictactoe_TicTacToe_js"],{

/***/ "./src/components/tictactoe/Box.js":
/*!*****************************************!*\
  !*** ./src/components/tictactoe/Box.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./src/components/Constants.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
// Box component


const Box = props => {
  // extracting necessary fields from the props
  const {
    value,
    rowIndex,
    colIndex,
    onClickHandler
  } = props;
  const boxIndex = rowIndex + colIndex + 1;
  const boxStyle = boxIndex % 2 === 0 ? "even-box box" : "odd-box box";

  // initialize all the constants
  const allConstants = (0,_Constants__WEBPACK_IMPORTED_MODULE_0__.Constants)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    id: `${rowIndex}-${colIndex}`,
    className: boxStyle,
    onClick: onClickHandler,
    children: value == allConstants.USER_MOVE ? "X" : value == allConstants.COMPUTER_MOVE ? "O" : ""
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Box);

/***/ }),

/***/ "./src/components/tictactoe/TicTacToe.js":
/*!***********************************************!*\
  !*** ./src/components/tictactoe/TicTacToe.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Box */ "./src/components/tictactoe/Box.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Constants */ "./src/components/Constants.js");
/* harmony import */ var _css_tictactoe_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../css/tictactoe.css */ "./src/css/tictactoe.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




// css


const TicTacToe = props => {
  // initialize all the constants
  const allConstants = (0,_Constants__WEBPACK_IMPORTED_MODULE_2__.Constants)();
  const [box, setBox] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(allConstants.BOX_INITIAL);
  const [userTurn, setUserTurn] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [isBoxFilled, setIsBoxFilled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("TBD");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (Array.isArray(box) && !userTurn) {
      checkForMatch();
      computerPlays();
    }
  });
  const GRID_LENGTH = allConstants.GRID_LENGTH;

  // handle the onClick event
  const onClickHandler = event => {
    const {
      id
    } = event.target;
    console.log("code comes here", id);
    if (!isBoxFilled) {
      const [rowIndex, colIndex] = generateIndices(id);
      let isEmpty = checkIfEmptyCell(rowIndex, colIndex);
      if (isEmpty === true) {
        captureUserMove(rowIndex, colIndex);
      }
    } else {
      showResult();
    }
  };

  // generate row and col index
  const generateIndices = id => {
    let [rowIndex, colIndex] = id.split("-");
    rowIndex = parseInt(rowIndex);
    colIndex = parseInt(colIndex);
    return [rowIndex, colIndex];
  };

  // check if it is an empty slot
  const checkIfEmptyCell = (rowIndex, colIndex) => {
    if (box[rowIndex][colIndex] == allConstants.EMPTY_CELL) {
      return true;
    }
    return false;
  };

  // capture user's move by set it to 1
  const captureUserMove = (rowIndex, colIndex) => {
    console.log("Code for user move");
    const boxNew = JSON.parse(JSON.stringify(box));
    boxNew[rowIndex][colIndex] = allConstants.USER_MOVE;
    setBox(boxNew);
    setUserTurn(false);
  };

  // check all the cells are filled or not
  const checkIfBoxFilled = () => {
    for (let row = 0; row < allConstants.GRID_LENGTH; row++) {
      for (let col = 0; col < allConstants.GRID_LENGTH; col++) {
        if (checkIfEmptyCell(row, col)) {
          setIsBoxFilled(true);
          return true;
        }
      }
    }
    return false;
  };

  // check if a match found
  const checkForMatch = () => {
    // for a Horizontal match
    for (let i = 0; i < GRID_LENGTH; i++) {
      let rowStr = box[i].join("");
      checkWinner(rowStr);
    }

    // for a vertical match
    const boxTranspose = box[0].map((col, i) => box.map(row => row[i]));
    for (let i = 0; i < GRID_LENGTH; i++) {
      let colStr = boxTranspose[i].join("");
      checkWinner(colStr);
    }

    // for a diagonal match
    let principalDiagonal = "";
    let otherDiagonal = "";
    for (let i = 0; i < GRID_LENGTH; i++) {
      for (let j = 0; j < GRID_LENGTH; j++) {
        if (i == j) {
          principalDiagonal = `${principalDiagonal}${box[i][j]}`;
        }
        if (i + j + 1 == GRID_LENGTH) {
          otherDiagonal = `${otherDiagonal}${box[i][j]}`;
        }
      }
    }
    checkWinner(principalDiagonal);
    checkWinner(otherDiagonal);
  };

  // function to check who is the winner
  const checkWinner = str => {
    const allEqual = str.split("").every(char => {
      return char != allConstants.EMPTY_CELL && char == str[0];
    });
    if (str && allEqual) {
      const winner = str[0] == allConstants.USER_MOVE ? allConstants.USER_MOVE : allConstants.COMPUTER_MOVE;
      showResult(winner);
    }
  };

  // function to capture how Computer gives the moves
  const computerPlays = () => {
    while ( true && !userTurn) {
      // generate Random column and row number
      let randomCol = Math.floor(Math.random() * GRID_LENGTH) + 0;
      let randomRow = Math.floor(Math.random() * GRID_LENGTH) + 0;
      console.log("random cell generated", randomCol, " ", randomRow);
      if (checkIfEmptyCell(randomRow, randomCol)) {
        const boxNew = JSON.parse(JSON.stringify(box));
        boxNew[randomRow][randomCol] = allConstants.COMPUTER_MOVE;
        setBox(boxNew);
        setUserTurn(true);
        return;
      }
    }
  };

  // show the result
  const showResult = winner => {
    let content = !winner ? "GAME TIED" : winner == allConstants.USER_MOVE ? "You won" : "Computer won";
    console.log("RESULT of the game is", result);
    setIsBoxFilled(true);

    // if result not defined set it
    result == "TBD" ? setResult(content) : result;
  };

  // render the box contents
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: "box-container",
    children: result && result != "TBD" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "result--div",
      children: `${result}!!!`
    }) : Array.isArray(box) ? box.map((row, rowIndex) => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "row-container",
        children: row.map((box, colIndex) => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {
            value: box,
            rowIndex: rowIndex,
            colIndex: colIndex,
            onClickHandler: onClickHandler
          }, colIndex);
        })
      }, rowIndex);
    }) : "box is loading..."
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TicTacToe);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/tictactoe.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/tictactoe.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --font: \"Roboto\", sans-serif;\n  --font-size-normal: 16px;\n  --font-size-small: 11px;\n  --bold-font: 700;\n  --thin-font: 100;\n  --normal-font: 400;\n  --border-radius: 5px;\n  --box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);\n  --white: #fff;\n  --blue: #819bff;\n  --green: #8ee676;\n  --slow-transition: all ease-in-out 300ms;\n}\n\n/* Tic Tac Toe box related */\n.box-container {\n  background-color: var(--white);\n  padding: 1em;\n\n  display: grid;\n  align-items: center;\n  justify-content: center;\n}\n\n.row-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 7px 1px;\n  text-align: center;\n  width: 30vw;\n}\n\n/* all the boxes of the tic tac toe */\n.box {\n  color: var(--white);\n  padding: 1.17em;\n  font-weight: 700;\n  font-size: 1.5rem;\n  height: 6rem;\n}\n\n.box:hover {\n  opacity: 0.8;\n  transition: var(--slow-transition);\n  cursor: pointer;\n}\n\n.even-box {\n  background-color: var(--blue);\n}\n\n.odd-box {\n  background-color: var(--green);\n}\n\n.result--div {\n  font-size: 1.5rem;\n  font-weight: 100;\n}\n\n/* media queries to make it responsive */\n@media only screen and (max-width: 600px) {\n  /* html {\n        font-size: var(--font-size-small);\n    }\n\n    .container {\n        width: 90vw;\n    } */\n\n  .row-container {\n    width: 39vw;\n  }\n\n  .box {\n    padding: 2.1em;\n    width: 3rem;\n  }\n\n  .box-container {\n    padding-left: 0;\n    padding-right: 5rem;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/css/tictactoe.css"],"names":[],"mappings":"AAAA;EACE,4BAA4B;EAC5B,wBAAwB;EACxB,uBAAuB;EACvB,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;EAClB,oBAAoB;EACpB,6CAA6C;EAC7C,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,wCAAwC;AAC1C;;AAEA,4BAA4B;AAC5B;EACE,8BAA8B;EAC9B,YAAY;;EAEZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,iBAAiB;EACjB,kBAAkB;EAClB,WAAW;AACb;;AAEA,qCAAqC;AACrC;EACE,mBAAmB;EACnB,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,kCAAkC;EAClC,eAAe;AACjB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA,wCAAwC;AACxC;EACE;;;;;;OAMK;;EAEL;IACE,WAAW;EACb;;EAEA;IACE,cAAc;IACd,WAAW;EACb;;EAEA;IACE,eAAe;IACf,mBAAmB;EACrB;AACF","sourcesContent":[":root {\n  --font: \"Roboto\", sans-serif;\n  --font-size-normal: 16px;\n  --font-size-small: 11px;\n  --bold-font: 700;\n  --thin-font: 100;\n  --normal-font: 400;\n  --border-radius: 5px;\n  --box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);\n  --white: #fff;\n  --blue: #819bff;\n  --green: #8ee676;\n  --slow-transition: all ease-in-out 300ms;\n}\n\n/* Tic Tac Toe box related */\n.box-container {\n  background-color: var(--white);\n  padding: 1em;\n\n  display: grid;\n  align-items: center;\n  justify-content: center;\n}\n\n.row-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 7px 1px;\n  text-align: center;\n  width: 30vw;\n}\n\n/* all the boxes of the tic tac toe */\n.box {\n  color: var(--white);\n  padding: 1.17em;\n  font-weight: 700;\n  font-size: 1.5rem;\n  height: 6rem;\n}\n\n.box:hover {\n  opacity: 0.8;\n  transition: var(--slow-transition);\n  cursor: pointer;\n}\n\n.even-box {\n  background-color: var(--blue);\n}\n\n.odd-box {\n  background-color: var(--green);\n}\n\n.result--div {\n  font-size: 1.5rem;\n  font-weight: 100;\n}\n\n/* media queries to make it responsive */\n@media only screen and (max-width: 600px) {\n  /* html {\n        font-size: var(--font-size-small);\n    }\n\n    .container {\n        width: 90vw;\n    } */\n\n  .row-container {\n    width: 39vw;\n  }\n\n  .box {\n    padding: 2.1em;\n    width: 3rem;\n  }\n\n  .box-container {\n    padding-left: 0;\n    padding-right: 5rem;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/css/tictactoe.css":
/*!*******************************!*\
  !*** ./src/css/tictactoe.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_tictactoe_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./tictactoe.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/tictactoe.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_tictactoe_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_tictactoe_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_tictactoe_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_tictactoe_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=src_components_tictactoe_TicTacToe_js.js.map