async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    console.log(username);
    // fetch("/api/login", {
    //   method: "post",
    //   body: JSON.stringify({
    //     username,
    //     email,
    //     password,
    //   }),
    //   headers: { "Content-Type": "application/json" },
    // }).then((response) => {
    //   to do redirect to, window.location.replace
    //console.log(response);
    // });
  }
}
async function loginFormHandler(event) {
  event.preventDefault();
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    console.log(email);
  }
}
document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
