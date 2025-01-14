import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { tmdbResults, gptMovieSearched } = useSelector((store) => store.gpt);
  if (!gptMovieSearched) return null;

  return (
    <div className="p-4 m-4 bg-black text-white">
      <div>
        {gptMovieSearched.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={tmdbResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
