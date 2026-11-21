// npm dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// components
import Title from "./components/layout/Title";
const Calculator = lazy(() => import("./components/calculator/Calculator"));
const Clock = lazy(() => import("./components/clock/Clock"));
const ToDoList = lazy(() => import("./components/todolist/ToDoList"));
const TicTacToe = lazy(() => import("./components/tictactoe/TicTacToe"));

// css
import "./css/style.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        {/* including the Title and other components */}
        <Title />
        <Suspense fallback="Loading...">
          <Routes>
            <Route path="/" element={<Calculator />} />
            <Route path="clock" element={<Clock />} />
            <Route path="todolist" element={<ToDoList />} />
            <Route path="tictactoe" element={<TicTacToe />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
