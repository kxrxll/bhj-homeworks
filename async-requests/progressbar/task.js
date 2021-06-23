//DOM elements
const progress = document.getElementById("progress");
const form = document.getElementById("form");

//Handlers
function sendFile(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
  xhr.upload.onprogress = function (event) {
    progress.value = event.loaded / event.total;
  };
  xhr.send(formData);
}

//Listeners
form.addEventListener("submit", sendFile);
