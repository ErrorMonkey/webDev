const Users = require("../model/modelUsers");

exports.home = (req, res) => {
  res.render("index");
};

exports.signup = (req, res) => {
  Users.signupUser(req.body, () => {});
};

exports.login = (req, res) => {
  // console.log("login req.body", req.body);
  Users.loginUser(req.body, (resultObj) => {
    console.log("resultObj", resultObj);
    res.send(resultObj);
  });
};
