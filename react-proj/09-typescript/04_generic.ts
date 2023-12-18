// Generic
// 보통 선언할 때 type을 지정하는데, 다양한 타입을 처리해야 할 때가 있음
// 호출하거나 사용할 때, 타입을 넘겨서 해당 타입으로 지정할 수 있는 방법
function printXy(x: number, y: number): void;
function printXy(x: string, y: string): void;

function printXy(x: number | string | object, y: number | string | object) {
  console.log(x, y);
}
printXy(1, 2);
printXy('1', '2');
// printXy('1', 2);

function printStrXy(x: string, y: string) {
  console.log(x, y);
}
printStrXy('a', 'b');

function printXyByGeneric<T>(x: T, y: T) {
  console.log(x, y);
}

printXyByGeneric<string>('a', 'b');
printXyByGeneric<string | number>(2, 'a');
printXyByGeneric<object>({ name: 'test' }, { name: 'test' });

//
const numArrLength = (arr: number[]): number => arr.length;
// function numArrLength(arr: number[]): number {
//   return arr.length;
// }
function strArrLength(arr: string[]): number {
  return arr.length;
}
// 이 외 다른 타입 배열의 length도 구하고 싶다면?
// Generic으로 배열 만들기
function arrLength<T>(arr: T[]): number {
  return arr.length;
}
arrLength<string>(['1', 'b']);

function exampleGeneric<T, U>(x: T, y: U) {
  console.log(x, y);
}

exampleGeneric<string, number>('a', 1);

let a: string[];
let b: Array<string>;

interface Phone<T> {
  company: string;
  model: string;
  option: T;
}

interface SamsungOption {
  serial: string;
  sale: number;
}

const samsung23: Phone<SamsungOption> = {
  company: 'samsung',
  model: 'galaxy23',
  option: {
    serial: 'abc',
    sale: 10,
  },
};

interface iphoneOption {
  serial: string;
  chip: string;
}

const iphone15: Phone<iphoneOption> = {
  company: 'apple',
  model: 'iphone15',
  option: {
    serial: 'efg',
    chip: 'A15',
  },
};

function arrElement<T>(arr: T[], index: number) {
  if (arr.length < index) return false;
  return arr[index];
}

console.log(arrElement<string>(['a', 'b', 'c', 'd'], 6));

function 배열길이알려주는함수<T>(배열: T[]): number {
  return 배열.length;
}

배열길이알려주는함수<number>([1, 2, 3]);
