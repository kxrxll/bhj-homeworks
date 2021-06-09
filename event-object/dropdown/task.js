//Geting DOM elements
const dropdownButtons = Array.from(
  document.querySelectorAll(".dropdown__value")
);
const dropdownItems = Array.from(document.querySelectorAll(".dropdown__link"));

//Event handlers
const openDropdown = function () {
  if (this.nextElementSibling.classList.contains("dropdown__list_active")) {
    this.nextElementSibling.classList.remove("dropdown__list_active");
  } else {
    this.nextElementSibling.classList.add("dropdown__list_active");
  }
};
const selectItem = function (event) {
  event.preventDefault();
  this.closest(".dropdown__list").previousElementSibling.textContent =
    this.textContent;
  this.closest(".dropdown__list").classList.remove("dropdown__list_active");
};

//Adding event listeners
dropdownItems.forEach((item) => item.addEventListener("click", selectItem));
dropdownButtons.forEach((item) => item.addEventListener("click", openDropdown));
