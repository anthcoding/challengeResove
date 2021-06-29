//DATA
import STUDENT_DATA from "./student-data";
//TYPES
import StudentActionsTypes from "./student.type";

const INITIAL_STATE = {
  students: STUDENT_DATA,
  hidden: true,
};

const studentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StudentActionsTypes.DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter(
          (student) => student.id !== action.payload.id
        ),
      };
    case StudentActionsTypes.ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    case StudentActionsTypes.TOGGLE_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default studentReducer;
