async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    console.log(username);
    fetch("/api/users/signup", {
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
        if (dbData.status == "OK") {
          window.location.replace("/");
        } else {
          alert(dbData.message);
        }
      });
  }
}
document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
