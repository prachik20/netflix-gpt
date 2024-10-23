import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { MOVIES_OPTION } from "../utils/constants";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      MOVIES_OPTION
    );

    const json = await data.json();

    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getUpComingMovies();
  }, []);
};

export default useUpComingMovies;
