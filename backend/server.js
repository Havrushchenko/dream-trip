const express = require('express');
const sequelize = require('./config/connections');

const PORT = process.env.PORT || 3001;

const app = express();

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});