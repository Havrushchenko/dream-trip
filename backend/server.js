const path = require('path');
// Import and require express
const express = require('express');
// Import and require express-session
const session = require('express-session');
const sequelize = require('./config/connection');
const routes = require('./controllers');
var cors = require('cors')

const PORT = process.env.PORT || 3001;
const app = express();

const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

// Express middlewares
app.use(cors())
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

// synchronize our sequelize models with our database tables
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening', PORT));
});
