import React from "react";
import { useSelector } from "react-redux";
import SingleTodo from "../components/SingleTodo";
const Completed = () => {
  const completedTodos = useSelector((state) => state.completedTodos);
  console.log(completedTodos);
  return (
    <>
      <div className="allTodos">
        {completedTodos.map((item) => {
          return (
            <>
              <article key={item.id} className="singleTodo completedTodo">
                <h5 style={{ textDecoration: "line-through" }}>{item.todo}</h5>
                <p>{item.date}</p>
                {/* <p>{item.description}</p>
                <p>{item.info}</p> */}
              </article>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Completed;
