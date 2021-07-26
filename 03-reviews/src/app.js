import React from "react";
import { Review } from "./Review";

export const App = () => {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h3>Client Reviews</h3>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
};

export default App;
