function termsOfUse() {
  fetch("http://localhost:3001/terms-of-use", {
    method: "GET",
  })
    .then(function (response) {
      return response.text();
    })
    .then((data) => {
      const blockText = document.querySelector("#blockText");
      blockText.innerHTML = data;
    });
}

document.addEventListener("DOMContentLoaded", termsOfUse);
