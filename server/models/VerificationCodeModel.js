module.exports = (sequelize, DataTypes) => {
    const verificationcodes =  sequelize.define("verificationcodes", {
        email: {
            type: DataTypes.STRING,
        },
        code: {
            type: DataTypes.STRING,
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW // Default value is current timestamp
        }
    }, {
        timestamps: false // Disable timestamps
    });

    return verificationcodes;
};
