import React, { useState } from "react";
import "./cardTariff.scss";

const CardTariff = (props) => {
  const [select, setselect] = useState(false);
  const { id, name, currency, price, period, speed, color, colorMain } = props;

  // const thisSelected = isSelected ? "selected" : "";
  const handleClick = () => {
    setselect(!select);
  };

  const thisSelected = select ? "selected" : "";

  return (
    <div className={"card " + thisSelected} key={id} onClick={handleClick}>
      <header className={"card__header " + color}>{name}</header>
      <main className={"card__main " + colorMain}>
        <section className="card__currency">{currency}</section>
        <section className="card__price">{price}</section>
        <section className="card__period">{period}</section>
      </main>
      <div className="card__speed">{speed}</div>
      <footer className="card__footer">
        Объем включенного трафика не ограничен
      </footer>
    </div>
  );
};
export default CardTariff;
