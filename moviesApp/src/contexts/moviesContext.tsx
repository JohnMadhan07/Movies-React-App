import React, { useState } from "react";
import { ListedMovie,MovieT,  Review } from "../types/interfaces";

interface MovieContextInterface {
    favourites: number[];
    mustWatch: number[];
    addToFavourites: ((movie: ListedMovie) => void);
    addTomustWatch: ((movie: ListedMovie) => void);
    removeFromFavourites: ((movie: ListedMovie) => void);
    addReview: ((movie: MovieT, review: Review) => void);  // NEW
}
const initialContextState: MovieContextInterface = {
    favourites: [],
    mustWatch: [],
    addToFavourites: (movie) => {movie.id },
    addTomustWatch: (movie) => {movie.id },
    removeFromFavourites: (movie) => { movie.id},
    addReview: (movie, review) => { movie.id, review},  // NEW
};


export const MoviesContext = React.createContext<MovieContextInterface>(initialContextState);;

const MoviesContextProvider: React.FC<React.PropsWithChildren> = (props) => {
    const [myReviews, setMyReviews] = useState<Review[]>( [] )  // NEW
    const [favourites, setFavourites] = useState<number[]>([]);
    const [mustWatch, setmustWatch] = useState<number[]>([]);


    const addToFavourites = (movie: ListedMovie) => {
        let updatedFavourites = [...favourites];
        if (!favourites.includes(movie.id)) {
            updatedFavourites.push(movie.id);
        }
        setFavourites(updatedFavourites);
    };
    
    const addTomustWatch= (movie: ListedMovie) => {
        let updatedmustWatch = [...mustWatch];
        if (!mustWatch.includes(movie.id)) {
            updatedmustWatch.push(movie.id);
        }
        setmustWatch(updatedmustWatch);
        console.log("added to must watch")
        console.log(mustWatch)
    };


    // We will use this function in a later section
    const removeFromFavourites = (movie: ListedMovie) => {
        setFavourites(favourites.filter((mId) => mId !== movie.id));
    };
    const addReview = (movie: MovieT, review: Review) => {   // NEW
        setMyReviews( {...myReviews, [movie.id]: review } )
      };
      return (
        <MoviesContext.Provider
          value={{
            favourites,
            mustWatch,
            addToFavourites,
            removeFromFavourites,
            addReview, 
            addTomustWatch   // NEW
          }}
        >
          {props.children}
        </MoviesContext.Provider>
      );
    };
    
    export default MoviesContextProvider;