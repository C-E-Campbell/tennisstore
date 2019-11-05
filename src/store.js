import { createStore, applyMiddleware, combineReducers } from "redux";

import UserReducer from "./reduxReducers/UserReducer";

const rootReducer = combineReducers({
	user: UserReducer
});

export default createStore(rootReducer);
