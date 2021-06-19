//DOM elements
const highlighted = Array.from(document.querySelectorAll(".has-tooltip"));
//Handlers
function showTooltip(evt) {
  const activeTooltips = Array.from(document.querySelectorAll(".tooltip"));
  activeTooltips.forEach((item) => item.remove());
  evt.preventDefault();
  const tooltipText = evt.target.title;
  const posX = evt.target.offsetLeft;
  const posY = evt.target.offsetTop - evt.target.height;
  console.log();
  evt.target.insertAdjacentHTML(
    "afterEnd",
    `<div class="tooltip tooltip_active" style="left: ${posX}px; top: ${posY}px; position: absolute" data-position="bottom">
      ${tooltipText}
    </div>`
  );
}
//Listeners
highlighted.forEach((item) => item.addEventListener("click", showTooltip));
