// models/storeslist.js
module.exports = (sequelize, DataTypes) => {
    const Storeslist = sequelize.define("storeslist", {
      mainStore: {
        type: DataTypes.STRING(35),
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING(35),
        allowNull: true,
      },
      subcategory: {
        type: DataTypes.STRING(35),
        allowNull: true,
      },
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    }, {
      // specify the table name explicitly
      tableName: 'storeslist',
       createdAt: false,
       updatedAt: false
      // freezeTableName: true
    });
  
    return Storeslist;
  };