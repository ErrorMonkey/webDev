const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "password123",
  database: "sesac_test_users",
});

exports.loginUser = (data, cb) => {
  // select 문은 결과를 배열로 반환함
  const sql = `select * from user where userid = '${data.loginId}' and pw = '${data.loginPw}'`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    cb(rows);
  });
};

exports.userInfo = (data, cb) => {
  const sql = `select * from user where id = '${data.id}' limit 1;`;
  conn.query(sql, (err, res) => {
    if (err) {
      throw err;
    }
    // console.log("로그인 모델", res);
    cb({ res });
  });
};

exports.get_user = (id, cb) => {
  const sql = `select * from user where id = ${id}`;
  conn.query(sql, (err, res) => {
    cb();
  });
};

exports.userRegister = (data, cb) => {
  // console.log("data", data);
  // console.log(`'${data.userId}', '${data.userPw}', '${data.userName}'`);
  const sql = `insert into user(userid, pw, name) values ('${data.userId}', '${data.userPw}', '${data.userName}')`;
  conn.query(sql, (err, res) => {
    if (err) {
      throw err;
    }
    // console.log("res", res);
    // console.log("res.insertId", res.insertId);
    // res.redirect("/");
    cb(res.insertId);
    // console.log("회원가입 모델", res);
  });
};

exports.updateProfile = (data, cb) => {
  console.log("update data", data);
  const sql = `update user set name = '${data.editName}', userid = '${data.editId}', pw = '${data.editPw}' where id='${data.id}'`;
  conn.query(sql, (err, res) => {
    if (err) {
      throw err;
    }
    cb();
  });
};

exports.delete_user = (id, cb) => {
  const sql = `delete from user where id = ${id}`;
  conn.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    cb();
  });
};
