export function Constants() {
  return {
    allLinks: [
      { to: "/", name: "Calculator" },
      { to: "clock", name: "Clock" },
      { to: "todolist", name: "Todo List" },
      { to: "tictactoe", name: "Tic Tac Toe" },
    ],

    USER_MOVE: "USR",
    COMPUTER_MOVE: "COM",
    EMPTY_CELL: "EMPTY",
    GRID_LENGTH: 3,

    BOX_INITIAL: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ],
  };
}
