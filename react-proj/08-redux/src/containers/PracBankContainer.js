import { CodingonBank } from "../components/PracBanks";
import { useDispatch, useSelector } from "react-redux";
import { bankIncrease, bankDecrease } from "../store/bankCountReducer";

export function CodingonBankContainer() {
  const dispatch = useDispatch();
  const increase = () => dispatch({ type: bankIncrease(), money: 0 });
  const decrease = () => dispatch({ type: bankDecrease(), money: 0 });

  const totalMoney = useSelector((state) => state.bankCounter.money);
  // const [inputMoney, setInputMoney] = useState(0);

  return (
    <CodingonBank
      increase={increase}
      decrease={decrease}
      totalMoney={totalMoney}
    />
  );
}
