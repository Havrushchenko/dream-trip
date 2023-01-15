const User = require('./User');
const Flightout = require('./Flightout');
const Ticket = require('./Ticket');
const Booking = require('./Booking');

User.hasOne(Booking, {
    foreignKey: 'user_id'
});

Booking.belongsTo(User, {
    foreignKey: 'user_id'
});

Booking.hasOne(Ticket, {
    foreignKey: 'ticket_id',
    // onDelete: 'CASCADE'
});

Ticket.belongsTo(Booking, {
    foreignKey: 'ticket_id'
});

Ticket.hasOne(Flightout, {
    foreignKey: 'flightout_id'
});

Flightout.belongsTo(Ticket, {
    foreignKey: 'flightout_id'
});

module.exports = { User, Flightout, Ticket, Booking };