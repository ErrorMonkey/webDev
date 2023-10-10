module.exports.add1 = (a, b) => a + b;
module.exports.add2 = (a, b) => a + "" + b;

const add1 = (a, b) => a + b;
const add2 = (a, b) => {
  return a + "" + b;
};
const PI = 3.14;

const minus = (a, b) => a - b;

module.exports = add2;
module.exports = add1;

module.exports = {
  add1,
  add2,
  minus,
  PI,
};

const data = {
  add1: add1,
  add2: add2,
  minus: minus,
};
