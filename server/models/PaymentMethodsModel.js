
module.exports = (sequelize, DataTypes) => {
  const PaymentMethods = sequelize.define("payment_methods", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cardnumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expirydate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    CVC: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false
  });

  return PaymentMethods;
};
