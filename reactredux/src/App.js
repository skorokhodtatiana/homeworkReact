import './App.scss';
import Button from './Button.js';
import { increment, decrement } from './redux/counterSlice.js';
import { useDispatch, useSelector } from 'react-redux';

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

	return (
		<>
			<div className="block block-dark">
				<div className="block__head">
					<h1 className="block__title">Redux</h1>
					<button className="block__button block__button--aqua js-change-topic">Сменить тему</button>
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