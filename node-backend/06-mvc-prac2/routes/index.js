const express = require("express");
const router = express.Router();
const ctrl = require("../controller/userCtrl");

router.get("/", (req, res) => {
  res.render("index");
});

// 회원가입 페이지 렌더
router.get("/register", ctrl.register);
// 회원 가입 user table에 insert를 실행시키는 api
router.post("/user/register", ctrl.register_post);

//
router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/user/login", (req, res) => {
  res.render("login");
});
router.post("/login", ctrl.login);

// 프로필 페이지 렌더 (임시. 일반 POST 전송. 왜? 로그인을 유지하는 기술을 모르기 때문)
router.post("/user", ctrl.user_profile);
router.patch("/edit/:id", ctrl.profile_edit);
router.delete("/delete/:id", ctrl.profile_delete);

module.exports = router;
