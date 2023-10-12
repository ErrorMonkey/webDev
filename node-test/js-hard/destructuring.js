// 배열 구조분해할당
const fruits = ["apple", "banana", "grape"];

const [fruit1, fruit2 = "orange", fruit3, fruit4 = "peach"] = fruits;
// 위 코드는 아래 코드와 동일
// const fruit1 = fruits[0]
// const fruit2 = fruits[1]
// const fruit3 = fruits[2]

console.log("fruit1", fruit1);
console.log("fruit2", fruit2); // orange는 적용 안 됨
console.log("fruit3", fruit3);
console.log("fruit4", fruit4);

// 배열 구조 분해 할당을 이용한 값 치환
let x = 1,
  y = 3;
[x, y] = [y, x];
console.log("[x,y]", [x, y]);
console.log(" ");
// 객체 구조분해할당
const obj = {
  name: "sesac",
  skill: "web",
  level: "noob",
};

// key로 구분하기 때문에 순서가 상관 없음
const { skill, level, name = "tree", like = "design" } = obj;
// 위 코드는 아래 코드와 동일
// const name = obj.name;
// const level = obj.level;
// const skill = obj.skill;

console.log("name", name); // orange와 마찬가지로 tree도 적용 안 됨
console.log("skill", skill);
console.log("level", level);
console.log("like", like);

// 객체 안의 속성을 새 변수로 사용
// 원래 값이 있는 key: 새 key가 될 변수명
const { name: name2 } = obj;
console.log("name2", name2);
console.log("name", name);
console.log("obj", obj);
console.log(" ");

// 스프레드 연산자
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["a", "b", "c", "d", "e"];
const arr3 = [...arr1, ...arr2];
console.log("arr3", arr3);

const hello = [..."hello"];
console.log("hello", hello);
console.log(" ");

const word1 = "abc";
const word2 = "xyz";
const word3 = [...word1, ...word2];
console.log("word3", word3);

const obj2 = {
  name: "sesac",
  skill: "web",
  level: "noob",
};
const obj3 = {
  ...obj2,
  test: "test",
};
console.log("obj3", obj3);

const values = [10, 20, 30];
function get(a, ...rest) {
  console.log("rest", rest);
}

get(...values);
