import React from "react";
import Grid from "@mui/material/Grid";
import { BaseActorsList } from "../../types/interfaces";
import ActorsCard from "../actorsCard";



const ActorsList: React.FC<BaseActorsList> = (props) => {
  const actors=props.actors;
  let actorsCard = actors.map((s) => (
    <Grid key={s.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <ActorsCard key={s.id} {...s} />
    </Grid>
  ));
  return actorsCard;
}

  export default ActorsList;
