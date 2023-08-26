import React, { useState } from "react";
import { MdOutlineDone } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { taskComplete, editTodo } from "../redux/actions";
import { useNavigate } from "react-router-dom";
const SingleTodo = ({ todo, date, description, info, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
          <span
            className="icon"
            onClick={() => {
              dispatch(editTodo(id));
              navigate("/");
            }}
          >
            <TbEdit className="editIcon" />
          </span>
          <span className="icon" onClick={() => dispatch(taskComplete(id))}>
            <MdOutlineDone className="deleteIcon" />
          </span>
        </div>
      </article>
    </>
  );
};

export default SingleTodo;
