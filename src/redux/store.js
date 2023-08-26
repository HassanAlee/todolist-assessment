import { createStore } from "redux";
import { reducer } from "./reducer";
const initialState = {
  allTodos: [
    {
      id: 1,
      todo: "Complete homework",
      date: "2023-08-26",
      description: "Finish the math and science assignments",
      info: "High priority task for school",
    },
    {
      id: 2,
      todo: "Buy groceries",
      date: "2023-08-27",
      description: "Purchase fruits, vegetables, and milk",
      info: "Weekly grocery shopping",
    },
    {
      id: 3,
      todo: "Prepare presentation",
      date: "2023-08-28",
      description: "Gather data and create slides for the client presentation",
      info: "Important business presentation",
    },
    {
      id: 3,
      todo: "Prepare presentation",
      date: "2023-08-28",
      description: "Gather data and create slides for the client presentation",
      info: "Important business presentation",
    },
    {
      id: 3,
      todo: "Prepare presentation",
      date: "2023-08-28",
      description: "Gather data and create slides for the client presentation",
      info: "Important business presentation",
    },
    {
      id: 3,
      todo: "Prepare presentation",
      date: "2023-08-28",
      description: "Gather data and create slides for the client presentation",
      info: "Important business presentation",
    },
    // You can add more objects here to represent additional tasks
  ],
  completedTodos: [],
  name: "Hassan",
};
export const store = createStore(reducer, initialState);
