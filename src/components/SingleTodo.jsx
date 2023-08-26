import React, { useState } from "react";
const SingleTodo = ({ todo, date, description, info, id }) => {
  return (
    <>
      <article className="singleTodo">
        <h5>{todo}</h5>
        <p>{date}</p>
        <p>{description}</p>
        <p>{info}</p>
      </article>
    </>
  );
};

export default SingleTodo;
