import "./App.scss";
import Button from "./Button.js";

function App() {
	const showBunnon = (e) => {
		console.log(e.current.target)
	}

	return (
		<>
			<div className="block block-dark">
				<div className="block__head">
					<h1 className="block__title">Redux</h1>
					<button className="block__button block__button--aqua js-change-topic">Сменить тему</button>
				</div>
				<div>
					<div className="block__counter">Counter: </div>
					<div className="block">
						<Button nameButton="Добавить" className="block__button--green" handleClick={(e) => showBunnon(e)}></Button>
						<Button nameButton="Убрать" className="block__button--red" handleClick={(e) => showBunnon(e)}></Button>
						<Button nameButton="Async" className="block__button--blue" handleClick={(e) => showBunnon(e)}></Button>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;