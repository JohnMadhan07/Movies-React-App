import React from "react";
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MovieDetailsPage";
import FavouriteMoviesPage from "./pages/FavouriteMoviesPage ";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from "./pages/UpcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import SeriesPage from "./pages/SeriesPage";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <SiteHeader />   
      <MoviesContextProvider>
      <Routes>
      <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
      <Route path="/movies/favourites" element={<FavouriteMoviesPage  />} />
      <Route path="/movies/upcoming" element={<UpcomingMoviesPage  />} />
        <Route path="/movies/:id" element={<MoviePage/>} />
        <Route path="/" element={<HomePage  />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/reviews/:id" element={<MovieReviewPage/>} />
        <Route path="/tvseries" element={<SeriesPage/>} />
      </Routes>
      </MoviesContextProvider>
    </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)