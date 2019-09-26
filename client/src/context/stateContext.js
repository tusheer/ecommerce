import React, { useReducer } from 'react';
import MainContext from './mainContext.js';
import mainReducers from './reduce';
import women from './women';
import mens from './mens';
import jewelry from './jewelry';
import shoes from './shoes';

const StateContext = (props) => {
	const initialState = {
		mens: [ ...mens ],
		women: [ ...women ],
		shoes: [ ...shoes ],
		jewelry: [ ...jewelry ],
		cart: [],
		checkout: [],
		details: null,
		userId: null,
	};
	const [ state, dispatch ] = useReducer(mainReducers, initialState);

	const cartadd = (data) => {
		dispatch({
			type: 'CART',
			payload: data,
		});
	};

	const id = (data) => {
		dispatch({
			type: 'ID',
			payload: data,
		});
	};

	return (
		<MainContext.Provider
			value={{
				...state,
				cartadd: cartadd,
				id: id,
			}}
		>
			{props.children}
		</MainContext.Provider>
	);
};

export default StateContext;
