const express = require("express");
const router = express.Router();
const ctrl = require("../controller/Cvisitor");

// ~:8000 => res.render("index.ejs")
router.get("/", ctrl.home);

// ~:8000/visitor => res.render("visitor.ejs")
router.get("/visitors", ctrl.visitor);

// 방명록 등록
router.post("/visitor", ctrl.postVisitor);

// 방명록 수정
router.patch("/visitor/:id", function (req, res) {
  res.send();
});

// 방명록 삭제
router.delete("/visitor/:id", ctrl.deleteVisitor);

module.exports = router;
