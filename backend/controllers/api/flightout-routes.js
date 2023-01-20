const router = require('express').Router();
const { Flightout } = require('../../models');

// GET all available flightouts by their params (departure city and destination city)
router.post('/search', (req, res) => {
  console.log(req.body, '!!!!!');
  Flightout.findAll({
    where: {
      departure_city: req.body.departure_city,
      destination_city: req.body.destination_city,
    },
    attributes: ['id', 'departure_city', 'destination_city', 'flight_number', 'departure_time', 'departure_day', 'arrival_time', 'departure_airport', 'destination_airport', 'price'],
  })
    .then((dbFlightoutData) => {
      const flightout = dbFlightoutData.map((flightout) =>
        flightout.get({ plain: true })
      );
      res.status(200).json(flightout);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;