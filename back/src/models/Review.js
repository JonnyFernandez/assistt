const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Review', {
      
        review: {
            type: DataTypes.STRING,
            allowNull: true,
        },
      

    }, { timestamps: false, freezeTableName: true })
};
