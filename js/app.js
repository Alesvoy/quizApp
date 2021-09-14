import Question from "./question.js";

Question.prototype.isCorrect = function (guessKey) {
  return guessKey === this.answerKey;
};
