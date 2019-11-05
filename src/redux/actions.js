import { REGISTER_USER } from "./UserReducer";
import { LOGIN_USER } from "./UserReducer";

export const register = user => ({
	type: REGISTER_USER,
	payload: user
});

export const login = user => ({
	type: LOGIN_USER,
	payload: user
});
