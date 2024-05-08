import React from "react";
import Header from "../components/headerMovieList";
import Grid from "@mui/material/Grid";
import { DiscoverSeries } from "../types/interfaces";
import SeriesList from "../components/seriesList";
import { useQuery } from "react-query";
import { getSeries } from "../api/tmdb-api";
import Spinner from "../components/spinner";
const styles = {
  root: {
    padding: "20px",
  },
};

const SeriesPage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<DiscoverSeries, Error>("discoverseries", getSeries);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const series = data ? data.results : [];
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title={"Discover TV Series"} />
      </Grid>
      <Grid item container spacing={5}>
        <SeriesList series={series}/>
      </Grid>
    </Grid>
  );
};

export default SeriesPage;
