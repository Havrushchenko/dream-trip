const sequelize = require('../config/connection');
const { Flightout } = require('../models');

const flightoutdata = [
  {
    flight_number: 607,
    departure_city: 'San Francisco',
    destination_city: 'Houston'
  },
  {
    flight_number: 098,
    departure_city: 'Dallas',
    destination_city: 'New York'
  },
  {
    flight_number: 001,
    departure_city: 'New York',
    destination_city: 'LA'
  },
];

const flightoutSeed = () => Flightout.bulkCreate(flightoutdata, {individualHooks: true});

module.exports = flightoutSeed;