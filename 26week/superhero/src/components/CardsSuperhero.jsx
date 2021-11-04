import React from 'react';
import './CardsSuperhero.css';


//Реализация через функцию
    function CardsSuperhero(props){
const{character, universe, name, career, friends, url} = props;
        return(
            <div className="hero-card">
                <div className="hero-character">{character}</div>
                <div className="hero-universe">{universe}</div>
                <div className="hero-name">{name}</div>
                <div className="hero-career">{career}</div>
                <div className="hero-friends">{friends}</div>
                <img className="hero-img" src={url} alt={name}/>
            </div>
        )
    }


//Реализация через класс

// class CardsSuperhero extends React.Component{
//     render(){
// const{character, universe, name, career, friends, url} = this.props;
//         return(
//             <div className="hero-card">
//                 <h2 className="hero-character">{character}</h2>
//                 <div className="hero-universe">Вселенная: {universe}</div>
//                 <div className="hero-name">Альтер эго: {name}</div>
//                 <div className="hero-career">Род деятельности: {career}</div>
//                 <div className="hero-friends">Друзья: {friends}</div>
//                 <div className="hero-img-wrapper">
//                 <img className="hero-img" src={url} alt={name}/>
//                 </div>              
//             </div>
//         )
//     }
// }

export default CardsSuperhero;