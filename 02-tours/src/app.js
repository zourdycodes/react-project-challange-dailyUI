import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = "https://course-api.com/react-tours-project";

export const App = () => {
  const [tours, setTours] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTours = async () => {
      const dataset = await fetch(url)
        .then((response) => {
          if (!response.ok && response.status >= 400) {
            return setError((error) => !error);
          }

          return response.json();
        })
        .then((data) => {
          setTours(data);
          setError(false);
          setIsLoading((loading) => !loading);
        })
        .catch((err) => {
          console.error(err.message);
        });

      return dataset;
    };

    fetchTours();
  }, []);

  const removeTours = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  };

  if (error) {
    return (
      <React.Fragment>
        <h4>
          Error, No Data retrieved! the request call is maybe forbidden or your
          API endpoint is wrong
        </h4>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <main>
        {isLoading ? (
          <Loading />
        ) : (
          <Tours tours={tours} removeTours={removeTours} />
        )}
      </main>
    </React.Fragment>
  );
};
