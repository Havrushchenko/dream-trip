// Declared global variables
const departure = document.querySelector('[name="departure"]');
const destination = document.querySelector('[name="destination"]');
const datepicker = document.querySelector('.datepicker');

// Get a date
$('.datepicker').datepicker({
  format: 'mm/dd/yyyy',
});

// Function to render flightouts cards
async function getApi(event) {
  event.preventDefault();
  const response = await fetch('http://localhost:3001/api/flightouts/search', {
    method: 'POST',
    body: JSON.stringify({
      departure_city: departure.value.trim(),
      destination_city: destination.value.trim(),
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var resultCard = document.querySelector('.result-card-wrapper');

      // Showing the result card when the rendering function is executed
      resultCard.style.visibility = "visible";

      // Parse response to display list of cards with for loop
      for (i = 0; i < data.length; i++) {

        // Rendering flight number
        var flightNumber = document.querySelector('.flight-number');
        flightNumber.innerHTML = data[i].flight_number;

        // Rendering departure city
        var departureCity = document.querySelector('.departure-city');
        departureCity.innerHTML = data[i].departure_city;

        // Rendering departure date
        var departureDate = document.querySelector('.departure-date');
        departureDate.innerHTML = data[i].departure_day;

        // Rendering departure time
        var departureTime = document.querySelector('.departure-time');
        departureTime.innerHTML = data[i].departure_time;

        // Rendering departure airport
        var departureAirport = document.querySelector('.departure-airport');
        departureAirport.innerHTML = " " + "- " + data[0].departure_airport;

        // Rendering destination time
        var destinationTime = document.querySelector('.destination-time');
        destinationTime.innerHTML = data[i].arrival_time;

        // Rendering destination city
        var destinationCity = document.querySelector('.destination-city');
        destinationCity.innerHTML = data[i].destination_city;

        // Rendering destination airport
        var destinationAirport = document.querySelector('.destination-airport');
        destinationAirport.innerHTML = " " + "- " + data[i].destination_airport;

        // Rendering price
        var ticketPrice = document.querySelector('.result-card-price');
        ticketPrice.innerHTML = data[i].price + " " + "USD";
      }
    });
}

// Event listenet to show flightouts cards
document.getElementById('search-form').addEventListener('submit', getApi);
