function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    fetch("http://localhost:3001/api/users/signup", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        return response.json();
      })
      .then((dbData) => {
        if (dbData.user) {
          location.assign("index.html");
        } else {
          alert(dbData.message);
        }
      });
  }
}
document
  .querySelector(".signup-form")
  .addEventListener("click", signupFormHandler);
