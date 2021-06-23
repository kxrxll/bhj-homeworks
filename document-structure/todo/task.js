//DOM elements
const tasksList = document.querySelector(".tasks__list");
const textInput = document.querySelector(".tasks__input");
const form = document.querySelector(".tasks__control");

//Local storage use
let storage = [];
if (JSON.parse(localStorage.getItem("TODOs"))) {
  storage = JSON.parse(localStorage.getItem("TODOs"));
  storage.forEach((item) => insertHTML(item));
}

//Handlers
function submitForm(e) {
  e.preventDefault();
  const enteredText = textInput.value.trim();
  if (enteredText) {
    insertHTML(enteredText);
    storage.push(enteredText);
    localStorage.setItem("TODOs", JSON.stringify(storage));
  }
}
function insertHTML(enteredText) {
  tasksList.insertAdjacentHTML(
    "beforeEnd",
    `<div class="task">
      <div class="task__title">
        ${enteredText}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>`
  );
  tasksList.lastElementChild
    .querySelector(".task__remove")
    .addEventListener("click", deleteNote);
  textInput.value = "";
}
function deleteNote(e) {
  e.preventDefault();
  let removeText = e.target.previousElementSibling.textContent.trim();
  storage = storage.filter(item => item !== removeText);
  localStorage.setItem("TODOs", JSON.stringify(storage));
  e.target.closest(".task").remove();
}

//Events
form.addEventListener("submit", submitForm);
