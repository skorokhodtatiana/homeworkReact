import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import topicReducer from './topicSlice';

export default configureStore({
	reducer: {
		counter: counterReducer,
		topic: topicReducer,
	}
})