import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryComponent = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="pl-6 md:pl-14 bg-black ">
      <div className="mt-0 md:-mt-56 relative z-20">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Popular" movies={movies.popularMovies} />
        <MovieList title="Top Rated" movies={movies.topRatedMovies} />
        <MovieList title="Up Coming" movies={movies.upComingMovies} />
      </div>
    </div>
  );
};

export default SecondaryComponent;
