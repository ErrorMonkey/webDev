const express = require("express");
const path = require("path");
const app = express();
// const PORT = 8000;
const dotenv = require("dotenv");

// dotenv.config(); //index.js와 같은 위치에 있는 .env 파일을 불러와서 환경변수로 사용할 수 있게끔 함
dotenv.config({ path: path.join(__dirname, "./config/envs/.env") });

// cross-env
// 배포 버전이냐, 개발 버전이냐에 따라 다른 env 파일을 로드할 수 있게끔 도와줌
dotenv.config({
  path: path.join(__dirname, `./config/envs/${process.env.NODE_ENV}.env`),
});
console.log("process.env.PASSWORD", process.env.PASSWORD);

// console.log("test var: ", process.env.TEST_VAR);
const PORT = process.env.PORT;
// console.log("PORT", PORT);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`PORT ${PORT}: Server Open! `);
});
