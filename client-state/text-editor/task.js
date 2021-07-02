//DOM elments
const textInput = document.getElementById("editor");
const clearButton = document.getElementById("clear");
//Functions
function saveText(e) {
  localStorage.setItem("text", e.target.value);
}
function clearText(e) {
  localStorage.removeItem("text");
  textInput.value = "";
}
//Listeners
window.onload = () => {
  textInput.value = localStorage.getItem("text");
};
textInput.addEventListener("blur", saveText);
clearButton.addEventListener("click", clearText);
