import { REGISTER_USER } from "./UserReducer";
import { LOGIN_USER } from "./UserReducer";
import { LOGOUT_USER } from "./UserReducer";
import { GET_INVENTORY } from "./InventoryReducer";
import { GET_CART } from "./InventoryReducer";
import { CART_TOTAL } from "./InventoryReducer";

export const register = user => ({
	type: REGISTER_USER,
	payload: user
});

export const login = user => ({
	type: LOGIN_USER,
	payload: user
});

export const logout = user => ({
	type: LOGOUT_USER,
	payload: null
});

export const getInventory = items => ({
	type: GET_INVENTORY,
	payload: items
});

export const getCart = items => ({
	type: GET_CART,
	payload: items
});

export const cartTotal = total => ({
	type: CART_TOTAL,
	payload: total
});
