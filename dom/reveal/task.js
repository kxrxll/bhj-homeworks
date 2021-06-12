const highlight = Array.from(document.querySelectorAll(".reveal"));

window.addEventListener("scroll", function () {
  highlight.forEach((item) => {
    if (
      item.getBoundingClientRect().y < 0 ||
      item.getBoundingClientRect().y > item.getBoundingClientRect().height
    ) {
      item.classList.remove("reveal_active");
    } else item.classList.add("reveal_active");
  });
});
