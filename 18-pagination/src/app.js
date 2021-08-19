import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";

export const App = () => {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
    console.log(page);

    // eslint-disable-next-line
  }, [loading, page]);

  const handlePage = (index) => {
    setPage(index);
  };

  const handlePrevAndNextButton = (type) => {
    if (type === "DECREASE") {
      setPage((value) => {
        let prevPage = value - 1;
        if (prevPage < 0) {
          prevPage = data.length - 1;
        }

        return prevPage;
      });
    }

    if (type === "INCREASE") {
      setPage((value) => {
        let prevPage = value + 1;
        if (prevPage > data.length - 1) {
          prevPage = 0;
        }

        return prevPage;
      });
    }
  };

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "pagination"}</h1>
        <div className="underline"></div>
      </div>

      <section className="followers">
        <div className="container">
          {followers?.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>

        {!loading && (
          <div className="btn-container">
            <button
              className="prev-btn"
              onClick={() => handlePrevAndNextButton("DECREASE")}
            >
              prev
            </button>
            {data?.map((item, index) => {
              return (
                <button
                  className={`page-btn ${index === page && "active-btn"}`}
                  key={index}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button
              className="next-btn"
              onClick={() => handlePrevAndNextButton("INCREASE")}
            >
              next
            </button>
          </div>
        )}
      </section>
    </main>
  );
};
