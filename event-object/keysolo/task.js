class WordsGame {
  constructor(container) {
    this.container = container;
    this.success = container.querySelector(".game__success");
    this.fails = container.querySelector(".game__fails");
    this.time = container.querySelector(".game__time");
    this.main = container.querySelector(".game__main");

    this.looseCounter = 0;
    this.winCounter = 0;

    this.restart();

    this.listen();

    this.setTimer();
  }

  setTimer() {
    const closure = this;
    this.symbolsNumber = Array.from(
      document.querySelectorAll(".symbol")
    ).length;
    function decreaseTime() {
      if (closure.time.textContent === "0") {
        closure.loose();
      } else {
        closure.time.textContent--;
      }
    }
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.time.textContent = this.symbolsNumber;
    this.timer = setInterval(decreaseTime, 1000);
  }

  restart() {
    this.renderWord();
    this.success.textContent = "0";
    this.fails.textContent = "0";
    this.looseCounter = 0;
    this.winCounter = 0;
  }

  listen() {
    const closure = this;
    let current;
    let entered;
    function trackEntered(evt) {
      current = document.querySelector(".currentSym").textContent;
      entered = evt.key;
      entered.toLowerCase() === current ? closure.win() : closure.loose();
    }
    document.addEventListener("keypress", trackEntered);
  }

  chooseWord() {
    const wordsArray = [
      "best",
      "music",
      "glory",
      "pirate",
      "speaker",
      "flight",
      "привет из будущего",
      "track",
      'я люблю "kit kat"',
      "slice",
      "warning",
      "prohibited",
      "timing",
      "java",
      "tailor",
      "truth",
      "heart",
      "goat",
    ];
    return wordsArray[Math.floor(Math.random() * wordsArray.length)];
  }

  renderWord() {
    this.wordArr = this.chooseWord().split("");
    this.main.innerHTML = this.wordArr
      .map(
        (item) =>
          `<div class='${
            item === this.wordArr[0] ? "currentSym" : "nextSym"
          } symbol'>${item}</div>`
      )
      .join("");
    this.currentSymbol = this.main.querySelector(".currentSym");
  }

  win() {
    if (this.container.querySelector(".currentSym").nextElementSibling) {
      this.currentSymbol.classList.remove("currentSym");
      this.currentSymbol = this.container.querySelector(".nextSym");
      this.currentSymbol.classList.add("currentSym");
      this.currentSymbol.classList.remove("nextSym");
    } else if (this.winCounter == 9) {
      alert("Ура! Победа!");
      this.restart();
      this.setTimer();
    } else {
      this.winCounter++;
      this.success.textContent = this.winCounter;
      this.renderWord();
      this.setTimer();
    }
  }

  loose() {
    if (this.looseCounter == 5) {
      alert("Поражение! Попробуйте еше раз!");
      this.restart();
      this.setTimer();
    } else {
      this.looseCounter++;
      this.fails.textContent = this.looseCounter;
      this.renderWord();
      this.setTimer();
    }
  }
}

new WordsGame(document.querySelector(".game"));
