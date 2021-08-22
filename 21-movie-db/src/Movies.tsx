import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";

const url: string =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies: React.FC = () => {
  const { isLoading, movies } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }

  return (
    <section className="movies">
      {movies?.map((movie: any) => {
        const { imdbID: id, Title: title, Poster: poster, Year: year } = movie;

        return (
          <Link key={id} to={`/movie/${id}`} className="movie">
            <article>
              <img src={poster === "N/A" ? url : poster} alt={title} />
              <div className="movie-info">
                <h4 className="title">{title}</h4>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
