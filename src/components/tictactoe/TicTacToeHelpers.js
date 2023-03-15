import { Constants } from "../Constants";

// initialize all the constants
const allConstants = Constants();

// generate row and col index
const generateIndices = (id) => {
  let [rowIndex, colIndex] = id.split("-");
  rowIndex = parseInt(rowIndex);
  colIndex = parseInt(colIndex);
  return [rowIndex, colIndex];
};

// check if it is an empty slot
const checkIfEmptyCell = (rowIndex, colIndex, box) => {
  if (box[rowIndex][colIndex] == allConstants.EMPTY_CELL) {
    return true;
  }
  return false;
};

const findDiagonals = (box) => {
  let principalDiagonal = "";
  let otherDiagonal = "";
  const GRID_LENGTH = allConstants.GRID_LENGTH;

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

  return [principalDiagonal, otherDiagonal];
};

export { generateIndices, checkIfEmptyCell, findDiagonals };
