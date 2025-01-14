import { useEffect } from "react";
import { addMovieTrailer } from "../utils/moviesSlice";
import { MOVIES_OPTION } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const useMovieTrailer = (movieId) => {
  //fetch movie video & updating store with movie trailer data

  const dispatch = useDispatch();

  const movieTrailer = useSelector((store) => store.movies.movieTrailer);

  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      MOVIES_OPTION
    );

    const json = await data.json();

    const filterData = json?.results?.filter(
      (movie) => movie.type === "Trailer"
    );

    const trailer = filterData?.length ? filterData[0] : json?.results[0];
    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    !movieTrailer && getMovieVideo();
  }, []);
};

export default useMovieTrailer;
