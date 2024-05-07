import React, {MouseEvent, useContext } from "react";
import IconButton from "@mui/material/IconButton";
import  PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { ListedMovie } from "../../types/interfaces";
import { MoviesContext } from "../../contexts/moviesContext";

const addToPlaylistIcon: React.FC <ListedMovie> = (movie) => {
  const context = useContext(MoviesContext);

  const onUserSelect = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    context.addTomustWatch(movie);
  };
  return (
    <IconButton aria-label="add to playlist" onClick={onUserSelect}>
      <PlaylistAddIcon color="primary" fontSize="large"  />
    </IconButton>
  );
};

export default addToPlaylistIcon;