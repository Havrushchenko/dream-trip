const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const termsRoutes = require("./terms-of-use");

router.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use("/using", termsRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
