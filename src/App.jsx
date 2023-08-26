import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddTodo from "./routes/AddTodo";
import AllTodos from "./routes/AllTodos";
import Completed from "./routes/Completed";
import { createStore } from "redux";
import { reducer } from "./redux/reducer";
import Error from "./components/Error";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AddTodo />} />
        <Route path="/all" element={<AllTodos />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};
const getTodos = () => {
  return JSON.parse(localStorage.getItem("todos"));
};
const getCompletedTodos = () => {
  return JSON.parse(localStorage.getItem("completedTodos"));
};
const initialState = {
  allTodos: getTodos() || [],
  completedTodos: getCompletedTodos() || [],
  isEditing: false,
};
export const store = createStore(reducer, initialState);
export default App;
