import Question from "./question.js";
import Quiz from "./quiz.js";

const App = (() => {
  //cache the DOM
  const quizEl = document.querySelector(".jabquiz");
  const quizQuestionEl = document.querySelector(".jabquiz__question");
  const trackerEl = document.querySelector(".jabquiz__tracker");
  const taglineEl = document.querySelector(".jabquiz__tagline");
  const choicesEl = document.querySelector(".jabquiz__choices");
  const progressInnerEl = document.querySelector(".progress__inner");
  const nextButtonEl = document.querySelector(".next");
  const restartButtonEl = document.querySelector(".restart");

  const q1 = new Question(
    "First President of US?",
    ["Barrack", "Osama", "George", "Monkey"],
    2
  );
  const q2 = new Question(
    "When was Javascript created?",
    ["June 1995", "May 1995", "July 1885", "Sep 1996"],
    1
  );
  const q3 = new Question(
    "What does CSS stand for?",
    [
      "County Sheriff Service",
      "Cascading sexy sheets",
      "Cascading style sheets",
    ],
    2
  );
  const q4 = new Question(
    "The full form of HTML is...",
    ["Hyper Text Markup Language", "Hold The Mic", "ERROR"],
    0
  );
  const q5 = new Question(
    "console.log(typeof []) would return...",
    ["Array", "Object", "null", "array"],
    1
  );

  const quiz = new Quiz([q1, q2, q3, q4, q5]);

  const setValue = (elem, value) => {
    elem.innerHTML = value;
  };

  const renderQuestion = () => {
    const question = quiz.getCurrentQuestion().question;
    setValue(quizQuestionEl, question);
  };

  const renderChoicesElements = () => {
    let markup = "";
    const currentChoices = quiz.getCurrentQuestion().choices;
    currentChoices.forEach((elem, index) => {
      markup += `
      <li class="jabquiz__choice">
        <input
          type="radio"
          name="choice"
          class="jabquiz__input"
          id="choice${index}"
          checked
        />
        <label for="choice${index}" class="jabquiz__label">
          <i></i>
          <span>${elem}</span>
        </label>
      </li>
      `;
    });

    setValue(choicesEl, markup);
  };

  const renderTracker = () => {
    const index = quiz.currentIndex;
    setValue(trackerEl, `${index + 1} of ${quiz.questions.length}`);
  };

  const getPercentage = (num1, num2) => {
    return Math.round((num1 / num2) * 100);
  };

  const launch = (width, maxPercent) => {
    let loadingBar = setInterval(function () {
      if (width > maxPercent) {
        clearInterval(loadingBar);
      } else {
        width++;
        progressInnerEl.style.width = width + "%";
      }
    }, 3);
  };

  const renderProgress = () => {
    // 1. Width
    const currentWidth = getPercentage(
      quiz.currentIndex + 1,
      quiz.questions.length
    );
    // 2. launch(0, width)
    launch(0, currentWidth);
  };

  const renderAll = () => {
    if (quiz.hasEnded()) {
      //renderEndScreen
    } else {
      // 1. render the question
      renderQuestion();
      // 2. render the choices elements
      renderChoicesElements();
      // 3. render tracker
      renderTracker();
      // 4. render progress
      renderProgress();
    }
  };

  return {
    renderAll: renderAll,
  };
})();

App.renderAll();
