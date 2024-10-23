import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryComponent from "./SecondaryComponent";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRateMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryComponent />
    </div>
  );
};

export default Browse;
