import React, { useEffect, useState, useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { MoviesContext } from "../../contexts/moviesContext";
import { excerpt } from "../../util";

import { MovieT, Review } from "../../types/interfaces";
import { getMovieReviews } from "../../api/tmdb-api";

const styles = {
    table: {
        minWidth: 550,
    },
};

const MovieReviews: React.FC<MovieT> = (props) => {
    const { myReviews } = useContext(MoviesContext); 
    const [reviews, setReviews] = useState<Review[]>([]);

    const movie = props;

    useEffect(() => {
        getMovieReviews(movie.id).then((apiReviews) => {
            const mergedReviews = [...Object.values(myReviews), ...apiReviews];
            setReviews(mergedReviews);
        });
    }, [movie.id, myReviews]); 

    return (
        <TableContainer component={Paper}>
            <Table sx={styles.table} aria-label="reviews table">
                <TableHead>
                    <TableRow>
                        <TableCell>Author</TableCell>
                        <TableCell align="center">Excerpt</TableCell>
                        <TableCell align="right">More</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {reviews.map((r: Review, index: number) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {r.author}
                            </TableCell>
                            <TableCell>{excerpt(r.content)}</TableCell>
                            <TableCell>
                                <Link
                                    to={`/reviews/${index}`}
                                    state={{
                                        review: r,
                                        movie: movie,
                                    }}
                                >
                                    Full Review
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default MovieReviews;
