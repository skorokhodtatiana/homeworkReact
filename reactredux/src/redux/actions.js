import { INCREMENT, DECREMENT, ASYNC } from './types';

export const increment = () => {
	return {
		type: INCREMENT
	}
}

export const decrement = () => {
	return {
		type: DECREMENT
	}
}

export const async = () => {
	return {
		type: ASYNC
	}
}
