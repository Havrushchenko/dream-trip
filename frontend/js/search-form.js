$('.datepicker').datepicker({
    format: 'mm/dd/yyyy',
});

async function loginFormHandler(event) {
    event.preventDefault();

    const departure = document.querySelector("#departure").value.trim();
    const destination = document.querySelector("#destination").value.trim();
    // const datepicker = document.querySelector(".datepicker").value.trim();

    if (departure && destination) {
        const response = await fetch('/api/users/search', {
            method: 'GET',
            body: JSON.stringify({
                departure,
                destination
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            console.log("Your flight is...");
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector(".search-form").addEventListener("submit", loginFormHandler);