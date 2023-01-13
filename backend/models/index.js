const User = require('./User');
const Flightout = require('./Flightout');
const Ticket = require('./Ticket');
const Booking = require('./Booking');
const Airplane = require('./Airplane');

User.hasMany(Ticket, {
    foreignKey: 'user_id'
});

User.belongsToMany(Ticket, {
    foreignKey: 'user_id'
});

User.hasMany(Booking, {
    foreignKey: 'user_id'
});

User.hasMany(Airplane, {
    foreignKey: 'user_id'
});

Ticket.belongsTo(User, {
    foreignKey: 'user_id'
});

Booking.hasMany(Ticket, {
    foreignKey: 'user_id'
});

module.exports = { User, Flightout, Ticket, Booking, Airplane };