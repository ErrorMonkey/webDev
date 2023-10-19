const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(PORT, function () {
  console.log(`server open: ${PORT}`);
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/signup", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post("/login", (req, res) => {
  const id = "김새싹";
  const pw = "231019";
  let isLogin = false;
  let msg = "";

  if (req.body.id == id && req.body.pw == pw) {
    isLogin = true;
  }
  const data = {
    ...req.body,
    isLogin,
    msg: isLogin ? "성공!" : "실패",
  };
  res.send(data);
});
