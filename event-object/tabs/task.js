//Objects
const tabs = Array.from(document.querySelectorAll(".tab"));
const contents = Array.from(document.querySelectorAll(".tab__content"));
//Handlers
function switchTabs(evt) {
  tabs.map((item) => {
    item.classList.remove("tab_active");
  });
  contents.map((item) => {
    item.classList.remove("tab__content_active");
  });
  evt.path[0].classList.add("tab_active");
  if (evt.screenX < 500) {
    evt.path[1].nextElementSibling.firstElementChild.classList.add(
      "tab__content_active"
    );
  } else if (evt.screenX > 500 && evt.screenX < 1000) {
    evt.path[1].nextElementSibling.firstElementChild.nextElementSibling.classList.add(
      "tab__content_active"
    );
  } else if (evt.screenX > 1000) {
    evt.path[1].nextElementSibling.lastElementChild.classList.add(
      "tab__content_active"
    );
  }
}

//Events
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", switchTabs);
}
