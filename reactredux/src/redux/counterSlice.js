import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
	name: 'counter',
	initialState: 0,
	reducers: {
		increment(state, action) {
			console.log(state)
			return state + 1;
		},
		decrement(state,action) {
			return state - 1
		}
	}
})

export const {increment, decrement, async} = counterSlice.actions;

export default counterSlice.reducer;