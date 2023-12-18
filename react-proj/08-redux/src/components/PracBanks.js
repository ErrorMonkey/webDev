import { useState } from "react";

export function CodingonBank(props) {
  const [inputMoney, setInputMoney] = useState(0);

  const { increase, decrease, totalMoney } = props;

  return (
    <>
      <h1>코딩온 은행</h1>
      <h2>잔액: {totalMoney}</h2>
      <input type="number" onChange={(e) => setInputMoney(e.target.value)} />
      <button type="button" onClick={increase}>
        입금
      </button>
      <button type="button" onClick={decrease}>
        출금
      </button>
    </>
  );
}
