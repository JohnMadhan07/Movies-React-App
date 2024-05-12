import React from "react";
import Header from "../components/headerMovieList";
import Grid from "@mui/material/Grid";
import { DiscoverActors } from "../types/interfaces";
import { useQuery } from "react-query";
import { getActors } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import ActorsList from "../components/actorsList";
const styles = {
  root: {
    padding: "20px",
  },
};

const ActorsPage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<DiscoverActors, Error>("discoveractors", getActors);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const actors = data ? data.results : [];
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title={"Discover Actors"} />
      </Grid>
      <Grid item container spacing={5}>
        <ActorsList actors={actors}/>
      </Grid>
    </Grid>
  );
};

export default ActorsPage;
