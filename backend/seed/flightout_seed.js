const sequelize = require('../config/connection');
const { Flightout } = require('../models');

const flightoutdata = [
  {
    flight_number: 1,
    departure_city: 'Lviv',
    destination_city: 'Kyiv'
  },
  {
    flight_number: 2,
    departure_city: 'Kyiv',
    destination_city: 'New York'
  },
  {
    flight_number: 3,
    departure_city: 'New York',
    destination_city: 'LA'
  },
];

const flightoutSeed = () => Flightout.bulkCreate(flightoutdata, {individualHooks: true});

module.exports = flightoutSeed;