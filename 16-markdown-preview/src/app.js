import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

export const App = () => {
  const [markdown, setMarkdown] = useState("## markdown preview");
  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={({ target }) => setMarkdown(target.value)}
        ></textarea>
        <article className="result">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
};
