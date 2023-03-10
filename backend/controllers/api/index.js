const router = require("express").Router();
const userRoutes = require("./user-routes");
const flightoutRoutes = require('./flightout-routes');

router.use("/users", userRoutes);
router.use('/flightouts', flightoutRoutes);

module.exports = router;
