import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

export const App = () => {
  const [jobs, setJobs] = useState([]);
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
        setJobs(data);
        setLoading((loading) => !loading);
      };

      const data = await response.json();

      console.log(data);
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

  if (loading) {
    return (
      <section className="section loading">
        <h3>Loading ....</h3>
      </section>
    );
  }

  const { company, duties, title, dates } = jobs[value];

  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>

      <div className="jobs-center">
        {/* Btn container */}
        <div className="btn-container">
          {jobs?.map((jobData, index) => {
            return (
              <button
                key={index}
                className={`job-btn ${index === value && "active-btn"}`}
                onClick={() => setValue(index)}
              >
                {jobData.company}
              </button>
            );
          })}
        </div>
        {/* Job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties?.map((duty, index) => (
            <div key={index} className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <p>{duty}</p>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
};

export default App;
