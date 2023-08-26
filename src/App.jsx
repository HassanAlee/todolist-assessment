import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddTodo from "./routes/AddTodo";
import AllTodos from "./routes/AllTodos";
import Completed from "./routes/Completed";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AddTodo />} />
        <Route path="/all" element={<AllTodos />} />
        <Route path="/completed" element={<Completed />} />
      </Routes>
    </>
  );
};

export default App;
