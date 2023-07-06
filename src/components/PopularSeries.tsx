import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid } from "swiper";
import { changeRoute, getDetalle } from "../service/Fetching";
import { Movie } from "../types/Types";
const PopularSeries = () => {
  const { allTvAndMovies } = useAppSelector((state) => state);
  const popularSeries = allTvAndMovies.allTvAndMovies.popularSeries.results;
  const dispatch = useAppDispatch();
  const searchForId = (id: number, media_type: string) => {
    dispatch(getDetalle(id, media_type));
    dispatch(changeRoute("Detalle"));
  };
  return (
    <Swiper
      grid={{
        rows: 2,
      }}
      slidesPerView={6}
      spaceBetween={30}
      modules={[Grid]}
      className="h-[40rem] w-[110rem] flex flex-row p-4"
    >
      {popularSeries.map((serie: Movie) => (
        <SwiperSlide
          key={serie.id}
          className="h-72 w-72 hover:border-solid hover:border-4 hover:border[#f9f9f9cc] hover:scale-105 duration-500 cursor-pointer"
          onClick={() => searchForId(serie.id, "tv")}
        >
          <img
            src={`https://image.tmdb.org/t/p/w342${serie.poster_path}`}
            alt="imagensitoSerie"
            className="rounded-sm w-full h-full"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PopularSeries;
