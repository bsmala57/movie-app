

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Tvshow () {
  const [trendingTvshow , setTrendingTvshow  ] = useState([]);
  const nums = new Array(13).fill(1).map((ele,index)=>index+1)
  console.log(nums);
  async function getData(pageNumber) {
    try {
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/tv?api_key=596a075b908fc028f46b83b6af60c5dc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}`
      );
      setTrendingTvshow (data.results); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {
    getData(1);
  }, []);

  return (
    <div className="container   ">
      {trendingTvshow  ? (
        <div className="row justify-content-center">
          {trendingTvshow .map((movie, i) => (
            <div className="col-md-2" key={i}>
              <Link
                to={`../tvdetalis/${movie.id}`}
                style={{ textDecoration: "none" }}
              >
                <img
                  className="w-100"
                  src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
                  alt={movie.original_title}
                />
                <h3 className="h5 my-2 text-light text-center">{movie.original_title}</h3>
              </Link>
            </div>
          ))}
        <nav className="d-flex align-content-center justify-content-center" aria-label="...">
  <ul className="pagination pagination-lg">
    {/* <li className="page-item active" aria-current="page">
      <span className="page-link">1</span>
    </li> */}
    {nums.map((num)=>    <li onClick={()=>getData(num)} className="page-item"><a className="page-link" href="#">{num}</a></li>
)}
   
  </ul>
</nav>
 </div>
      ) : (
        <div className="vh-100 d-flex align-content-center justify-content-center">
          <i className="fas fa-spinner fa-spin fa-3x"></i>
        </div>
      )}
     
    </div>
  );
}

export default Tvshow ;
