import React, { useState } from "react";
import { ListedMovie, MovieT, Review } from "../types/interfaces";

interface MovieContextInterface {
    page: number;
    setPage: (page: number) => void;
    favourites: number[];
    mustWatch: number[];
    addToFavourites: ((movie: ListedMovie) => void);
    addTomustWatch: ((movie: ListedMovie) => void);
    removeFromFavourites: ((movie: ListedMovie) => void);
    addReview: ((movie: MovieT, review: Review) => void);
}
const initialContextState: MovieContextInterface = {
    page: 1,
    setPage: () => {},
    favourites: [],
    mustWatch: [],
    addToFavourites: (movie) => { movie.id },
    addTomustWatch: (movie) => { movie.id },
    removeFromFavourites: (movie) => { movie.id },
    addReview: (movie, review) => { movie.id, review },
};

export const MoviesContext = React.createContext<MovieContextInterface>(initialContextState);

const MoviesContextProvider: React.FC<React.PropsWithChildren> = (props) => {
    const [myReviews, setMyReviews] = useState<Review[]>([] ); // NEW
    const [favourites, setFavourites] = useState<number[]>([]);
    const [mustWatch, setMustWatch] = useState<number[]>([]);
    const [page, setPage] = useState<number>(1); 
   
    const addToFavourites = (movie: ListedMovie) => {
        let updatedFavourites = [...favourites];
        if (!favourites.includes(movie.id)) {
            updatedFavourites.push(movie.id);
        }
        setFavourites(updatedFavourites);
    };
    
    const addTomustWatch = (movie: ListedMovie) => {
        let updatedMustWatch = [...mustWatch];
        if (!mustWatch.includes(movie.id)) {
            updatedMustWatch.push(movie.id);
        }
        setMustWatch(updatedMustWatch);
        console.log("added to must watch");
        console.log(mustWatch);
    };

    const removeFromFavourites = (movie: ListedMovie) => {
        setFavourites(favourites.filter((mId) => mId !== movie.id));
    };

    const addReview = (movie: MovieT, review: Review) => {
        setMyReviews({ ...myReviews, [movie.id]: review });
    };

    return (
        <MoviesContext.Provider
            value={{
                page,
                setPage,
                favourites,
                mustWatch,
                addToFavourites,
                removeFromFavourites,
                addReview,
                addTomustWatch,
            }}
        >
            {props.children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;
