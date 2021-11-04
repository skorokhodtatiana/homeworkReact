import React from 'react';
import CardsSuperhero from './components/CardsSuperhero.jsx';
import './App.css';


const heros = [
  {character:"Бэтмэн", universe:"DC-Comics", name:"Брюс Уэйн", career:"борец с преступностью, филантроп, миллиардер", friends:"Робин, Бэтгерл", url:"https://pngimg.com/uploads/batman/batman_PNG111.png"},
  {character:"Супермэн", universe:"DC-Comics", name:"Кларк Кент", career:"борец за справедливость", friends:"собака Крипто", url:"https://wikiimg.tojsiabtv.com/wikipedia/en/3/35/Supermanflying.png"},
  {character:"Железный человек", universe:"Marvel Comics", name:"Тони Старк", career:"гений, миллиардер, плейбой, филантроп", friends:"Мстители", url:"https://pngimg.com/uploads/ironman/ironman_PNG50.png"},
  {character:"Спайдер-мен/Человек-паук", universe:"Marvel Comics", name:"Питер Паркер", career:"борец за справедливость, студент, фотограф", friends:"Мстители, Фантастическая четверка, Люди Икс", url:"https://kvmarvel.ru/wp-content/uploads/2018/03/spider-man-1.png"},
  {character:"Капитан Америка", universe:"Marvel Comics", name:"Стивен Роджерс", career:"супер-солдат", friends:"Мстители", url:"https://karaway.by/wp-content/uploads/2020/05/cap-america-01.png"},
  {character:"Тор", universe:"Marvel Comics", name:"Тор Одинсон", career:"борец за справедливость, скандинавский бог", friends:"Мстители", url:"https://kvmarvel.ru/wp-content/uploads/2019/03/gladiator-thor-deluxe-version.png"}
];

class App extends React.Component {
  render(){
  return (
    <div className="App">
      {
        heros.map((hero, index) => 
        <CardsSuperhero key={index} character={hero.character} universe={hero.universe} name={hero.name} career={hero.career} friends={hero.friends} url={hero.url}></CardsSuperhero>)
      }
    </div>
  );
}
}
export default App;
