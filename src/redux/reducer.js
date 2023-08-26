import * as type from "../redux/constants";
export const reducer = (state, action) => {
  if (action.type === type.TASK_COMPLETE) {
    const deletedTodo = state.allTodos.filter(
      (item) => item.id === action.payload
    );
    const newTodos = state.allTodos.filter(
      (item) => item.id !== action.payload
    );
    localStorage.setItem(
      "completedTodos",
      JSON.stringify([...state.completedTodos, deletedTodo[0]])
    );
    localStorage.setItem("todos", JSON.stringify(newTodos));
    return {
      ...state,
      allTodos: newTodos,
      completedTodos: [...state.completedTodos, deletedTodo[0]],
      setIsEditing: false,
    };
  }
  if (action.type === type.ADD_TODO) {
    localStorage.setItem(
      "todos",
      JSON.stringify([...state.allTodos, action.payload])
    );
    return {
      ...state,
      allTodos: [...state.allTodos, action.payload],
      setIsEditing: false,
    };
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
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    return {
      ...state,
      allTodos: updatedTodos,
      toEdit: {},
      isEditing: false,
      setIsEditing: false,
    };
  }
  return { ...state };
};
