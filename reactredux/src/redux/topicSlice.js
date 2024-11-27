import { createSlice } from '@reduxjs/toolkit';

const topicSlice = createSlice({
	name: 'topic',
	initialState: 'white',
	reducers: {
		changeTopic(state, action) {
			if (state === 'white') {
				console.log(state)
				return state = 'black';
			} else {
				console.log(state)
				return state = 'white';
			}
		},
	}
})

export const {changeTopic} = topicSlice.actions;

export default topicSlice.reducer;