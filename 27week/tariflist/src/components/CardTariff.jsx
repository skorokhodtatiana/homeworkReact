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
    colorBlue,
    colorGreen,
    colorRed,
    colorBlack,
  } = props;

  const thisSelected = isSelected ? "selected" : "";

  const blueCard = colorBlue ? "card--blueHeader" : "";
  const greenCard = colorGreen ? "card--greenHeader" : "";
  const redCard = colorRed ? "card--redHeader" : "";
  const blackCard = colorBlack ? "card--blackHeader" : "";

  const blueMain = colorBlue ? "card--blueMain" : "";
  const greenMain = colorGreen ? "card--greenMain" : "";
  const redMain = colorRed ? "card--redMain" : "";
  const blackMain = colorBlack ? "card--blackMain" : "";
  return (
    <div className={"card " + thisSelected} key={id}>
      <header
        className={"card__header " + blueCard + greenCard + redCard + blackCard}
      >
        {name}
      </header>
      <main
        className={"card__main " + blueMain + greenMain + redMain + blackMain}
      >
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
