const slides = Array.from(document.querySelectorAll(".slider__item"));
const dots = Array.from(document.querySelectorAll(".slider__dot"));
const buttonLeft = document.querySelector(".slider__arrow_prev");
const buttonRight = document.querySelector(".slider__arrow_next");

//Actual slide getting function
getActualIndex = () =>
  slides.findIndex((item) => item.classList.contains("slider__item_active"));

//Slide changing function
slideChange = (int) => {
  slides[getActualIndex()].classList.remove("slider__item_active");
  dots.forEach((dot) => dot.classList.remove("slider__dot_active"));
  slides[int].classList.add("slider__item_active");
  dots[int].classList.add("slider__dot_active");
};

//Events
buttonRight.onclick = () => {
  if (getActualIndex() === slides.length - 1) {
    slideChange(0);
  } else {
    slideChange(getActualIndex() + 1);
  }
};

buttonLeft.onclick = () => {
  if (getActualIndex() === 0) {
    slideChange(slides.length - 1);
  } else {
    slideChange(getActualIndex() - 1);
  }
};

for (let i = 0; i < dots.length; i++) {
  dots[i].onclick = () => {
    slideChange(i);
  };
}

/* Old solution
buttonRight.onclick = () => {
  const actualIndex = slides.findIndex((item) =>
    item.classList.contains("slider__item_active")
  );
  slides[actualIndex].classList.remove("slider__item_active");
  dots.forEach((dot) => dot.classList.remove("slider__dot_active"));
  if (actualIndex === slides.length - 1) {
    slides[0].classList.add("slider__item_active");
    dots[0].classList.add("slider__dot_active");
  } else {
    slides[actualIndex + 1].classList.add("slider__item_active");
    dots[actualIndex + 1].classList.add("slider__dot_active");
  }
};

buttonLeft.onclick = () => {
  const actualIndex = slides.findIndex((item) =>
    item.classList.contains("slider__item_active")
  );
  slides[actualIndex].classList.remove("slider__item_active");
  dots.forEach((dot) => dot.classList.remove("slider__dot_active"));
  if (actualIndex === 0) {
    slides[slides.length - 1].classList.add("slider__item_active");
    dots[slides.length - 1].classList.add("slider__dot_active");
  } else {
    slides[actualIndex - 1].classList.add("slider__item_active");
    dots[actualIndex - 1].classList.add("slider__dot_active");
  }
};

dots.forEach(
  (item) =>
    (item.onclick = () => {
      const actualSlidesIndex = slides.findIndex((slide) =>
        slide.classList.contains("slider__item_active")
      );
      const actualDotsIndex = dots.indexOf(item);
      slides[actualSlidesIndex].classList.remove("slider__item_active");
      slides[actualDotsIndex].classList.add("slider__item_active");
      dots.forEach((dot) => dot.classList.remove("slider__dot_active"));
      item.classList.add("slider__dot_active");
    })
);
*/
