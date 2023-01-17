function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    console.log(email);
    fetch("/api/users/login", {
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
          window.location.replace("/");
        }
      })
      .catch((err) => {
        res.status(500).json(err);
        alert(dbData.message);
      });
  }
}

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
