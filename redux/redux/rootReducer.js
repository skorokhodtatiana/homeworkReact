import { increment, decrement } from '../types.js';

export const rootReducer = (state, action) => {
	switch (action.type) {
		case increment:
			return state + 1;
		case decrement:
			return state - 1;
		default: state
	}

	return state;
}
