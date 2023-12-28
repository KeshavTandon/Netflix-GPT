import { IMG_URL } from "./constants"

const MovieCard = ({poster_path}) => {
  return (
    <div className="w-48 mr-4">
      <img src={IMG_URL + poster_path} alt="MovieCard" />
    </div>
  );
}
export default MovieCard