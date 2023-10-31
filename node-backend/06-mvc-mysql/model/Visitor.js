const mysql = require("mysql");

// createConnection: mysql 연결 정보를 받아서 mysql과 연결
// db에 연결한다 => host, user, password, database name
const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "password123",
  database: "sesac_test",
});

// exports.getVisitors = () => {
//   return [
//     { id: 1, username: "박뉴비", comment: "힘드네요.." },
//     { id: 2, username: "김코딩", comment: "힘내세요.." },
//   ];
// };

exports.getVisitors = (cb) => {
  conn.query(`SELECT * FROM visitor`, (err, rows) => {
    // err 변수가 빈 값이 아니라면, err가 발생했다는 것
    if (err) {
      throw err;
    }

    console.log("visitor", rows);
    cb(rows);
  });
};

exports.inserVisitor = (data, cb) => {
  // insert into visitor (username, comment) values('???', '???')
  const sql = `insert into visitor (username, comment) values('${data.username}', '${data.comment}')`;
  conn.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log("visitor insert", result);
    cb(result.insertId);
  });
};

exports.delVisitor = (id, cb) => {
  const sql = `delete from visitor where id = ${id}`;
  conn.query(sql, (err, result) => {
    if (err) {
      throw err;
    }

    // 성공 여부 체크
    let flag = false;
    if (result.affectedRows) {
      flag = true;
    }
    console.log("visitor delete", result);
    cb(flag);
  });
};
