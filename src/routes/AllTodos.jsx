import React from "react";
import { useSelector } from "react-redux";
import SingleTodo from "../components/SingleTodo";
const AllTodos = () => {
  const allTodos = useSelector((state) => state.allTodos);
  return (
    <>
      <div className="allTodos">
        {allTodos.map((item) => {
          return <SingleTodo {...item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default AllTodos;
