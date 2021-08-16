import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section error-page">
      <div className="error-container">
        <h1>oops! it's a dead end buddy.</h1>
        <Link to="/" className="btn-primary btn">
          back home bud
        </Link>
      </div>
    </section>
  );
};

export default Error;
