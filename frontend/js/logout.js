function logout() {
  fetch("/api/users/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  })
    .then(function (response) {
      response.json();
    })
    .then((dbData) => {
      console.log(dbData);

      window.location.replace("/");
      alert({ message: "You are logout" });
    })
    .catch((err) => {
      res.status(500), json(err);
      alert(dbData.message);
    });
}

document.querySelector("#logout").addEventListener("click", logout);
