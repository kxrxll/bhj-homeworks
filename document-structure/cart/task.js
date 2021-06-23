//DOM elements

const cart = document.querySelector(".cart__products");
const quantityIncrease = Array.from(
  document.querySelectorAll(".product__quantity-control_inc")
);
const quantityDecrease = Array.from(
  document.querySelectorAll(".product__quantity-control_dec")
);
const addButtons = Array.from(document.querySelectorAll(".product__add"));

//Handlers
function increaseQuantity(evt) {
  let cartValue = parseInt(
    evt.target
      .closest(".product__quantity-controls")
      .querySelector(".product__quantity-value").textContent
  );
  cartValue++;
  evt.target
    .closest(".product__quantity-controls")
    .querySelector(".product__quantity-value").textContent = cartValue;
}

function decreaseQuantity(evt) {
  let cartValue = parseInt(
    evt.target
      .closest(".product__quantity-controls")
      .querySelector(".product__quantity-value").textContent
  );
  if (cartValue > 1) {
    cartValue--;
    evt.target
      .closest(".product__quantity-controls")
      .querySelector(".product__quantity-value").textContent = cartValue;
  }
}

function addToCart(e) {
  if (e.target) {
    e = e.target;
  }
  const product = e.closest(".product");
  const id = product.dataset.id;
  const img = product.querySelector(".product__image").src;
  const quantity = parseInt(
    product.querySelector(".product__quantity-value").textContent
  );
  if (checkCart(id)) {
    const numberInCart = parseInt(Array.from(
      cart.querySelectorAll(".cart__product")).find(item => item.dataset.id == id).querySelector(".cart__product-count").textContent
    );
    Array.from(
      cart.querySelectorAll(".cart__product")).find(item => item.dataset.id == id).querySelector(".cart__product-count").textContent =
      numberInCart + quantity;
  } else {
    const newItem = document.createElement("div");
    newItem.classList.add("cart__product");
    newItem.dataset.id = id;
    newItem.innerHTML = `<img class="cart__product-image" src="${img}" alt=''><div class="cart__product-count">${quantity}</div>`;
    cart.appendChild(newItem);
  }

  const flyingImg = document.createElement("img");
  flyingImg.src = img;
  flyingImg.style.position = "fixed";
  flyingImg.style.width = "100px";
  flyingImg.style.objectFit = "contain";
  const startingRect = product
    .querySelector(".product__image")
    .getBoundingClientRect();
  product.insertBefore(flyingImg, product.querySelector(".product__image"));
  const itemsInCart = Array.from(cart.querySelectorAll(".cart__product"));
  const endingRect = itemsInCart
    .find((item) => item.dataset.id === id)
    .querySelector(".cart__product-image")
    .getBoundingClientRect();
  flyingImg.style.left = `${startingRect.left}px`;
  flyingImg.style.top = `${startingRect.top}px`;
  const xDiffInTick = (startingRect.x - endingRect.x) / 100;
  const yDiffInTick = (startingRect.y - endingRect.y) / 100;
  const imageTravel = setInterval(function (xDiff, yDiff) {
    if (
      flyingImg.getBoundingClientRect().x < endingRect.x ||
      flyingImg.getBoundingClientRect().y > endingRect.y
    ) {
      if (flyingImg.getBoundingClientRect().x < endingRect.x) {
        flyingImg.style.left = `${
          flyingImg.getBoundingClientRect().x - xDiffInTick
        }px`;
      }
      if (flyingImg.getBoundingClientRect().y > endingRect.y) {
        flyingImg.style.top = `${
          flyingImg.getBoundingClientRect().y - yDiffInTick
        }px`;
      }
    } else {
      clearInterval(imageTravel);
      flyingImg.remove();
    }
  }, 1);
}

function checkCart(id) {
  const cartItems = Array.from(cart.querySelectorAll(".cart__product"));
  if (cartItems) {
    return cartItems.find((item) => item.dataset.id === id);
  }
}

//Listeners
quantityIncrease.forEach((item) =>
  item.addEventListener("click", increaseQuantity)
);
quantityDecrease.forEach((item) =>
  item.addEventListener("click", decreaseQuantity)
);
addButtons.forEach((item) => item.addEventListener("click", addToCart));
