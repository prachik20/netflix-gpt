import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryComponent = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  return (
    <div className="pl-14 bg-black ">
      <div className="-mt-64 relative z-20">
        <MovieList title="Now Playing" movies={movies} />
        <MovieList title="Now Playing" movies={movies} />
        <MovieList title="Now Playing" movies={movies} />
        <MovieList title="Now Playing" movies={movies} />
      </div>
    </div>
  );
};

export default SecondaryComponent;
