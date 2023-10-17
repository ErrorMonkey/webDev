const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

// req.body 를 해석하기 위한 코드
app.use(express.urlencoded({ extended: true }));
// x-www-form-urlencoded 형태의 데이터를 해석
// extended: true일 경우 qs 모듈(외부 모듈)을 이용한다. false일 경우, 내장 모듈인 queryString을 사용한다.
// ~~~~~~?name=lily
app.use(express.json());
// aplication/json 형태의 데이터를 해석

// localhost:8000 url 접속에 대한 응답을 위해 만든 코드
app.get("/", function (req, res) {
  res.render("index");
});

// get 요청은 url로 접속이 가능하다.
// get 요청은 req.query에 데이터가 담겨서 온다.
// 데이터 전송 시에 form 태그를 이용할 경우, method를 get으로 해놓으면 get 요청
// 클라이언트가 get 요청으로 데이터를 보낼 때 url에 직접 query를 만들어서 전송이 가능하다.
// url에 전송하는 데이터가 노출된다. 즉, 민감한 정보 전송은 get으로 하지 않는다.
// 정보를 조회하는 요청 CRUD 중 Read
// localhost:8000/get?id=lily&pw=1234
app.get("/get", function (req, res) {
  console.log(req.query);
  // req.query: get 요청에 대해서 client가 보낸 데이터를 담고 있다.
  // url에서 기본 주소 뒤에 오는 ?id=lily&pw=1234 이런 주소를 의미
  // ?id=lily&pw=1234 키와 벨류 형태
  res.send("get 요청 성공");
});

// localhost:8000/post의 post 요청을 받기 위한 준비
// post 요청은 url로 직접 요청하는 건 불가능
// post 요청에 대한 데이터는 req.body에 담아서 온다
// 정보가 숨겨짐 (url에 노출되지 않음) 데이터를 새로 생성하는 요청에 주로 사용
// 정보를 생성하는 요청 CRUD 중 Create
app.post("/post", function (req, res) {
  res.send("post 요청 성공");
  console.dir(req.body);
});

app.post("/post/ver2", function (req, res) {
  res.render("result", {
    name: req.body.name,
    email: req.body.email,
  });
});

// 조회, 데이터 저장(DB에 데이터 삽입), 원래 있던 데이터를 변경하기 위해, 데이터 삭제
// CRUD

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
