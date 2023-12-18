function abc() {
  console.log('abc');
}

// 함수 자체의 type -> 함수가 실행되어 결국 return 값
function sum(a: number, b: number): number {
  return a + b;
  // return "hi";
}
console.log(sum(1, 2));

// 옵셔널 매개변수
const sum1 = (a: number, b?: number): number => {
  if (b) return a + b;
  return a;
};

interface Calculator {
  sum: (a: number, b: number) => number;
  sub?: () => void;
}

const calc: Calculator = {
  sum: sum,
};

function goingOn(): never {
  while (true) {
    console.log('go');
  }
}

// void 함수 자체 return 값이 없을 때 사용
// 오버로딩? => 함수의 이름은 같으나, 형태가 다른 함수 (매개변수)
// ts는 기본적으로 매개변수의 개수가 같아야 하지만, 매개변수에 옵셔널 선언으로 해결할 수 있다.
function hello(num: number, num2?: number): number;
function hello(str: string, str2?: string): string;

function hello(param: any, param2?: any) {
  console.log(param);
  console.log(param2);
  return param;
}

hello(1);
hello('hello', 'world');

function pracSum1(a: number, b: number): void {
  console.log(a + b);
}

function pracSum2(...numbers: number[]): number {
  return [...numbers].reduce((acc, cur) => acc + cur);
}

pracSum1(1, 2);
console.log(pracSum2(1, 2, 3, 4, 5));
