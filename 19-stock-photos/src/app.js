import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;

// secret key
// pvlRoc2L-81o65yTSO1001alPYB0XoTHAy1uJgoGwmw

const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

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

  if (loading) {
    return (
      <div className="loading">
        <h2>loading...</h2>
      </div>
    );
  }

  return <h2>stock photos starter</h2>;
};
