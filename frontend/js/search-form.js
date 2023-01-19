$('.datepicker').datepicker({
  format: 'mm/dd/yyyy',
});

const departure = document.querySelector('[name="departure"]');
const destination = document.querySelector('[name="destination"]');
const datepicker = document.querySelector('.datepicker');

function getApi(event) {
  event.preventDefault();
  fetch('http://localhost:3001/api/flightouts/search', {
    method: 'POST',
    body: JSON.stringify({
      departure_city: departure.value.trim(),
      destination_city: destination.value.trim(),
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(function (res) {
      res.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

document.querySelector('.search-form').addEventListener('submit', getApi);
