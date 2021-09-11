import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  useParams,
  useRouteMatch,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import MovieCard from "./MovieCard";

export default function Movie(props) {
  const [movie, setMovie] = useState();

  // let id = 1;
  // Change ^^^ that line and use a hook to obtain the :id parameter from the URL
  const { id } = useParams();
  const { path, url } = useRouteMatch();

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/movies/${id}`) // Study this endpoint with Postman
      .then((response) => {
        // Study this response with a breakpoint or log statements
        // and set the response data as the 'movie' slice of state
        setMovie(response.data);
        console.log("response.data = ", response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    // This effect should run every time time
    // the `id` changes... How could we do this?
  }, [id]);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => { }
  const cb_onClick = () =>{
    //props.addToSavedList={addToSavedList}
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} />

      <div className="save-button" onClick= {cb_onClick}>Save</div>
    </div>
  );
}

/*
      <h3>Actors</h3>
      {stars.map((star) => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
*/
