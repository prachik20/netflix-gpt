import React, { useRef } from "react";
import lang from "../utils/langConstants";
import { useDispatch, useSelector } from "react-redux";
import model from "../utils/openai";
import { MOVIES_OPTION } from "../utils/constants";
import { addTmdbMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const selectedLang = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const fetchMoviesTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1ttps://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1",
      MOVIES_OPTION
    );

    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const prompt =
      "Act as a movie recommendation system and suggeest some movies for the query" +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Stree 2, Bhool Bhooliya, GolMal, Yeh Jawani Hai deewani, Sholay  ";
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    const gptMovies = text.split(",");

    const promiseArray = gptMovies.map((movie) => fetchMoviesTMDB(movie));

    const tmdbMovies = await Promise.all(promiseArray);
    dispatch(
      addTmdbMovies({ gptMovieSearched: gptMovies, tmdbResults: tmdbMovies })
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[selectedLang].placeholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-sm"
          onClick={handleGptSearchClick}
        >
          {lang[selectedLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
