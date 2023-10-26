const { userInfo } = require("../model/users");
const { users } = require("../model/users");

exports.main = (req, res) => {
  res.render("index");
};

// exports.login = (req, res) => {
//   const id = userInfo[0].id;
//   const pw = userInfo[0].pw;
//   const userName = userInfo[0].userName;

//   function loginResult() {
//     // console.log(req.body);
//     return req.body.id == id && req.body.pw == pw ? true : false;
//   }

//   const result = loginResult();
//   let resultData = {
//     result,
//     userName,
//   };
//   res.send(resultData);
// };

function loginResult(req) {
  const usersArr = users.split("\n").map((el) => el.split("//"));

  const length = usersArr.length;
  let result = false;

  let userName = "";
  for (let i = 0; i < length; i++) {
    let id = usersArr[i][0];
    let pw = usersArr[i][1];

    if (req.body.id == id && req.body.pw == pw) {
      result = true;
      userName = usersArr[i][2];
      break;
    }
  }
  return { result, userName };
}

exports.login = (req, res) => {
  let data = loginResult(req);
  res.send(data);
};
