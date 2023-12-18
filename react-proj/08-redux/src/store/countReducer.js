// 문자열은 어디서 처리하는 건가?
// counter.INCREMENT로 접근해야하는 거 아닌가?
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

// 발생할 수 있는 action을 return 하는 함수.
// 왜 만들었을까? 액션의 type 이름이 바뀐다고 가정하면,
// 액션이 발생하는 모든 곳(dispatch)에서 action.type을 다 변경해야함
// 이를 해결하기 위해 타입을 반환하는 함수를 만들었다.
export const increase = () => ({ type: INCREMENT });
export const decrease = () => ({ type: DECREMENT });

const initialValue = { number: 100 };

const countReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "INCREMENT": // INCREMENT 상수 선언 전 ver.3
    case INCREMENT: // INCREMENT 상수 선언 후 ver.3-1
      return { number: state.number + 1 };
    case "DECREMENT":
    case DECREMENT:
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default countReducer;
