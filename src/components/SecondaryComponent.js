import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryComponent = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="pl-14 bg-black ">
      <div className="-mt-64 relative z-20">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Popular" movies={movies.popularMovies} />
        <MovieList title="Top Rated" movies={movies.topRatedMovies} />
        <MovieList title="Up Coming" movies={movies.upComingMovies} />
      </div>
    </div>
  );
};

export default SecondaryComponent;
