import { combineReducers } from "redux";
//REDUCERS
import studentReducer from "./students/student.reducer";

export default combineReducers({
  student: studentReducer,
});
