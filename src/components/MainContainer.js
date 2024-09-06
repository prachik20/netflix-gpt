import { useSelector } from "react-redux";
import VideoBg from "./VideoBg";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  const mainMovie = movies[0];
  const { original_title, overview } = mainMovie;
  console.log(mainMovie);
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBg />
    </div>
  );
};

export default MainContainer;
