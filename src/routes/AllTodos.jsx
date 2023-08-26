import React from "react";
import { useSelector } from "react-redux";
import SingleTodo from "../components/SingleTodo";
import { clearAll } from "../redux/actions";
import { useDispatch } from "react-redux";
const AllTodos = () => {
  const allTodos = useSelector((state) => state.allTodos);
  const dispatch = useDispatch();
  return (
    <>
      <div className="allTodos">
        {allTodos.map((item) => {
          return <SingleTodo {...item} key={item.id} />;
        })}
      </div>
      <button className="clearBtn" onClick={() => dispatch(clearAll("all"))}>
        clear all
      </button>
    </>
  );
};

export default AllTodos;
