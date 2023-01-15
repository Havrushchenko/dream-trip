const router = require("express").Router();
const { User } = require("../../models");
router.post("/signup", (req, res) => {
  //to do add check body params(if(!username || !email))
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  if (!username || !email || !password) {
    res.send({ status: "err", message: "Please enter all the fields" });
  }
  console.log(User);
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

        res.json({ status: "OK", user: dbUserData });
      });
    })
    .catch((err) => {
      console.log();

      res.json({ message: "singnup has failed" });
    });
});

module.exports = router;
