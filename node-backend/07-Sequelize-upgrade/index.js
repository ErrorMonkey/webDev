const express = require("express");
// app.use("/static", express.static(__dirname + "/static"))
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = require("./routes");
app.use("/", router);

app.get("*", function (req, res) {
  // res.render("404");
  res.send("접근할 수 없는 주소입니다.");
});

app.listen(PORT, function () {
  console.log(`Sever Open : ${PORT}`);
});
