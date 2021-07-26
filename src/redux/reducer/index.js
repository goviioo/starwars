import { combineReducers } from "redux";
import characterReducer from './characterReducer';
const appReducer = combineReducers({
    characterReducer
});

export default appReducer;