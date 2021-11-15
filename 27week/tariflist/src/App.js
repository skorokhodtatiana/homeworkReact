import "./App.css";
import CardTariff from "./components/CardTariff";

const tariffs = [
  {
    id: 1,
    name: "Безлимитный 300",
    currency: "руб",
    price: "300",
    period: "/мес",
    speed: "до 10 Мбит/сек",
    color: "blueCard",
    colorMain: "blueMain",
  },
  {
    id: 2,
    name: "Безлимитный 450",
    currency: "руб",
    price: "450",
    period: "/мес",
    speed: "до 50 Мбит/сек",
    color: "greenCard",
    colorMain: "greenMain",
  },
  {
    id: 3,
    name: "Безлимитный 550",
    currency: "руб",
    price: "550",
    period: "/мес",
    speed: "до 100 Мбит/сек",
    isSelected: true,
    color: "redCard",
    colorMain: "redMain",
  },
  {
    id: 4,
    name: "Безлимитный 1000",
    currency: "руб",
    price: "1000",
    period: "/мес",
    speed: "до 200 Мбит/сек",
    color: "blackCard",
    colorMain: "blackMain",
  },
];

function App() {
  return (
    <div className="App">
      {tariffs.map((tariff) => (
        <CardTariff
          key={tariff.id}
          name={tariff.name}
          currency={tariff.currency}
          price={tariff.price}
          period={tariff.period}
          speed={tariff.speed}
          isSelected={tariff.isSelected}
          color={tariff.color}
          colorMain={tariff.colorMain}
        ></CardTariff>
      ))}
    </div>
  );
}

export default App;
