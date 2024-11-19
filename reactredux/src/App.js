import "./App.scss";

function App() {
	return (
		<>
			<div class="block block-dark js-block">
				<div class="block__head">
					<h1 class="block__title">Redux</h1>
					<button class="block__button block__button--aqua js-change-topic">Сменить тему</button>
				</div>
				<div >
					<div class="block__counter">Counter: <span class="js-counter"></span></div>
					<div class="block">
						<button class="block__button block__button--red js-increment">Добавить</button>
						<button class="block__button block__button--green js-decrement">Убрать</button>
						<button class="block__button block__button--blue js-async">Async</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;