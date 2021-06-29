//TYPES
import StudentActionsTypes from "./student.type";
//ACTIONS
export const deleteStudent = (item) => ({
  type: StudentActionsTypes.DELETE_STUDENT,
  payload: item,
});

export const addStudent = (item) => ({
  type: StudentActionsTypes.ADD_STUDENT,
  payload: item,
});

export const toggleHidden = () => ({
  type: StudentActionsTypes.TOGGLE_HIDDEN,
});
