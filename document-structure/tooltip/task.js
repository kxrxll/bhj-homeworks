//DOM elements
const highlighted = Array.from(document.querySelectorAll(".has-tooltip"));
//Handlers
function showTooltip(evt) {
  evt.preventDefault();
  if(evt.target.nextElementSibling && evt.target.nextElementSibling.classList. contains('tooltip_active')){
    evt.target.nextElementSibling.classList.remove('tooltip_active');
    return;
  }
  const activeTooltips = Array.from(document.querySelectorAll(".tooltip"));
  activeTooltips.forEach((item) => item.remove());
  const tooltipText = evt.target.title;
  const posX = evt.target.offsetLeft;
  const posY = evt.target.offsetTop - evt.target.height;
  evt.target.insertAdjacentHTML(
    "afterEnd",
    `<div class="tooltip tooltip_active" style="left: ${posX}px; top: ${posY}px; position: absolute" data-position="bottom">
      ${tooltipText}
    </div>`
  );
}
//Listeners
highlighted.forEach((item) => item.addEventListener("click", showTooltip));
