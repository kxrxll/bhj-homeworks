//Getting elemnets
const widget = document.querySelector(".chat-widget");
const input = document.getElementById("chat-widget__input");
const chatField = document.querySelector(".chat-widget__messages");

//Input tracking variable
let inputValue = "";

//List of response
const messagesList = ["Hi!", "Hello!", "What's up?"];

//Functions and handlers
function openChat() {
  widget.classList.add("chat-widget_active");
  setInterval(() => {
    chatField.innerHTML += `
      <div class="message">
        <div class="message__time">${new Date()
          .toLocaleTimeString()
          .substr(0, 5)}</div>
        <div class="message__text">
          ${messagesList[Math.floor(Math.random() * messagesList.length)]}
        </div>
      </div>
    `;
  }, 30000);
}

function trackingInput(e) {
  inputValue = e.target.value;
}

function sendMessage(e) {
  if (e.keyCode === 13 && inputValue) {
    chatField.innerHTML += `
      <div class="message message_client">
        <div class="message__time">${new Date()
          .toLocaleTimeString()
          .substr(0, 5)}</div>
        <div class="message__text">
          ${inputValue}
        </div>
      </div>
    `;
    input.value = null;
    inputValue = "";
    chatField.innerHTML += `
      <div class="message">
        <div class="message__time">${new Date()
          .toLocaleTimeString()
          .substr(0, 5)}</div>
        <div class="message__text">
          ${messagesList[Math.floor(Math.random() * messagesList.length)]}
        </div>
      </div>
    `;
    let messageArray = Array.from(document.querySelectorAll(".message"));
    let lastMessage = messageArray[messageArray.length - 1];
    lastMessage.scrollIntoView();
  }
}

//Event listeners
widget.addEventListener("click", openChat);
input.addEventListener("input", trackingInput);
input.addEventListener("keydown", sendMessage);
