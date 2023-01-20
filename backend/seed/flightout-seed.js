const sequelize = require('../config/connection');
const { Flightout } = require('../models');

const flightoutdata = [
  {
    flight_number: 607,
    departure_city: 'San Francisco',
    destination_city: 'New York',
    departure_time: '07:00',
    departure_day: 'Thu 2 Mar',
    arrival_time: '15:13',
    departure_airport: 'San Francisco International (SFO)',
    destination_airport: 'New Ark Liberty International (EWR)',
    price: 162
  }
];

const flightoutSeed = () => Flightout.bulkCreate(flightoutdata, {individualHooks: true});

module.exports = flightoutSeed;