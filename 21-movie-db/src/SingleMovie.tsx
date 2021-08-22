import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API_ENDPOINT } from "./context";

interface ID {
  id?: string | undefined | number;
}

interface Movie {
  Poster: any;
  Title: any;
  Plot: any;
  Year: any;
}

interface Error {
  show: boolean;
  msg: string;
}

const SingleMovie: React.FC = () => {
  const { id }: ID = useParams();
  const [movie, setMovie] = useState<Movie | object | any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>({ show: false, msg: "" });

  const fetchMovie = async (url: string) => {
    try {
      const response = await fetch(url);

      // error handliing
      if (!response.ok && response.status >= 400 && response.status <= 503) {
        return setError({
          show: true,
          msg: "Sorry, the server is not fetching your data, check your connection or wait for a few second!",
        });
      }

      const data = await response.json();

      if (data.Response === "True") {
        setMovie(data);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.Error });
      }

      setLoading(false);
    } catch (err: any) {
      throw new Error(err);
    }
  };

  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}&i=${id}`);
  }, [id]);

  if (loading) {
    return <div className="loading"></div>;
  }

  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          back to homepage
        </Link>
      </div>
    );
  }

  const {
    Poster,
    Title,
    Plot,
    Year,
  }: { Poster: any; Title: any; Plot: any; Year: any } = movie;

  return (
    <section className="single-movie">
      <img src={Poster} alt={Title} />
      <div className="single-movie-info">
        <h2>{Title}</h2>
        <p>{Plot}</p>
        <h4>{Year}</h4>
        <Link to="/" className="btn">
          back to homepage
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
