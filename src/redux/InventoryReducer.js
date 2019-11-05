const initialState = {
	inventory: {}
};

export const GET_INVENTORY = "GET_INVENTORY";

const inventoryReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case GET_INVENTORY:
			return {
				...state,
				inventory: payload
			};
		default:
			return state;
	}
};

export default inventoryReducer;
