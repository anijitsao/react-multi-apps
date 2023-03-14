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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

// Box component

const Box = props => {
  // extracting necessary fields from the props
  const {
    value,
    rowIndex,
    colIndex,
    handleOnClick
  } = props;
  const boxIndex = rowIndex + colIndex + 1;
  const boxStyle = boxIndex % 2 === 0 ? "even-box box" : "odd-box box";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    id: `${rowIndex}-${colIndex}`,
    className: boxStyle,
    onClick: handleOnClick,
    children: value == 1 ? "X" : value == 2 ? "O" : ""
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


// import useEthConnector from "./EthConnector";



const TicTacToe = props => {
  const [box, setBox] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  //   const [boxEth, getBox, saveBox, resultEth, getResult, saveResult] =
  //     useEthConnector();
  const [userTurn, setUserTurn] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [isBoxFilled, setIsBoxFilled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [isBoxLoaded, setBoxLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isBoxLoaded) {
      //   getBox();
      //   getResult();
      setBoxLoaded(true);
    }
    // copy the Ethereum box into our box variable
    if (boxEth && !box) {
      setBox(boxEth);
    }

    // copy the Game result to result variable
    // if (resultEth && !result) {
    //   console.log("Game result as received", resultEth);
    //   setResult(resultEth);
    // }

    if (Array.isArray(box) && !userTurn) {
      checkForMatch();
      computerPlays();
    }
  });

  // initialize all the constants
  const allConstants = (0,_Constants__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const GRID_LENGTH = allConstants.GRID_LENGTH;

  // handle the onClick event
  const handleOnClick = event => {
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
    if (box[rowIndex][colIndex] == 0) {
      return true;
    }
    return false;
  };

  // capture user's move by set it to 1
  const captureUserMove = (rowIndex, colIndex) => {
    console.log("Code for user move");
    const boxNew = JSON.parse(JSON.stringify(box));
    boxNew[rowIndex][colIndex] = allConstants.USER_MOVE;
    saveBox(rowIndex, colIndex, allConstants.USER_MOVE);
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
        saveBox(randomRow, randomCol, allConstants.COMPUTER_MOVE);
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
    saveResult(content);
  };

  // render the box contents
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "box-container",
    children: result && result != "TBD" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "result--div",
      children: `${result}!!!`
    }) : Array.isArray(box) ? box.map((row, rowIndex) => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "row-container",
        children: row.map((box, colIndex) => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {
            value: box,
            rowIndex: rowIndex,
            colIndex: colIndex,
            handleOnClick: handleOnClick
          }, colIndex);
        })
      }, rowIndex);
    }) : "box is loading..."
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TicTacToe);

/***/ })

}]);
//# sourceMappingURL=src_components_tictactoe_TicTacToe_js.js.map