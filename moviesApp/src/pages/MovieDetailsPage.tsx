import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import { MovieT, Similar } from "../types/interfaces";
import PageTemplate from "../components/templateMoviePage";
import { getMovie, getSimilarMovies } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import SimilarMovies from "../components/similarMovies";


const MovieDetailsPage: React.FC = () => {
  const { id } = useParams();
  const { data: movie, error, isLoading, isError } = useQuery<MovieT, Error>(
    ["movie", id],
    ()=> getMovie(id||"")
  );
  const { data: similarMovies, error: similarMoviesError, isLoading: similarMoviesLoading, isError: similarMoviesIsError } = useQuery<Similar, Error>(
    ["similarMovies", id],
    () => getSimilarMovies(id || "")
  );

  if (isLoading || similarMoviesLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }

  return (
    <>
      {movie ? (
        <PageTemplate movie={movie as MovieT}> 
          <MovieDetails {...movie as MovieT} />
          <SimilarMovies movies={similarMovies?.results || []} />
        </PageTemplate>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MovieDetailsPage;
