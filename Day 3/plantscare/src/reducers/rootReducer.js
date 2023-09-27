import { combineReducers } from "redux";

import plantReducer from "./plantReducer";

let rootReducer = combineReducers({
  plantReducer: plantReducer,
});

export default rootReducer;