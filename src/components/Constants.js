export function Constants() {
  return {
    allLinks: [
      { to: "/", name: "Calculator" },
      { to: "clock", name: "Clock" },
      { to: "todolist", name: "Todo List" },
      { to: "tictactoe", name: "Tic Tac Toe" },
    ],

    USER_MOVE: 1,
    COMPUTER_MOVE: 2,
    EMPTY_CELL: 0,
    GRID_LENGTH: 3,

    BOX_INITIAL: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ],
  };
}
