import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { YOUTUBE_LINK } from "./constants";

const VideoBackground = ({ id }) => {
  // console.log(id);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(id);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video "
        src={
          YOUTUBE_LINK +
          trailerVideo?.key +
          "?&autoplay=1&mute=1&loop=100"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
export default VideoBackground;
