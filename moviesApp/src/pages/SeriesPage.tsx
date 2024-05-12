import React from "react";
import Header from "../components/headerMovieList";
import Grid from "@mui/material/Grid";
import { DiscoverSeries } from "../types/interfaces";
import SeriesList from "../components/seriesList";
import { useQuery } from "react-query";
import { getSeries } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import SeriesFilterUI, { genreFilter, titleFilter } from "../components/seriesFilterUI";
import useFiltering from "../hooks/useFiltering";
const styles = {
  root: {
    padding: "20px",
  },
};

const titleFiltering = {
  name: "title",
  value: "",
  condition: titleFilter,
};
const genreFiltering = {
  name: "genre",
  value: "0",
  condition: genreFilter,
};

const SeriesPage: React.FC = () => {
  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [],
    [titleFiltering, genreFiltering]
  );
  
  const changeFilterValues = (type: string, value: string) => {
    const changedFilter = { name: type, value: value };
    const updatedFilterSet =
      type === "title"
        ? [changedFilter, filterValues[1]]
        : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };
  const { data, error, isLoading, isError } = useQuery<DiscoverSeries, Error>("discoverseries", getSeries);

  const series = data ? data.results : [];
  const displayedseries = filterFunction(series);
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title={"Discover TV Series"} />
      </Grid>
      <Grid item container spacing={5}>
        <SeriesList series={displayedseries}/>
      </Grid>
      <SeriesFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
      />
    </Grid>
  );
};

export default SeriesPage;
