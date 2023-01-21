function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    console.log(email);
    fetch("http://localhost:3001/api/users/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        return response.json();
      })
      .then((dbData) => {
        console.log(dbData);
        if (dbData.user) {
          location.assign("index.html");
        }
      })
      .catch((err) => {
        response.status(500).json(err);
        alert(dbData.message);
      });
  }
}

document
  .querySelector(".login-form")
  .addEventListener("click", loginFormHandler);
