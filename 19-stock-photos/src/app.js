import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;

const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      let url;
      url = `${mainUrl}${clientID}`;
      try {
        const response = await fetch(url);
        const data = await response.json();

        setLoading(false);
        setPhotos(data);
      } catch (err) {
        setLoading(false);
        throw new Error(err);
      }
    };

    fetchPhotos();
  }, []);

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        !loading &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 10
      ) {
        console.log("it worked");
      }
    });

    return () => {
      window.removeEventListener("scroll", event);
    };

    // eslint-disable-next-line
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input
            type="text"
            placeholder="search"
            className="form-input"
            value={query}
            onChange={({ target }) => setQuery(target.value)}
          />
          <button
            style={{
              cursor: "pointer",
            }}
            type="submit"
            className="submit-btn"
            onClick={handleSubmit}
          >
            <FaSearch />
          </button>
        </form>
      </section>

      <section className="photos">
        <div className="photos-center">
          {photos?.map((item, index) => {
            return <Photo key={index} {...item} />;
          })}
        </div>
        {loading && (
          <div className="loading">
            <h2>loading...</h2>
          </div>
        )}
      </section>
    </main>
  );
};
