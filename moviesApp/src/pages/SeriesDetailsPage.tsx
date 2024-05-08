import React from "react";
import { useParams } from "react-router-dom";
import { BaseSeries, MovieT } from "../types/interfaces";
import { getSeriesDetails } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import SeriesDetails from "../components/seriesDetails";



const SeriesDetailsPage: React.FC = () => {
  const { id } = useParams();
  const { data: series, error, isLoading, isError } = useQuery<BaseSeries, Error>(
    ["series", id],
    ()=> getSeriesDetails(id || "")
  );


  if (isLoading ) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }

  return (
    <>
      {series ? (     
          <SeriesDetails {...series as BaseSeries} />
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default SeriesDetailsPage;