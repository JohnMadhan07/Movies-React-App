import React from "react";
import RateReviewIcon from "@mui/icons-material/RateReview";
import {ListedMovie} from "../../types/interfaces"

const WriteReviewIcon:React.FC<ListedMovie> = (movie) => {
  return (
    <RateReviewIcon color="primary" fontSize="large" />
  );
};

export default  WriteReviewIcon;