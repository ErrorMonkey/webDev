const data = { name: "이코딩", gender: "남성" };

const jsonData = JSON.stringify(data);
// json 데이터로 바꾸는 걸 직렬화라고 한다
console.log("json", jsonData);
// js 객체 형태로 바꾸는 걸 역질렬화라고 부른다
console.log("js object", JSON.parse(jsonData));
