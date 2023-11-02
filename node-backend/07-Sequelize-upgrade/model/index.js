const Sequelize = require("sequelize");

const config = require("../config/config.json")["development"];

const db = {};

// Sequelize 객체를 만든다. (model을 정의할 때 필요하기 때문)
// Sequelize 안에 인자 넣는 법은 정해져 있음(공식 문서 참고)
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Customer = require("./Customer")(sequelize, Sequelize);
db.Orders = require("./Orders")(sequelize, Sequelize);

db.Customer.hasMany(db.Orders, {
  // onDelete: "cascade",
  foreignKey: "custid",
  // 참조 당하고 있는 컬럼의 키가 서로 다르면 sourceKey로 지정, 같으면 생략가능
  // sourceKey: "id",
});
db.Orders.belongsTo(db.Customer, {
  // onDelete: "cascade",
  foreignKey: "custid",
  // 참조하고 있는 컬럼의 키가 다르면 targetKey로 지정, 같으면 생략가능
  // targetKey: "id",
});

module.exports = db;
