function logout() {
  fetch("http://localhost:3001/api/users/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  })
    .then(function (response) {
      response.json();
    })
    .then((dbData) => {
      location.assign("login.html");
    })
    .catch((err) => {
      res.status(500), json(err);
      alert(dbData.message);
    });
}

document.querySelector("#logout").addEventListener("click", logout);
