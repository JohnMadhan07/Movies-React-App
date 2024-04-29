import { useEffect, useState } from "react";
import { getMovie } from '../api/tmdb-api'
import { MovieT } from '../types/interfaces'

const useMovie = (id: string) => {
    const [movie, setMovie] = useState<MovieT>();
    useEffect(() => {
        getMovie(id).then(movie => {
            setMovie(movie);
        });
    }, [id]);
    return [movie, setMovie];
};

export default useMovie