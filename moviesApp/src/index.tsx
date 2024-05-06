import React from "react";
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MovieDetailsPage";
import FavouriteMoviesPage from "./pages/FavouriteMoviesPage ";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from "./pages/UpcomingMoviesPage";

const App = () => {
  return (
    <BrowserRouter>
      <SiteHeader />   
      <Routes>
      <Route path="/movies/favourites" element={<FavouriteMoviesPage  />} />
      <Route path="/movies/upcoming" element={<UpcomingMoviesPage  />} />
        <Route path="/movies/:id" element={<MoviePage/>} />
        <Route path="/" element={<HomePage  />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/reviews/:id" element={<MovieReviewPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)