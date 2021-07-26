import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTours, error }) => {
  if (error) {
    return (
      <>
        <h4 style={{ textAlign: "center" }}>
          Error, No Data retrieved! the request call is maybe forbidden or your
          API endpoint is wrong
        </h4>
      </>
    );
  }

  return (
    <section>
      <div className="title">
        <h2>Our Tour</h2>
        <div className="underline"></div>
      </div>

      <div>
        {tours?.map((tour) => {
          const { id } = tour;

          return <Tour key={id} {...tour} removeTours={removeTours} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
