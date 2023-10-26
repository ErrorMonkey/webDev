const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// [before]
// app.get("/", function (req, res) {
//   res.render("index");
// });

// const router = require("./routes"); index.js 파일은 기본으로 불러와서 생략 가능
const router = require("./routes/index.js");
app.use("/", router);
app.use("/comments", router);
// localhost:8000/comment/~~~~ 무엇이 오든 router 객체 안으로 들어간다.

// 존재하지 않는 Get 요청에 대해서
app.get("*", function (req, res) {
  res.send("페이지를 찾을 수 없습니다.");
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
