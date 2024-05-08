import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import img from '../../images/film-poster-placeholder.png';
import { BaseSeries } from "../../types/interfaces"; 

const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

const SeriesCard: React.FC<BaseSeries> = (props) => {


  return (
    <Card sx={styles.card}>
      <CardHeader title={props.original_name} />
      <CardMedia
        sx={styles.media}
        image={
          props.poster_path
            ? `https://image.tmdb.org/t/p/w500/${props.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {props.first_air_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {props.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" >
          <FavoriteIcon color="primary" fontSize="large" />
        </IconButton>
        <Button variant="outlined" size="medium" color="primary">
          More Info ...
        </Button>
      </CardActions>
    </Card>
  );
}

export default SeriesCard;