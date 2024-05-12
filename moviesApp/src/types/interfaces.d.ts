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
export interface Cast{
adult: boolean
gender: number
id: number
known_for_department: string
name: string
original_name: string
popularity: number
profile_path: string
cast_id: number
character: string
credit_id: string
order: number
}
export interface KnownForItem {
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  title: string;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface BaseActors {
  adult: boolean;
    also_known_as: string[];
    biography: string;
    birthday: string;
    deathday: string | null;
    gender: number;
    homepage: string;
    id: number;
    imdb_id: string;
    known_for_department: string;
    name: string;
    place_of_birth: string;
    popularity: number;
    profile_path: string | null;
}
export interface BaseMovieList {
  movies: BaseMovie[];
}
export interface BaseSeriesList {
  series: BaseSeries[];
}
export interface BaseActorsList{
  actors:BaseActors[];
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

  export interface ListedSeries extends BaseSeries {
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
  interface DiscoverActors {
    page: number;	
    total_pages: number;
    total_results: number;
    results: BaseActors[];
  }
  interface UpcomingMovies {
    page: number;	
    total_pages: number;
    total_results: number;
    results: ListedMovie[];
  }
  interface Similar {
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