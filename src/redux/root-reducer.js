import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import InventoryReducer from "./InventoryReducer";

export default combineReducers({
	user: UserReducer,
	items: InventoryReducer
});
