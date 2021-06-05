const links = Array.from(document.querySelectorAll(".menu__link"));
const subMenu = Array.from(document.querySelectorAll(".menu_sub"));

links.map((element) => {
  element.onclick = () => {
    subMenu.forEach((item) => {
      item.classList.remove("menu_active");
    });
    try {
      element.nextElementSibling.classList.add("menu_active");
    } catch {
      return;
    }
    return false;
  };
});
