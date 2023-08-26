import * as type from "../redux/constants";
export const reducer = (state, action) => {
  if (action.type === type.TASK_COMPLETE) {
    console.log("task completed");
    return { ...state };
  }
  return { ...state };
};
