const express = require("express");
const app = express();
const PORT = 8000;
const session = require("express-session");

app.use(
  session({
    secret: "secret key",
    resave: false, // 모든 요청마다 세션을 다시 저장한다
    saveUninitialized: true, // 클라이언트가 처음 접속할 때 세션을 초기화한다
    cookie: {
      // httpOnly: true, // document.cookie로는 접속이 불가하다
      maxAge: 30000,
    },
    // secure: true, // https 에서만 동작하도록 함
  })
);

app.get("/", (req, res) => {
  res.send("Hello, Session!");
});

app.get("/set", (req, res) => {
  // 세션 id를 클라이언트에 저장하는 건가?
  console.log("1: ", req.session);
  // 로그인 성공 시점에 req.session.user에 user를 식별할 수 있는 고유한 값을 담는다
  req.session.user = "lily";
  console.log("2: ", req.session);
  // console.log(req);
  res.send("set session");
});

app.get("/get", (req, res) => {
  if (req.session.user) {
    res.render("profile", { user });
  } else {
    res.render("/login");
  }
  console.log("user: ", req.session.user);
  res.send({ user: req.session.user });
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
