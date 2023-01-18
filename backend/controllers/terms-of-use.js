const router = require("express").Router();
const sequelize = require("../config/connection");

router.get("/using", (req, res) => {
  res.render("term-of-use");
});

module.exports = router;
