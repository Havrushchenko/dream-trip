const express = require("express");
const sequelize = require("./config/connection");

const PORT = process.env.PORT || 3001;
const session = require("express-session");
const Sequelize = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "Super secret ",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  satore: new Sequelize({
    db: sequelize,
  }),
};
const app = express();
app.use(session(sess));
app.use(require('./controllers'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
