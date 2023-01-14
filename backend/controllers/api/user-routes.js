const router = require("express").Router();
const { User } = require("../../models/User");
router.post("/singup", (req, res) => {
  //to do add check body params(if(!username || !email))
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbUserData) => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        res.json(dbUserData);
      });
    })
    .catch((err) => {
      console.log();

      res.json({ message: "singnup has failed" });
    });
});

module.exports = router;
