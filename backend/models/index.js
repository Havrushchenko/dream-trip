const User = require('./User');
const Flightout = require('./Flightout');
const Booking = require('./Booking');

User.hasOne(Booking, {
    foreignKey: 'user_id'
});

Booking.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Flightout, Booking };