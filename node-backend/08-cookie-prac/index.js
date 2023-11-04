const express = require("express");
const app = express();
const PORT = 8000;
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser()); // 쿠키를 해석할 수 있게 해줌.

const cookieConfig = {
  // httpOnly: true, true면 document.cookie 로 접근 불가. 서버에서만 쿠키에 접근할 수 있다.
  maxAge: 24 * 60 * 60 * 1000, // ms 단위로 쿠키를 보존하고자 하는 기간을 설정 30000ms = 30초
  // expires: "2023-11-04T18:00" // 만료일을 기준으로 쿠키를 보존하는 방법
  // path: "/", // "/test" => localhost:8000/test/~~~ 쿠키가 존재하는 라우터 설정
  // secure: true, // https 보안이 설정된 서버에서만 쿠키가 동작한다
  // signed: true // 쿠키 암호화 -> 암호화하면 req.signedCookies로 조회해야한다
};

app.get("/", (req, res) => {
  res.render("index", { alert: req.cookies.alert });
});

app.get("/cookie", (req, res) => {
  console.log("req", req);
  res.cookie("alert", "checked", cookieConfig);
  res.send();
});

// app.get("/set", (req, res) => {
//   // 서버가 쿠키를 만들어서 응답으로 보낸다.
//   // key: key1 / value: value1
//   res.cookie("key1", "value1", cookieConfig);
//   res.cookie("quiz1", "a", cookieConfig);
//   res.send("set cookie");
// });

// app.get("/get", (req, res) => {
//   console.log("req.cookies: ", req.cookies.key1);
//   console.log("quiz1: ", req.cookies.quiz1);
//   res.send(req.cookies);
// });

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
