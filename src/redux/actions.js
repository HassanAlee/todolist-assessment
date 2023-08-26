import * as type from "../redux/constants";
export const taskComplete = (id) => {
  return { type: type.TASK_COMPLETE, payload: id };
};
export const addTodo = (data) => {
  return { type: type.ADD_TODO, payload: data };
};
