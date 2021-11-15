import "./cardTariff.scss";

const CardTariff = (props) => {
  const {
    id,
    name,
    currency,
    price,
    period,
    speed,
    isSelected,
    color,
    colorMain,
  } = props;

  const thisSelected = isSelected ? "selected" : "";

  return (
    <div className={"card " + thisSelected} key={id}>
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
