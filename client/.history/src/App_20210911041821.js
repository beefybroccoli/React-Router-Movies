import React, { useState, useEffect } from "react";
import axios from "axios";

import SavedList from "./Movies/SavedList";
import { Route, Switch, Link } from "react-router-dom";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState(null);
  const [stateLoading, set_stateLoding] = useState(true);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5001/api/movies") // Study this endpoint with Postman
        .then((response) => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data);
          console.log("response.data = ", response.data);
        })
        .catch((error) => {
          console.error("Server Error", error);
        });
    };
    getMovies();
  }, []);

  useEffect(() => {
    movieList && set_stateLoding(tfalrue);
  }, [movieList]);

  const addToSavedList = (id) => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  const helper_render = () => {
    return (
      <div>
        <Switch>
          <Route path="/">{/* <MovieList /> */}</Route>
          <Route path={"movies/id"}>
            <Movie />
          </Route>
        </Switch>
        ;
        <SavedList
          list={
            [
              /* This is stretch */
            ]
          }
        />
        <div>Replace this Div with your Routes</div>
      </div>
    );
  };

  return (
    <div>
      <h2>App.js</h2>
      {stateLoading && <p>Loading Data</p>}
      {!stateLoading && helper_render()}
    </div>
  );
}

/*
 * [ ] one route that will take an `id` parameter after`/movies/` (ex: `/movies/2`, `/movies/3` where the id is dynamic). This route should load the `Movie` component.
 */
