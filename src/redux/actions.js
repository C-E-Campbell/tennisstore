import { REGISTER_USER } from "./UserReducer";
import { LOGIN_USER } from "./UserReducer";
import { LOGOUT_USER } from "./UserReducer";

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
