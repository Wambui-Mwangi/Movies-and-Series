import React, { useState, useEffect } from "react";
import { getMovieDetails } from "../../utils/utilities";
import ImageContainer from "../../atoms/Image-container";
import { useParams } from "react-router-dom"; 

const MovieDetails = (props) => {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { movie_id } = props.match.params;
    getMovieDetails(movie_id)
      .then((detail) => {
        setDetails(detail);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [props.match.params]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <ImageContainer data={details} />
    </div>
  );
};

export default MovieDetails;

