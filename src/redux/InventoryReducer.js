const initialState = {
	inventory: {},
	cart: null
};

export const GET_INVENTORY = "GET_INVENTORY";
export const GET_CART = "GET_CART";

const inventoryReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case GET_INVENTORY:
			return {
				...state,
				inventory: payload
			};
		case GET_CART:
			return {
				...state,
				cart: payload
			};
		default:
			return state;
	}
};

export default inventoryReducer;
