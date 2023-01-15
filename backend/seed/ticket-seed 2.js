const sequelize = require('../config/connection');
const { Ticket } = require('../models');

const ticketdata = [
  {
    price: 134,
    flight_number: 2,
    departure_time: 13,
    arrival_time: 01,
    flightout_id: 1
  },
  {
    price: 101,
    flight_number: 1,
    departure_time: 11,
    arrival_time: 8,
    flightout_id: 2
  },
  {
    price: 123,
    flight_number: 3,
    departure_time: 1,
    arrival_time: 8,
    flightout_id: 3
  },
];

const ticketSeed = () => Ticket.bulkCreate(ticketdata, {individualHooks: true});

module.exports = ticketSeed;