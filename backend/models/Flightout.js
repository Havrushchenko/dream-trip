const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Flightout model
class Flightout extends Model { }

// define table columns and configuration
Flightout.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        flight_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        departure_city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        destination_city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        departure_time: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        departure_day: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        arrival_time: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        departure_airport: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        destination_airport: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
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
        modelName: 'flightout'
    }
);

module.exports = Flightout;