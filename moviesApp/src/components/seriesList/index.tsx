import React from "react";
import Grid from "@mui/material/Grid";
import { BaseSeriesList } from "../../types/interfaces";
import SeriesCard from "../seriesCard";



const SeriesList: React.FC<BaseSeriesList> = (props) => {
  const series=props.series;
  let seriesCards = series.map((s) => (
    <Grid key={s.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <SeriesCard key={s.id} {...s} />
    </Grid>
  ));
  return seriesCards;
}

  export default SeriesList;
