import * as type from "../redux/constants";
export const taskComplete = (id) => {
  return { type: type.TASK_COMPLETE, payload: id };
};
