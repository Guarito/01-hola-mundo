import { combineReducers } from "redux";
import todo from "./todo/todoReducer";

const reducer = combineReducers({ todo });

export default reducer;
