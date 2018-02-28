import { combineReducers } from "redux";
import houseListReducer from "./houseList";

const rootReducer = combineReducers({
  houseList: houseListReducer
});

export default rootReducer;
