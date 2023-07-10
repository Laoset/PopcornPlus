import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { Movie } from "../types/Types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { FilmIcon, TvIcon } from "@heroicons/react/24/solid";
import PopularMaTV from "./PopularMovies";
import PopularSeries from "./PopularSeries";
import { changeRoute, getDetalle } from "../service/Fetching";

const MainData = () => {
  const { allTvAndMovies, routing } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const allTrending = allTvAndMovies.allTvAndMovies.allTrending.results;
  const searchForId = (id: number, media_type: string) => {
    dispatch(getDetalle(id, media_type));
    dispatch(changeRoute("Detalle"));
  };

  return (
    <div className="lg:p-4 w-[87vw] flex flex-col gap-6 lg:w-[92vw] xl:w-[94.3vw]">
      <div className="">
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          direction={"horizontal"}
          slidesPerView={1}
          spaceBetween={30}
          className="h-[80vh] flex flex-row rounded-xl"
          modules={[Autoplay]}
        >
          {allTrending?.map((msTrending: Movie) => (
            <SwiperSlide
              key={msTrending.id}
              className="flex flex-col bg-[#10121a] border-4 border-transparent hover:border-4 hover:border-[#f9f9f9cc] duration-500 cursor-pointer hover:rounded-xl"
              onClick={() => searchForId(msTrending.id, msTrending.media_type)}
            >
              <img
                src={`https://image.tmdb.org/t/p/original${msTrending.backdrop_path}`}
                alt="imgaen"
                className="h-full rounded-lg opacity-60 "
              />
              <div className="absolute text-white font-bold lg:w-[40rem] lg:mt-32 lg:ml-14 ml-8 h-[35rem] flex flex-col justify-evenly">
                <p className="font-black lg:text-7xl text-4xl text-[#FAF9F6]">
                  {msTrending.original_title || msTrending.name}
                </p>
                <div className="flex flex-row gap-4 font-bold ">
                  <p className="text-lg">
                    {msTrending.release_date?.split("-")[0] ||
                      msTrending.first_air_date?.split("-")[0]}
                  </p>
                  {msTrending.media_type == "movie" ? (
                    <p className="flex flex-row gap-2">
                      {<FilmIcon className="h-6 w-6" />}Movie
                    </p>
                  ) : (
                    <p className="flex flex-row gap-2">
                      {<TvIcon className="h-6 w-6" />}TV Series
                    </p>
                  )}
                </div>
                <p className="lg:text-[17px] text-[16px] text-gray-300">
                  {msTrending.overview}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-col gap-10">
        <h1 className="font-bold text-[1.5rem] text-[#f9f9f9]">
          Popular Series
        </h1>
        <PopularSeries />
        <h1 className="font-bold text-[1.5rem] text-[#f9f9f9]">
          Popular Movies
        </h1>
        <PopularMaTV />
      </div>
    </div>
  );
};

export default MainData;
