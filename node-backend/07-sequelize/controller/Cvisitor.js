const { Visitor } = require("../model");

exports.home = (req, res) => {
  res.render("index");
};

// GET /visitors => 기존 방명록 전체 조회 후 redner("visitor")
exports.visitor = (req, res) => {
  console.log("Cvicisor.visitor()");
  // Visitor.findAll({ where: { username: "lily" } });
  // select * from visitor; sql문과 동일
  // res.render("visitor", { data: [] });

  Visitor.findAll()
    .then((result) => {
      console.log("findAll: ", result);
      res.render("visitor", { data: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

// POST /visitor => 방명록 insert
exports.postVisitor = async (req, res) => {
  const data = {
    username: req.body.username,
    comment: req.body.comment,
  };
  // 시퀄라이저는 프로미스 객체를 반환해서 then 사용 가능
  // Visitor.create(data)
  //   .then((result) => {
  //     console.log("result", result);
  //     res.send(result);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //  // 직접 오류 메시지 작성
  //     res.status(500).send("오류발생");
  //   });

  const createVisitor = await Visitor.create(data).catch((err) => {
    console.log(err);
  });
  res.send(createVisitor);
};

// DELETE /visitor/:id => 방명록 삭제
exports.deleteVisitor = (req, res) => {
  Visitor.destroy({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    console.log("destroy result", result);
    res.send({ result: true });
  });
};

// GET /visitor/:id => 방명록 하나 조회
exports.getVisitorById = (req, res) => {
  // select * from visitor where id = ???
  Visitor.findOne({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    console.log("findOne result", result);
    res.send(result);
  });
};

// PATCH /visitor/:id => 방명록 수정
exports.patchVisitor = (req, res) => {
  const data = {
    username: req.body.username,
    comment: req.body.comment,
  };
  // upadate visitor set username = '??', comment = '??' where id = '??'
  // update({바꿀 내용},{바뀔 범위})
  Visitor.update(data, {
    where: {
      id: req.body.id,
    },
  }).then((result) => {
    console.log("update result", result);
    res.send({ result: true });
  });
};

exports.getTest = (req, res) => {
  // select username, id from visitor where id = '??' order by username ASC;
  Visitor.findAll({
    attributes: ["username", "id"],
    where: {
      id: req.params.id,
    },
    order: [["username", "ASC"]],
  }).then((result) => {
    console.log("getTest result", result);
    res.send(result);
  });
};
