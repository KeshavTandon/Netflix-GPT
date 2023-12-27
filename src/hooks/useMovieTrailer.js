import { useDispatch } from "react-redux";
import { MOVIE_API } from "../components/constants";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieid) => {
    // console.log(movieid);
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieid +
        "/videos?language=en-US",
      MOVIE_API
    );
    const json = await data.json();
    // console.log(json);
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};
export default useMovieTrailer;
