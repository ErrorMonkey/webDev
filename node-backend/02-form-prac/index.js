const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/get", function (req, res) {
  console.log(req.query);
  console.log("get");
});

app.post("/post", function (req, res) {
  res.render("result", {
    name: req.body.name,
  });
  console.dir(req.body);
  console.log("post");
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
