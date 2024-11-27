import { useState } from 'react';
import './App.scss';
import Button from './Button.js';
import { increment, decrement } from './redux/counterSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { changeTopic } from './redux/topicSlice.js';

const App = () => {
	const dispatch = useDispatch();
	const state = useSelector(state => state.counter);
	console.log(state);

	const getIncrement = () => {
		dispatch(increment(state));
	}

	const getDecrement = () => {
		dispatch(decrement(state));
	}

	const stateTopic = useSelector(state => state.topic)

	const getTopic = () => {
		dispatch(changeTopic(stateTopic));
	}

	return (
		<>
			<div className={'block ' + stateTopic}>
				<div className="block__head">
					<h1 className="block__title">Redux</h1>
					<Button nameButton="Сменить тему" className="block__button--aqua" handleClick={getTopic}></Button>
				</div>
				<div>
					<div className="block__counter">Counter: {state} </div>
					<div className="block">
						<Button nameButton="Добавить" className="block__button--green" handleClick={getIncrement}></Button>
						<Button nameButton="Убрать" className="block__button--red" handleClick={getDecrement}></Button>
						<Button nameButton="Async" className="block__button--blue"></Button>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;