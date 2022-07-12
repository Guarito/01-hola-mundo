import { combineReducers } from "redux";
import { todos } from "./todoReducer";

const reducer = combineReducers({ todos });

export default reducer;
