const initialState = {
	currentUser: null
};

export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER = "LOGIN_USER";

const userReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case REGISTER_USER:
			return {
				...state,
				currentUser: payload
			};
		case LOGIN_USER:
			return {
				...state,
				currentUser: payload
			};
		default:
			return state;
	}
};

export default userReducer;
