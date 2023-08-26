import React, { useState } from "react";
import { MdOutlineDone } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { taskComplete } from "../redux/actions";
const SingleTodo = ({ todo, date, description, info, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <article className="singleTodo">
        <h5>{todo}</h5>
        <p style={{ color: "#e55039" }}>{date}</p>
        <p style={{ fontSize: "1.3rem", color: "#e58e26", fontWeight: "bold" }}>
          {description}
        </p>
        <p>{info}</p>
        <div className="icons">
          <span className="icon">
            <TbEdit />
          </span>
          <span className="icon" onClick={() => dispatch(taskComplete())}>
            <MdOutlineDone />
          </span>
        </div>
      </article>
    </>
  );
};

export default SingleTodo;
