const router = require("express").Router();
const sequelize = require("../config/connection");

router.get("/terms-of-use", (req, res) => {
  console.log("term-of-use");
  res.render("term-of-use");
});

module.exports = router;
