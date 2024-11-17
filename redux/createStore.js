// function export
export const createStore = (rootReducer, initialState) => {
	let state = rootReducer(initialState, {type: 'initialState'});
	const subscribes = [];

	return {
		dispatch (action) {
			state = rootReducer(state, action);
			subscribes.forEach(sub => sub())
		},
	
		subscribe (collback) {
			subscribes.push(collback);
		},
	
		getState () {
			return state;
		}
	}
};
