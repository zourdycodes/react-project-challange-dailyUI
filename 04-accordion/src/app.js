import React, { useState } from "react";
import data from "./data";
import { Question } from "./Question";

export const App = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>

        <section className="info">
          {questions.map((question) => (
            <Question
              title={question.title}
              info={question.info}
              key={question.id}
            />
          ))}
        </section>
      </div>
    </main>
  );
};
