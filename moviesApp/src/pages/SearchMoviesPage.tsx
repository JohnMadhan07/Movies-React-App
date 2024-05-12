import React, { useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import {  ListedMovie, UpcomingMovies } from "../types/interfaces";
import { useQuery } from "react-query";
import { getSearchMovies} from "../api/tmdb-api";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

const styles = {
  root: {
    padding: "20px",
  },
  formContainer: {
    marginBottom: "20px",
  },
  input: {
    padding: "8px",
    marginRight: "8px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    padding: "8px 16px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

const SearchSeriesPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const { data, error, isLoading, isError } = useQuery<UpcomingMovies, Error>(
      ["movie", searchTerm],
      ()=> getSearchMovies(searchTerm)
    );

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      getSearchMovies(searchTerm);
    };

  const movie = data ? data.results : [];
  const displayedmovies = movie;
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div style={styles.root}>
      <div style={styles.formContainer}>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a movie..."
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Search</button>
        </form>
      </div>
      <PageTemplate
          title="Discover Movies"
          movies={displayedmovies}
          action={(movie: ListedMovie) => {
            return <AddToFavouritesIcon {...movie} />;
          }}
        />
    </div>
  );
};

export default SearchSeriesPage;
