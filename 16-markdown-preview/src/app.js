import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

export const App = () => {
  const [markdown, setMarkdown] = useState("## markdown preview");
  return (
    <main>
      <section className="markdown">
        <textarea className="input"></textarea>
      </section>
    </main>
  );
};
