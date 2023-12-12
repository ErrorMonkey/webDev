// let str = "hello";
let str: string = "hello";

console.log(str);

let count: number;
count = 1;

let undif: undefined;
let nu: null = null;

let arr: number[] = [1,2,3,4,];

let strArr: string[] = ["a","b","c"];
let strArr2: Array<string> = ["a","b","c"];

let numStrArr: (number | string)[] = [1, 'a', 2, 'b'];
let numStrArr2: Array<number | string> = [1, 'a', 2, 'b'];

// typescript에서 any 사용은 지양
let anyArr: any[] = [1, "23", null, undefined, {}];

let obj: object = {
  name: 'tester',
};

let testArr: Array<number|object> = [1,{sdfsdf: "sdf"}]

// Tuple 자료형과 길이 고정
let food1: [string, number] 
food1 = ["돈가스", 1000];
console.log(food1[0] + food1[1]);
// food1[2]
// 튜플의 한계: 재선언은 잡아내지만 push 메소드를 이용하면 오류를 잡아낼 수 없음
food1.push("유통기한 지남")
console.log(food1);

// 재선언 불가능, push 불가능
let food2: readonly [string, number] = ["우동", 500];

// Enum
// sun, rain, cloud
enum Weather {
  sun = 0,
  rain = 1,
  cloud = 2,
  dark = "dark"
}
const todayWeather = 0;

if (todayWeather == Weather.sun) console.log("맑은 날씨")
console.log('Weather.dark: ',Weather.dark)

let tommorowWeather: Weather = 2;
console.log('tommorowWeather',tommorowWeather)

let olimpic_newgame1: Array<object | boolean> = [{
  name: "쇼트트랙",
  type: "혼성계주"
},true]


let test1: readonly string[] = ["2","1"]
let test2: readonly object[] = [,]

let olimpic_newgame2: readonly (object | boolean)[] = [{
  name: "피겨스케이팅",
  type: "솔로"
},true]
console.log("newgame2: ",typeof olimpic_newgame2)

let olimpic_newgame3: readonly [object, boolean] = [{
  name: "빙판 낚시",
  type: "빙어"
},true]
console.log("newgame3: ",typeof olimpic_newgame3)


let olimpic_newgame4: readonly [object, boolean];
olimpic_newgame4 = [{
  name: "빙판 낚시",
  type: "빙어"
},true];