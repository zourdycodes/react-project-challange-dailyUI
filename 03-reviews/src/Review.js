import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import people from "./data";

export const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, image, job, name, text } = people[index];

  const checkNumber = (number) => {
    /***********************
     * BACK TO THE FIRST PERSON
     **********************/
    if (number > people.length - 1) return 0;

    /***********************
     * BACK TO THE LAST PERSON => if the number is negative
     **********************/
    if (number < 0) {
      return people.length - 1; // 3
    }

    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = ++index;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = --index;
      return checkNumber(newIndex);
    });
  };

  console.log(index);

  const randomPerson = () => {
    let randomNum = Math.round(Math.random() * people.length);

    /***********************
     * FIXING THE REPETITION NUMBER
     **********************/

    if (randomNum === index) {
      randomNum = ++index;
    }

    setIndex(checkNumber(randomNum));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>

      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="prev-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>

      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};
