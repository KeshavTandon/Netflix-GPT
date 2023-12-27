import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return; //Early return
  const mainMovie = movies[0];

  const {original_title,overview,id}=mainMovie;
  // console.log(id);
  return (
    <div className="pt-[30%] md:pt-0 bg-black">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  );
}
export default MainContainer
