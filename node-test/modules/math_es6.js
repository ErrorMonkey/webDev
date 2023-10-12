const add = (a, b) => a + b;
const minus = (a, b) => a - b;
const PI = () => 3.14;

// 1) 하나만 내보낼 경우
// common js의 방법
// module.exports = add;
// 아래는 es6의 방법
// export default add;

// 2) 여러 개 내보낼 경우
// common js의 방법
// module.exports = {
//   add,
//   minus,
// };
// es6의 방법
export default PI;
export { add, minus };
