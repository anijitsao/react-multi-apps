// Box component
import { Constants } from "../Constants";

const Box = (props) => {
  // extracting necessary fields from the props
  const { value, rowIndex, colIndex, handleOnClick } = props;
  const boxIndex = rowIndex + colIndex + 1;
  const boxStyle = boxIndex % 2 === 0 ? "even-box box" : "odd-box box";

  // initialize all the constants
  const allConstants = Constants();

  return (
    <div
      id={`${rowIndex}-${colIndex}`}
      className={boxStyle}
      onClick={handleOnClick}
    >
      {value == allConstants.USER_MOVE
        ? "X"
        : value == allConstants.COMPUTER_MOVE
        ? "O"
        : ""}
    </div>
  );
};

export default Box;
