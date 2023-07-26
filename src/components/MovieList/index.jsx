import React, {useState, useEffect} from "react";
import {getMovies} from "../../utils/utilities";
import ImageContainer from "../../atoms/Image-container";
import './style.css'
import { Link } from "react-router-dom";


const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getMovies()
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="image-container">
      {movies && movies.length > 0 && movies.map((item) => (
        <ImageContainer key={item.id} data={item} />
      ))}
    </div>
  );
};

export default MovieList;

