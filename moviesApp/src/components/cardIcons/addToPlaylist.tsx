import React from "react";
import IconButton from "@mui/material/IconButton";
import  PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const addToPlaylistIcon: React.FC = () => {
  return (
    <IconButton aria-label="add to playlist" >
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default addToPlaylistIcon;