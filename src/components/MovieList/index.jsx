import React, {useState, useEffect} from "react";
import {getMovies} from "../../utils/utilities";
import ImageContainer from "../../atoms/Image-container";
import './style.css'
import SearchBar from "./search";
import { Link } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    (async () => {
      const movies = await getMovies();
      setMovies(movies.results);
      setLoading(false);
    })();
  }, []);

  const handleSearching = async (value) =>{
    setSearched(true);
    if (!value.trim()) {
      const movie = await getMovies();
      setMovies(movie.results);
    }
    else{
      try{
        const response = await fetch(
          `${BASE_URL}/3/search/movie?query=${value}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
          }
        );

        const result = await response.json();
        setMovies(result.results);
      }
      catch(error){
        console.error(error.message)
      }
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <SearchBar onSearch={handleSearching} />
      <div className="image-container">
          {movies && movies.length > 0 && movies.map((item) => (
        <ImageContainer key={item.id} data={item} />
      ))}
      </div>
    </div>
  );
};


export default MovieList;

