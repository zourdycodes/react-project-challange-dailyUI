import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;

const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");

  const fetchPhotos = async () => {
    let url;
    const infinitePhotoURL = `&page=${page}`;
    const urlQuery = `&query=${query}`;
    setLoading(true);

    if (query) {
      url = `${searchUrl}${clientID}${infinitePhotoURL}${urlQuery}`;
    } else {
      url = `${mainUrl}${clientID}${infinitePhotoURL}`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();

      setLoading(false);

      // add old photo data => adding a new fetch of photo data --> destructuring it
      setPhotos((prevData) => {
        if (query && page === 1) {
          return data.results;
        } else if (query) {
          return [...prevData, ...data.results];
        } else {
          return [...prevData, ...data];
        }
      });
    } catch (err) {
      setLoading(false);
      throw new Error(err);
    }
  };

  useEffect(() => {
    fetchPhotos();

    // eslint-disable-next-line
  }, [page]);

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        !loading &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 10
      ) {
        setPage((page) => page + 1);
      }
    });

    return () => {
      window.removeEventListener("scroll", event);
    };

    // eslint-disable-next-line
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setPage(1);
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
