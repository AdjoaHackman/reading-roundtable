const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection")

class Opinion extends Model { }

Opinion.init(
    {
        // columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "user",
                key: "id"
            }
          },
          book_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "book",
                key: "id"
            }
          }
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'opinion',
    }
);

module.exports = Opinion;



