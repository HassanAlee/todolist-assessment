import React from "react";
import { useSelector } from "react-redux";
const Completed = () => {
  const completedTodos = useSelector((state) => state.completedTodos);
  return <div>All the completed todos will appear here</div>;
};

export default Completed;
