import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
  const { handleChange, handleSubmit, quiz, error } = useGlobalContext();

  // 18, 19

  const quizCategory = [
    "sports",
    "history",
    "Science: Computers",
    "politics",
    "Science: Mathematics",
  ];

  const difficulty = ["easy", "medium", "hard"];

  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form">
          <h2>
            Start Quiz{" "}
            <span aria-label="emoji" role="img">
              📚
            </span>
          </h2>

          {/* amount */}
          <div className="form-control">
            <label htmlFor="amount">number of questions</label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={quiz.amount}
              onChange={handleChange}
              className="form-input"
              min={1}
              max={50}
            />
          </div>

          {/* category */}
          <div className="form-control">
            <label htmlFor="category">category</label>
            <select
              name="category"
              id="category"
              className="form-input"
              value={quiz.category}
              onChange={handleChange}
            >
              {quizCategory.map((category, index) => (
                <option value={category} key={index}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* difficulty */}
          <div className="form-control">
            <label htmlFor="difficulty">select difficulty</label>
            <select
              name="difficulty"
              id="difficulty"
              className="form-input"
              value={quiz.difficulty}
              onChange={handleChange}
            >
              {difficulty.map((category, index) => (
                <option value={category} key={index}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          {error && (
            <p className="error">
              can't generate the questions, please try different options.
            </p>
          )}
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            start
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
