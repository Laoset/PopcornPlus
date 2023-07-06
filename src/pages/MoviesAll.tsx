import TopRated from "../components/moviesComponents/TopRated";
import OnTheatres from "../components/moviesComponents/OnTheatres";
import Upcoming from "../components/moviesComponents/Upcoming";
import { Swiper, SwiperSlide } from "swiper/react";
import { Movie } from "../types/Types";
import { Autoplay } from "swiper";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { useEffect } from "react";
import { changeRoute, getAllMovies, getDetalle } from "../service/Fetching";

const MoviesAll = () => {
  const dispatch = useAppDispatch();
  const { movies } = useAppSelector((state) => state);
  const beforeRevert = movies.movies.popularMovies.results;
  const copia = [...beforeRevert];
  const allTypesMovies = copia.reverse();
  const searchForId = (id: number, media_type: string) => {
    dispatch(getDetalle(id, media_type));
    dispatch(changeRoute("Detalle"));
  };
  useEffect(() => {
    dispatch(getAllMovies());
  }, []);
  return (
    <div className="p-6 relative flex flex-col gap-6">
      <div className="flex">
        <Swiper
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          direction={"horizontal"}
          slidesPerView={1}
          spaceBetween={30}
          className="h-[80vh] w-[110rem] flex-row rounded-xl"
          modules={[Autoplay]}
        >
          {allTypesMovies.map((moviePopular: Movie) => (
            <SwiperSlide
              key={moviePopular.id}
              className="flex flex-col bg-[#10121a] border-4 border-transparent hover:border-4 hover:border-[#f9f9f9cc] duration-500 cursor-pointer hover:rounded-xl"
              onClick={() => searchForId(moviePopular.id, "movie")}
            >
              <img
                src={`https://image.tmdb.org/t/p/original${moviePopular.backdrop_path}`}
                alt="imgaen"
                className="w-full h-full rounded-lg opacity-60 "
              />
              <div className="absolute text-white font-bold w-[40rem] mt-32 ml-14 h-[35rem] flex flex-col justify-evenly">
                <p className="font-black text-7xl text-[#FAF9F6]">
                  {moviePopular.original_title || moviePopular.name}
                </p>
                <div className="flex flex-row gap-4 font-bold ">
                  <p className="text-lg">
                    {moviePopular.release_date?.split("-")[0] ||
                      moviePopular.first_air_date?.split("-")[0]}
                  </p>
                </div>
                <p className="text-[17px] text-gray-300">
                  {moviePopular.overview}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="font-bold text-4xl text-[#f9f9f9]">On theatres</h1>
        <OnTheatres searchForId={searchForId} />
        <h1 className="font-bold text-4xl text-[#f9f9f9]">Upcoming </h1>
        <Upcoming searchForId={searchForId} />
        <h1 className="font-bold text-4xl text-[#f9f9f9]">Top rated </h1>
        <TopRated searchForId={searchForId} />
      </div>
    </div>
  );
};

export default MoviesAll;
