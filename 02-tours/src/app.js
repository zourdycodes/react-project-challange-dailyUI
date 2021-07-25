import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = "https://course-api.com/react-tours-projec";

export const App = () => {
  const [tours, setTours] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      const fetchTours = async () => {
        const dataset = await fetch(url)
          .then((response) => {
            if (
              !response.ok &&
              response.status >= 400 &&
              response.status <= 600
            ) {
              return setError(true);
            }

            return response.json();
          })
          .then((data) => {
            setTours(data);
            setIsLoading((loading) => !loading);
          })
          .catch((err) => {
            console.error(err.message);
          });

        return dataset;
      };

      fetchTours();
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  const removeTours = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  };

  return (
    <React.Fragment>
      <main>
        {isLoading ? (
          <Loading />
        ) : (
          <Tours tours={tours} error={error} removeTours={removeTours} />
        )}
      </main>
    </React.Fragment>
  );
};
