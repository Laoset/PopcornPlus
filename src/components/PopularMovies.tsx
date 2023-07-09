import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { changeRoute, getDetalle } from "../service/Fetching";
import { Movie } from "../types/Types";

const PopularMaTV = () => {
  const { allTvAndMovies } = useAppSelector((state) => state);
  const popularMovies = allTvAndMovies.allTvAndMovies.popularMovies.results;
  const dispatch = useAppDispatch();
  const searchForId = (id: number, media_type: string) => {
    dispatch(getDetalle(id, media_type));
    dispatch(changeRoute("Detalle"));
  };
  return (
    <Swiper
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      direction={"horizontal"}
      breakpoints={{
        1280: {
          slidesPerView: 6,
          spaceBetween: 30,
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        300: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      }}
      className="lg:h-[22rem] w-[90vw] xl:w-full flex flex-row pl-3 pr-3 lg:p-2"
    >
      {popularMovies.map((movie: Movie) => (
        <SwiperSlide
          key={movie.id}
          className="h-72 w-full hover:border-solid hover:border-4 hover:border[#f9f9f9cc] hover:scale-105 duration-500 cursor-pointer"
          onClick={() => searchForId(movie.id, "movie")}
        >
          <img
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt="imagensitoSerie"
            className="rounded-sm w-full h-full "
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PopularMaTV;
