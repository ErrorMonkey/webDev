const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

// 요청 정보를 모아둠

// 여기가 바깥 index.js의 localhost:8000/가 들어오는 부분
// controller를 전달함
router.get("/", controller.main);
router.get("/comments", controller.comments);

module.exports = router;

// console.log(express.Router);
// console.log(router);
