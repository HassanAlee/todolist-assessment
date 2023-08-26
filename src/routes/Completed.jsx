import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearAll } from "../redux/actions";
const Completed = () => {
  const completedTodos = useSelector((state) => state.completedTodos);
  const dispatch = useDispatch();
  return (
    <>
      {completedTodos.length > 0 ? (
        <div className="allTodos">
          {completedTodos.map((item) => {
            return (
              <>
                <article key={item.id} className="singleTodo completedTodo">
                  <h5 style={{ textDecoration: "line-through" }}>
                    {item.todo}
                  </h5>
                  <p>{item.date}</p>
                  {/* <p>{item.description}</p>
                <p>{item.info}</p> */}
                </article>
              </>
            );
          })}
        </div>
      ) : (
        <div className="placeholder">
          <h1>looks like the list is empty!!!</h1>
        </div>
      )}
      {completedTodos.length > 0 && (
        <button
          className="clearBtn"
          onClick={() => dispatch(clearAll("completed"))}
        >
          clear all
        </button>
      )}
    </>
  );
};

export default Completed;
