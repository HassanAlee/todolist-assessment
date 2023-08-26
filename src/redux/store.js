import { createStore } from "redux";
import { reducer } from "./reducer";
const initialState = {
  allTodos: [],
  completedTodos: [],
  isEditing: false,
};
export const store = createStore(reducer, initialState);
