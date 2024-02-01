import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    // Fetch the show list from the API
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => setShows(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {shows.map(({ score, show }) => (
            <div key={show.id} className="col mb-4">
              <div className="card" style={{ width: "18rem" }}>
                {show.image && show.image.medium && (
                  <img
                    src={show.image.medium}
                    className="card-img-top"
                    alt={show.name}
                    style={{ height: "50%" }}
                  />
                )}
                <div className="card-body" style={{ height: "50%" }}>
                  <h5 className="card-title">{show.name}</h5>
                  <h6 className="card-text">
                    Rating: {show.rating && show.rating.average}{" "}
                    {show.rating && (
                      <i className="fas fa-star" style={{ color: "gold" }}></i>
                    )}
                  </h6>
                  <h6 className="card-text">
                    Genres: {show.genres && show.genres.join(", ")}
                  </h6>
                  <h6 className="card-text">
                    Premiered: {show.premiered}{" "}
                    {show.premiered && (
                      <i
                        className="far fa-calendar-alt"
                        style={{ color: "dodgerblue" }}
                      ></i>
                    )}
                  </h6>
                  <div className="btn-group">
                    <Link
                      to={`/show/${show.id}`}
                      className="btn btn-sm btn-outline-info"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ShowList;
