const Users = require("../../06-mvc-prac2/model/userModel");
const express = require("express");
const router = express.Router();

exports.home = (req, res) => {
  res.render("/");
};

exports.login = (req, res) => {
  Users.loginUser(req.body, (rows) => {
    if (rows.length == 1) {
      res.send({ id: rows[0].id, loginResult: true, userName: rows[0].name });
    } else res.send({ loginResult: false });
  });
};

exports.user = (req, res) => {
  // res.render("user");
};

exports.user_profile = (req, res) => {
  // console.log("ctrl.user req.body", req.body);
  Users.userInfo(req.body, (result) => {
    // console.log("result: ", result);
    // data라는 객체에 담아 보내는 게 규칙인가?
    // console.log("result: ", { data: result.res[0] });
    res.render("user", { data: result.res[0] });
  });
};

exports.register = (req, res) => {
  res.render("register");
};
exports.register_post = (req, res) => {
  Users.userRegister(req.body, (result) => {
    // 모델과 연결하여, user 테이블에 회원가입 정보 insert
    // console.log("ctrl result: ", result);
    // res.redirect("/login");
    // res.send({ data: result });
    res.send({ result: true });
  });
};

exports.profile_edit = (req, res) => {
  const data = {
    ...req.body,
    id: req.params.id,
  };
  Users.updateProfile(data, () => {
    res.send({ editResult: true });
  });
};

exports.profile_delete = (req, res) => {
  Users.delete_user(req.params.id, () => {
    res.send({ result: true });
  });
};
