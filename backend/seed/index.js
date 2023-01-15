const flightoutSeed = require('./flightout_seed');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await flightoutSeed();
  process.exit(0);
};

seedAll();