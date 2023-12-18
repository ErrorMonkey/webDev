export const bankIncrease = () => ({ type: "bank/increase" });
export const bankDecrease = () => ({ type: "bank/decrease" });

const initialValue = { money: 0 };

const bankCountReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "bank/increase":
      return { money: state.money + action.money };
    case "bank/decrease":
      return { money: state.money - action.money };
    default:
      return { state };
  }
};

export default bankCountReducer;
