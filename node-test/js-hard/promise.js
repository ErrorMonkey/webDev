function promiseTest1() {
  return new Promise((res, rej) => {
    res("test1");
  });
}
function promiseTest2() {
  return new Promise((res, rej) => {
    rej("test2");
  });
}
function promiseTest3() {
  return new Promise((res, rej) => {});
}

console.log(promiseTest1());
console.log(promiseTest2());
console.log(promiseTest3());
