import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { BaseMovieList } from "../../types/interfaces";
import img from '../../images/film-poster-placeholder.png';
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";


const styles = {
    scrollableContainer: {
        height: '80vh', 
        overflow: 'auto',
    },
};

const SimilarMovies: React.FC<BaseMovieList> = ({ movies }) => {
  const renderMovies = () => {
    return movies.map((movie, index) => (
      <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
        <Card sx={{ maxWidth: 245 }}>
          <CardHeader
            title={
              <Typography variant="h5" component="p">
                {movie.title}{" "}
              </Typography>
            }
          />
          <CardMedia
            sx={{ height: 300 }}
            image={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : img
            }
          />
          <CardContent>
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="h6" component="p">
                  <CalendarIcon fontSize="small" />
                  {movie.release_date}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" component="p">
                  <StarRateIcon fontSize="small" />
                  {"  "} {movie.vote_average}{" "}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <Link to={`/movies/${movie.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
        </Card>
      </Grid>
    ));
  };

  return (
    <>
      <Typography variant="h5" component="h3" style={{ marginTop: "50px"}}>
        Similar Movies
      </Typography>
      <div style={styles.scrollableContainer}>
      <Grid container spacing={2}>
        {renderMovies()}
      </Grid>
      </div>
    </>
  );
};

export default SimilarMovies;
