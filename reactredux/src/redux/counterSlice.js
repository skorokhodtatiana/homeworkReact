import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk(
	'counter/fetchData',
	async function () {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos');
		const data = await response.json();
		console.log(data);
		return data;
	}
)

const counterSlice = createSlice({
	name: 'counter',
	initialState: 0,
	status: null,
	error: null,
	reducers: {
		increment(state, action) {
			console.log(state)
			// return state + 1;
		},
		decrement(state,action) {
			return state - 1
		}
	},
	extraReducers: {
		[fetchData.pending]: (state) => {
			state.status = 'pending';

		},
		[fetchData.fulfilled]: (state, action) => {
			state.status = 'resolve';
			state.initialState = action.payload.length;
		},
		[fetchData.rejected]: (state, action) => {},
	}
})

export const {increment, decrement, async} = counterSlice.actions;

export default counterSlice.reducer;