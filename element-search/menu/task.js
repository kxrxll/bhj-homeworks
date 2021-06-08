const links = Array.from(document.querySelectorAll(".menu__link"));
const subMenus = Array.from(document.querySelectorAll(".menu_sub"));

links.map((element) => {
  element.onclick = () => {
    if (
      element.nextElementSibling &&
      element.nextElementSibling.classList.contains("menu_active")
    ) {
      element.nextElementSibling.classList.remove("menu_active");
      return false;
    }
    subMenus.forEach((item) => {
      item.classList.remove("menu_active");
    });
    if (element.nextElementSibling) {
      element.nextElementSibling.classList.add("menu_active");
      return false;
    }
    return;
  };
});
