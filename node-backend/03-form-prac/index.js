const express = require("express");
const { render } = require("ejs");
const app = express();
const PORT = 8000;
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.render("index");
});
app.get("/signup", function (req, res) {
  res.send(req.query);
});

app.post("/loginPost", function (req, res) {
  const id = "sesac";
  const pw = "123123";
  let msg = "";
  let isLogin = false;
  let data = {};

  if (req.body.id == id && req.body.pw == pw) {
    data = {
      id,
      msg: "성공!",
      isLogin: true,
    };
  } else {
    data = {
      msg: "실패",
      isLogin: false,
      id: req.body.id,
    };
  }

  res.send(data);
});

app.listen(PORT, function () {
  console.log(`Sever Open : ${PORT}`);
});
