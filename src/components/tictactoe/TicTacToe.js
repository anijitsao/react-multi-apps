import { useState, useEffect } from "react";
import Box from "./Box";
import { Constants } from "../Constants";
import {
  generateIndices,
  checkIfEmptyCell,
  findDiagonals,
} from "./TicTacToeHelpers";

// css
import "../../css/tictactoe.css";

const TicTacToe = (props) => {
  // initialize all the constants
  const allConstants = Constants();

  const [box, setBox] = useState(allConstants.BOX_INITIAL);
  const [userTurn, setUserTurn] = useState(true);
  const [isBoxFilled, setIsBoxFilled] = useState(false);
  const [result, setResult] = useState("TBD");

  useEffect(() => {
    if (Array.isArray(box) && !userTurn) {
      checkForMatch();
      computerPlays();
    }
  });

  const GRID_LENGTH = allConstants.GRID_LENGTH;

  // handle the onClick event
  const onClickHandler = (event) => {
    const { id } = event.target;
    console.log("code comes here", id);
    if (!isBoxFilled) {
      const [rowIndex, colIndex] = generateIndices(id);
      let isEmpty = checkIfEmptyCell(rowIndex, colIndex, box);
      if (isEmpty === true) {
        captureUserMove(rowIndex, colIndex);
      }
    } else {
      showResult();
    }
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
        if (checkIfEmptyCell(row, col, box)) {
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
    const boxTranspose = box[0].map((col, i) => box.map((row) => row[i]));
    for (let i = 0; i < GRID_LENGTH; i++) {
      let colStr = boxTranspose[i].join("");
      checkWinner(colStr);
    }

    // for a diagonal match
    let [principalDiagonal, otherDiagonal] = findDiagonals(box);

    checkWinner(principalDiagonal);
    checkWinner(otherDiagonal);
  };

  // function to check who is the winner
  const checkWinner = (str) => {
    const allEqual = str.split("").every((char) => {
      return char != allConstants.EMPTY_CELL && char == str[0];
    });
    if (str && allEqual) {
      const winner =
        str[0] == allConstants.USER_MOVE
          ? allConstants.USER_MOVE
          : allConstants.COMPUTER_MOVE;
      showResult(winner);
    }
  };

  // function to capture how Computer gives the moves
  const computerPlays = () => {
    while (true && !userTurn) {
      // generate Random column and row number
      let randomCol = Math.floor(Math.random() * GRID_LENGTH) + 0;
      let randomRow = Math.floor(Math.random() * GRID_LENGTH) + 0;
      console.log("random cell generated", randomCol, " ", randomRow);

      if (checkIfEmptyCell(randomRow, randomCol, box)) {
        const boxNew = JSON.parse(JSON.stringify(box));
        boxNew[randomRow][randomCol] = allConstants.COMPUTER_MOVE;
        setBox(boxNew);
        setUserTurn(true);
        return;
      }
    }
  };

  // show the result
  const showResult = (winner) => {
    let content = !winner
      ? "GAME TIED"
      : winner == allConstants.USER_MOVE
      ? "You won"
      : "Computer won";
    console.log("RESULT of the game is", result);
    setIsBoxFilled(true);

    // if result not defined set it
    result == "TBD" ? setResult(content) : result;
  };

  // render the box contents
  return (
    <div className="box-container">
      {result && result != "TBD" ? (
        <div className="result--div">{`${result}!!!`}</div>
      ) : (
        Array.isArray(box) &&
        box.map((row, rowIndex) => {
          return (
            <div className="row-container" key={rowIndex}>
              {row.map((box, colIndex) => {
                return (
                  <Box
                    value={box}
                    rowIndex={rowIndex}
                    colIndex={colIndex}
                    onClickHandler={onClickHandler}
                    key={colIndex}
                  />
                );
              })}
            </div>
          );
        })
      )}
    </div>
  );
};

export default TicTacToe;
