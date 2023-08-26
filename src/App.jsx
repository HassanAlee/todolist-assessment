import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Completed from "./routes/Completed";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/completed" element={<Completed />} />
      </Routes>
    </>
  );
};

export default App;
