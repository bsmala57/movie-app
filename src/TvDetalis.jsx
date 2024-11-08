
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function TvDetalis() {
  let params = useParams();
  const [TvDetalis, setTvDetalis] = useState(null);
  async function getDetails(id) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=596a075b908fc028f46b83b6af60c5dc`
    );
    setTvDetalis(data);
    console.log(TvDetalis);
  }

  useEffect(() => {
    getDetails(params.id);
  }, []);

  return (
    <>
    
      <div className="container">
        {TvDetalis ? (
          <div className="row ">
            {" "}
            <div className="col-md-3">
              <img
                className="w-100"
                src={
                  "https://image.tmdb.org/t/p/w500/" + TvDetalis?.poster_path
                }
                alt=""
              />
              {TvDetalis?.overview ? (
                <div>
                  {" "}
                  <h6 className="text-light  fw-bold">
                  Overview :{" "}
                    <span className="text-secondary fw-bold">
                      {TvDetalis?.overview}
                    </span>
                  </h6>
                  <br />
                </div>
              ) : null}
              {TvDetalis?.production_countries[1]?.name ? (
                <div>
                  {" "}
                  <h6 className="text-light  fw-bold">
                    Production Countries :{" "}
                    <span className="text-secondary fw-bold">
                      {TvDetalis?.production_countries[1]?.name}
                    </span>
                  </h6>
                </div>
              ) : null}
            </div>
            <div className="col-md-9 mt-3">
              <h1>Name :{TvDetalis?.original_name}</h1>
              <h2>{TvDetalis?.original_title}</h2>
              <p className="text-secondary fw-bold">
                <span className=" text-light">Overview : </span>
                {TvDetalis?.overview}
              </p>
              <p className="text-secondary fw-bold">
                <span className=" text-light">Budget : </span>
                {TvDetalis?.budget}
              </p>

              <ul>
                <li className="text-secondary fw-bold">
                  <span className=" text-light">Popularity :</span>{" "}
                  {TvDetalis?.popularity}
                </li>
                {/* <li className="text-secondary fw-bold">
                  {" "}
                  <span className=" text-light">release_date :</span>{" "}
                  {TvDetalis?.release_date}
                </li> */}
                <li className="text-secondary fw-bold">
                  <span className=" text-light">vote_average :</span>{" "}
                  {TvDetalis?.vote_average}
                </li>
                <li className="text-secondary fw-bold">
                  <span className=" text-light">vote_count :</span>{" "}
                  {TvDetalis?.vote_count}
                </li>
              </ul>
              <img
                className="w-100"
                src={
                  "https://image.tmdb.org/t/p/w500/" +
                  TvDetalis?.backdrop_path
                }
                alt=""
              />
            </div>
          </div>
        ) : (
          <div className="vh-100 d-flex align-content-center justify-content-center">
            <i className="fas fa-spinner fa-spin fa-3x"></i>
          </div>
        )}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
}

export default TvDetalis;
