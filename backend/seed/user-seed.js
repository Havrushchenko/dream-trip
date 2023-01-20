const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'alesmonde0',
    email: 'nwestnedge0@cbc.ca',
    password: 'password123'
  }
];

const userSeed = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = userSeed;