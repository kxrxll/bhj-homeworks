class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector(".word");
    this.winsElement = container.querySelector(".status__wins");
    this.lossElement = container.querySelector(".status__loss");
    this.timeElement = container.querySelector(".status__time");

    this.reset();

    this.registerEvents();

    this.setTimer();
  }

  setTimer() {
    const closure = this;
    this.symbolsNumber = Array.from(
      document.querySelectorAll(".symbol")
    ).length;
    function decreaseTime() {
      if (closure.timeElement.textContent === "0") {
        closure.fail();
      } else {
        closure.timeElement.textContent--;
      }
    }
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.timeElement.textContent = this.symbolsNumber;
    this.timer = setInterval(decreaseTime, 1000);
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    const closure = this;
    let current;
    let entered;
    function trackEntered(evt) {
      current = closure.currentSymbol.textContent;
      entered = evt.key;
      entered.toLowerCase() === current ? closure.success() : closure.fail();
    }
    document.addEventListener("keydown", trackEntered);
  }

  success() {
    this.currentSymbol.classList.add("symbol_correct");
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert("Победа!");
      this.reset();
      this.setTimer();
    }
    this.setNewWord();
    this.setTimer();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert("Вы проиграли!");
      this.reset();
      this.setTimer();
    }
    this.setNewWord();
    this.setTimer();
  }

  setNewWord() {
    const word = this.getWord();
    this.renderWord(word);
  }

  getWord() {
    const words = [
        "bob",
        "awesome",
        "netology",
        "hello",
        "kitty",
        "rock",
        "youtube",
        "popcorn",
        "cinema",
        "love",
        "javascript",
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? "symbol_current" : ""}">${s}</span>`
      )
      .join("");
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector(".symbol_current");
  }
}

new Game(document.getElementById("game"));
