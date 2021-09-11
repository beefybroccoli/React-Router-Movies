import React from "react";
import { Link } from "react-router-dom";

export default function SavedList(props) {
  console.log("props.list = ", props.list);
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map((movie) => (
        <Link to=`/movies/">
          <span className="saved-movie">{movie.movie.title}</span>
        </Link>
      ))}
      <div className="home-button">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}
