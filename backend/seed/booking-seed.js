const sequelize = require('../config/connection');
const { Booking } = require('../models');

const bookingdata = [
    {
        user_id: 1,
        ticket_id: 3
    },
    {
        user_id: 2,
        ticket_id: 1
    },
    {
        user_id: 3,
        ticket_id: 2
    },
];

const bookingSeed = () => Booking.bulkCreate(bookingdata, { individualHooks: true });

module.exports = bookingSeed;