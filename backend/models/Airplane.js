const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class Airplane extends Model { }

// define table columns and configuration
Airplane.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        airplane_name: {
            type: DataTypes.INTEGER,
        }
    },
    {
        // pass in our imported sequelize connection (the direct connection to our database)
        sequelize,
        // don't automatically create createdAt/updatedAt timestamp fields
        timestamps: false,
        // don't pluralize name of database table
        freezeTableName: true,
        // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
        underscored: true,
        // make it so our model name stays lowercase in the database
        modelName: 'airplane'
    }
);

module.exports = Airplane;