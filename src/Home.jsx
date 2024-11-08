import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTv, setTrendingTv] = useState([]);
  const [trendingPeople, setTrendingPeople] = useState([]);

  async function getData(mediaType , callback) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=596a075b908fc028f46b83b6af60c5dc`
    );
    //  console.log(data.results);
    callback(data.results.slice(0,10));
  }
  useEffect(() => {
    getData('movie' , setTrendingMovies)
    getData('tv' , setTrendingTv)
    getData('person' , setTrendingPeople)
    }, []);

  return  <>
  <div className="row">
  <div className="col-md-4 d-flex align-items-center justify-content-center">
    <div className="w-75">
            <hr className="w-50 mb-4" />
      <h2 className="">Trending <br /> movies <br /> for this week</h2>
      <p className="text-secondary">Top Trending Movies By day</p>
      <hr className="mt-4" />
    </div>

    </div> 
    {trendingMovies.map((movie, i) => (
      <div className="col-md-2" key={i}>
        <Link to={`../movieDetails/${movie.id}`} style={{textDecoration:"none"}}>

        <img className="w-100" src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt={movie.original_title} />
        <h3 className="h5 my-2 text-light">{movie.original_title}</h3>
        </Link>
      </div>
    ))}
  </div>

  <div className="row mt-5">
  <div className="col-md-4 d-flex align-items-center justify-content-center">
    <div className="w-75">
            <hr className="w-50 mb-4" />
      <h2 className="">Trending <br /> TVs Show <br /> for this week</h2>
      <p className="text-secondary">Top Trending TVs Show By day</p>
      <hr className="mt-4" />
    </div>

    </div> 
    {trendingTv.map((tv, i) => (
      <div className="col-md-2" key={i}>
        <Link to={`../tvdetalis/${tv.id}`} style={{textDecoration:"none"}}>
        <img className="w-100" src={"https://image.tmdb.org/t/p/w500/" + tv.poster_path} alt={tv.original_name} />
        <h3 className="text-light">{tv.original_name}</h3>
        </Link>
      </div>
    ))}
  </div>

  <div className="row mt-5">
  <div className="col-md-4 d-flex align-items-center justify-content-center">
    <div className="w-75">
            <hr className="w-50 mb-4" />
      <h2 className="">Trending <br /> Persons <br /> for this week</h2>
      <p className="text-secondary">Top Trending Persons By day</p>
      <hr className="mt-4" />
    </div>

    </div>    {trendingPeople.map((person, i) => (
      <div className="col-md-2" key={i}>
        <Link to={`../people/${person.id}`} style={{textDecoration:"none"}}>

        <img className="w-100" src={"https://image.tmdb.org/t/p/w500/" + person.profile_path} alt={person.name} />
        <h3 className="text-light">{person.name}</h3>
        </Link>
      </div>
    ))}
  </div> 
</>
  }

export default Home;
