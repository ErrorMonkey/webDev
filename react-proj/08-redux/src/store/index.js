import { combineReducers } from "redux";
import countReducer from "./countReducer";
import isDataReducer from "./isDataReducer";
import bankCountReducer from "./bankCountReducer";

const rootReducer = combineReducers({
  counter: countReducer,
  isData: isDataReducer,
  bankCounter: bankCountReducer,
});

export default rootReducer;
