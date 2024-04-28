import React, { useState, useEffect, FC } from "react";  
import { ListedMovie } from "../types/interfaces";
import MovieListPageTemplate from "../components/templateMovieListPage";
import { getMovies } from "../api/tmdb-api";


 
const styles = {
  root: {
    padding: "20px",
  }, fab: {
    marginTop: 8,
    position: "fixed",
    top: 2,
    right: 2,
  },
};

  const HomePage: FC= () => {
    const [movies, setMovies] = useState<ListedMovie[]>([]);
    const favourites = movies.filter(m => m.favourite)
    localStorage.setItem('favourites', JSON.stringify(favourites))
    // New function
  const addToFavourites = (movieId: number) => {
    const updatedMovies = movies.map((m: ListedMovie) =>
      m.id === movieId ? { ...m, favourite: true } : m
    );
    setMovies(updatedMovies);
  };

  useEffect(() => {
    getMovies().then(movies => {
      setMovies(movies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    
    return (
      <MovieListPageTemplate
      title='Discover Movies'
      movies={movies}
      selectFavourite={addToFavourites}
    />
  );
};
export default HomePage;