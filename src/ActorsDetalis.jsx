
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ActorsDetalis() {
  let params = useParams();
  const [actorsDetalis, setActorsDetalis] = useState(null);
  async function getDetails(id) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/person/${id}?api_key=596a075b908fc028f46b83b6af60c5dc`
    );
    setActorsDetalis(data);
    console.log(ActorsDetalis);
  }

  useEffect(() => {
    getDetails(params.id);
  }, []);

  return (
    <>
    <div className="container">
      {actorsDetalis ? (
        <div className="row">
          <div className="col-md-3">
            <img
              className="w-100"
              src={
                "https://image.tmdb.org/t/p/w500/" + actorsDetalis?.profile_path
              }
              alt={actorsDetalis?.name}
            />
            <div>
              <h6 className="text-light fw-bold">
                Name:{" "}
                <span className="text-secondary fw-bold">
                  {actorsDetalis?.name}
                </span>
              </h6>
              {actorsDetalis?.place_of_birth && (
                <h6 className="text-light fw-bold">
                  Place of Birth:{" "}
                  <span className="text-secondary fw-bold">
                    {actorsDetalis?.place_of_birth}
                  </span>
                </h6>
              )}
            </div>
          </div>
          <div className="col-md-9 mt-3">
            <h1>{actorsDetalis?.name}</h1>
            <p className="text-secondary fw-bold">
              <span className="text-light">Biography: </span>
              {actorsDetalis?.biography}
            </p>
            <ul>
              <li className="text-secondary fw-bold">
                <span className="text-light">Popularity: </span>{" "}
                {actorsDetalis?.popularity}
              </li>
              <li className="text-secondary fw-bold">
                <span className="text-light">Known For: </span>{" "}
                {actorsDetalis?.known_for_department}
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="vh-100 d-flex align-items-center justify-content-center">
          <i className="fas fa-spinner fa-spin fa-3x"></i>
        </div>
      )}
    </div>
  </>
  );
}

export default ActorsDetalis;
