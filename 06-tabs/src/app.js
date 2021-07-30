import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

export const App = () => {
  const [jobs, setJobs] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [value, setValue] = useState(0);

  useEffect(() => {
    try {
      const fetchJobs = async () => {
        const response = await fetch(url);

        // handling error
        if (!response.ok && response.status > 400) {
          return setError((error) => !error);
        }

        const data = await response.json();

        console.log(data);
        setJobs(data);
        setLoading((loading) => !loading);
      };

      fetchJobs();
    } catch (error) {
      throw new Error(error.message);
    }
  }, []);

  if (error) {
    return (
      <section className="section loading">
        <h4>Error!, check the API Endpoint!</h4>
      </section>
    );
  }

  return (
    <main>
      {loading ? (
        <section className="section loading">
          <h3>Loading ....</h3>
        </section>
      ) : (
        jobs?.map((jobData) => {
          const { id, company } = jobData;

          return (
            <main key={id}>
              <button className="btn">{company}</button>
            </main>
          );
        })
      )}
    </main>
  );
};

export default App;
