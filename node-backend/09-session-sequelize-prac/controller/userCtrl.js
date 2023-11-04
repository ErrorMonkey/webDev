const { User } = require("../model");

exports.home = (req, res) => {
  res.render("/");
};

exports.login = (req, res) => {
  User.findOne({
    where: {
      userid: req.body.loginId,
      pw: req.body.loginPw,
    },
  }).then((result) => {
    // console.log("findOne: ", result.id);
    if (result !== null) {
      // console.log("result", result);
      req.session.userPk = result.id;
      res.send({ loginResult: true });
    } else {
      res.send({ loginResult: false });
    }
  });
};

exports.user = (req, res) => {
  // res.render("user");
};

exports.user_profile = (req, res) => {
  User.findOne({
    where: { id: req.session.userPk },
  }).then((result) => {
    console.log("result", result.dataValues);
    res.render("user", { data: result.dataValues });
  });
  // Users.userInfo(req.body, (result) => {
  //   res.render("user", { data: result.res[0] });
  // });
};

exports.register = (req, res) => {
  res.render("register");
};

exports.register_post = (req, res) => {
  const data = {
    userid: req.body.userId,
    pw: req.body.userPw,
    name: req.body.userName,
  };
  User.create(data).then((result) => {
    console.log("result", result);
    res.send({ result: true });
  });
};

exports.profile_edit = (req, res) => {
  // 프라이머리 키는 수정할 수 없어서 id는 빼줘야 함 그래서 다시 객체를 선언함
  // params로 id를 받아오면 req.body를 그대로 쓸 수 있음
  const data = {
    userid: req.body.editId,
    pw: req.body.editPw,
    name: req.body.editName,
  };
  User.update(data, {
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    res.send({ result: true });
  });

  // Users.updateProfile(data, () => {
  //   res.send({ editResult: true });
  // });
};

exports.profile_delete = (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    console.log("result", result);
    res.send({ result: true });
  });
  // Users.delete_user(req.params.id, () => {
  //   res.send({ result: true });
  // });
};
