const initialState = {
	currentUser: null
};

const REGISTER_USER = "REGISTER_USER";

const userReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case REGISTER_USER:
			return {
				...state,
				currentUser: payload
			};
		default:
			return state;
	}
};

export default userReducer;
