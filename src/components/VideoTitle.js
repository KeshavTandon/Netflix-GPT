const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video absolute text-white bg-gradient-to-r from-black pt-20 md:pt-40 px-8 md:px-16">
      <h1 className="w-5/12 text-2xl md:text-4xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 w-1/3 ">{overview}</p>
      <div>
        <button className="bg-white text-black p-4 px-12 text-xl hover:bg-opacity-70 rounded-lg">
          ▶️Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-12 hover:bg-color text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
