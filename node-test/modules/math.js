const add1 = (a, b) => a + b;
const add2 = (a, b) => {
  return a + "" + b;
};
const PI = 3.14;

const minus = (a, b) => a - b;

module.exports = {
  add1,
  add2,
  minus,
  PI,
};

// 이렇게 하나하나 모두 내보내는 것도 가능
module.exports.add1 = (a, b) => a + b;
module.exports.add2 = (a, b) => a + "" + b;

// module.exports = add2;
// module.exports = add1;
