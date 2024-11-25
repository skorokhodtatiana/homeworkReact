import { createSlice } from '@reduxjs/toolkit';

const topicSlice = createSlice({
	name: 'topic',
	initialState: 'white',
	reducers: {
		changeWhite(state, action) {

		},
		changeBlack() {

		}
	}
})

export const {changeWhite, changeBlack} = topicSlice.actions;

export default topicSlice.reducer;