// --- 문제 코드
// function goMart() {
//   console.log("마트에 가서 어떤 음료를 살 지 고민한다.");
// }

// let product;
// let price;

// function pickDrink(callback) {
//   setTimeout(function () {
//     console.log("고민 끝!");
//     product = "제로 콜라";
//     price = 2000;
//   }, 3000);
// }

// function pay(product, price) {
//   console.log(`상품명: ${product}, 가격: ${price}`);
// }

// goMart();
// pickDrink();
// pay(product, price);

// callback 코드
// function goMart() {
//   console.log("마트에 가서 어떤 음료를 살 지 고민한다.");
// }

// let product;
// let price;

// function pickDrink(callback) {
//   setTimeout(function () {
//     console.log("고민 끝!");
//     product = "제로 콜라";
//     price = 2000;
//     callback(product, price);
//   }, 3000);
// }

// function pay(product, price) {
//   console.log(`상품명: ${product}, 가격: ${price}`);
// }

// console.log("product", product);
// console.log("price", price);

// goMart();
// pickDrink(pay);

// --- promise 기본 예시 ---
// function promise1(flag) {
//   return new Promise(function (resolve, reject) {
//     if (flag) {
//       resolve(`상태 fulfilled ! then으로 연결`);
//     } else {
//       reject(`상태 rejected ! catch로 연결`);
//     }
//   });
// }

// 특정 함수가 return 하는 값이 promise 객체일 경우,
// method chaining으로 then, catch 메소드를 사용할 수 있다.
// promise1(true)
//   .then((result) => {
//     // result 에는 resolve로 보낸 인자 값이 들어오게 된다
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log("err", err);
//   });

// --- promise 코드
function goMart() {
  console.log("마트에 가서 어떤 음료를 살 지 고민한다.");
}

let product;
let price;

function pickDrink() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("고민 끝!");
      product = "제로 콜라";
      price = 2000;
      resolve();
    }, 3000);
  });
}

function pay(product, price) {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

// goMart();
// pickDrink().then(() => {
//   pay(product, price);
// });

async function promiseExec() {
  goMart();
  await pickDrink();
  pay(product, price);
}
promiseExec();

//
// --- Promise 체이닝을 안 사용한 경우
// function add(n1, n2, cb) {
//   setTimeout(function () {
//     let result = n1 + n2;
//     cb(result);
//   }, 1000);
// }

// function mul(n, cb) {
//   setTimeout(function () {
//     let result = n * 2;
//     cb(result);
//   }, 700);
// }

// function sub(n, cb) {
//   setTimeout(function () {
//     let result = n - 1;
//     cb(result);
//   }, 500);
// }

// add(4, 3, (x) => {
//   console.log("fir: ", x);
//   mul(x, (y) => {
//     console.log("sec: ", y);
//     sub(y, (z) => {
//       console.log("thir: ", z);
//     });
//   });
// });

// --- Promise 체이닝을 사용한 경우
// function add(n1, n2) {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       let result = n1 + n2;
//       resolve(result);
//     }, 1000);
//   });
// }

// function mul(n) {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       let result = n * 2;
//       resolve(result);
//       // reject("오류 발생");
//     }, 700);
//   });
// }

// function sub(n) {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       let result = n - 1;
//       resolve(result);
//     }, 500);
//   });
// }

// add(4, 3)
//   .then((result) => {
//     console.log("fir: ", result);
//     return mul(result);
//   })
//   .then((result) => {
//     console.log("sec: ", result);
//     return sub(result);
//   })
//   .then((result) => {
//     console.log("trd: ", result);
//   })
//   .catch((err) => {
//     console.log("err", err);
//   });

//
// --- (Promise) async / await 함께 사용
function add(n1, n2) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      let result = n1 + n2;
      resolve(result);
    }, 1000);
  });
}

function mul(n) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      let result = n * 2;
      resolve(result);
      // reject("오류 발생");
    }, 700);
  });
}

function sub(n) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      let result = n - 1;
      resolve(result);
    }, 500);
  });
}

// 1. async 함수는 promise를 return.
// 2. await 키워드는 async 함수 내부에서만 사용 가능하다.
async function exec() {
  const x = await add(4, 3);
  console.log("x: ", x);

  const y = await mul(x);
  console.log("y: ", y);

  const z = await sub(y);
  console.log("z: ", z);
  console.log("exec end");

  await test();
}

exec();
console.log("I'm under the exec func.");

function test() {}
// async function test() {
//   console.log("test");
// }
// console.log("test():", test());
