import React from "react";
import { useSelector } from "react-redux";

const AllTodos = () => {
  const allTodos = useSelector((state) => state.allTodos);
  return <div>AllTodos</div>;
};

export default AllTodos;
