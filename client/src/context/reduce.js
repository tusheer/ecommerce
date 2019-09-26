export default (state, action) => {
	switch (action.type) {
		case 'CART':
			return {
				...state,
				cart: [ ...state.cart, action.payload ],
			};
		case 'ID':
			localStorage.setItem('userId', JSON.stringify(action.payload));
			return {
				...state,
				userId: { ...action.payload },
			};

		default:
			return {
				...state,
			};
	}
};
