import GptSeachBar from "./GptSeachBar"
import GptSearchContainer from "./GptSearchContainer"
import { BACKGROUND_IMG_URL } from "./constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          src={BACKGROUND_IMG_URL}
          alt="bg-image"
        ></img>
      </div>
      <GptSeachBar />
      <GptSearchContainer />
    </div>
  );
}
export default GptSearch