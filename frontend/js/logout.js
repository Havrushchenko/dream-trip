function logout() {
  fetch("http://localhost:3001/api/users/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  })
    .then(function (response) {
      response.json();
    })
    .then((dbData) => {
      console.log(dbData);

      location.assign("login-form.html");
    })
    .catch((err) => {
      res.status(500), json(err);
      alert(dbData.message);
    });
}

document.querySelector("#logout").addEventListener("click", logout);
