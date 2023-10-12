// import addFunc from "./math_es6.js";
// math_es6 파일에서 default로 export 하고 있는 식별자를 addFunc라는 식별자로 받아옴
// import { addFunc, minusFunc } from "./math_es6.js";
// console.log("addFunc(2, 3)", addFunc(2, 3));

// es6 문법에서 모듈 import할 때, 구조분해 없이 식별자를 만들어서 만들어서 받아오는 방법은
// module 파일(math_es6.js)에 default로 export 하는 값이 있어야 함
import math from "./math_es6.js";
import { add, minus } from "./math_es6.js";
// import { addFunc, minusFunc } from "./math_es6.js";

// console.log("math.addFunc(5,2)", math.addFunc(5, 2));
// console.log("math.minusFunc(5,2)", math.minusFunc(5, 2));
console.log("math.add(5,2)", add(5, 2));
console.log("math.minus(5,2)", minus(5, 2));
console.log("math", math());
