const sequelize = require('../config/connection');
const { Booking } = require('../models');

const bookingdata = [
    {
        user_id: 1,
    }
];

const bookingSeed = () => Booking.bulkCreate(bookingdata, { individualHooks: true });

module.exports = bookingSeed;