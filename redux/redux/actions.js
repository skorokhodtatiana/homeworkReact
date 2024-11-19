import { INCREMENT, DECREMENT, ASYNC } from '../types.js';

export const increment = () => {
	return {
		type: INCREMENT
	}
};

export const decrement = () => {
	return {
		type: DECREMENT
	}
};

// export const async = () => {
// 	return function (dispatch) {
// 		setTimeout(() => {
// 			dispatch({type: ASYNC})
// 		}, 2000)
// 	}
// };
