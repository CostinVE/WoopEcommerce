module.exports = (sequelize, DataTypes) => {
    const Delivery = sequelize.define("delivery", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true // Assuming you want an auto-incrementing primary key
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
      },
      street: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      "APP/BUILDING/SUITE": {
        type: DataTypes.STRING,
      },
      POSTCODE: {
        type: DataTypes.STRING,
      },
      TOWN: {
        type: DataTypes.STRING,
      },
      COUNTRY: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      PHONE: {
        type: DataTypes.STRING
      },
    }, {
      timestamps: false,
      tableName: 'delivery' // Explicitly set the table name if needed
    });
  
    return Delivery;
  };
  