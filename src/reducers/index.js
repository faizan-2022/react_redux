import changeTheNumber from "./upDown";
import multiAndDivi from "./SimpleCalculator";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeTheNumber,
    multiAndDivi
})

export default rootReducer;