import React, { useState, useEffect } from "react";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";

const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

export const App = () => {
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  const [title, setTitle] = useState("name");
  const [person, setPerson] = useState(null);
  const [value, setValue] = useState("random name");

  const fetchPerson = async () => {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        "Sorry, we cannot fetch the data please check your connection!"
      );
    }

    const data = await response.json();

    const person = data.results[0];
    const {
      phone,
      email,
      picture: { large: image },
      login: { password },
      name: { first, last },
      dob: { age },
      location: {
        street: { number, name },
      },
    } = person;

    const newPerson = {
      image,
      phone,
      email,
      password,
      age,
      name: `${first} ${last}`,
      address: `${number} ${name}`,
    };

    setLoading(false);
    setPerson(newPerson);
    setTitle("name");
    setValue(newPerson.name);
  };

  useEffect(() => {
    fetchPerson();
  }, []);

  const handleValue = (e) => {
    if (e.target.classList.contains("icon")) {
      const newValue = e.target.dataset.label;
      setTitle(newValue);
      setValue(person[newValue]);
    }
  };

  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img
            src={(person && person.image) || defaultImage}
            alt="random user"
            className="user-img"
          />
          <p className="user-title">my {title} is</p>
          <p className="user-value">{value}</p>
          <div className="values-list">
            <button
              className="icon"
              data-label="name"
              onMouseOver={handleValue}
            >
              <FaUser />
            </button>
            <button
              className="icon"
              data-label="email"
              onMouseOver={handleValue}
            >
              <FaEnvelopeOpen />
            </button>
            <button className="icon" data-label="age" onMouseOver={handleValue}>
              <FaCalendarTimes />
            </button>
            <button
              className="icon"
              data-label="address"
              onMouseOver={handleValue}
            >
              <FaMap />
            </button>
            <button
              className="icon"
              data-label="phone"
              onMouseOver={handleValue}
            >
              <FaPhone />
            </button>
            <button
              className="icon"
              data-label="password"
              onMouseOver={handleValue}
            >
              <FaLock />
            </button>
          </div>
          <button className="btn" type="button" onClick={fetchPerson}>
            {loading ? "loading..." : "random user"}
          </button>
        </div>
      </div>
    </main>
  );
};
