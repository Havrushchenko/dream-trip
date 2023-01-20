const router = require("express").Router();
const apiRoutes = require("./api");

const termsRoutes = require("./terms-of-use");

router.use("/api", apiRoutes);

router.use("/", termsRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
