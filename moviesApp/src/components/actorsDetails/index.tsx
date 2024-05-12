import React from "react";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import { BaseActors, MovieImage } from "../../types/interfaces";
import { useQuery } from "react-query";
import Spinner from "../spinner";
import { getActorsImages } from "../../api/tmdb-api";

const styles = {
    gridListRoot: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    gridListTile: {
        width: 450,
        height: '100vh',
    },
    scrollableContainer: {
        height: '80vh', 
        overflow: 'auto',
    },
};
const actorsDetails: React.FC<BaseActors> = (props) => {
  const actors=props;
  const { data, error, isLoading, isError } = useQuery<MovieImage[], Error>(
    ["images", actors.id],
    () => getActorsImages(actors.id)
);

if (isLoading) {
    return <Spinner />;
}

if (isError) {
    return <h1>{error.message}</h1>;
}

const images = data as MovieImage[];
    return (
        <>
            <Typography variant="h5" component="h3">
                Overview
            </Typography>

            <Typography variant="h6" component="p">
                {actors.biography}
            </Typography>


            <Grid container spacing={5} style={{ padding: "15px" }}>        
                <Grid item xs={3}>
                    <div style={styles.scrollableContainer}>
                        <ImageList cols={1}>
                            {images.map((image: MovieImage) => (
                                <ImageListItem
                                    key={image.file_path}
                                    sx={styles.gridListTile}
                                    cols={1}
                                >
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500/${props.profile_path}`}
                                        alt={'Image alternative'}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>
                </Grid>
            </Grid>          
        </>
    );
};
export default actorsDetails;

