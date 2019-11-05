const initialState = {
	inventory: [],
	email: "",
	id: -1
};

const REGISTER_USER = "REGISTER_USER";

// export const REGISTER_USER

export default function reducer(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		default:
			return state;
	}
}
