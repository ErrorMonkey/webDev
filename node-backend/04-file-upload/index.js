const express = require("express");
const multer = require("multer"); // multer 불러오기
const path = require("path");
// path: 파일 경로를 받았을 때, 그 조작을 도와준다
// ex) 확장자나 파일 이름을 추출
// console.log("hi.txt의 확장자: ", path.extname("hi.txt"));
// console.log("hi.txt의 이름: ", path.basename("hi.txt", path.extname("hi.txt")));

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

// 클라이언트가 uploads 폴더에 저장한 이미지 파일에 접근할 수 있도록, 미들웨어 작성
app.use("/uploads", express.static(__dirname + "/uploads"));

// upload라는 객체 안에는 미들웨어 함수가 존재 single(), array()
// 미들웨어: 요청과 응답 사이에 존재 (next())
// multer가 임의의 문자열을 생성해서 파일 이름으로 만듦
// 심지어 확장자도 붙여주지 않음
const upload = multer({
  dest: "uploads/",
});

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: (req, file, done) => {
      done(null, "uploads/");
    },
    filename: (req, file, done) => {
      console.log(file); //
      const ext = path.extname(file.originalname); // 확장자 추출
      const baseName = path.basename(file.originalname, ext); // 베이스네임 추출
      // 베이스 네임에 처리한 시간을 추가해서 확장자와 결합
      const fileName = baseName + "_" + Date.now() + ext;

      done(null, fileName);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, //5mb 제한
});
// uploads/octocat_1234.png

// storage: 파일을 저장할 정보
// -- diskStorage: 파일을 디스크에 저장하기 위한 메소드
// ---- destination: 파일이 저장될 경로
// ---- filename: 파일이 저장될 이름
// limits
// -- fileSize: 파일의 최대 크기

// single(), array(), fields(): 미들웨어 => 클라이언트가 보낸 요청 중에 userfile이라는 name의 파일 데이터가 있다면,
// 파일을 multer의 설정대로 저장해서, req.file or req.files 이라는 객체를 생성해서 다음 함수에 넘겨줌
// single(): 파일 하나만 업로드할 때 사용함 -> req.file 생성
app.post("/upload", upload.single("userfile"), (req, res) => {
  console.log("file: ", req.file);
  console.log("body: ", req.body);
  res.send("파일 업로드 완료");
});

app.post("/upload/detail", uploadDetail.single("userfile"), (req, res) => {
  console.log("file detail: ", req.file);
  console.log("body detail: ", req.body);
  // res.send(req.file);
  res.render("result", {
    src: req.file.path,
    title: req.body.title,
  });
});

// 파일 여러 개 업로드 (name(input)하나로 여러 개의 파일을 받는 방법)
app.post("/upload/array", uploadDetail.array("userfile"), (req, res) => {
  console.log("file 여러 개(ver1): ", req.files);
  console.log("body detail: ", req.body);
  // res.send("여러 개 업로드 성공(ver1)");
  res.render("result", {
    src: req.files.path,
  });
});

// fields(): 파일 여러 개 업로드 name이 2개 이상(input이 2개 이상)
app.post(
  "/upload/fields",
  uploadDetail.fields([{ name: "userfile1" }, { name: "userfile2" }]),
  (req, res) => {
    console.log("file 여러 개(ver2): ", req.files);
    // console.log("body detail: ", req.body);
    // res.send("여러 개 업로드 성공(ver2)");
    res.render("result");
  }
);

app.post("/upload/dynamic", uploadDetail.single("userfile"), (req, res) => {
  res.send({ src: req.file.path });
});

app.listen(PORT, function () {
  console.log(`server open: ${PORT}`);
});
