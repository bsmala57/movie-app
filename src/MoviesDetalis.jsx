import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function MoviesDetalis() {
  let params = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  async function getDetails(id) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=596a075b908fc028f46b83b6af60c5dc`
    );
    setMovieDetails(data);
    console.log(movieDetails);
  }

  useEffect(() => {
    getDetails(params.id);
  }, []);

  return (
    <>
      {/* <h1>{params.id}</h1>
    <h2>{movieDetails.title}</h2> */}
      <div className="container">
        {movieDetails ? (
          <div className="row ">
            {" "}
            <div className="col-md-3">
              <img
                className="w-100"
                src={
                  "https://image.tmdb.org/t/p/w500/" + movieDetails?.poster_path
                }
                alt=""
              />
              {movieDetails?.production_companies[1]?.name ? (
                <div>
                  {" "}
                  <h6 className="text-light  fw-bold">
                    Production Company :{" "}
                    <span className="text-secondary fw-bold">
                      {movieDetails?.production_companies[1]?.name}
                    </span>
                  </h6>
                  <br />
                </div>
              ) : null}
              {movieDetails?.production_countries[1]?.name ? (
                <div>
                  {" "}
                  <h6 className="text-light  fw-bold">
                    Production Countries :{" "}
                    <span className="text-secondary fw-bold">
                      {movieDetails?.production_countries[1]?.name}
                    </span>
                  </h6>
                </div>
              ) : null}
            </div>
            <div className="col-md-9 mt-3">
              <h2>{movieDetails?.original_title}</h2>
              <p className="text-secondary fw-bold">
                <span className=" text-light">Overview : </span>
                {movieDetails?.overview}
              </p>
              <p className="text-secondary fw-bold">
                <span className=" text-light">Budget : </span>
                {movieDetails?.budget}
              </p>

              <ul>
                <li className="text-secondary fw-bold">
                  <span className=" text-light">Popularity :</span>{" "}
                  {movieDetails?.popularity}
                </li>
                <li className="text-secondary fw-bold">
                  {" "}
                  <span className=" text-light">release_date :</span>{" "}
                  {movieDetails?.release_date}
                </li>
                <li className="text-secondary fw-bold">
                  <span className=" text-light">vote_average :</span>{" "}
                  {movieDetails?.vote_average}
                </li>
                <li className="text-secondary fw-bold">
                  <span className=" text-light">vote_count :</span>{" "}
                  {movieDetails?.vote_count}
                </li>
              </ul>
              <img
                className="w-100"
                src={
                  "https://image.tmdb.org/t/p/w500/" +
                  movieDetails?.backdrop_path
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

export default MoviesDetalis;
