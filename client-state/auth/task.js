document.querySelector(".signin").classList.add("signin_active");

const sendButton = document.getElementById("signin__btn");
const exitButton = document.getElementById("signout__btn");
const welcome = document.querySelector(".welcome");

function renderWelcome(id) {
  localStorage.setItem("id", id);
  welcome.querySelector("span").textContent = id;
  welcome.classList.add("welcome_active");
}

sendButton.addEventListener("click", function (e) {
  e.preventDefault();
  let formData = new FormData(document.getElementById("signin__form"));
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
  xhr.send(formData);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == xhr.DONE && xhr.status == 200) {
      if (JSON.parse(xhr.responseText).success) {
        const id = JSON.parse(xhr.responseText).user_id;
        localStorage.setItem("id", id);
        renderWelcome(id);
      } else {
        alert("Неверный логин/пароль");
        welcome.classList.remove("welcome_active");
      }
      document.getElementById("signin__form").reset();
    }
  };
});
exitButton.addEventListener("click", function (e) {
  e.preventDefault();
  localStorage.removeItem("id");
  document.getElementById("signin__form").reset();
  welcome.classList.remove("welcome_active");
});

if (localStorage.getItem("id")) {
  window.onload = renderWelcome(localStorage.getItem("id"));
}
