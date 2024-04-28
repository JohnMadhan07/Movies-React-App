import React from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";

const FavouriteMoviesPage: React.FC= () => {
    const toDo = () => true;
    // Get movies from local storage.
    const movies = JSON.parse(localStorage.getItem("favourites") || '[]');
  
    return (
      <MovieListPageTemplate
        title="Favourite Movies"
        movies={movies}
        selectFavourite={toDo}
      />
    );
}

export default FavouriteMoviesPage