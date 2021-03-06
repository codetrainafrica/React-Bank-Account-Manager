import { combineReducers } from "redux";
import reducer from './reducer';
import { firebaseReducer } from "react-redux-firebase";

export default combineReducers({
    firebase:firebaseReducer,
    bank:reducer
})