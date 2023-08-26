import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";
import Swal from "sweetalert2";
const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [info, setInfo] = useState("");
  const dispatch = useDispatch();
  // submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuid(),
      todo: todo.trim(),
      date: date.trim(),
      description: description,
      info: info.trim(),
    };
    if (todo === "" || date === "" || description === "" || info === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields are mandatory!",
      });
    } else {
      dispatch(addTodo(newTodo));
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Todo added successfully!",
      });
      setTodo("");
      setDate("");
      setDescription("");
      setInfo("");
    }
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h4>add new todo</h4>
        <div className="formRow">
          <div className="formField">
            <input
              type="text"
              placeholder="Enter Todo"
              value={todo}
              onChange={(e) => setTodo(e.currentTarget.value)}
            />
          </div>
          <div className="formField">
            <input
              type="date"
              placeholder="Select Date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="formCol">
          <textarea
            rows="4"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="formCol">
          <textarea
            rows="2"
            placeholder="Additional Info"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
};

export default AddTodo;
