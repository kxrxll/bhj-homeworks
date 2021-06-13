const rotators = document.querySelectorAll(".rotator");
let rotatorItems = [];

function rotate() {
  rotators.forEach((rotator) => {
    rotatorItems = Array.from(rotator.querySelectorAll(".rotator__case"));
    for (let i = 0; i < rotatorItems.length; i++) {
      rotatorItems[i].setAttribute(
        "style",
        `color:${rotatorItems[i].dataset.color}`
      );
      if (rotatorItems[i].classList.contains("rotator__case_active")) {
        rotatorItems[i].classList.remove("rotator__case_active");
        if (i + 1 == rotatorItems.length) {
          rotatorItems[0].classList.add("rotator__case_active");
        } else {
          i++;
          rotatorItems[i].classList.add("rotator__case_active");
        }
        clearInterval(interval);
        interval = setInterval(rotate, rotatorItems[i].dataset.speed);
      }
    }
  });
}

let interval = setInterval(rotate, 1000);
