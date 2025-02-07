import { useQuiz } from "../contexts/QuizContext";

function StartScreen() {
  const { numQuestions, dispatch } = useQuiz();

  return (
    <div className="start">
      <h2>Добро пожаловать в React Quiz!</h2>
      <h3>{numQuestions} вопросов на знание React</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Начать
      </button>
    </div>
  );
}

export default StartScreen;
