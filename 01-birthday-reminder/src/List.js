import React from "react";

export const List = ({ people }) => {
  return (
    <React.Fragment>
      {people &&
        people.map((person) => {
          const { id, name, age, image } = person;
          return (
            <article className="person" key={id}>
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
            </article>
          );
        })}
    </React.Fragment>
  );
};
