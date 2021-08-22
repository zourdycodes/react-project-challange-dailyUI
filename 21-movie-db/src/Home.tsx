import React from "react";
import Form from "./SearchForm";
import Movies from "./Movies";

const Home: React.FC = () => {
  return (
    <main>
      <Form />
      <Movies />
    </main>
  );
};

export default Home;
