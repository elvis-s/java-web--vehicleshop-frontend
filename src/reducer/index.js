import { combineReducers } from "redux";
import errorReducer from "./ErrorReducer";
import vehicleReducer from "./VehicleReducer";

const rootReducer = combineReducers({
  errorReducerContent: errorReducer,
  vehicleReducerContent: vehicleReducer,
});
export default rootReducer;