import { useEffect, useState } from "react/cjs/react.development";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState(0);

  const onChange = (event) => setDollar(event.target.value);
  const changeSelect = (event) => console.log(event.target);
  useEffect(() => {
    const fetchData = async () => {
      const data = await (
        await fetch("https://api.coinpaprika.com/v1/tickers")
      ).json();
      setCoins(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>The Coins {loading ? null : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select onChange={changeSelect}>
            {coins.map((coin, id) => (
              <option key={id}>
                {coin.name} {coin.symbol} ${coin.quotes.USD.price} USD /
                {` my coin: ${dollar / coin.quotes.USD.price} Coins`}
              </option>
            ))}
          </select>
          <hr />
          <label htmlFor="dollar">달러 </label>
          <input
            type="number"
            placeholder="input dollars"
            value={dollar}
            onChange={onChange}
            id="dollar"
          />
        </div>
      )}
    </div>
  );
}

//export default App;
