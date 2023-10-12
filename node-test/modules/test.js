function first() {
  second();
  console.log(1);
  return;
}

function second() {
  console.log(2);
  return;
}

first();

// 이벤트 루프 이해를 위한 코드
function run() {
  console.log("3초 뒤 실행");
}

console.log("시작");
// 콜백함수: 함수의 인자로 함수를 날릴 때, 인자로 넘기는 그 함수.
setTimeout(run, 3000);
console.log("끝");

function a() {
  console.log("a");
  setTimeout(b, 1000);
  c();
}

function b() {
  console.log("b");
}

function c() {
  console.log("c");
  setTimeout(d, 1000);
}

function d() {
  console.log("d");
}

a();
