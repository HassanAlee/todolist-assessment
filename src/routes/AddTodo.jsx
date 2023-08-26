import React from "react";

const AddTodo = () => {
  return (
    <>
      <form className="form">
        <h4>add new todo</h4>
        <div className="formRow">
          <div className="formField">
            <input type="text" placeholder="Enter Todo" />
          </div>
          <div className="formField">
            <input type="date" placeholder="Select Date" />
          </div>
        </div>
        <div className="formCol">
          <textarea rows="4" placeholder="Description"></textarea>
        </div>
        <div className="formCol">
          <textarea rows="2" placeholder="Additional Info"></textarea>
        </div>
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
};

export default AddTodo;
