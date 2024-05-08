import React from "react";

export interface BaseMovie {
  title: string;
  budget: number;
  homepage: string | undefined;
  id: number;
  imdb_id: string;
  original_language: string;
  overview: string;
  release_date: string;
  vote_average: number;
  popularity: number;
  poster_path?: string;
  tagline: string;
  runtime: number;
  revenue: number;
  vote_count: number;
  favourite?: boolean;
}
export interface BaseSeries {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
}


export interface BaseMovieList {
  movies: BaseMovie[];
}
export interface BaseSeriesList {
  series: BaseSeries[];
}

export interface MovieT extends BaseMovie {
  genres: {
    id: number;
    name: string;
  }[],
  production_countries: {
    name: string;
  }[];
}
export interface MovieImage {
  file_path: string;
  aspect_ratio?: number; //some props are optional...
  height?: number;
  iso_639_1?: string;
  vote_average?: number;
  vote_count?: number;
  width?: number;
}
export interface ListedMovie extends BaseMovie {
    genre_ids: number[];
  }

  export type FilterOption = "title" | "genre";

  export interface MovieListPageTemplateProps {
    movies: ListedMovie[];
    title: string;
    action: (m: ListedMovie) => React.ReactNode;
  }
  export interface Review{
    id: string;
    content: string
    author: string
  }
  export interface GenreData {
    genres: {
      id: string;
      name: string
    }[];
  }

  interface DiscoverMovies {
    page: number;	
    total_pages: number;
    total_results: number;
    results: BaseMovie[];
  }
  interface DiscoverSeries {
    page: number;	
    total_pages: number;
    total_results: number;
    results: BaseSeries[];
  }
  interface UpcomingMovies {
    page: number;	
    total_pages: number;
    total_results: number;
    results: ListedMovie[];
  }
  
  interface TvSeries {
    page: number;	
    total_pages: number;
    total_results: number;
    results: BaseSeries[];
  }
  export interface Review {
    author: string,
    content: string,
    agree: boolean,
    rating: number,
    movieId: number,
  }