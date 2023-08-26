import { createStore } from "redux";
import { reducer } from "./reducer";
const initialState = {
  allTodos: [],
  completedTodos: [],
  name: "Hassan",
};
export const store = createStore(reducer, initialState);
