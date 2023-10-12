// node.js 모듈 다루기

// case 3)
// 파일에서 여러 개의 식별자를 객체 형태로 내보내는 경우
// 특정 식별자만 필요한 경우 객체구조분해 할당 문법을 통해 받아올 수 있다.
const { add1, minus, PI } = require("./math.js");

const sum = add1(1, 2);
console.log("sum", sum);

// case 2)
// 파일에서 여러 개의 식별자를 객체 형태로 내보내는 경우
// 모듈을 받아올 때 객체를 그대로 math 식별자로 받음
const math = require("./math.js");

console.log("add1(1,2)", math.add1(1, 2));
console.log("add2(2,3)", math.add2(2, 3));
console.log("math.PI", math.PI);

// case 1)
// 파일에서 한 개의 식별자만 내보내는 경우
const justOne = require("./justOne.js");
justOne.test1();
justOne.test2();
