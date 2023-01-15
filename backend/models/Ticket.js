const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class Ticket extends Model { }

// define table columns and configuration
Ticket.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        departure_time: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        arrival_time: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        flightout_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'flightout',
                key: 'id'
            }
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
        modelName: 'ticket'
    }
);

module.exports = Ticket;