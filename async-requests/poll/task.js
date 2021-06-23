//DOM
const titleSection = document.getElementById("poll__title");
const answersSection = document.getElementById("poll__answers");

//Global variables
let buttons = [];
let questionId;

//Handlers
function addQuestion(title, answers) {
  titleSection.textContent = title;

  answers.forEach((item) => {
    const newAnswer = document.createElement("button");
    newAnswer.classList.add("poll__answer");
    newAnswer.textContent = item;
    answersSection.append(newAnswer);
  });
  buttons = Array.from(document.querySelectorAll(".poll__answer"));
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", submitAnswer);
    buttons[i].dataset.id = i;
  }
}

function submitAnswer(e) {
  e.preventDefault();
  const answerNumber = e.target.dataset.id;
  alert("Спасибо, ваш голос засчитан!");
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://netology-slow-rest.herokuapp.com/poll.php");
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send(`vote=${questionId}&answer=${answerNumber}`);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      const answersStat = JSON.parse(xhr.responseText).stat;
      buttons.forEach((item) => item.remove());
      let overallAnswers = 0;
      answersStat.map((item) => (overallAnswers += item.votes));
      console.log(overallAnswers);
      answersStat.forEach((item) => {
        const newStat = document.createElement("div");
        newStat.innerHTML = `<i>${item.answer}</i> --- <strong>${(
          (item.votes / overallAnswers) *
          100
        ).toFixed(2)}%</strong>`;
        answersSection.appendChild(newStat);
      });
    }
  };
}

//Listeners

//Reqests
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.send();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    const responseQuestions = JSON.parse(xhr.responseText).data;
    questionId = JSON.parse(xhr.responseText).id;
    const title = responseQuestions.title;
    const answers = responseQuestions.answers;
    addQuestion(title, answers);
  }
};
