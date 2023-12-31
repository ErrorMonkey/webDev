function OrdersModel(Sequelize, DataTypes) {
  return Sequelize.define(
    "orders",
    {
      orderid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      custid: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      prodname: {
        type: DataTypes.STRING(6),
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      amount: { type: DataTypes.SMALLINT, allowNull: false },
    },
    {
      tableNAme: "orders",
      freezeTableName: true,
      timestamps: false,
    }
  );
}

module.exports = OrdersModel;
