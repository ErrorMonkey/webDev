const express = require("express");
const multer = require("multer"); // multer 불러오기
const path = require("path");

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

const upload = multer({
  dest: "uploads/",
});

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: (req, file, done) => {
      done(null, "uploads/");
    },
    filename: (req, file, done) => {
      // console.log(file);
      const ext = path.extname(file.originalname);
      const basename = path.basename(file.originalname, ext);
      const fileName = basename + "_" + Date.now() + ext;

      done(null, fileName);
    },
  }),
  limits: { fieldNameSize: 5 * 1024 * 1024 },
});

app.use("/uploads", express.static(__dirname + "/uploads"));

app.post("/signup", uploadDetail.single("profile"), (req, res) => {
  res.render("result", {
    src: req.file.path,
    id: req.body.id,
    pw: req.body.pw,
    name: req.body.name,
    age: req.body.age,
  });

  console.log(req.file);
  console.log(__dirname);
});

app.post("/uploads/dynamic", uploadDetail.single("profile"), (req, res) => {
  res.send({
    src: req.file.path,
    id: req.body.id,
    pw: req.body.pw,
    name: req.body.name,
    age: req.body.age,
  });
});

app.listen(PORT, function () {
  console.log(`server open: ${PORT}`);
});
