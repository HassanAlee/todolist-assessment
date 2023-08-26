import * as type from "../redux/constants";
export const reducer = (state, action) => {
  if (action.type === type.TASK_COMPLETE) {
    const deletedTodo = state.allTodos.filter(
      (item) => item.id === action.payload
    );
    const newTodos = state.allTodos.filter(
      (item) => item.id !== action.payload
    );
    return {
      ...state,
      allTodos: newTodos,
      completedTodos: [...state.completedTodos, deletedTodo[0]],
    };
  }
  if (action.type === type.ADD_TODO) {
    return { ...state, allTodos: [...state.allTodos, action.payload] };
  }
  return { ...state };
};
