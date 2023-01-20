const router = require("express").Router();

const userRoutes = require("./user-routes");
// const termsRoutes = require("../terms-of-use");

router.use("/users", userRoutes);
// router.use("/using", termsRoutes);

module.exports = router;
