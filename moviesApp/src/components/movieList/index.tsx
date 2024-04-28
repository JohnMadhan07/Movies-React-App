import React from "react";
import Moviecard from "../movieCard/";
import Grid from "@mui/material/Grid";
import { BaseMovieList } from "../../types/interfaces";
interface MovieListProps extends BaseMovieList {
  selectFavourite: (movieId: number) => void;
}
const MovieList: React.FC<MovieListProps> = (props) => {
  const movies=props.movies;
  let movieCards = movies.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Moviecard key={m.id} {...m}  selectFavourite={props.selectFavourite}/>
    </Grid>
  ));
  return movieCards;
}

  export default MovieList;