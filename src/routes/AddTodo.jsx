import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [info, setInfo] = useState("");
  const [editId, setEditId] = useState("");
  const isEditing = useSelector((state) => state.isEditing);
  const toEdit = useSelector((state) => state.toEdit);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (isEditing) {
      setEditId(toEdit.id);
      setTodo(toEdit.todo);
      setDate(toEdit.date);
      setDescription(toEdit.description);
      setInfo(toEdit.info);
    }
  }, [toEdit]);
  // submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo === "" || date === "" || description === "" || info === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields are mandatory!",
      });
    } else {
      if (!isEditing) {
        const newTodo = {
          id: uuid(),
          todo: todo.trim(),
          date: date.trim(),
          description: description,
          info: info.trim(),
        };
        dispatch(addTodo(newTodo));
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Todo added successfully!",
        });
      } else {
        const newTodo = {
          id: editId,
          todo: todo.trim(),
          date: date.trim(),
          description: description,
          info: info.trim(),
        };
        dispatch(updateTodo(newTodo));
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Todo updated successfully!",
        });
      }
      setTodo("");
      setDate("");
      setDescription("");
      setInfo("");
      navigate("/all");
    }
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h4>{isEditing ? "edit todo" : "add new todo"}</h4>
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
            cols={"auto"}
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
        <button type="submit">{isEditing ? "Edit Todo" : "Add Todo"}</button>
      </form>
    </>
  );
};

export default AddTodo;
