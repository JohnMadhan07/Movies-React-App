import React from "react";
import Header from "../components/headerMovieList";
import Grid from "@mui/material/Grid";
import MovieList from "../components/movieList";
import { BaseMovieList } from "../types/interfaces";
 
const styles = {
  root: {
    padding: "20px",
  },
};
const HomePage: React.FC<BaseMovieList> = (props) => {
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title={"Home Page"} />
      </Grid>
      <Grid item container spacing={5}>
        <MovieList movies={props.movies}></MovieList>
      </Grid>
    </Grid>
  );
};
export default HomePage;