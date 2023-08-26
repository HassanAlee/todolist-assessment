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
      {allTodos.length > 0 ? (
        <>
          <div className="allTodos">
            {allTodos.map((item) => {
              return <SingleTodo {...item} key={item.id} />;
            })}
          </div>
        </>
      ) : (
        <div className="placeholder">
          <h1>looks like the list is empty!!!</h1>
        </div>
      )}
      {allTodos.length > 0 && (
        <button className="clearBtn" onClick={() => dispatch(clearAll("all"))}>
          clear all
        </button>
      )}
    </>
  );
};

export default AllTodos;
