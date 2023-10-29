const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "password123",
  database: "sesac_test_users",
});

exports.signupUser = (data, cb) => {
  // console.log("data", data);
  const sql = `insert into user (userid, name, pw) values('${data.userId}', '${data.userName}', '${data.userPw}')`;
  conn.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log("user signup result: ", result);
    cb();
  });
};

exports.loginUser = (data, cb) => {
  // console.log("data", data);

  const sql = `select * from user where userid = '${data.id}' and pw = '${data.pw}'`;
  conn.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    if (result.length == 1) {
      cb({ loginResult: true, userName: result[0].name });
    } else cb({ loginResult: false, userName: null });
  });
};
