const flightoutSeed = require('./flightout-seed');
const userSeed = require('./user-seed');
const bookingSeed = require('./booking-seed');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await flightoutSeed();
  console.log('--------------');
  await userSeed();
  console.log('--------------');
  await bookingSeed();
  console.log('--------------');
  process.exit(0);
};

seedAll();