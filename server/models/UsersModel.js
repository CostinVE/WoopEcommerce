module.exports = (sequelize, DataTypes) => {
    const Users =  sequelize.define("Users", {
        first_name: {
           type: DataTypes.STRING,
           
        },
        last_name: {
            type: DataTypes.STRING,
            
         },
         password: {
            type:DataTypes.STRING
         },
        email:{
            type:DataTypes.STRING,
            
        },
        gender: {
            type: DataTypes.STRING,
            
         },
        datejoined: {
            type: DataTypes.DATE,
            
         },
        birthday: {
            type: DataTypes.DATE,
            
         },
    }, {
        timestamps: false // Disable timestamps
    });

    return Users;
};
