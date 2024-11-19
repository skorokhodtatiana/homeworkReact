//import { createStore } from './createStore.js';

// import { createStore, applyMiddleware } from '/reduxProject/redux';
import { createStore } from './dist/redux.legacy-esm.js';
//import thunk from '/reduxProject/redux-thunk';
import { rootReducer } from './redux/rootReducer.js';
import { increment, decrement } from './redux/actions.js';
//import { increment, decrement } from './types.js';

const incrementButton = document.querySelector('.js-increment');
const decrementButton = document.querySelector('.js-decrement');
const asyncButton = document.querySelector('.js-async');
const changeTopicButton = document.querySelector('.js-change-topic');
const counter = document.querySelector('.js-counter');

// const store = createStore(rootReducer, 0, applyMiddleware(thunk));
const store = createStore(rootReducer, 0);

incrementButton.addEventListener('click', () => {
	store.dispatch(increment());
});

decrementButton.addEventListener('click', () => {
	store.dispatch(decrement())
});
store.subscribe(() => {
	const state = store.getState();
	console.log(state);
	counter.textContent = state;
})

store.dispatch({type: 'init'});

asyncButton.addEventListener('click', () => {

});

changeTopicButton.addEventListener('click', () => {

});
