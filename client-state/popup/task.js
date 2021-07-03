const modal = document.getElementsByClassName("modal");
const closing = document.getElementsByClassName("modal__close");
const succsess = document.getElementsByClassName("show-success");

const getCookie = (name) => {
  const value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
};

if (getCookie("closed") !== "yes") {
  modal[0].classList.add("modal_active");
}

closing[0].onclick = function () {
  modal[0].classList.remove("modal_active");
  document.cookie = "closed=yes";
};
