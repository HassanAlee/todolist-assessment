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
  if (action.type === type.EDIT_TODO) {
    const toEdit = state.allTodos.filter((item) => item.id === action.payload);
    return { ...state, isEditing: true, toEdit: toEdit[0] };
  }
  if (action.type === type.UPDATE_TODO) {
    const updatedTodos = state.allTodos.map((item) => {
      const { id, todo, date, description, info } = action.payload;
      if (item.id === id) {
        return {
          ...item,
          todo: todo,
          date: date,
          description: description,
          info: info,
        };
      }
      return item;
    });
    return { ...state, allTodos: updatedTodos };
  }
  return { ...state };
};
