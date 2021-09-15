import Question from "./question";
import Quiz from "./quiz";

const App = (function () {
  const counter = 0;

  const doubleCounter = () => {
    counter *= 2;
  };

  const incrementCounter = () => {
    counter++;
  };

  const getCounter = () => {
    return counter;
  };

  const setCounter = (newNum) => {
    counter = newNum;
  };

  //public methods
  return {
    get: getCounter,
    set: setCounter,
  };
})();
