const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/ajax", function (req, res) {
  console.log(req.query);
  res.send(req.query);
  // {key: value, key: value}
});

app.post("/ajax", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

app.get("/axios", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

app.post("/axios", function (req, res) {
  console.log(req.body);
  const data = {
    ...req.body,
    msg: "반가워요",
  };
  res.send(data);
});

app.get("/fetch", function (req, res) {
  res.send(req.query);
});

app.post("/fetch", function (req, res) {
  res.send(req.body);
});

app.post("/login", (req, res) => {
  const id = "김새싹";
  const pw = "231019";
  let isLogin = false;

  if (req.body.id == id && req.body.pw == pw) {
    isLogin = true;
  }

  const sucess = "로그인 완료!";
  const failed = "로그인 실패.";
  if (isLogin) res.send(sucess);
  else res.send(failed);
});

app.listen(PORT, function () {
  console.log(`server open: ${PORT}`);
});
