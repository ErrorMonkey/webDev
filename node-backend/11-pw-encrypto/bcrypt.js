const bcrypt = require("bcrypt");

const salt = 10;

function bcryptPw(pw) {
  return bcrypt.hashSync(pw, salt);
}
// console.log("bcrypt: ", bcryptPw("1234"));

const dbPw1 = bcryptPw("1234");
const dbPw2 = bcryptPw("1234");

function comparePw(pw, dbPw) {
  return bcrypt.compareSync(pw, dbPw);
}

console.log("dbPw1: ", dbPw1);
console.log("dbPw2: ", dbPw2);

console.log("bcrypt compare1: ", comparePw("1234", dbPw1));
console.log("bcrypt compare2: ", comparePw("1234", dbPw2));
console.log("bcrypt compare1&2: ", comparePw(dbPw1, dbPw2));
