import React, { useState } from "react";
import data from "./data";
import { List } from "./List";

export const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <React.Fragment>
      <main>
        <section className="container">
          <h3>{people.length} Birthday today</h3>
          <List people={people} />
          <button onClick={() => setPeople([])}>Clear All</button>
        </section>
      </main>
    </React.Fragment>
  );
};
