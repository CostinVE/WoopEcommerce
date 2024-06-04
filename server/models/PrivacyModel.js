module.exports = (sequelize, DataTypes) => {
    const Privacy = sequelize.define("privacy", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        strict: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        performance: {
            type: DataTypes.BOOLEAN,
        },
        experiences: {
            type: DataTypes.BOOLEAN,
        },
        advertising: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    }, {
        timestamps: false,
        tableName: 'privacy' // Explicitly set the table name if needed
    });

    return Privacy;
};
