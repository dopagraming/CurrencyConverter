import React, { useState } from "react";
import "./App.css";
import { error } from "console";

function App() {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [amount, setAmount] = useState(0);
  const [raten, setRate] = useState("");
  function converte(): void {
    fetch(
      `https://v6.exchangerate-api.com/v6/de416f95d24ff3fb39bdc3bd/latest/${from}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const rate = data.conversion_rates[to];
        console.log(rate);
        const result = (amount * rate).toFixed(2);
        console.log(result);
        setRate(result);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(from);
  }
  return (
    <div className="App">
      <h2>currency Converter</h2>
      <div className="container">
        <input
          type="number"
          required
          placeholder="Mount"
          onInput={(e) => setAmount(Number(e.currentTarget.value))}
        />
        <select
          name=""
          id=""
          className="from"
          onInput={(e) => setFrom(e.currentTarget.value)}
        >
          <option selected value="USD">
            USD
          </option>
          <option value="TRY">TRY</option>
          <option value="EUR">EUR</option>
          <option value="EGP">EGP</option>
        </select>
        <select
          name=""
          id=""
          className="to"
          onInput={(e) => setTo(e.currentTarget.value)}
        >
          <option value="USD">USD</option>
          <option value="TRY">TRY</option>
          <option selected value="EUR">
            EUR
          </option>
          <option value="EGP">EGP</option>
        </select>
        <button onClick={from && to && amount ? converte : undefined}>
          Converte
        </button>
        <div className="raten">
          {raten && `the ${amount} ${from} = ${raten} ${to}`}
        </div>
      </div>
    </div>
  );
}

export default App;
