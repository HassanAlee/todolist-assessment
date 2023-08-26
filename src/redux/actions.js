import * as type from "../redux/constants";
export const taskComplete = (id) => {
  return { type: type.TASK_COMPLETE, payload: id };
};
export const addTodo = (data) => {
  return { type: type.ADD_TODO, payload: data };
};
export const editTodo = (id) => {
  return { type: type.EDIT_TODO, payload: id };
};
export const updateTodo = (data) => {
  return { type: type.UPDATE_TODO, payload: data };
};
export const clearAll = (data) => {
  return { type: type.CLEAR_ALL, payload: data };
};
