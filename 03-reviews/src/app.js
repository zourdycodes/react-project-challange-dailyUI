import React from "react";
import { Review } from "./Review";

export const App = () => {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Client Reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
};

export default App;
