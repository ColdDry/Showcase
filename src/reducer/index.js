import { combineReducers } from "redux";
import home from "./homeReducer";
import reduxEx from "./reduxExReducer";

const rootReducer = combineReducers({
  home,
  reduxEx
});

export default rootReducer;
