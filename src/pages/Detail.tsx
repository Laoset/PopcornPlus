import { Movie } from "../types/Types";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import Similar from "../components/detailComponents/Similar";
import Cast from "../components/detailComponents/Cast";
import { PlayIcon } from "@heroicons/react/24/solid";
import { addFavorite, deleteFavorite } from "../redux/features/favorites";
import { useState } from "react";
const Detail = () => {
  const { oneInfo, favorites } = useAppSelector((state) => state);
  const [isWatching, setIsWatching] = useState(false);
  const dispatch = useAppDispatch();
  const oneInformacion: Movie = oneInfo?.oneInfo;
  const estaFavoriteado = favorites.favorites;
  const sendFavorite = () => {
    dispatch(addFavorite(oneInformacion));
  };
  const deleteado = () => {
    dispatch(deleteFavorite(oneInformacion));
  };
  const toTrailer = oneInfo.video.results.find(
    (trailer) => trailer.type === "Trailer"
  );
  const keyForYT = toTrailer?.key;
  console.log(oneInfo);

  return (
    <div className="p-6 relative flex flex-col gap-6">
      {isWatching ? (
        <div className="flex flex-col justify-center align-middle items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50  w-full">
          <button className="mb-4 text-lg" onClick={() => setIsWatching(false)}>
            ❌
          </button>
          <iframe
            src={`https://www.youtube.com/embed/${keyForYT}`}
            width="100%"
            height="100%"
            allowFullScreen={true}
            className="w-3/4 h-3/4 "
          ></iframe>
        </div>
      ) : null}
      <div className={`flex ${isWatching ? "opacity-10" : "opacity-100"}`}>
        <div className="h-[80vh] w-[110rem] flex-row rounded-xl">
          <div className="flex flex-col h-[100vh]">
            <div
              className="w-full h-full rounded-lg"
              style={{
                backgroundImage: `linear-gradient(to left, #10121a 0%, rgba(16, 18, 26, 0) 50%, #10121a 100%), linear-gradient(to bottom, #10121a 0%, rgba(16, 18, 26, 0) 50%, #10121a 100%), url(https://image.tmdb.org/t/p/original${oneInformacion.backdrop_path})`,
                backgroundSize: "cover",
              }}
            />
            <div className="absolute text-white font-bold w-[40rem] mt-32 ml-10 h-[35rem] flex flex-col justify-evenly">
              <p className="font-black text-7xl text-[#FAF9F6]">
                {oneInformacion.original_title || oneInformacion.name}
              </p>
              <div className="flex flex-row gap-4 font-bold ">
                <p className="text-lg">
                  {oneInformacion.release_date?.split("-")[0] ||
                    oneInformacion.first_air_date?.split("-")[0]}
                </p>
              </div>
              <p className="text-[17px] text-gray-300">
                {oneInformacion.overview}
              </p>
              <div className="flex flex-row align-middle items-center gap-10">
                <button
                  className="bg-[#f9f9f9] p-4 rounded-md w-60 text-black flex flex-row justify-center items-center hover:opacity-60 duration-200 gap-3 h-12"
                  onClick={() => setIsWatching(true)}
                >
                  <PlayIcon className="h-7" />
                  <p>Watch now</p>
                </button>
                {estaFavoriteado.find(
                  (favorito) => favorito.id === oneInformacion.id
                ) ? (
                  <button
                    className="flex justify-center relative w-12 h-12 bg-black rounded-full border border-white overflow-hidden transition-all duration-300 hover:bg-white items-center "
                    onClick={deleteado}
                  >
                    <span className="text-white transition-all duration-300 transform hover:text-black text-2xl h-fit">
                      &#x2713;
                    </span>
                  </button>
                ) : (
                  <button
                    className="flex justify-center relative w-12 h-12 bg-black rounded-full border border-white overflow-hidden transition-all duration-300 hover:bg-white items-center"
                    onClick={sendFavorite}
                  >
                    <span className="text-white transition-all duration-300 transform hover:text-black text-4xl h-full">
                      +
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col gap-6  ${
          isWatching ? "opacity-10" : "opacity-100"
        }`}
      >
        <h4 className="font-bold text-[1.5rem] text-[#f9f9f9] ml-10">Cast</h4>
        <Cast />
        <h4 className="font-bold text-[1.5rem] text-[#f9f9f9] ml-10">
          More like this
        </h4>
        <Similar />
      </div>
    </div>
  );
};

export default Detail;
