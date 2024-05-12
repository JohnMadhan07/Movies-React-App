import React from "react";
import { useParams } from "react-router-dom";
import { BaseActors} from "../types/interfaces";
import { getActorDetails } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import ActorsDetails from "../components/actorsDetails";



const ActorsDetailsPage: React.FC = () => {
  const { id } = useParams();
  const { data: actors, error, isLoading, isError } = useQuery<BaseActors, Error>(
    ["actors", id],
    ()=> getActorDetails(id || "")
  );


  if (isLoading ) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }

  return (
    <>
      {actors ? (     
          <ActorsDetails {...actors as BaseActors} />
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default ActorsDetailsPage;