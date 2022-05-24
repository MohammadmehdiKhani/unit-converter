import React, { useState } from "react";
import Select from "./Select";
import Input from "./Input";
import { units } from "../units";

function Convert(from, to, amount) {
  let res = (amount * from) / to;
  return parseFloat(res).toPrecision(12);
}

function App() {
  const [result, setResult] = useState(0);
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(1);

  return (
    <>
      <div className="converter-form">
        <Input label="Amount" onChange={e => setAmount(e.target.value)} ></Input>

        <div className="row">
          <Select label="From" items={units} onChange={e => setFrom(e.target.value)}></Select>
          <Select label="To" items={units} onChange={e => setTo(e.target.value)}></Select>

          <button onClick={() => setResult(Convert(from, to, amount))}>Convert</button>
        </div>
      </div>

      <div id="result">
        Result is: <span data-testid="result">{result}</span>
      </div>
    </>
  );
}

export default App;
