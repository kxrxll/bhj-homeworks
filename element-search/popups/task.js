const modal = document.getElementsByClassName("modal");
const closing = document.getElementsByClassName("modal__close");
const succsess = document.getElementsByClassName("show-success");

modal[0].classList.add("modal_active");

closing[0].onclick = function () {
  modal[0].classList.remove("modal_active");
};

succsess[0].onclick = function () {
  modal[0].classList.remove("modal_active");
  modal[1].classList.add("modal_active");
};

closing[2].onclick = function () {
  modal[1].classList.remove("modal_active");
};
