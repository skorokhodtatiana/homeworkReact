import { INCREMENT, DECREMENT, ASYNC } from '../types.js';

export const rootReducer = (state, action) => {
	switch (action.type) {
		case INCREMENT:
			return state + 1;
		case DECREMENT:
			return state - 1;
		case ASYNC:
			return state + 1;
		default: state
	}

	return state;
}
