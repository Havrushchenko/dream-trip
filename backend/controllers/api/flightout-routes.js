const router = require('express').Router();
const { Flightout } = require('../../models');
 
// GET all available flightouts by their params (departure city and destination city)
router.get('/search', (req, res) => {
  console.log(req.body);
  Flightout.findAll({
      where: {
          departure_city: req.body.departure_city,
        //   "San Francisco",
          
          destination_city: req.body.destination_city
        //   "Houston"
          
        },
        attributes: [
          'id',
          'departure_city',
          'destination_city',
          'flight_number',
        ]
      })
      .then(dbFlightoutData => {
          const flightout = dbFlightoutData.map(flightout => flightout.get({ plain: true }));
          res.status(200).json(flightout);
      })
      .catch(err => {
          res.status(500).json(err);
      });
});

module.exports = router;