const { Customer, Orders, Sequelize } = require("../model/");

const Op = Sequelize.Op;

exports.main = async (req, res) => {
  // customer의 주문 목록을 "custname"과 함께
  const cust = await Customer.findAll({
    attributes: ["custid", "custname", "birth"],
    where: { birth: { [Op.lt]: "2000-01-01" } },
    include: [
      {
        model: Orders,
        attributes: { exclude: ["custid"] },
        // where:{}
      },
    ],
    raw: true,
  });
  res.send(cust);
};
