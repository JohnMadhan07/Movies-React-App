import React from "react";
import RateReviewIcon from "@mui/icons-material/RateReview";
import {ListedMovie} from "../../types/interfaces";
import { Link } from "react-router-dom";

const WriteReviewIcon:React.FC<ListedMovie> = (movie) => {
  return (
    <Link
    to={'/reviews/form'}
    state={{
        movieId: movie.id,
      }}
  >
    <RateReviewIcon color="primary" fontSize="large" />
  </Link>
  );
};

export default  WriteReviewIcon;